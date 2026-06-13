<div class="dpr-home-notice-card">
  <h3 class="dpr-home-notice-title">🚀 Start Here</h3>
  <ul class="dpr-home-notice-list">
    <li><a href="#/tutorial/README">使用教程</a></li>
  </ul>
</div>

## 每次日报
- 最新运行日期：2026-06-13
- 运行时间：2026-06-13 21:38:16 UTC
- 运行状态：成功
- 本次总论文数：18
- 精读区：8
- 速读区：10

### 今日简报（AI）
今日精读8篇AI安全论文，聚焦大模型越狱攻击防御与多智能体安全；速读覆盖注入攻击、记忆投毒与恶意代码生成。
最值得关注：利用流形轨迹动力学防御越狱，以及基于“大猩猩部队优化”的多智能体安全框架。
建议读者延伸探索多模态记忆投毒和语法约束解码带来的新型代码安全风险。
- 详情：[/202606/13/README](/202606/13/README)

### 精读区论文标签
1. [Defending Jailbreak Attacks on Large Language Models via Manifold Trajectory Kinetics](/202606/13/2606.07335v1-defending-jailbreak-attacks-on-large-language-models-via-manifold-trajectory-kinetics)  
   标签：评分：9.0/10、query:agsec
   evidence：通过分析流形轨迹动力学实现越狱攻击防御，鲁棒检测不安全输出
2. [SGTO-MAS: Secure Gorilla Troops Optimization for Multi-Agent LLM Systems](/202606/13/2606.07940v1-sgto-mas-secure-gorilla-troops-optimization-for-multi-agent-llm-systems)  
   标签：评分：9.0/10、query:agsec
   evidence：提出安全感知的多智能体LLM系统智能体选择方法
3. [Toward Secure LLM Agents: Threat Surfaces, Attacks, Defenses, and Evaluation](/202606/13/2606.10749v1-toward-secure-llm-agents-threat-surfaces-attacks-defenses-and-evaluation)  
   标签：评分：9.0/10、query:agsec
   evidence：全面调查247篇LLM代理安全论文，涵盖生命周期各阶段的威胁、攻击和防御。
4. [Bootstrapped Monitoring: Leveraging Transparent Reasoning to Oversee Stronger AI Agents](/202606/13/2606.11998v1-bootstrapped-monitoring-leveraging-transparent-reasoning-to-oversee-stronger-ai-agents)  
   标签：评分：9.0/10、query:agsec
   evidence：利用透明推理的自举监控协议检测智能体合谋
5. [When Recovery Matters: The Blind Spot of Surrogate Privacy in MLLM Editing](/202606/13/2606.07171v1-when-recovery-matters-the-blind-spot-of-surrogate-privacy-in-mllm-editing)  
   标签：评分：8.0/10、query:agsec
   evidence：解决多模态编辑中的隐私约束下用户意图保持，直接相关于防篡改意图保护。
6. [When Behavioral Safety Evaluation Fails: A Representation-Level Perspective](/202606/13/2606.08044v1-when-behavioral-safety-evaluation-fails-a-representation-level-perspective)  
   标签：评分：8.0/10、query:agsec
   evidence：通过潜在空间干预评估LLM表征级安全性
7. [Data Agents Under Attack: Vulnerabilities in LLM-Driven Analytical Systems](/202606/13/2606.08661v1-data-agents-under-attack-vulnerabilities-in-llm-driven-analytical-systems)  
   标签：评分：8.0/10、query:agsec
   evidence：对LLM驱动分析系统中数据代理漏洞的系统安全研究
8. [GitInject: Real-World Prompt Injection Attacks in AI-Powered CI/CD Pipelines](/202606/13/2606.09935v1-gitinject-real-world-prompt-injection-attacks-in-ai-powered-cicd-pipelines)  
   标签：评分：8.0/10、query:agsec
   evidence：评估真实GitHub工作流中提示注入漏洞的框架，针对供应链风险

