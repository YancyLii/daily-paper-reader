<div class="dpr-home-notice-card">
  <h3 class="dpr-home-notice-title">🚀 Start Here</h3>
  <ul class="dpr-home-notice-list">
    <li><a href="#/tutorial/README">使用教程</a></li>
  </ul>
</div>

## 每次日报
- 最新运行日期：2026-06-16
- 运行时间：2026-06-16 23:14:46 UTC
- 运行状态：成功
- 本次总论文数：22
- 精读区：9
- 速读区：13

### 今日简报（AI）
今日精读与速读22篇安全前沿论文，重点剖析了可迁移自进化安全剧本与文档-LLM供应链的语义完整性缺陷。  
最值得关注的是面向智能体的自动化安全审计进化机制，以及文档到LLM供应链中难以发现的语义篡改风险。  
下一步建议读者跟进AI辅助编码中的幻觉包导入检测，以及提升LLM智能体工具选择可靠性的过滤基准。
- 详情：[/202606/16/README](/202606/16/README)

### 精读区论文标签
1. [Transferable Self-Evolving Playbooks for Agentic Security Auditing](/202606/16/2606.16420v1-transferable-self-evolving-playbooks-for-agentic-security-auditing)  
   标签：评分：10.0/10、query:vuldet
   evidence：EvoHunt自动创建用于LLM漏洞发现代理的剧本，直接针对自动化软件漏洞检测。
2. [Semantic Integrity Failures in Document-to-LLM Supply Chains](/202606/16/2606.15020v1-semantic-integrity-failures-in-document-to-llm-supply-chains)  
   标签：评分：9.0/10、query:agsec
   evidence：揭露分裂视图PDF攻击篡改LLM输入的文档内容，破坏用户意图保全
3. [OSGuard: A Benchmark for Safety in Computer-Use Agents](/202606/16/2606.15034v1-osguard-a-benchmark-for-safety-in-computer-use-agents)  
   标签：评分：9.0/10、query:agsec
   evidence：计算机使用智能体安全性基准，涵盖护栏决策与风险增强执行
4. [Defending against Adaptive Prompt Injection Attacks via Reasoning-enabled Task Alignment](/202606/16/2606.15441v1-defending-against-adaptive-prompt-injection-attacks-via-reasoning-enabled-task-alignment)  
   标签：评分：9.0/10、query:agsec
   evidence：通过推理赋能的任务对齐防御提示注入，保持用户意图
5. [FragFuse: Bypassing Access Control of Large Language Model Agents via Memory-Based Query Fragmentation and Fusion](/202606/16/2606.15609v1-fragfuse-bypassing-access-control-of-large-language-model-agents-via-memory-based-query-fragmentation-and-fusion)  
   标签：评分：9.0/10、query:agsec
   evidence：利用基于记忆的查询分片绕过访问控制，揭示令牌流控制中的弱点
6. [GAS-Leak-LLM: Genetic Algorithm-Based Suffix Optimization for Black-Box LLM Jailbreaking](/202606/16/2606.15788v1-gas-leak-llm-genetic-algorithm-based-suffix-optimization-for-black-box-llm-jailbreaking)  
   标签：评分：9.0/10、query:agsec
   evidence：使用遗传算法的黑盒越狱攻击，检验安全控制策略
7. [TrustedARI: Towards Trust-Native Agentic Routing Infrastructure for Agentic AI](/202606/16/2606.15822v1-trustedari-towards-trust-native-agentic-routing-infrastructure-for-agentic-ai)  
   标签：评分：9.0/10、query:agsec
   evidence：通过三方TLS握手确保智能体路由中的查询与响应完整性，防篡改
8. [LLM-as-Code Agentic Programming for Agent Harness](/202606/16/2606.15874v1-llm-as-code-agentic-programming-for-agent-harness)  
   标签：评分：9.0/10、query:agsec
   evidence：提出token爆炸和控制流幻觉源于让LLM作为调度器，通过Agentic编程控制流程
9. [Adaptive and Explicit safe: Triggering Latent Safety Awareness in Large Reasoning Models](/202606/16/2606.16808v1-adaptive-and-explicit-safe-triggering-latent-safety-awareness-in-large-reasoning-models)  
   标签：评分：9.0/10、query:agsec
   evidence：提出通过触发LRM潜在安全意识来拒绝有害查询的安全控制策略

### 速读区论文标签
1. [Bayesian-Calibrated Detection of Hallucinated Package Imports in AI-Assisted Code](/202606/16/2606.13918v1-bayesian-calibrated-detection-of-hallucinated-package-imports-in-ai-assisted-code)  
   标签：评分：8.0/10、query:agsec
   evidence：检测LLM输出中的幻觉包导入以防范供应链风险，属于高风险动作识别
