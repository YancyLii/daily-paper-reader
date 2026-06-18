<div class="dpr-home-notice-card">
  <h3 class="dpr-home-notice-title">🚀 Start Here</h3>
  <ul class="dpr-home-notice-list">
    <li><a href="#/tutorial/README">使用教程</a></li>
  </ul>
</div>

## 每次日报
- 最新运行日期：2026-06-18
- 运行时间：2026-06-18 22:10:51 UTC
- 运行状态：成功
- 本次总论文数：25
- 精读区：12
- 速读区：13

### 今日简报（AI）
今日精读两篇满分论文：一篇揭示视觉-语言-动作模型可被轨迹级重定向攻击，另一篇提出OpenAnt用LLM分解代码并动态测试漏洞。  
重点关注AI安全前沿——多模态具身智能的对抗脆弱性，以及智能体攻击的自动化发现与动态验证。  
建议读者追踪“安全对齐与对抗微调的动态耦合”这一交叉趋势，警惕AI滥用技能的演化风险。
- 详情：[/202606/18/README](/202606/18/README)

### 精读区论文标签
1. [Trajectory-Level Redirection Attacks on Vision-Language-Action Models](/202606/18/2606.12978v2-trajectory-level-redirection-attacks-on-vision-language-action-models)  
   标签：评分：10.0/10、query:agsec
   evidence：识别并形式化了在多模态VLA模型中保留表面用户意图的轨迹级重定向攻击。
2. [OpenAnt: LLM-Powered Vulnerability Discovery Through Code Decomposition, Adversarial Verification, and Dynamic Testing](/202606/18/2606.19149v1-openant-llm-powered-vulnerability-discovery-through-code-decomposition-adversarial-verification-and-dynamic-testing)  
   标签：评分：10.0/10、query:vuldet
   evidence：集成LLM推理与静态分析和动态测试，用于大规模代码库的自动化漏洞发现。
3. [Reward Hacking in Language Model Agents: Revisiting AI Safety Gridworlds](/202606/18/2606.15385v1-reward-hacking-in-language-model-agents-revisiting-ai-safety-gridworlds)  
   标签：评分：9.0/10、query:agsec
   evidence：基于文本的语言模型代理评估套件，揭示规范博弈和奖励黑客行为
4. [From Refusal Geometry to Safety Geometry: Harmfulness--Refusal Coupling under Dynamic Adversarial Fine-Tuning](/202606/18/2606.16349v1-from-refusal-geometry-to-safety-geometry-harmfulness--refusal-coupling-under-dynamic-adversarial-fine-tuning)  
   标签：评分：9.0/10、query:agsec
   evidence：研究有害性与拒绝耦合以理解LLM安全几何
5. [ARVO: Atlas of Reproducible Vulnerabilities for Open-Source Software](/202606/18/2606.17283v1-arvo-atlas-of-reproducible-vulnerabilities-for-open-source-software)  
   标签：评分：9.0/10、query:vuldet
   evidence：创建可复现的漏洞数据集，支持自动化检测方法
6. [TaFD: Threat-Aware Frequency Decoupling for Adversarial Robustness against Heterogeneous Attacks](/202606/18/2606.17540v1-tafd-threat-aware-frequency-decoupling-for-adversarial-robustness-against-heterogeneous-attacks)  
   标签：评分：9.0/10、query:vuldet
   evidence：面向多威胁对抗鲁棒性的频域防御方法
7. [AnchorKV: Safety-Aware KV Cache Compression via Soft Penalty with a Refusal Anchor](/202606/18/2606.17872v1-anchorkv-safety-aware-kv-cache-compression-via-soft-penalty-with-a-refusal-anchor)  
   标签：评分：9.0/10、query:agsec
   evidence：安全感知的KV缓存压缩，利用拒绝锚点保持安全对齐以防御越狱攻击。
8. [Seeing Is Not Screening: Multimodal Hidden Instruction Attacks on Agent Skill Scanners](/202606/18/2606.18198v1-seeing-is-not-screening-multimodal-hidden-instruction-attacks-on-agent-skill-scanners)  
   标签：评分：9.0/10、query:agsec
   evidence：展示通过将有害指令隐藏在图像中可绕过基于文本的安全扫描，从而攻击多模态智能体
9. [ToolChain-CRC: Conformal Risk Control for Agentic AI Under Retrieval and Tool-Use Drift](/202606/18/2606.18467v1-toolchain-crc-conformal-risk-control-for-agentic-ai-under-retrieval-and-tool-use-drift)  
   标签：评分：9.0/10、query:agsec
   evidence：提出共形风险控制方法应对代理AI在工具使用漂移下的风险，直接涉及安全控制策略
10. [Code-Augur: Agentic Vulnerability Detection via Specification Inference](/202606/18/2606.18619v1-code-augur-agentic-vulnerability-detection-via-specification-inference)  
   标签：评分：9.0/10、query:vuldet
   evidence：通过LLM智能体推断安全规范来进行漏洞检测，直接对应基于大语言模型的漏洞分析
11. [PYPILINE: Malicious PyPI Package Detection via Suspicious API Knowledge and Agent Workflow](/202606/18/2606.19063v1-pypiline-malicious-pypi-package-detection-via-suspicious-api-knowledge-and-agent-workflow)  
   标签：评分：9.0/10、query:vuldet
   evidence：利用静态分析和代理工作流自动检测恶意PyPI包
