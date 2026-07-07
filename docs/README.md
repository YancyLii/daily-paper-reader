<div class="dpr-home-notice-card">
  <h3 class="dpr-home-notice-title">🚀 Start Here</h3>
  <ul class="dpr-home-notice-list">
    <li><a href="#/tutorial/README">使用教程</a></li>
  </ul>
</div>

## 每次日报
- 最新运行日期：2026-07-07
- 运行时间：2026-07-07 19:51:42 UTC
- 运行状态：成功
- 本次总论文数：20
- 精读区：8
- 速读区：12

### 今日简报（AI）
今日拆解AI安全攻防前线，聚焦漏洞检测、恶意软件规避与智能体越狱三条技术脉络。  
最值得细看的是神经符号推理在漏洞检测上拿满分，以及IDE编码代理中通过工作流指令实现的隐蔽越狱攻击。  
面向普通开发者，建议为AI编程助手建立安全沙箱，并借助RustMizan这类基准框架主动扫描依赖漏洞。
- 详情：[/202607/07/README](/202607/07/README)

### 精读区论文标签
1. [Neuro-Symbolic Reasoning for Vulnerability Detection](/202607/07/2607.03963v1-neuro-symbolic-reasoning-for-vulnerability-detection)  
   标签：评分：10.0/10、query:vuldet
   evidence：结合大语言模型和形式化验证的神经符号推理用于漏洞检测
2. [Cloak and Detonate: Scanner Evasion and Dynamic Detection of Agent Skill Malware](/202607/07/2607.02357v2-cloak-and-detonate-scanner-evasion-and-dynamic-detection-of-agent-skill-malware)  
   标签：评分：9.0/10、query:agsec
   evidence：动态检测高风险恶意代理技能
3. [JavaVulBench: A Java Vulnerability Benchmark with Realistic Splits, a Unified Multi-Backend Harness, and a Leakage-Aware Evaluation Mode](/202607/07/2607.02825v1-javavulbench-a-java-vulnerability-benchmark-with-realistic-splits-a-unified-multi-backend-harness-and-a-leakage-aware-evaluation-mode)  
   标签：评分：9.0/10、query:vuldet
   evidence：Java漏洞检测基准，支持多后端LLM，直接匹配基于大模型的漏洞检测。
4. [MOSAIC: Knowledge-Guided CLI Command Composition Attack in LLM Coding Agents](/202607/07/2607.02857v1-mosaic-knowledge-guided-cli-command-composition-attack-in-llm-coding-agents)  
   标签：评分：9.0/10、query:agsec
   evidence：识别LLM Agent输出中的CLI命令组合高风险行为
5. [Securing Multi-Tool AI Agent Chains With Dynamic, Real-Time Compositional Policies](/202607/07/2607.03423v1-securing-multi-tool-ai-agent-chains-with-dynamic-real-time-compositional-policies)  
   标签：评分：9.0/10、query:agsec
   evidence：为多工具代理链提供组合安全策略
6. [Untrusted Content Masking for Web Agents with Security Guarantees](/202607/07/2607.05277v1-untrusted-content-masking-for-web-agents-with-security-guarantees)  
   标签：评分：9.0/10、query:agsec
   evidence：提出不可信内容屏蔽为网络代理提供防提示注入的安全保证。
7. [kNNGuard: Turning LLM Hidden Activations into a Training-Free Configurable Guardrail](/202607/07/2607.02072v1-knnguard-turning-llm-hidden-activations-into-a-training-free-configurable-guardrail)  
   标签：评分：8.0/10、query:agsec
   evidence：基于LLM激活的训练免防护栏检测不安全提示
8. [Obey, Diverge, Collapse: Blind Obedience to Incorrect Instructions Drives Code LLMs to Irrecoverable Code Semantic Collapse](/202607/07/2607.04537v1-obey-diverge-collapse-blind-obedience-to-incorrect-instructions-drives-code-llms-to-irrecoverable-code-semantic-collapse)  
   标签：评分：8.0/10、query:agsec
   evidence：代码LLM盲目服从错误指令导致语义崩溃，与Agent安全相关

### 速读区论文标签
1. [Refused in Chat, Written in Code: Workflow-Level Jailbreak Construction in IDE Coding Agents](/202607/07/2607.03968v1-refused-in-chat-written-in-code-workflow-level-jailbreak-construction-in-ide-coding-agents)  
   标签：评分：8.0/10、query:agsec
   evidence：揭示了IDE代理中通过多步骤编码工作流组装有害输出的工作流级越狱攻击。
