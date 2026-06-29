<div class="dpr-home-notice-card">
  <h3 class="dpr-home-notice-title">🚀 Start Here</h3>
  <ul class="dpr-home-notice-list">
    <li><a href="#/tutorial/README">使用教程</a></li>
  </ul>
</div>

## 每次日报
- 最新运行日期：2026-06-29
- 运行时间：2026-06-29 21:16:15 UTC
- 运行状态：成功
- 本次总论文数：42
- 精读区：29
- 速读区：13

### 今日简报（AI）
今日精读42篇AI安全论文，聚焦代码漏洞检测与长时Agent安全约束坍缩。  
最值得关注：10分论文《Revelio》实现仓库级内存漏洞的低成本检测，《Governance Decay》揭示多步Agent中安全指令被悄然压缩擦除的机制。  
建议开发者优先审视Agent长链任务中的规则衰减风险，并借鉴代码扫描的自动化思路加固自身项目。
- 详情：[/202606/29/README](/202606/29/README)

### 精读区论文标签
1. [Revelio: Cost-Efficient Agentic Memory Safety Vulnerability Detection For Repository-Scale Codebases](/202606/29/2606.22263v1-revelio-cost-efficient-agentic-memory-safety-vulnerability-detection-for-repository-scale-codebases)  
   标签：评分：10.0/10、query:vuldet
   evidence：端到端智能体框架，结合LLM与静态分析生成可验证的漏洞证明，用于检测内存安全漏洞
2. [Governance Decay: How Context Compaction Silently Erases Safety Constraints in Long-Horizon LLM Agents](/202606/29/2606.22528v1-governance-decay-how-context-compaction-silently-erases-safety-constraints-in-long-horizon-llm-agents)  
   标签：评分：10.0/10、query:agsec
   evidence：上下文压缩悄然移除嵌入式治理约束，导致LLM智能体执行禁止的工具操作
3. [GIF: Locally Sound Geometric Information Flow Control for LLMs](/202606/29/2606.23277v1-gif-locally-sound-geometric-information-flow-control-for-llms)  
   标签：评分：10.0/10、query:agsec
   evidence：提出几何信息流控制（GIF），在LLM中实现基于雅可比矩阵的令牌级信息流追踪，防止提示注入和数据泄露。
4. [AgentLens: Interpretable Safety Steering via Mechanistic Subspaces for Multi-Turn Coding Agent](/202606/29/2606.22673v1-agentlens-interpretable-safety-steering-via-mechanistic-subspaces-for-multi-turn-coding-agent)  
   标签：评分：9.0/10、query:agsec
   evidence：提出机制子空间用于多轮编码代理的可解释安全引导，实现细粒度行为控制
5. [DE-FIVE: Detecting Malicious Image Prompts via Fourier Features and Image Vector Embeddings](/202606/29/2606.22779v1-de-five-detecting-malicious-image-prompts-via-fourier-features-and-image-vector-embeddings)  
   标签：评分：9.0/10、query:agsec
   evidence：检测恶意图像提示以保护用户意图免受多模态篡改
6. [Intent-Governed Tool Authorization for AI Agents](/202606/29/2606.22916v1-intent-governed-tool-authorization-for-ai-agents)  
   标签：评分：9.0/10、query:agsec
   evidence：意图驱动的访问控制确保工具调用符合用户意图，防止未授权操作
7. [Detecting Malicious Agent Skills in the Wild using Attention](/202606/29/2606.23416v1-detecting-malicious-agent-skills-in-the-wild-using-attention)  
   标签：评分：9.0/10、query:agsec
   evidence：检测LLM代理市场中的恶意第三方技能，防止代理劫持和数据泄露
8. [JupOtter: Cell-Level Bug Detection in Jupyter Notebooks](/202606/29/2606.23877v1-jupotter-cell-level-bug-detection-in-jupyter-notebooks)  
   标签：评分：9.0/10、query:vuldet
   evidence：针对Jupyter笔记本的自动化错误检测系统，与漏洞识别相关
