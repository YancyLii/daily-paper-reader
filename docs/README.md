<div class="dpr-home-notice-card">
  <h3 class="dpr-home-notice-title">🚀 Start Here</h3>
  <ul class="dpr-home-notice-list">
    <li><a href="#/tutorial/README">使用教程</a></li>
  </ul>
</div>

## 每次日报
- 最新运行日期：2026-06-12
- 运行时间：2026-06-12 22:20:20 UTC
- 运行状态：成功
- 本次总论文数：34
- 精读区：21
- 速读区：13

### 今日简报（AI）
今日精读34篇前沿论文，重点拆解VESTA与AgentTrust两篇满分AI Agent安全研究。
最值得关注：全自动场景生成与安全评估框架VESTA，以及自我改进的Agent行动信任层AgentTrust。
建议下一步切入WebMCP工具投毒和恶意代理技能检测，强化攻防双重视角。
- 详情：[/202606/12/README](/202606/12/README)

### 精读区论文标签
1. [VESTA: A Fully Automated Scenario Generation and Safety Evaluation Framework for LLM Agents](/202606/12/2606.08531v1-vesta-a-fully-automated-scenario-generation-and-safety-evaluation-framework-for-llm-agents)  
   标签：评分：10.0/10、query:agsec
   evidence：VESTA是一个LLM代理安全评估框架，将抽象安全风险实例化为可测量的评估任务，通过自动化场景生成直接提供安全控制策略。
2. [AgentTrust: A Self-Improving Trust Layer for AI-Agent Actions](/202606/12/2606.08539v1-agenttrust-a-self-improving-trust-layer-for-ai-agent-actions)  
   标签：评分：10.0/10、query:agsec
   evidence：提出一种信任层，将智能体动作分类为词汇或语义威胁，用于高风险动作识别
3. [FusionVul: A Multimodal Feature Fusion Framework for Source Code Vulnerability Detection](/202606/12/2606.08553v1-fusionvul-a-multimodal-feature-fusion-framework-for-source-code-vulnerability-detection)  
   标签：评分：10.0/10、query:vuldet
   evidence：融合Transformer序列模型与图神经网络进行源代码漏洞检测。
4. [SecureClaw: Clawing Back Control of LLM Agents](/202606/12/2606.09549v1-secureclaw-clawing-back-control-of-llm-agents)  
   标签：评分：10.0/10、query:agsec
   evidence：通过不透明句柄和预览-提交协议实现LLM智能体的令牌流控制双边界架构。
5. [Stop Early, Spend Less: Hidden-State Probes as a Practical Recipe for Streaming Moderation of LLM Outputs](/202606/12/2606.10487v1-stop-early-spend-less-hidden-state-probes-as-a-practical-recipe-for-streaming-moderation-of-llm-outputs)  
   标签：评分：10.0/10、query:agsec
   evidence：训练轻量级token级探针进行输出安全过滤
6. [Toward Secure LLM Agents: Threat Surfaces, Attacks, Defenses, and Evaluation](/202606/12/2606.10749v1-toward-secure-llm-agents-threat-surfaces-attacks-defenses-and-evaluation)  
   标签：评分：10.0/10、query:agsec
   evidence：对LLM代理安全进行全面的系统综述，涵盖威胁、攻击、防御和评估，是Token流控制与代理安全研究的核心参考
7. [Early Comparative Evaluation of Transformer Models for Multilingual Software Vulnerability Detection](/202606/12/2606.10925v1-early-comparative-evaluation-of-transformer-models-for-multilingual-software-vulnerability-detection)  
   标签：评分：10.0/10、query:vuldet
   evidence：直接比较多语言软件漏洞检测的 LLM 模型
8. [Data Flow Control: Data Safety Policies for AI Agents](/202606/12/2606.05679v1-data-flow-control-data-safety-policies-for-ai-agents)  
   标签：评分：9.0/10、query:agsec
   evidence：为AI代理实施数据安全策略以对生成SQL实施内容安全约束
9. [DPAgent-in-the-Middle: Agentic Defense and Repair Against AI-Groomed Deceptive Patterns](/202606/12/2606.06914v1-dpagent-in-the-middle-agentic-defense-and-repair-against-ai-groomed-deceptive-patterns)  
   标签：评分：9.0/10、query:agsec
   evidence：提出对抗 AI 培养欺骗模式的智能体防御，是一种 LLM 安全控制策略
10. [TRACE: Trajectory Reasoning through Adaptive Cross-Step Evidence Aggregation for LLM Agents](/202606/12/2606.07054v1-trace-trajectory-reasoning-through-adaptive-cross-step-evidence-aggregation-for-llm-agents)  
   标签：评分：9.0/10、query:agsec
   evidence：提出监控框架识别LLM代理轨迹中的高风险行为，直接应对高风险行为识别需求