2. [RustMizan: A Compilable, Contamination-Aware Benchmarking Framework for Rust Vulnerabilities](/202607/07/2607.04729v1-rustmizan-a-compilable-contamination-aware-benchmarking-framework-for-rust-vulnerabilities)  
   标签：评分：8.0/10、query:vuldet
   evidence：面向Rust漏洞分析的基准测试框架，包含污染测试和鲁棒性探测
3. [Linguistic Firewall: Geometry as Defense in Multi-Agent Systems Routing](/202607/07/2606.30555v2-linguistic-firewall-geometry-as-defense-in-multi-agent-systems-routing)  
   标签：评分：7.0/10、query:agsec
   evidence：针对多智能体系统恶意路由的几何防御
4. [Safety Testing LLM Agents at Scale: From Risk Discovery to Evidence-Grounded Verification](/202607/07/2607.01793v2-safety-testing-llm-agents-at-scale-from-risk-discovery-to-evidence-grounded-verification)  
   标签：评分：7.0/10、query:agsec
   evidence：面向LLM代理的自动化安全测试框架，包含风险发现与验证
5. [Robustness Meets Uncertainty: Evidential Adversarial Training for Robust Selective Classification](/202607/07/2607.03075v1-robustness-meets-uncertainty-evidential-adversarial-training-for-robust-selective-classification)  
   标签：评分：7.0/10、query:vuldet
   evidence：证据对抗训练提升选择性分类器的鲁棒性与可靠性
6. [LLM-Enhanced Hierarchical Heterogeneous Graph Representation Learning for Malicious Python Package Detection](/202607/07/2607.03350v1-llm-enhanced-hierarchical-heterogeneous-graph-representation-learning-for-malicious-python-package-detection)  
   标签：评分：7.0/10、query:vuldet
   evidence：利用大语言模型增强的层级异构图检测恶意Python包
7. [Binary Iterative Method for Non-targeted Adversarial Attack](/202607/07/2607.04145v1-binary-iterative-method-for-non-targeted-adversarial-attack)  
   标签：评分：7.0/10、query:vuldet
   evidence：提出二元迭代非定向对抗攻击方法，可用于漏洞检测模型的鲁棒性测试。
8. [Knowledge Base Poisoning Attacks and Defense for Policy-Aware LLM-RAG Framework](/202607/07/2607.04379v1-knowledge-base-poisoning-attacks-and-defense-for-policy-aware-llm-rag-framework)  
   标签：评分：7.0/10、query:agsec
   evidence：针对基于LLM-RAG的任务控制提出知识库投毒防御措施
9. [Agent Data Injection Attacks are Realistic Threats to AI Agents](/202607/07/2607.05120v1-agent-data-injection-attacks-are-realistic-threats-to-ai-agents)  
   标签：评分：7.0/10、query:agsec
   evidence：引入智能体数据注入攻击，一种对AI智能体安全的新威胁。
10. [Do Machines Struggle Where Humans Do? LLM and Human Comprehension of Obfuscated Code](/202607/07/2606.31725v1-do-machines-struggle-where-humans-do-llm-and-human-comprehension-of-obfuscated-code)  
   标签：评分：6.0/10、query:vuldet
   evidence：比较LLM与人类对混淆代码的理解，与代码分析相关
11. [Graph-Aware Fuzzing for Graph Database Management Systems](/202607/07/2607.03741v1-graph-aware-fuzzing-for-graph-database-management-systems)  
   标签：评分：6.0/10、query:libfuz
   evidence：GRAF为模糊测试生成有效的图数据库查询（API调用序列）
12. [Teaching Code LLMs to Reason with Intermediate Formal Specifications](/202607/07/2607.04232v1-teaching-code-llms-to-reason-with-intermediate-formal-specifications)  
   标签：评分：6.0/10、query:vuldet
   evidence：训练代码LLM生成中间形式化规约，辅助代码分析


<div class="dpr-home-promo-card">
  <h3 class="dpr-home-promo-title">💬 社区与支持</h3>
  <ul class="dpr-home-promo-list">
    <li>欢迎 Star / Fork / Issue / PR</li>
    <li>QQ群：583867967（欢迎交流，已有：1151人）</li>
  </ul>
</div>
