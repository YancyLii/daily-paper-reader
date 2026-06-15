<div class="dpr-home-notice-card">
  <h3 class="dpr-home-notice-title">🚀 Start Here</h3>
  <ul class="dpr-home-notice-list">
    <li><a href="#/tutorial/README">使用教程</a></li>
  </ul>
</div>

## 每次日报
- 最新运行日期：2026-06-15
- 运行时间：2026-06-15 22:17:12 UTC
- 运行状态：成功
- 本次总论文数：15
- 精读区：9
- 速读区：6

### 今日简报（AI）
1) 今日精读9篇前沿论文，重点聚焦流式安全护栏、智能体能力保护与多智能体工作流安全。
2) 最值得关注：FreoStream 通过未来感知推理让实时内容审核更前瞻，RedAct 则探索如何对智能体技能痕迹进行脱敏以保护核心流程。
3) 建议读者优先阅读这两篇精读文章，尤其关注流式安全与智能体隐私保护的交叉趋势。
- 详情：[/202606/15/README](/202606/15/README)

### 精读区论文标签
1. [FreoStream:Enhancing Stream Guardrails via Future-Aware Reasoning and Safety-Aligned Optimization](/202606/15/2606.13737v1-freostreamenhancing-stream-guardrails-via-future-aware-reasoning-and-safety-aligned-optimization)  
   标签：评分：10.0/10、query:agsec
   evidence：FreoStream通过微调LoRA模块进行未来感知推理，减少过度拒绝并捕捉隐式有害内容，是一种直接的token流控制机制。
2. [RedAct: Redacting Agent Capability Traces for Procedural Skill Protection](/202606/15/2606.10813v3-redact-redacting-agent-capability-traces-for-procedural-skill-protection)  
   标签：评分：9.0/10、query:agsec
   evidence：提出了一种轨迹脱敏框架，防止智能体执行轨迹泄露私有程序化技能。
3. [SEVRA-BENCH: Social Engineering of Vulnerabilities in Review Agents](/202606/15/2606.13757v1-sevra-bench-social-engineering-of-vulnerabilities-in-review-agents)  
   标签：评分：9.0/10、query:vuldet
   evidence：评估LLM代码审查员在对抗性拉取请求中检测漏洞能力的基准测试。
4. [Hidden in Plain Sight: Benchmarking Agent Safety Against Decomposition Attacks with DECOMPBENCH](/202606/15/2606.13994v1-hidden-in-plain-sight-benchmarking-agent-safety-against-decomposition-attacks-with-decompbench)  
   标签：评分：9.0/10、query:agsec
   evidence：基准评估智能体在有害任务被分解为良性子任务时的安全性。
5. [SkillMutator: Benchmarking and Defending Language-and-Code Cross-modal Attacks on LLM Agent Skills](/202606/15/2606.14154v1-skillmutator-benchmarking-and-defending-language-and-code-cross-modal-attacks-on-llm-agent-skills)  
   标签：评分：9.0/10、query:agsec
   evidence：防御LLM智能体跨模态攻击，防止通过篡改技能泄露数据，保护用户意图。
6. [Investigating Metamorphic Fuzz Oracle Enhancement via Large Language Models](/202606/15/2606.14164v1-investigating-metamorphic-fuzz-oracle-enhancement-via-large-language-models)  
   标签：评分：9.0/10、query:libfuz
   evidence：基于LLM的框架自动生成并集成蜕变关系oracle到fuzz driver，增强库模糊测试。
7. [Security in a Workflow: Exploring Role-Based Agentic Architectures for Vulnerability Handling](/202606/15/2606.14261v1-security-in-a-workflow-exploring-role-based-agentic-architectures-for-vulnerability-handling)  
   标签：评分：9.0/10、query:vuldet
   evidence：具有规划、分析、修复、验证角色和CodeQL的代理LLM漏洞处理工作流
8. [AgentCyberRange: Benchmarking Frontier AI Systems in Realistic Cyber Ranges](/202606/15/2606.14295v1-agentcyberrange-benchmarking-frontier-ai-systems-in-realistic-cyber-ranges)  
   标签：评分：9.0/10、query:vuldet
   evidence：用于AI漏洞检测和利用的现实网络靶场基准
9. [From Shield to Target: Denial-of-Service Attacks on LLM-Based Agent Guardrails](/202606/15/2606.14517v1-from-shield-to-target-denial-of-service-attacks-on-llm-based-agent-guardrails)  
   标签：评分：9.0/10、query:agsec
   evidence：揭示通过延长推理循环造成 LLM 护栏的拒绝服务漏洞

### 速读区论文标签
1. [Smarter Saboteurs, Better Fixers: Scaling & Security in Linear Multi-Agent Workflows](/202606/15/2606.12709v1-smarter-saboteurs-better-fixers-scaling--security-in-linear-multi-agent-workflows)  
   标签：评分：8.0/10、query:agsec
   evidence：研究模型扩展对多代理系统抵抗提示注入攻击影响
2. [PI-Hunter: Automated Red-Teaming for Exposing and Localizing Prompt Injections](/202606/15/2606.12737v1-pi-hunter-automated-red-teaming-for-exposing-and-localizing-prompt-injections)  
   标签：评分：8.0/10、query:agsec
   evidence：自动化红队审计暴露提示注入漏洞，为智能体的令牌流安全分析做出贡献。
3. [HierSVA: A Data Synthesis Pipeline, Dataset, and Benchmark for LLM-Driven Hierarchical Hardware Formal Verification](/202606/15/2606.13706v1-hiersva-a-data-synthesis-pipeline-dataset-and-benchmark-for-llm-driven-hierarchical-hardware-formal-verification)  
   标签：评分：8.0/10、query:vuldet
   evidence：LLM驱动的流水线为硬件RTL生成形式验证断言，辅助硬件设计中的漏洞检测。
4. [Contract-Based Compositional Shielding for Safe Multi-Agent Reinforcement Learning](/202606/15/2606.14130v1-contract-based-compositional-shielding-for-safe-multi-agent-reinforcement-learning)  
   标签：评分：8.0/10、query:agsec
   evidence：去中心化屏蔽强制多代理强化学习中的 LTL 安全规范
5. [Evaluating LLMs for Obfuscation Detection and Classification in Android Apps](/202606/15/2606.14233v1-evaluating-llms-for-obfuscation-detection-and-classification-in-android-apps)  
   标签：评分：7.0/10、query:vuldet
   evidence：评估大语言模型检测安卓应用混淆的能力，该任务通过减轻混淆对静态分析工具的影响来支持漏洞检测。
6. [Categorical Robustness Assessment for Machine Learning based Network Intrusion Detection Systems](/202606/15/2606.12075v1-categorical-robustness-assessment-for-machine-learning-based-network-intrusion-detection-systems)  
   标签：评分：6.0/10、query:vuldet
   evidence：对入侵检测中ML分类器的对抗鲁棒性进行系统评估，评估不同架构的健壮性。


<div class="dpr-home-promo-card">
  <h3 class="dpr-home-promo-title">💬 社区与支持</h3>
  <ul class="dpr-home-promo-list">
    <li>欢迎 Star / Fork / Issue / PR</li>
    <li>QQ群：583867967（欢迎交流，已有：1151人）</li>
  </ul>
</div>