11. [The Cold-Start Safety Gap in LLM Agents](/202606/12/2606.07867v1-the-cold-start-safety-gap-in-llm-agents)  
   标签：评分：9.0/10、query:agsec
   evidence：研究LLM代理在对话深度上的安全性变化，发现代理在会话开始时最脆弱的冷启动安全差距。
12. [Contract2Tool: Learning Preconditions and Effects for Reliable Tool-Augmented LLM Agents](/202606/12/2606.07904v1-contract2tool-learning-preconditions-and-effects-for-reliable-tool-augmented-llm-agents)  
   标签：评分：9.0/10、query:agsec
   evidence：提出一个学习工具合约（前置条件、效果）的框架，使LLM代理的工具使用更安全可靠，直接提供了安全控制策略。
13. [RecurGuard: Runtime Monitoring for Reasoning-Token Consumption Attacks](/202606/12/2606.07968v1-recurguard-runtime-monitoring-for-reasoning-token-consumption-attacks)  
   标签：评分：9.0/10、query:agsec
   evidence：监控推理令牌消耗以检测对LLM代理的拒绝服务/拒绝钱包攻击。
14. [Semantic Quorum Assurance: Collective Certification for Non-Deterministic AI Infrastructure](/202606/12/2606.08021v1-semantic-quorum-assurance-collective-certification-for-non-deterministic-ai-infrastructure)  
   标签：评分：9.0/10、query:agsec
   evidence：提出语义法定人数保证以治理非确定性智能体操作
15. [SciTrace: Trajectory-Aware Safety Reasoning for Scientific Discovery Agents](/202606/12/2606.08234v1-scitrace-trajectory-aware-safety-reasoning-for-scientific-discovery-agents)  
   标签：评分：9.0/10、query:agsec
   evidence：将安全推理融入科学代理管线的每个阶段
16. [AgentCanary: A Security Evaluation Framework for Autonomous AI Agents in Real Executable Environments](/202606/12/2606.10484v1-agentcanary-a-security-evaluation-framework-for-autonomous-ai-agents-in-real-executable-environments)  
   标签：评分：9.0/10、query:agsec
   evidence：提出自主AI代理安全评估框架，直接服务于安全控制策略
17. [Context-Based Adversarial Attacks on AI Code Generators: Vulnerability Analysis and Implications](/202606/12/2606.10945v1-context-based-adversarial-attacks-on-ai-code-generators-vulnerability-analysis-and-implications)  
   标签：评分：9.0/10、query:vuldet
   evidence：研究基于LLM的代码生成器的对抗攻击，通过构造上下文诱导生成可利用代码，直接探究漏洞分析中的对抗鲁棒性。
18. [Runtime Skill Audit: Targeted Runtime Probing for Agent Skill Security](/202606/12/2606.11671v1-runtime-skill-audit-targeted-runtime-probing-for-agent-skill-security)  
   标签：评分：9.0/10、query:agsec
   evidence：通过运行时条件探测代理行为的动态审计方法
19. [Can Open-Source LLM Agents Replace Static Application Security Testing Tools? An Empirical Assessment](/202606/12/2606.11672v1-can-open-source-llm-agents-replace-static-application-security-testing-tools-an-empirical-assessment)  
   标签：评分：9.0/10、query:vuldet
   evidence：评估开源LLM智能体用于SAST漏洞检测，与Bandit对比
20. [Acoda: Adversarial Code Obfuscation for Defending against LLM-based Analysis](/202606/12/2606.11755v1-acoda-adversarial-code-obfuscation-for-defending-against-llm-based-analysis)  
   标签：评分：9.0/10、query:vuldet
   evidence：对抗性代码混淆，抵御基于LLM的漏洞检测
21. [Towards Responsibly Non-Compliant Machines](/202606/12/2606.12147v1-towards-responsibly-non-compliant-machines)  
   标签：评分：9.0/10、query:agsec
   evidence：提出自主代理的负责任不合规机制，与安全控制策略一致。

### 速读区论文标签
1. [Coding with "Enemy": Can Human Developers Detect AI Agent Sabotage?](/202606/12/2606.05647v1-coding-with-enemy-can-human-developers-detect-ai-agent-sabotage)  
   标签：评分：8.0/10、query:agsec
   evidence：研究人类对AI编程智能体蓄意破坏的检测
2. [WebMCP Tool Surface Poisoning: Runtime Manipulation Attacks on LLM Agents](/202606/12/2606.06387v1-webmcp-tool-surface-poisoning-runtime-manipulation-attacks-on-llm-agents)  
   标签：评分：8.0/10、query:agsec
   evidence：识别 LLM 智能体的工具注入攻击，为安全控制策略提供信息
