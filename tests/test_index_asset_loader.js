const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

function extractAssetLoaderScript(html) {
  const scripts = [...String(html).matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  const script = scripts.find((body) => body.includes('window.DPRLoadAssets'));
  assert.ok(script, 'index.html should contain DPRLoadAssets bootstrap script');
  return script;
}

async function runAssetLoader(hostname, assets) {
  const appended = [];
  const timers = new Set();
  const sandbox = {
    console,
    location: { hostname },
    window: {},
    setTimeout() {
      const id = Symbol('timer');
      timers.add(id);
      return id;
    },
    clearTimeout(id) {
      timers.delete(id);
    },
    document: {
      createElement(tagName) {
        return {
          tagName: String(tagName || '').toLowerCase(),
          remove() {},
          setAttribute(key, value) {
            this[key] = value;
          },
        };
      },
      head: {
        appendChild(el) {
          appended.push(el);
          if (typeof el.onload === 'function') setImmediate(el.onload);
        },
      },
    },
  };
  sandbox.window.setTimeout = sandbox.setTimeout;
  sandbox.window.clearTimeout = sandbox.clearTimeout;

  const script = extractAssetLoaderScript(fs.readFileSync('index.html', 'utf8'));
  vm.runInNewContext(script, sandbox, { filename: 'index.html' });
  await sandbox.window.DPRLoadAssets(assets);
  return appended;
}

async function testProjectAssetsPreferLocalOnCdnHosts() {
  const appended = await runAssetLoader('example.github.io', [
    { type: 'style', path: 'app/app.css' },
    { type: 'style', path: 'app/vendor/docsify/4/lib/themes/vue.css' },
    { type: 'script', path: 'app/dpr-sidebar.js' },
    { type: 'script', path: 'app/vendor/docsify/4/lib/docsify.min.js' },
  ]);
  const hrefs = appended.map((el) => el.href || el.src || '');

  assert.ok(hrefs.includes('app/app.css'));
  assert.ok(hrefs.includes('app/dpr-sidebar.js'));
  assert.ok(hrefs.includes('https://cdn.zwwen.online/app/vendor/docsify/4/lib/themes/vue.css'));
  assert.ok(hrefs.includes('https://cdn.zwwen.online/app/vendor/docsify/4/lib/docsify.min.js'));
}

async function testExplicitCdnBaseStillUsesVendorCdnOnly() {
  const appended = await runAssetLoader('127.0.0.1', [
    { type: 'script', path: 'app/dpr-sidebar.js' },
    { type: 'script', path: 'app/vendor/docsify/4/lib/docsify.min.js' },
  ]);
  const srcs = appended.map((el) => el.href || el.src || '');

  assert.ok(srcs.includes('app/dpr-sidebar.js'));
  assert.ok(srcs.includes('app/vendor/docsify/4/lib/docsify.min.js'));
}

Promise.resolve()
  .then(testProjectAssetsPreferLocalOnCdnHosts)
  .then(testExplicitCdnBaseStillUsesVendorCdnOnly)
  .then(() => {
    console.log('index asset loader tests passed');
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