9. [AutoSpec: Safety Rule Evolution for LLM Agents via Inductive Logic Programming](/202606/29/2606.24245v1-autospec-safety-rule-evolution-for-llm-agents-via-inductive-logic-programming)  
   标签：评分：9.0/10、query:agsec
   evidence：使用归纳逻辑编程为LLM代理进化安全规则以阻止不安全行为
10. [AutoSpec: Safety Rule Evolution for LLM Agents via Inductive Logic Programming](/202606/29/2606.24245v2-autospec-safety-rule-evolution-for-llm-agents-via-inductive-logic-programming)  
   标签：评分：9.0/10、query:agsec
   evidence：LLM智能体安全规则的自动演化
11. [Securing LLM-Agent Long-Term Memory Against Poisoning: Non-Malleable, Origin-Bound Authority with Machine-Checked Guarantees](/202606/29/2606.24322v1-securing-llm-agent-long-term-memory-against-poisoning-non-malleable-origin-bound-authority-with-machine-checked-guarantees)  
   标签：评分：9.0/10、query:agsec
   evidence：提出不可篡改、源头绑定的权限机制防止LLM代理记忆中毒
12. [Poisoned Playbooks: Demystifying Knowledge Poisoning Effects on AI Security Agents](/202606/29/2606.24402v1-poisoned-playbooks-demystifying-knowledge-poisoning-effects-on-ai-security-agents)  
   标签：评分：9.0/10、query:vuldet
   evidence：知识中毒导致AI安全智能体产生错误利用行为，属于对漏洞分析的对抗攻击
13. [Yuvion VL: A Multimodal Foundation Model for Adversarial Content and AI Safety](/202606/29/2606.25034v1-yuvion-vl-a-multimodal-foundation-model-for-adversarial-content-and-ai-safety)  
   标签：评分：9.0/10、query:agsec
   evidence：面向对抗内容与AI安全的多模态模型
14. [ActPlane: Programmable OS-Level Policy Enforcement for Agent Harnesses](/202606/29/2606.25189v1-actplane-programmable-os-level-policy-enforcement-for-agent-harnesses)  
   标签：评分：9.0/10、query:agsec
   evidence：操作系统级策略执行保障智能体安全
15. [Representation Matters: An Empirical Study of Program Representations for LLM Vulnerability Reasoning](/202606/29/2606.25356v1-representation-matters-an-empirical-study-of-program-representations-for-llm-vulnerability-reasoning)  
   标签：评分：9.0/10、query:vuldet
   evidence：面向LLM漏洞检测的程序表征实证研究
16. [PolicyAlign: Direct Policy-Based Safety Alignment for Large Language Models](/202606/29/2606.25442v1-policyalign-direct-policy-based-safety-alignment-for-large-language-models)  
   标签：评分：9.0/10、query:agsec
   evidence：直接使用自然语言安全策略对LLM进行对齐，通过策略自蒸馏快速适应新安全需求
17. [Automated Detection of Configuration-Specific Security Vulnerabilities via Patch Analysis](/202606/29/2606.25863v1-automated-detection-of-configuration-specific-security-vulnerabilities-via-patch-analysis)  
   标签：评分：9.0/10、query:vuldet
   evidence：静态补丁分析检测配置相关漏洞
18. [Helpful or Harmful? Evaluating LLM-Assisted Vulnerability Patching via a Human Study](/202606/29/2606.25973v1-helpful-or-harmful-evaluating-llm-assisted-vulnerability-patching-via-a-human-study)  
   标签：评分：9.0/10、query:vuldet
   evidence：评估LLM辅助漏洞修复与手动调试在实际场景中的对比
19. [The Unfireable Safety Kernel: Execution-Time AI Alignment for AI Agents and Other Escapable AI Systems](/202606/29/2606.26057v1-the-unfireable-safety-kernel-execution-time-ai-alignment-for-ai-agents-and-other-escapable-ai-systems)  
   标签：评分：9.0/10、query:agsec
   evidence：提出外部授权机制，包含进程隔离、操作前强制、故障关闭和外部签名授权，用于代理控制
20. [Instruction Bleed: Cross-Module Interference in Prompt-Composed Agentic Systems](/202606/29/2606.26356v1-instruction-bleed-cross-module-interference-in-prompt-composed-agentic-systems)  
   标签：评分：9.0/10、query:agsec
   evidence：形式化提示组合代理系统中因Transformer自注意力非隔离导致的组合行为泄露