3. [MalSkillBench: A Runtime-Verified Benchmark of Malicious Agent Skills](/202606/12/2606.07131v1-malskillbench-a-runtime-verified-benchmark-of-malicious-agent-skills)  
   标签：评分：8.0/10、query:agsec
   evidence：用于检测恶意代理技能的基准，支持高风险行为识别
4. [Where Instruction Hierarchy Breaks: Diagnosing and Repairing Failures in Reasoning Language Models](/202606/12/2606.07808v1-where-instruction-hierarchy-breaks-diagnosing-and-repairing-failures-in-reasoning-language-models)  
   标签：评分：8.0/10、query:agsec
   evidence：诊断并修复推理LLM指令层级故障，一种面向智能体工作流的安全控制策略
5. [VATS: Exploiting Implicit Authority in Error-Path Injection via Systematic Mutation](/202606/12/2606.07992v1-vats-exploiting-implicit-authority-in-error-path-injection-via-systematic-mutation)  
   标签：评分：8.0/10、query:agsec
   evidence：利用MCP工具调用中的隐式错误权将间接提示注入成功率提高三倍，对令牌流安全至关重要。
6. [From Privacy to Workflow Integrity: Communication-Graph Metadata in Autonomous Agent Interoperability](/202606/12/2606.07150v1-from-privacy-to-workflow-integrity-communication-graph-metadata-in-autonomous-agent-interoperability)  
   标签：评分：7.0/10、query:agsec
   evidence：揭示代理互操作中的通信图元数据暴露工作流结构，可被利用推断攻击。
7. [The Windows IOCTL Census: A Corpus-Scale, Multi-Architecture Database of the Driver Control-Code Surface](/202606/12/2606.07732v1-the-windows-ioctl-census-a-corpus-scale-multi-architecture-database-of-the-driver-control-code-surface)  
   标签：评分：7.0/10、query:libfuz
   evidence：通过静态分析恢复27087个Windows驱动的IOCTL调度面，助力模糊测试驱动生成
8. [ATTAIN: Automated Exploit Failure Analysis through Trace-Driven Diff Analysis](/202606/12/2606.09060v1-attain-automated-exploit-failure-analysis-through-trace-driven-diff-analysis)  
   标签：评分：7.0/10、query:vuldet
   evidence：自动化漏洞利用失败分析，评估库版本间的漏洞存在性
9. [Context-Fractured Decomposition Attacks on Tool-Using LLM Agents: Exploiting Artifact Provenance Gaps](/202606/12/2606.09084v1-context-fractured-decomposition-attacks-on-tool-using-llm-agents-exploiting-artifact-provenance-gaps)  
   标签：评分：7.0/10、query:agsec
   evidence：识别了工具使用LLM代理中的工件来源缺口，可导致上下文断裂分解攻击。
10. [MalSkillBench: A Runtime-Verified Benchmark of Malicious Agent Skills](/202606/12/2606.07131v2-malskillbench-a-runtime-verified-benchmark-of-malicious-agent-skills)  
   标签：评分：6.0/10、query:agsec
   evidence：用于检测高风险行为的恶意代理技能基准
11. [Demand-Driven Vulnerability Detection for Cloud Security Posture Management: Removing Human Rule Authoring from the Disclosure-to-Protection Critical Path](/202606/12/2606.07957v1-demand-driven-vulnerability-detection-for-cloud-security-posture-management-removing-human-rule-authoring-from-the-disclosure-to-protection-critical-path)  
   标签：评分：6.0/10、query:vuldet
   evidence：通过需求驱动的规则生成实现云安全自动漏洞检测
12. [Distilling Safe LLM Systems via Soft Prompts for On Device Settings](/202606/12/2606.09388v1-distilling-safe-llm-systems-via-soft-prompts-for-on-device-settings)  
   标签：评分：6.0/10、query:agsec
   evidence：通过软提示蒸馏安全LLM，实现设备端的安全对齐
13. [Beyond Coverage and Kill Scores: Empirically Measuring Test Suite Behavioural Gaps](/202606/12/2606.10417v1-beyond-coverage-and-kill-scores-empirically-measuring-test-suite-behavioural-gaps)  
   标签：评分：6.0/10、query:libfuz
   evidence：从文档和源代码中提取方法级预期行为，可为模糊驱动合成建模API依赖关系。


<div class="dpr-home-promo-card">
  <h3 class="dpr-home-promo-title">💬 社区与支持</h3>
  <ul class="dpr-home-promo-list">
    <li>欢迎 Star / Fork / Issue / PR</li>
    <li>QQ群：583867967（欢迎交流，已有：1151人）</li>
  </ul>
</div>
