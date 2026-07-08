<div class="dpr-home-notice-card">
  <h3 class="dpr-home-notice-title">🚀 Start Here</h3>
  <ul class="dpr-home-notice-list">
    <li><a href="#/tutorial/README">使用教程</a></li>
  </ul>
</div>

## 每次日报
- 最新运行日期：2026-07-08
- 运行时间：2026-07-08 20:07:14 UTC
- 运行状态：成功
- 本次总论文数：14
- 精读区：8
- 速读区：6

### 今日简报（AI）
1) 今日聚焦LLM安全与智能体，精读2篇、速读3篇前沿研究，探讨漏洞检测、模型防护与对抗性攻击。

2) 最值得关注的是基于多阶段推理的高精度漏洞提交检测，以及将LLM隐藏激活直接转化为可配置安全护栏的新思路。

3) 建议读者优先体验精读论文中的方法论，结合速读内容思考对抗性记忆攻击的防御策略。
- 详情：[/202607/08/README](/202607/08/README)

### 精读区论文标签
1. [Detecting Vulnerability-Inducing Commits via Multi-Stage Reasoning with LLM-Based Agents](/202607/08/2607.05772v1-detecting-vulnerability-inducing-commits-via-multi-stage-reasoning-with-llm-based-agents)  
   标签：评分：10.0/10、query:vuldet
   evidence：提出基于LLM的多智能体框架检测漏洞引入提交
2. [kNNGuard: Turning LLM Hidden Activations into a Training-Free Configurable Guardrail](/202607/08/2607.02072v2-knnguard-turning-llm-hidden-activations-into-a-training-free-configurable-guardrail)  
   标签：评分：9.0/10、query:agsec
   evidence：利用LLM隐藏激活和kNN检测不安全提示的免训练安全护栏
3. [Oyster-II: Reinforcement Learning for Constructive Safety Alignment in Large Language Models](/202607/08/2607.02914v1-oyster-ii-reinforcement-learning-for-constructive-safety-alignment-in-large-language-models)  
   标签：评分：9.0/10、query:agsec
   evidence：LLM的建设性安全对齐直接匹配LLM输出的安全控制策略
4. [Agent Data Injection Attacks are Realistic Threats to AI Agents](/202607/08/2607.05120v1-agent-data-injection-attacks-are-realistic-threats-to-ai-agents)  
   标签：评分：9.0/10、query:agsec
   evidence：引入代理数据注入攻击，将恶意数据伪装为可信数据注入
5. [ShadowProbe: Language-Extensible Detection of Hidden Algorithmic Complexity Vulnerabilities](/202607/08/2607.05474v1-shadowprobe-language-extensible-detection-of-hidden-algorithmic-complexity-vulnerabilities)  
   标签：评分：9.0/10、query:libfuz
   evidence：检测标准库API中的隐藏算法复杂性漏洞，克服手动构建harness
6. [The Balkanization of Execution-Security Research for AI Coding Agents: Isolation, Access Control, and Time-of-Check-to-Time-of-Use Vulnerabilities](/202607/08/2607.05743v1-the-balkanization-of-execution-security-research-for-ai-coding-agents-isolation-access-control-and-time-of-check-to-time-of-use-vulnerabilities)  
   标签：评分：9.0/10、query:agsec
   evidence：系统化了AI编码代理的执行安全研究，涵盖隔离、访问控制和TOCTOU漏洞
7. [Beyond Refusal: A Same-Lineage Study of Aligned and Abliterated LLMs for Vulnerability Analysis](/202607/08/2607.05842v1-beyond-refusal-a-same-lineage-study-of-aligned-and-abliterated-llms-for-vulnerability-analysis)  
   标签：评分：9.0/10、query:vuldet
   evidence：研究安全对齐对基于LLM的漏洞分析的影响
8. [Context-to-Execution Integrity for LLM Agents](/202607/08/2607.06000v1-context-to-execution-integrity-for-llm-agents)  
   标签：评分：9.0/10、query:agsec
   evidence：提出CXI，一种从上下文到工具执行的令牌流控制完整性机制

### 速读区论文标签
1. [HARC: Coupling Harmfulness and Refusal Directions for Robust Safety Alignment](/202607/08/2607.00572v2-harc-coupling-harmfulness-and-refusal-directions-for-robust-safety-alignment)  
   标签：评分：8.0/10、query:agsec
   evidence：研究LLM内部安全表征，通过耦合有害与拒绝方向实现鲁棒对齐
2. [Your Agent's Memories Are Not Its Own: Forged Reasoning Attacks on LLM Agent Memory and Defenses](/202607/08/2607.05029v1-your-agents-memories-are-not-its-own-forged-reasoning-attacks-on-llm-agent-memory-and-defenses)  
   标签：评分：8.0/10、query:agsec
   evidence：提出FARMA攻击毒化智能体的推理记忆，并提出SENTINEL防御
3. [Safe Online Learning via Smooth Safety-Structured Policy Composition](/202607/08/2606.31320v1-safe-online-learning-via-smooth-safety-structured-policy-composition)  
   标签：评分：7.0/10、query:agsec
   evidence：用于在线强化学习的安全感知策略架构，实现平滑安全行为
4. [Refused in Chat, Written in Code: Workflow-Level Jailbreak Construction in IDE Coding Agents](/202607/08/2607.03968v1-refused-in-chat-written-in-code-workflow-level-jailbreak-construction-in-ide-coding-agents)  
   标签：评分：7.0/10、query:agsec
   evidence：发现针对IDE编码代理的新型越狱攻击，揭示自主代理工作流的安全漏洞
5. [Execution Divergence Graphs:Effective Discovery of Control-Flows from Execution Traces as Fuzzing Feedback](/202607/08/2607.03396v1-execution-divergence-graphseffective-discovery-of-control-flows-from-execution-traces-as-fuzzing-feedback)  
   标签：评分：6.0/10、query:libfuz
   evidence：提出执行分歧图作为模糊测试反馈，可应用于自动化库模糊测试框架
6. [Finetuning Lightweight LLMs for Control Flow Graph Generation](/202607/08/2607.04582v1-finetuning-lightweight-llms-for-control-flow-graph-generation)  
   标签：评分：6.0/10、query:vuldet
   evidence：使用微调的大语言模型生成控制流图，是一种对漏洞检测有用的程序表示


<div class="dpr-home-promo-card">
  <h3 class="dpr-home-promo-title">💬 社区与支持</h3>
  <ul class="dpr-home-promo-list">
    <li>欢迎 Star / Fork / Issue / PR</li>
    <li>QQ群：583867967（欢迎交流，已有：1151人）</li>
  </ul>
</div>