21. [Verifying Intent and Harm: A Unified Defense Against LLM-Generated Threats](/202606/29/2606.26377v1-verifying-intent-and-harm-a-unified-defense-against-llm-generated-threats)  
   标签：评分：9.0/10、query:agsec
   evidence：联合验证提示意图与响应危害的统一防御框架
22. [VIGIL: Runtime Enforcement of Behavioral Specifications in AI Agent Skills](/202606/29/2606.26524v1-vigil-runtime-enforcement-of-behavioral-specifications-in-ai-agent-skills)  
   标签：评分：9.0/10、query:agsec
   evidence：对AI代理技能的自然语言规范进行运行时执行，以约束输出内容与行为
23. [Autoformalization of Agent Instructions into Policy-as-Code](/202606/29/2606.26649v1-autoformalization-of-agent-instructions-into-policy-as-code)  
   标签：评分：9.0/10、query:agsec
   evidence：将智能体指令与策略自动转化为形式化验证的安全策略代码
24. [Chai: Agentic Discovery of Cryptographic Misuse Vulnerabilities](/202606/29/2606.26933v1-chai-agentic-discovery-of-cryptographic-misuse-vulnerabilities)  
   标签：评分：9.0/10、query:vuldet
   evidence：基于AI的加密误用漏洞发现系统，直接实现自动化漏洞检测。
25. [On the Inseparability of Instructions and Data in Shared-Embedding Sequence Models](/202606/29/2606.27567v1-on-the-inseparability-of-instructions-and-data-in-shared-embedding-sequence-models)  
   标签：评分：9.0/10、query:agsec
   evidence：证明在共享嵌入中指令与数据不可分离，导致完美提示注入防护不可能，直接涉及LLM代理令牌流控制机制。
26. [Yuvion LLM: An Adversarially-Aware Large Language Model for Content And AI Safety](/202606/29/2606.27632v1-yuvion-llm-an-adversarially-aware-large-language-model-for-content-and-ai-safety)  
   标签：评分：9.0/10、query:agsec
   evidence：对抗鲁棒内容安全大语言模型
27. [USAD: Uncertainty-aware Statistical Adversarial Detection](/202606/29/2606.27832v1-usad-uncertainty-aware-statistical-adversarial-detection)  
   标签：评分：9.0/10、query:vuldet
   evidence：提出不确定性感知的统计对抗检测方法
28. [SBridge: Identifying Source-to-Binary Function Similarity via Cross-Domain Control Block Matching](/202606/29/2606.28058v1-sbridge-identifying-source-to-binary-function-similarity-via-cross-domain-control-block-matching)  
   标签：评分：9.0/10、query:vuldet
   evidence：通过源到二进制函数相似性自动检测传播漏洞
29. [Robust Harmful Features Under Jailbreak Attacks: Mechanistic Evidence from Attention Head Specialization in Large Language Models](/202606/29/2606.28153v1-robust-harmful-features-under-jailbreak-attacks-mechanistic-evidence-from-attention-head-specialization-in-large-language-models)  
   标签：评分：9.0/10、query:agsec
   evidence：LLM安全对齐中注意力头特化的机械论证据

### 速读区论文标签
1. [The Geometry of Refusal: Linear Instability in Safety-Aligned LLMs](/202606/29/2606.22686v1-the-geometry-of-refusal-linear-instability-in-safety-aligned-llms)  
   标签：评分：8.0/10、query:agsec
   evidence：隔离LLM中的拒绝方向，探测并操控安全护栏，展示线性不稳定性
2. [Governed Shared Memory for Multi-Agent LLM Systems](/202606/29/2606.24535v1-governed-shared-memory-for-multi-agent-llm-systems)  
   标签：评分：8.0/10、query:agsec
   evidence：为多代理LLM系统中的共享内存定义治理原语，防止未授权泄露、过时传播和溯源崩溃
