<div class="dpr-home-notice-card">
  <h3 class="dpr-home-notice-title">🚀 Start Here</h3>
  <ul class="dpr-home-notice-list">
    <li><a href="#/tutorial/README">使用教程</a></li>
  </ul>
</div>

## 每次日报
- 最新运行日期：2026-06-22
- 运行时间：2026-06-22 22:59:18 UTC
- 运行状态：成功
- 本次总论文数：22
- 精读区：9
- 速读区：13

### 今日简报（AI）
今日聚焦代码安全与模型漏洞发现：对比评测Snyk VulnBench与OpenAnt两篇精读，揭示LLM在漏洞复现和动态验证中的潜力。最值得关注的是，LLM虽能找漏洞但重复性存疑，而分解代码+对抗验证的组合策略大幅提升检测效果。建议读者优先体验OpenAnt的开源验证框架，将静态分析与模糊测试融入日常安全巡检。
- 详情：[/202606/22/README](/202606/22/README)

### 精读区论文标签
1. [Snyk VulnBench JS 1.0: Can LLMs Find the Same Bugs Twice?](/202606/22/2606.15762v1-snyk-vulnbench-js-10-can-llms-find-the-same-bugs-twice)  
   标签：评分：10.0/10、query:vuldet
   evidence：衡量LLM在JavaScript代码中漏洞检测可重复性的基准测试
2. [OpenAnt: LLM-Powered Vulnerability Discovery Through Code Decomposition, Adversarial Verification, and Dynamic Testing](/202606/22/2606.19149v2-openant-llm-powered-vulnerability-discovery-through-code-decomposition-adversarial-verification-and-dynamic-testing)  
   标签：评分：9.0/10、query:vuldet
   evidence：基于大语言模型的漏洞发现系统，结合静态分析与动态测试
3. [Beyond Safe Data: Pretraining-Stage Alignment with Regular Safety Reflection](/202606/22/2606.19168v1-beyond-safe-data-pretraining-stage-alignment-with-regular-safety-reflection)  
   标签：评分：9.0/10、query:agsec
   evidence：在预训练阶段融入安全反思，实现LLM自我监控，是一种安全控制策略。
4. [Formal Verification of Learned Multi-Agent Communication Policies via Decision Tree Distillation](/202606/22/2606.19632v1-formal-verification-of-learned-multi-agent-communication-policies-via-decision-tree-distillation)  
   标签：评分：9.0/10、query:agsec
   evidence：通过决策树蒸馏为多智能体通信策略提供形式化安全验证框架
5. [A Layered Security Framework Against Prompt Injection in RAG-Based Chatbots](/202606/22/2606.19660v1-a-layered-security-framework-against-prompt-injection-in-rag-based-chatbots)  
   标签：评分：9.0/10、query:agsec
   evidence：通过在整个推理管线拦截提示注入来强制输出安全的防御框架。
6. [SafeSpec: Fast and Safe LLM via Dynamic Reflective Sampling](/202606/22/2606.19755v1-safespec-fast-and-safe-llm-via-dynamic-reflective-sampling)  
   标签：评分：9.0/10、query:agsec
   evidence：集成风险估计的安全感知推测解码框架，用于安全输出生成。
7. [LLM agent safety, multi-turn red-teaming, jailbreak benchmarks, adversarial robustness, safety-critical systems](/202606/22/2606.20408v1-llm-agent-safety-multi-turn-red-teaming-jailbreak-benchmarks-adversarial-robustness-safety-critical-systems)  
   标签：评分：9.0/10、query:agsec
   evidence：面向LLM智能体在安全关键系统下的多轮红队测试基准，评估安全策略。
8. [Calibration Without Comprehension: Diagnosing the Limits of Fine-Tuning LLMs for Vulnerability Detection in Systems Software](/202606/22/2606.20502v1-calibration-without-comprehension-diagnosing-the-limits-of-fine-tuning-llms-for-vulnerability-detection-in-systems-software)  
   标签：评分：9.0/10、query:vuldet
   evidence：CWE-Trace框架用于基于LLM的漏洞检测，具备时间分割和诊断指标
9. [Sovereign Execution Brokers: Enforcing Certificate-Bound Authority in Agentic Control Planes](/202606/22/2606.20520v1-sovereign-execution-brokers-enforcing-certificate-bound-authority-in-agentic-control-planes)  
   标签：评分：9.0/10、query:agsec
   evidence：引入运行时执行边界，仅允许经认证的操作，保障代理安全

### 速读区论文标签
1. [SACE: Concept Erasure at the Semantic Singularity in Visual Autoregressive Models](/202606/22/2606.15819v1-sace-concept-erasure-at-the-semantic-singularity-in-visual-autoregressive-models)  
   标签：评分：8.0/10、query:agsec
   evidence：针对视觉自回归模型的概念擦除以实现安全对齐