12. [CodeSentinel: A Three-Layer Defense Against Indirect Prompt Injection in Code Contexts](/202606/18/2606.19235v1-codesentinel-a-three-layer-defense-against-indirect-prompt-injection-in-code-contexts)  
   标签：评分：9.0/10、query:agsec
   evidence：在做LLM处理前检测并中和代码上下文中的注入攻击，实现提示安全预处理

### 速读区论文标签
1. [SHARD: Safe and Helpful Alignment via Self-Reframing Distillation](/202606/18/2606.15517v1-shard-safe-and-helpful-alignment-via-self-reframing-distillation)  
   标签：评分：8.0/10、query:agsec
   evidence：通过重构回答来改进安全-帮助性对齐，对输出施加内容安全约束
2. [Dynamic Malicious Skills in Agentic AI](/202606/18/2606.16287v2-dynamic-malicious-skills-in-agentic-ai)  
   标签：评分：8.0/10、query:agsec
   evidence：提出针对Agentic AI中动态恶意技能注入的系统级防御
3. [From Refusal Geometry to Safety Geometry: Harmfulness--Refusal Coupling under Dynamic Adversarial Fine-Tuning](/202606/18/2606.16349v2-from-refusal-geometry-to-safety-geometry-harmfulness--refusal-coupling-under-dynamic-adversarial-fine-tuning)  
   标签：评分：8.0/10、query:agsec
   evidence：双安全几何协议测量有害-拒绝耦合，为LLM安全控制机制提供依据。
4. [DoubtProbe: Black-Box Jailbreak Defense via Structural Verification and Semantic Auditing](/202606/18/2606.16527v1-doubtprobe-black-box-jailbreak-defense-via-structural-verification-and-semantic-auditing)  
   标签：评分：8.0/10、query:agsec
   evidence：结合结构验证与语义审计的双分支黑盒越狱防御框架
5. [How Much Can We Trust LLM Search Agents? Measuring Endorsement Vulnerability to Web Content Manipulation](/202606/18/2606.16821v1-how-much-can-we-trust-llm-search-agents-measuring-endorsement-vulnerability-to-web-content-manipulation)  
   标签：评分：8.0/10、query:agsec
   evidence：衡量基于LLM搜索代理的背书破坏，揭示输出安全漏洞
6. [OTRO: Oblivious Tokenization Path with Square-Root ORAM](/202606/18/2606.17358v1-otro-oblivious-tokenization-path-with-square-root-oram)  
   标签：评分：8.0/10、query:agsec
   evidence：提出高效的遗忘式标记化路径防止LLM分词器访存模式泄露，增强令牌流安全
7. [Cordon: Semantic Transactions for Tool-Using LLM Agents](/202606/18/2606.17573v1-cordon-semantic-transactions-for-tool-using-llm-agents)  
   标签：评分：8.0/10、query:agsec
   evidence：面向工具代理的事务运行时，用于暂存和验证不可逆操作
8. [SafeClawBench: Separating Semantic, Audit-Evidence, and Sandbox Harm in Tool-Using LLM Agents](/202606/18/2606.18356v1-safeclawbench-separating-semantic-audit-evidence-and-sandbox-harm-in-tool-using-llm-agents)  
   标签：评分：8.0/10、query:agsec
   evidence：综合基准测试评估工具型LLM代理安全，关注高风险动作识别
9. [Understanding and Mitigating Prompt Leaking Attacks in Real-World LLM-Based Applications](/202606/18/2606.18673v1-understanding-and-mitigating-prompt-leaking-attacks-in-real-world-llm-based-applications)  
   标签：评分：8.0/10、query:agsec
   evidence：研究LLM应用的提示泄露攻击与防御，保护系统提示参数
10. [SPARK: Security Knowledge Priming and Representation-Guided Knowledge Activation for LLM-based Secure Code Generation](/202606/18/2606.16244v1-spark-security-knowledge-priming-and-representation-guided-knowledge-activation-for-llm-based-secure-code-generation)  
   标签：评分：7.0/10、query:agsec
   evidence：SPARK激活潜在安全知识确保LLM生成安全代码
11. [Automated jailbreak attack targeting multiple defense strategies](/202606/18/2606.16751v1-automated-jailbreak-attack-targeting-multiple-defense-strategies)  
   标签：评分：7.0/10、query:agsec
   evidence：UNIATTACK自动化构建越狱提示以测试LLM安全防御
12. [SoK: AI-Augmented Binary Reversing](/202606/18/2606.17398v1-sok-ai-augmented-binary-reversing)  
   标签：评分：7.0/10、query:vuldet
   evidence：系统化梳理AI增强的二进制逆向工程，包括漏洞发现
13. [TRAP: Benchmark for Task-completion and Resistance to Active Privacy-extraction](/202606/18/2606.18996v1-trap-benchmark-for-task-completion-and-resistance-to-active-privacy-extraction)  
   标签：评分：7.0/10、query:agsec
   evidence：通过测量隐私泄露抵抗能力评估LLM agent的内容安全约束，关注安全输出行为


<div class="dpr-home-promo-card">
  <h3 class="dpr-home-promo-title">💬 社区与支持</h3>
  <ul class="dpr-home-promo-list">
    <li>欢迎 Star / Fork / Issue / PR</li>
    <li>QQ群：583867967（欢迎交流，已有：1151人）</li>
  </ul>
</div>