3. [Inherited Circuits, Learned Semantics: How Fine-Tuning Creates Evasion Vulnerabilities Invisible to Standard Evaluation](/202606/29/2606.27091v1-inherited-circuits-learned-semantics-how-fine-tuning-creates-evasion-vulnerabilities-invisible-to-standard-evaluation)  
   标签：评分：8.0/10、query:vuldet
   evidence：微调后的安全分类LLM学习到的令牌级指示语义在行为保持变换下失效，可被绕过
4. [RAVEN: Agentic RAG for Automated Vulnerability Repair](/202606/29/2606.22647v1-raven-agentic-rag-for-automated-vulnerability-repair)  
   标签：评分：7.0/10、query:vuldet
   evidence：利用代理式RAG与大语言模型进行自动化漏洞修复，展示了LLM在代码分析和修复中的应用
5. [Capable but Careless: Do Computer-Use Agents Follow Contextual Integrity?](/202606/29/2606.23189v1-capable-but-careless-do-computer-use-agents-follow-contextual-integrity)  
   标签：评分：7.0/10、query:agsec
   evidence：评估计算机使用代理的情境完整性，与内容与行为安全约束相关
6. [Cryptographic certificates of validity for trustworthy AI](/202606/29/2606.23768v1-cryptographic-certificates-of-validity-for-trustworthy-ai)  
   标签：评分：7.0/10、query:agsec
   evidence：提出密码学证明方法，认证代理行为符合形式化策略，确保行为安全约束。
7. [A Red Teaming Framework for Large Language Models: A Case Study on Faithfulness Evaluation](/202606/29/2606.25476v1-a-red-teaming-framework-for-large-language-models-a-case-study-on-faithfulness-evaluation)  
   标签：评分：7.0/10、query:agsec
   evidence：红队框架评估LLM安全性和忠实度
8. [ConcoLixir: Reactive LLM Discovery Oracles for Python Concolic Testing](/202606/29/2606.26545v1-concolixir-reactive-llm-discovery-oracles-for-python-concolic-testing)  
   标签：评分：7.0/10、query:libfuz
   evidence：解决Python混合执行中因库调用导致的限制，利用LLM生成输入，克服模糊测试API序列生成中的挑战。
9. [An Automated Framework for Input Alphabet Construction in Stateful Protocol Implementation Learning](/202606/29/2606.23464v1-an-automated-framework-for-input-alphabet-construction-in-stateful-protocol-implementation-learning)  
   标签：评分：6.0/10、query:libfuz
   evidence：有状态协议学习中的自动输入字母表生成，可迁移至模糊测试
10. [RAS: Measuring LLM Safety Through Refusal Alignment](/202606/29/2606.25750v1-ras-measuring-llm-safety-through-refusal-alignment)  
   标签：评分：6.0/10、query:agsec
   evidence：提出SafeVec，通过拒绝方向从内部表征测量LLM安全性的白盒评估方法
11. [MIRROR: Novelty-Constrained Memory-Guided MCTS Red-Teaming for Agentic RAG](/202606/29/2606.26793v1-mirror-novelty-constrained-memory-guided-mcts-red-teaming-for-agentic-rag)  
   标签：评分：6.0/10、query:agsec
   evidence：针对多模态代理式RAG的统一红队测试框架，用于发现篡改攻击，与多模态输入安全防护相关
12. [Improving Adversarial Robustness via Activation Amplification and Attenuation](/202606/29/2606.27784v1-improving-adversarial-robustness-via-activation-amplification-and-attenuation)  
   标签：评分：6.0/10、query:vuldet
   evidence：提出A3模块通过激活缩放增强对抗鲁棒性，可用于神经网络检测器
13. [ToolPrivacyBench: Benchmarking Purpose-Bound Privacy in Tool-Using LLM Agents](/202606/29/2606.28061v1-toolprivacybench-benchmarking-purpose-bound-privacy-in-tool-using-llm-agents)  
   标签：评分：6.0/10、query:agsec
   evidence：评估使用工具的LLM代理中目的绑定隐私，审计多工具轨迹中的信息流。


<div class="dpr-home-promo-card">
  <h3 class="dpr-home-promo-title">💬 社区与支持</h3>
  <ul class="dpr-home-promo-list">
    <li>欢迎 Star / Fork / Issue / PR</li>
    <li>QQ群：583867967（欢迎交流，已有：1151人）</li>
  </ul>
</div>