2. [GateMem: Benchmarking Memory Governance in Multi-Principal Shared-Memory Agents](/202606/22/2606.18829v1-gatemem-benchmarking-memory-governance-in-multi-principal-shared-memory-agents)  
   标签：评分：8.0/10、query:agsec
   evidence：多主体共享内存代理的记忆治理，包括访问控制和主动遗忘
3. [TRAP: Benchmark for Task-completion and Resistance to Active Privacy-extraction](/202606/22/2606.18996v2-trap-benchmark-for-task-completion-and-resistance-to-active-privacy-extraction)  
   标签：评分：8.0/10、query:agsec
   evidence：评估智能体在主动隐私提取下的抵抗能力，检验输出安全约束。
4. [Phoenix: Safe GitHub Issue Resolution via Multi-Agent LLMs](/202606/22/2606.20243v1-phoenix-safe-github-issue-resolution-via-multi-agent-llms)  
   标签：评分：8.0/10、query:agsec
   evidence：多层安全控制的多代理系统，用于GitHub问题解决，确保基线测试安全
5. [Analyzing Defensive Misdirection Against Model-Guided Automated Attacks on Agentic AI Systems](/202606/22/2606.20470v1-analyzing-defensive-misdirection-against-model-guided-automated-attacks-on-agentic-ai-systems)  
   标签：评分：8.0/10、query:agsec
   evidence：分析面向代理系统的模型引导自动化攻击的防御误导策略
6. [Efficient and Sound Probabilistic Verification for AI Agents](/202606/22/2606.20510v1-efficient-and-sound-probabilistic-verification-for-ai-agents)  
   标签：评分：8.0/10、query:agsec
   evidence：通过形式化验证为AI智能体实施概率安全策略
7. [FuseChain: Runtime Evidence Reconstruction for Software Supply-Chain Attacks](/202606/22/2606.15811v1-fusechain-runtime-evidence-reconstruction-for-software-supply-chain-attacks)  
   标签：评分：7.0/10、query:vuldet
   evidence：从多源遥测中重建证据的运行时检测框架，用于供应链攻击
8. [How Much Can We Trust LLM Search Agents? Measuring Endorsement Vulnerability to Web Content Manipulation](/202606/22/2606.16821v1-how-much-can-we-trust-llm-search-agents-measuring-endorsement-vulnerability-to-web-content-manipulation)  
   标签：评分：7.0/10、query:agsec
   evidence：评估LLM搜索代理对网络内容操纵导致的背书篡改的脆弱性
9. [Agentra: A Supervisable Multi-Agent Framework for Enterprise Intrusion Response](/202606/22/2606.18325v1-agentra-a-supervisable-multi-agent-framework-for-enterprise-intrusion-response)  
   标签：评分：7.0/10、query:agsec
   evidence：可监督多代理入侵响应框架，包含安全控制如Moderator网关和动作门控
10. [DynAMO:Dynamic Asset Management Orchestration via Topological Multi-Agent Scheduling](/202606/22/2606.19382v1-dynamodynamic-asset-management-orchestration-via-topological-multi-agent-scheduling)  
   标签：评分：7.0/10、query:agsec
   evidence：具有可验证工作流图的多智能体编排引擎，确保工业资产管理安全
11. [PUFFERDOS: Efficient and Effective Attack String Generation for Regular Expression Denial of Service Vulnerabilities](/202606/22/2606.19654v1-pufferdos-efficient-and-effective-attack-string-generation-for-regular-expression-denial-of-service-vulnerabilities)  
   标签：评分：7.0/10、query:vuldet
   evidence：自动化生成攻击字符串以检测正则表达式拒绝服务漏洞
12. [When Lower Privileges Suffice: Investigating Over-Privileged Tool Selection in LLM Agents](/202606/22/2606.20023v1-when-lower-privileges-suffice-investigating-over-privileged-tool-selection-in-llm-agents)  
   标签：评分：7.0/10、query:agsec
   evidence：研究LLM代理中过度特权工具选择这一安全问题
13. [Verified Detection and Prevention of Concurrency Anomalies in Multi-Agent Large Language Model Systems](/202606/22/2606.17182v1-verified-detection-and-prevention-of-concurrency-anomalies-in-multi-agent-large-language-model-systems)  
   标签：评分：6.0/10、query:agsec
   evidence：形式化验证多智能体LLM系统中的并发异常，提升安全性。


<div class="dpr-home-promo-card">
  <h3 class="dpr-home-promo-title">💬 社区与支持</h3>
  <ul class="dpr-home-promo-list">
    <li>欢迎 Star / Fork / Issue / PR</li>
    <li>QQ群：583867967（欢迎交流，已有：1151人）</li>
  </ul>
</div>