### 速读区论文标签
1. [Assessing Automated Prompt Injection Attacks in Agentic Environments](/202606/13/2606.10525v1-assessing-automated-prompt-injection-attacks-in-agentic-environments)  
   标签：评分：8.0/10、query:agsec
   evidence：评估针对LLM智能体的自动化提示注入攻击，为自主智能体安全控制策略提供参考
2. [MemVenom: Triggered Poisoning of Multimodal Memories in Web Agents](/202606/13/2606.10742v1-memvenom-triggered-poisoning-of-multimodal-memories-in-web-agents)  
   标签：评分：8.0/10、query:agsec
   evidence：提出针对Web智能体多模态记忆的黑盒投毒攻击，展示多模态输入篡改威胁
3. [Grammar-Constrained Decoding Can Jailbreak LLMs into Generating Malicious Code](/202606/13/2606.11817v1-grammar-constrained-decoding-can-jailbreak-llms-into-generating-malicious-code)  
   标签：评分：8.0/10、query:agsec
   evidence：针对语法约束解码引发的恶意代码生成提出CodeShield防御机制
4. [Hiding in Plain Floats: Steganographic Carriers for Indirect Prompt and Content Injection](/202606/13/2606.08403v1-hiding-in-plain-floats-steganographic-carriers-for-indirect-prompt-and-content-injection)  
   标签：评分：7.0/10、query:agsec
   evidence：提出浮点数组隐写载体隐藏恶意内容，逃避基于文本的内容安全防御
5. [Document-Authored Control-Signal Impersonation: A Low-Cost Indirect Prompt Attack on RAG Safety Boundaries](/202606/13/2606.09005v1-document-authored-control-signal-impersonation-a-low-cost-indirect-prompt-attack-on-rag-safety-boundaries)  
   标签：评分：7.0/10、query:agsec
   evidence：识别了文档编写文本冒充控制信号的提示注入模式，破坏RAG中的内容安全约束
6. [RECON: An LLM-Enhanced Backward Constraint Analysis Framework](/202606/13/2606.10264v1-recon-an-llm-enhanced-backward-constraint-analysis-framework)  
   标签：评分：7.0/10、query:vuldet
   evidence：结合静态分析与LLM语义理解的逆向约束分析框架，用于精确代码分析
7. [RedAct: Redacting Agent Capability Traces for Procedural Skill Protection](/202606/13/2606.10813v1-redact-redacting-agent-capability-traces-for-procedural-skill-protection)  
   标签：评分：7.0/10、query:agsec
   evidence：提出一种痕迹脱敏框架，保护代理执行痕迹中的私有程序技能，贡献于安全的代理输出控制。
8. [RedAct: Redacting Agent Capability Traces for Procedural Skill Protection](/202606/13/2606.10813v2-redact-redacting-agent-capability-traces-for-procedural-skill-protection)  
   标签：评分：7.0/10、query:agsec
   evidence：编辑代理执行轨迹以保护程序性技能免受暴露，确保输出安全。
9. [Observability for Delegated Execution in Agentic AI Systems](/202606/13/2606.09692v1-observability-for-delegated-execution-in-agentic-ai-systems)  
   标签：评分：6.0/10、query:agsec
   evidence：提出LLM智能体委托执行的可观测性框架，用于动作归因和辅助安全监控
10. [Multi-task LLMs for Bug Classification: Efficient Inference with Auxiliary Decoding Heads](/202606/13/2606.09956v1-multi-task-llms-for-bug-classification-efficient-inference-with-auxiliary-decoding-heads)  
   标签：评分：6.0/10、query:vuldet
   evidence：利用多任务LLM和辅助解码头进行代码行级错误定位。


<div class="dpr-home-promo-card">
  <h3 class="dpr-home-promo-title">💬 社区与支持</h3>
  <ul class="dpr-home-promo-list">
    <li>欢迎 Star / Fork / Issue / PR</li>
    <li>QQ群：583867967（欢迎交流，已有：1151人）</li>
  </ul>
</div>