2. [Security Engineering of OpenClaw: Analyzing Attack Surface Expansion and Trust-Boundary Violations](/202606/16/2606.15008v1-security-engineering-of-openclaw-analyzing-attack-surface-expansion-and-trust-boundary-violations)  
   标签：评分：8.0/10、query:agsec
   evidence：分析多代理LLM系统的安全性，测量被攻破概率和信任边界违反
3. [ToolMenuBench: Benchmarking Tool-Menu Filtering Strategies for Reliable and Efficient LLM Agents](/202606/16/2606.15508v1-toolmenubench-benchmarking-tool-menu-filtering-strategies-for-reliable-and-efficient-llm-agents)  
   标签：评分：8.0/10、query:agsec
   evidence：ToolMenuBench评测工具菜单过滤作为安全控制策略以降低LLM代理的风险工具暴露。
4. [Dynamic Malicious Skills in Agentic AI](/202606/16/2606.16287v1-dynamic-malicious-skills-in-agentic-ai)  
   标签：评分：8.0/10、query:agsec
   evidence：展示并缓解动态恶意技能注入，一种安全控制策略
5. [The Proxy Knows Too Much: Sealing LLM API Routers with Attested TEEs](/202606/16/2606.16358v1-the-proxy-knows-too-much-sealing-llm-api-routers-with-attested-tees)  
   标签：评分：8.0/10、query:agsec
   evidence：带硬件隔离组件的验证API路由器确保令牌流忠实传递
6. [The Linux IOCTL Census: A Source-Derived Database of the Linux Kernel Control-Code Surface](/202606/16/2606.10290v1-the-linux-ioctl-census-a-source-derived-database-of-the-linux-kernel-control-code-surface)  
   标签：评分：7.0/10、query:libfuz
   evidence：静态分析Linux内核源码编目ioctl命令，辅助模糊驱动生成
7. [The Hitchhiker's Guide to Program Analysis, Part III: Mostly Harmless LLMs](/202606/16/2606.15122v1-the-hitchhikers-guide-to-program-analysis-part-iii-mostly-harmless-llms)  
   标签：评分：7.0/10、query:vuldet
   evidence：主张基于LLM的缺陷分析应建立在形式分析基础上，提出Evident缺陷分析系统
8. [AttackonCTF: Defending Hardware Security Competition Benchmarks in the Age of LLMs](/202606/16/2606.15809v1-attackonctf-defending-hardware-security-competition-benchmarks-in-the-age-of-llms)  
   标签：评分：7.0/10、query:vuldet
   evidence：提出混淆技术降低基于LLM的漏洞检测准确度，探讨了漏洞分析中的对抗鲁棒性
9. [Binary Decompilation LLM with Feedback-Driven Multi-Turn Refinement](/202606/16/2606.16162v1-binary-decompilation-llm-with-feedback-driven-multi-turn-refinement)  
   标签：评分：7.0/10、query:vuldet
   evidence：基于大语言模型的反编译，利用强化学习多轮精炼以正确恢复代码，用于漏洞发现
10. [Trust but Verify: Mitigating Medical Hallucinations via Post-Hoc Adversarial Auditing and Multi-Agent Feedback Loops](/202606/16/2606.14149v1-trust-but-verify-mitigating-medical-hallucinations-via-post-hoc-adversarial-auditing-and-multi-agent-feedback-loops)  
   标签：评分：6.0/10、query:agsec
   evidence：提出多代理审计系统验证LLM输出，减轻医学幻觉，作为一种安全控制策略
11. [Resilient Consensus in Agentic AI](/202606/16/2606.15024v1-resilient-consensus-in-agentic-ai)  
   标签：评分：6.0/10、query:agsec
   evidence：用经典弹性共识滤波器包装代理可改善一致性
12. [On the Adversarial Robustness of Multimodal LLM Judges](/202606/16/2606.15608v1-on-the-adversarial-robustness-of-multimodal-llm-judges)  
   标签：评分：6.0/10、query:vuldet
   evidence：评估多模态大语言模型在评判任务中的对抗鲁棒性，一项检测鲁棒性研究
13. [KVEraser: Learning to Steer KV Cache for Efficient Localized Context Erasing](/202606/16/2606.17034v1-kveraser-learning-to-steer-kv-cache-for-efficient-localized-context-erasing)  
   标签：评分：6.0/10、query:agsec
   evidence：通过KV缓存编辑移除有害提示注入，一种提示安全机制


<div class="dpr-home-promo-card">
  <h3 class="dpr-home-promo-title">💬 社区与支持</h3>
  <ul class="dpr-home-promo-list">
    <li>欢迎 Star / Fork / Issue / PR</li>
    <li>QQ群：583867967（欢迎交流，已有：1151人）</li>
  </ul>
</div>
