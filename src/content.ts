import type { L } from "./i18n";

/* ------------------------------------------------------------------ nav -- */
export const nav = {
  brand: { en: "AI for the Finance Function", zh: "财务职能 AI 实训" },
  links: [
    { id: "program", label: { en: "Program", zh: "课程设计" } },
    { id: "cases", label: { en: "The Six Cases", zh: "六大案例" } },
    { id: "insights", label: { en: "Insights", zh: "监管与洞察" } },
    { id: "governance", label: { en: "Governance", zh: "治理与安全" } },
    { id: "materials", label: { en: "Materials", zh: "交付物" } },
  ] as { id: string; label: L }[],
};

/* ----------------------------------------------------------------- hero -- */
export const hero = {
  eyebrow: {
    en: "In-person · hands-on · for finance & controller teams at international financial institutions",
    zh: "线下实操 · 面向国际金融机构的财务与会计团队",
  },
  title: {
    en: "AI your finance team can use on Monday morning.",
    zh: "让财务团队周一早上就能用起来的 AI。",
  },
  subtitle: {
    en: "A 2.5–3 hour working session, not a lecture. Participants split ledgers, consolidate quarter-end accruals, clean invoice registers, build variance dashboards and generate a quarterly flash report — by instructing AI in plain language, on their own laptops, with zero installs.",
    zh: "这是一场 2.5–3 小时的实操工作坊，不是讲座。学员在自己的笔记本上，用一句大白话指挥 AI：拆分总账、归集季末应计、清洗发票台账、搭建预算差异看板、一键生成季度快报——全程无需安装任何软件。",
  },
  badge: {
    en: "Current edition: prepared for the Office of the Controller of an Asia-based, AAA-rated multilateral development bank · July 2026",
    zh: "当前版本：为一家总部位于亚洲的 AAA 评级多边开发银行财务控制部定制 · 2026 年 7 月",
  },
  ctaCases: { en: "Explore the six cases", zh: "查看六大案例" },
  ctaDemo: { en: "Open a sample output", zh: "打开示例产出" },
  stats: [
    { value: "2.5–3h", label: { en: "one focused session", zh: "一场聚焦的工作坊" } },
    { value: "6", label: { en: "hands-on cases, one connected quarter", zh: "个实操案例，串成同一个季度" } },
    { value: "2", label: { en: "delivery paths: local VBA & AI agents", zh: "条路径：本机 VBA 与 AI 智能体" } },
    { value: "0", label: { en: "installs required on participant laptops", zh: "学员电脑零安装" } },
  ] as { value: string; label: L }[],
};

/* ------------------------------------------------------- opening numbers -- */
export const bigNumbers = {
  eyebrow: { en: "The 2026 numbers · openers for your first slide", zh: "2026 大数字 · 开场第一页就能讲" },
  title: {
    en: "Six numbers that set the room up",
    zh: "六个数字，先把局面讲清楚",
  },
  intro: {
    en: "The macro picture the session opens with — why access alone changes nothing, and why hands-on capability is the scarce asset. All figures from Deloitte's global surveys.",
    zh: "培训开场先讲的宏观图景——为什么“有工具”本身改变不了什么，动手能力才是稀缺资产。全部数字来自德勤全球调查。",
  },
  stats: [
    {
      value: "2×",
      label: { en: "workforce access to sanctioned AI tools roughly doubled in one year — from under 40% to about 60%", zh: "员工可用合规 AI 工具的比例一年翻倍——从不足 40% 升至约 60%" },
    },
    {
      value: "~60%",
      label: { en: "of workers with access actually use AI in daily work — the activation gap is a skills gap", zh: "拿到工具的员工中真正日常使用的比例——“激活缺口”本质是技能缺口" },
    },
    {
      value: "25%",
      label: { en: "of companies have moved 40%+ of AI experiments into production — most pilots stall", zh: "的公司把四成以上 AI 试点推进到生产——大多数试点止步于试点" },
    },
    {
      value: "84%",
      label: { en: "have not redesigned work around AI; insufficient skills rank as the #1 integration barrier", zh: "尚未围绕 AI 重塑工作方式；技能不足高居整合障碍首位" },
    },
    {
      value: "74% vs 21%",
      label: { en: "plan agentic AI within two years — versus those with a mature governance model for agents", zh: "计划两年内部署智能体——而具备成熟智能体治理模型的仅 21%" },
    },
    {
      value: "31%",
      label: { en: "of boards have AI on the agenda, while 66% of directors report limited AI knowledge", zh: "的董事会将 AI 列入议程，同时 66% 的董事自认 AI 知识有限" },
    },
  ] as { value: string; label: L }[],
  source:
    "Deloitte, State of AI in the Enterprise (Jan 2026, n=3,235) · Deloitte Global Boardroom Program, Governance of AI 2nd ed. (2025, n=695, 56 countries)",
};

/* ------------------------------------------------------------ pain points -- */
export const pains = {
  eyebrow: { en: "Built from a real diagnostic", zh: "源自真实的课前调研" },
  title: {
    en: "Designed around the work, not the hype",
    zh: "围绕真实工作设计，而非追逐概念",
  },
  body: {
    en: "Before the session, the client's finance function completed a structured diagnostic: where the manual hours actually go, where the data lives, and which tools are approved on their network. Three pain points came back — and each one became a training case with their data shapes, their traps, and their quarter-end calendar.",
    zh: "开课前，客户财务部门完成了一份结构化问卷：手工工时到底花在哪里、数据存在哪些系统、内网能用哪些工具。三大痛点浮出水面——每一个都被做成了案例，沿用他们的数据形态、他们会踩的坑、他们的季末日历。",
  },
  items: [
    {
      k: "01",
      title: { en: "Invoice & expense processing", zh: "发票与费用处理" },
      body: {
        en: "Registers assembled from portals, scans and manual entry — mixed date formats, text-typed amounts, duplicate submissions waiting to become duplicate payments.",
        zh: "台账来自门户、扫描件和手工录入——日期格式混杂、金额存成文本、重复提交的发票随时可能变成重复付款。",
      },
      maps: { en: "→ Cases 1 & 3", zh: "→ 案例 1 与 3" },
    },
    {
      k: "02",
      title: { en: "The quarter-end accrual cycle", zh: "季末应计流程" },
      body: {
        en: "Manual collection, consolidation and reconciliation across many stakeholders and systems — ERP extracts, emailed confirmations, master data that never quite matches.",
        zh: "跨部门、跨系统的手工收集、汇总与核对——ERP 导出表、邮件回来的确认单、永远差一点对不上的主数据。",
      },
      maps: { en: "→ Case 2", zh: "→ 案例 2" },
    },
    {
      k: "03",
      title: { en: "Reporting & dashboards", zh: "报告与仪表板" },
      body: {
        en: "Management wants near-real-time financial information; the team assembles packs by hand, so the numbers are stale the day they ship.",
        zh: "管理层想要准实时的财务信息，团队却在手工拼装报告包——数字送出当天就已过期。",
      },
      maps: { en: "→ Cases 4 & 5", zh: "→ 案例 4 与 5" },
    },
  ],
};

/* --------------------------------------------------------------- program -- */
export const program = {
  eyebrow: { en: "Program design", zh: "课程设计" },
  title: { en: "One session, two delivery paths, one habit", zh: "一场课、两条路径、一个习惯" },
  intro: {
    en: "Every case teaches the same loop — describe the outcome, let AI execute, then verify like an accountant. Participants practice both delivery paths and learn when each is appropriate.",
    zh: "每个案例都在训练同一个循环——把结果描述清楚、让 AI 执行、再像会计师一样复核。学员两条路径都会练，并懂得何时该用哪条。",
  },
  paths: [
    {
      tag: { en: "Path 1 · data stays local", zh: "路径一 · 数据不出本机" },
      title: { en: "AI-written VBA / Office Scripts", zh: "AI 生成 VBA / Office Scripts" },
      body: {
        en: "Ask AI for a macro, paste it into Excel, run it on the laptop. Right choice for sensitive files and simple operations. Every case ships with Mac/Windows-compatible reference code.",
        zh: "让 AI 写宏，粘进 Excel 本机运行。适合敏感文件与简单操作。每个案例都附 Mac/Windows 双平台参考代码。",
      },
    },
    {
      tag: { en: "Path 2 · recommended default", zh: "路径二 · 推荐默认" },
      title: { en: "AI agents & data-analysis chat", zh: "AI 智能体与数据分析对话" },
      body: {
        en: "Attach the file to Claude, ChatGPT or Copilot and describe the outcome. Easier, more powerful, higher success rate — and the only path for end-to-end deliverables like formatted reports and follow-up emails.",
        zh: "把文件交给 Claude、ChatGPT 或 Copilot，描述你要的结果。更易用、更强大、成功率更高——报告排版、催办邮件这类端到端交付物只有这条路走得通。",
      },
    },
  ],
  principlesTitle: { en: "The four prompt principles drilled all day", zh: "贯穿全场的四条提示词原则" },
  principles: [
    {
      title: { en: "Context", zh: "给上下文" },
      body: { en: "What the file is, what each column means, what is dirty.", zh: "文件是什么、每列什么意思、哪里有脏数据。" },
    },
    {
      title: { en: "Outcome, not steps", zh: "说结果，不说步骤" },
      body: { en: "State the deliverable, not the clicks.", zh: "描述交付物，而不是操作按钮。" },
    },
    {
      title: { en: "Constraints", zh: "讲清约束" },
      body: { en: "Formats, what must not change, what stays on the machine.", zh: "格式要求、什么不能动、什么不能离开本机。" },
    },
    {
      title: { en: "Verification", zh: "要求可验证" },
      body: { en: "Ask AI to state its checks — then re-check the control totals yourself.", zh: "让 AI 报告自检——再亲手复核控制合计。" },
    },
  ],
  agendaTitle: { en: "Suggested agenda · 170 minutes", zh: "建议议程 · 170 分钟" },
  agenda: [
    { time: "0:00", len: "20′", label: { en: "Opening: what AI can and cannot do; the two paths; a live 2-minute teaser", zh: "开场：AI 能与不能、两条路径、2 分钟现场预演" } },
    { time: "0:20", len: "10′", label: { en: "Setup check: tools signed in, data pack in place", zh: "环境检查：工具登录、数据包就位" } },
    { time: "0:30", len: "15′", label: { en: "Case 1 · Split — everyone gets a win", zh: "案例 1 · 拆分——人人先赢一局" } },
    { time: "0:45", len: "30′", label: { en: "Case 2 · Accrual consolidation — the silent VLOOKUP trap", zh: "案例 2 · 应计归集——VLOOKUP 静默失败之坑" } },
    { time: "1:15", len: "10′", label: { en: "Break", zh: "休息" } },
    { time: "1:25", len: "30′", label: { en: "Case 3 · Invoice cleanup — catch the duplicate payment", zh: "案例 3 · 发票清洗——揪出重复付款" } },
    { time: "1:55", len: "30′", label: { en: "Case 4 · Variance dashboard — change one word, new analysis", zh: "案例 4 · 差异看板——改一个词，换一种分析" } },
    { time: "2:25", len: "15′", label: { en: "Case 5 · Flash report demo — regenerate in seconds", zh: "案例 5 · 快报演示——秒级重新生成" } },
    { time: "2:40", len: "10′", label: { en: "Wrap-up: Monday-morning plan, data safety, Q&A · Case 6 as take-home", zh: "收尾：周一行动计划、数据安全、答疑 · 案例 6 留作课后" } },
  ],
  audience: {
    title: { en: "Calibrated for a mixed finance audience", zh: "为混合层级的财务听众校准" },
    body: {
      en: "About 30 participants, officers through team heads, across financial reporting, accounts payable, budgeting, treasury accounting and valuation review. A one-star warm-up gives everyone an early success; stretch tasks in every case keep senior reviewers busy.",
      zh: "约 30 名学员，从专员到团队负责人，覆盖财务报告、应付、预算、资金核算与估值复核。一星热身让所有人先获得成功体验；每个案例的进阶任务让资深复核人也不冷场。",
    },
  },
};

/* ----------------------------------------------------------------- cases -- */
export type CaseItem = {
  no: string;
  tag: L;
  stars: number;
  minutes: L;
  title: L;
  pain: L;
  story: L;
  tasks: L[];
  results: { value: string; label: L }[];
  trap?: L;
  chart?: { src: string; alt: L; caption: L }[];
  demo?: { href: string; label: L };
};

export const casesSection = {
  eyebrow: { en: "The six cases", zh: "六大案例" },
  title: { en: "One simulated quarter, end to end", zh: "一个模拟季度，端到端跑通" },
  intro: {
    en: "All six cases live in the same simulated quarter (Q2 2026, closed 30 June). The exceptions found in Case 2 and Case 3 reappear as open items in Case 5's flash report — participants watch a full AI-assisted close take shape. Every dataset is synthetic and regenerable from a fixed random seed; every number below is the verified output of the reference solution.",
    zh: "六个案例共处同一个模拟季度（2026 年 Q2，6 月 30 日结账）。案例 2、3 里发现的异常，会作为待办事项出现在案例 5 的季度快报中——学员亲眼看到一个 AI 辅助的结账周期如何成形。所有数据均为模拟生成、固定随机种子可复现；下方每个数字都是参考解法的实跑结果。",
  },
  verifiedNote: { en: "Verified output · fixed seed", zh: "实跑验证 · 固定种子" },
  simNote: {
    en: "All data simulated — no real vendors, staff, investees or transactions anywhere in the pack.",
    zh: "全部为模拟数据——不含任何真实供应商、员工、被投企业或交易信息。",
  },
};

export const cases: CaseItem[] = [
  {
    no: "01",
    tag: { en: "Split", zh: "拆分" },
    stars: 1,
    minutes: { en: "15 min · warm-up", zh: "15 分钟 · 热身" },
    title: {
      en: "One ledger in, ten department reports out",
      zh: "一张总账进，十份部门报表出",
    },
    pain: { en: "Monthly report distribution", zh: "月度报表分发" },
    story: {
      en: "The H1 admin expense ledger — 720 rows, ten departments — gets filtered, copied and pasted into department sheets by hand every month. One sentence to AI replaces the whole ritual, including a summary sheet and one ready-to-email file per department.",
      zh: "上半年行政费用总账——720 行、十个部门——每月靠人工筛选、复制、粘贴出各部门表。一句话交给 AI，整套流程连同汇总表、可直接发邮件的分部门文件全部自动完成。",
    },
    tasks: [
      { en: "One worksheet per department, all columns intact", zh: "按部门拆出工作表，字段完整保留" },
      { en: "Summary sheet: entries and USD totals, ranked", zh: "汇总表：笔数与美元合计，自动排序" },
      { en: "Stretch: separate xlsx per department", zh: "进阶：每个部门单独成 xlsx 文件" },
    ],
    results: [
      { value: "720", label: { en: "rows split across 10 departments", zh: "行数据拆入 10 个部门" } },
      { value: "$40.7m", label: { en: "control total that must reconcile", zh: "必须核平的控制合计" } },
    ],
  },
  {
    no: "02",
    tag: { en: "Merge", zh: "合并" },
    stars: 3,
    minutes: { en: "30 min · core", zh: "30 分钟 · 核心" },
    title: {
      en: "Quarter-end accruals from three sources — plus the list of what didn't match",
      zh: "三个来源归集季末应计——外加一份“没对上”的清单",
    },
    pain: { en: "The #1 pain point: the accrual cycle", zh: "头号痛点：应计流程" },
    story: {
      en: "Open POs from the ERP, delivery confirmations emailed back by departments, a vendor master. Compute the accrual per PO, the journal-entry summary — and, the professional habit, an exceptions list: vendor IDs missing from master, POs nobody confirmed. AI even drafts the chase email.",
      zh: "ERP 里的未结采购单、各部门邮件回复的交付确认、供应商主数据。逐单计算应计、生成分录汇总——更重要的职业习惯是产出异常清单：主数据里查无此人的供应商、无人确认的采购单。AI 还顺手起草了催办邮件。",
    },
    trap: {
      en: "Seeded trap: Vendor ID is text in one sheet, a number in another — VLOOKUP fails silently on all 36 rows. The agent normalises the keys by itself and says so.",
      zh: "埋设陷阱：供应商编号一张表存文本、另一张存数字——VLOOKUP 36 行全部静默失败。智能体自己识别并统一键值，还在答复中说明。",
    },
    tasks: [
      { en: "Accrual = PO amount × % delivered − invoiced-to-date, floored at zero", zh: "应计 = 订单金额 × 交付比例 − 已开票金额，下限为零" },
      { en: "JE summary: Dr expense by department / Cr accrued liabilities", zh: "分录汇总：借记各部门费用 / 贷记应计负债" },
      { en: "Exceptions report + drafted follow-up email", zh: "异常报告 + 起草催办邮件" },
    ],
    results: [
      { value: "$1,134,965", label: { en: "total Q2 accrual, verified", zh: "Q2 应计总额，实跑验证" } },
      { value: "9", label: { en: "exceptions surfaced (6 vendor gaps, 3 missing confirmations)", zh: "项异常（6 个供应商缺口、3 个未确认）" } },
    ],
  },
  {
    no: "03",
    tag: { en: "Clean", zh: "清洗" },
    stars: 3,
    minutes: { en: "30 min · core", zh: "30 分钟 · 核心" },
    title: {
      en: "A messy invoice register — and a duplicate payment caught on the way",
      zh: "一本混乱的发票台账——顺手拦下一笔重复付款",
    },
    pain: { en: "The #1 pain point: invoice & expense processing", zh: "头号痛点：发票与费用处理" },
    story: {
      en: "Sixty-four rows carrying ~23 seeded problems of 11 kinds: five date formats (including a raw Excel serial), amounts stored as text with currency symbols, a credit note in parentheses, vendor-name variants, blank rows, exact duplicates — and one invoice re-submitted with the same number. The deliverable is always two things: the clean register and an exception log a reviewer can act on.",
      zh: "64 行数据埋着 11 类、约 23 处问题：五种日期写法（含 Excel 序列号）、带货币符号的文本金额、括号里的贷项通知单、供应商名称变体、空白行、完全重复行——还有一张同号重复提交的发票。交付物永远是两件：干净台账 + 复核人可执行的异常日志。",
    },
    trap: {
      en: "The star catch: INV-38150 appears twice — same number, same amount, different received dates. Exact dedup alone would either miss it or wrongly delete it. AI keeps it and flags it as a duplicate-payment risk.",
      zh: "点睛之笔：INV-38150 出现两次——同号同金额、不同接收日期。单纯去重要么漏掉、要么误删。AI 选择保留并标记为重复付款风险。",
    },
    tasks: [
      { en: "Standardise dates, amounts, names, currencies, departments", zh: "统一日期、金额、名称、币种、部门口径" },
      { en: "Remove blanks & true duplicates; keep and flag the risky ones", zh: "删除空行与真重复；保留并标记高风险行" },
      { en: "Exception log with an action per issue", zh: "异常日志，每条问题给出处理动作" },
    ],
    results: [
      { value: "64 → 60", label: { en: "raw rows to clean rows, every change logged", zh: "原始行到干净行，每处修改留痕" } },
      { value: "$3.71m", label: { en: "clean payables total (credit note −$10,067)", zh: "干净应付合计（贷项 −10,067 美元）" } },
    ],
  },
  {
    no: "04",
    tag: { en: "Analyze", zh: "分析" },
    stars: 4,
    minutes: { en: "30 min · core", zh: "30 分钟 · 核心" },
    title: {
      en: "From 849 GL lines to three charts a director reads in five seconds",
      zh: "从 849 行总账明细，到总监五秒读懂的三张图",
    },
    pain: { en: "Reporting & dashboards", zh: "报告与仪表板" },
    story: {
      en: "Budget versus actuals across 10 departments × 10 categories. Participants discover the planted story themselves: IT is the only department over budget, one software line is 131% used, travel accelerates through Q2 while one consulting budget sits at 42%. Then the power move — change one word in the prompt and the whole analysis re-runs by vendor instead of department.",
      zh: "10 个部门 × 10 类费用的预算执行分析。学员自己挖出剧本：IT 是唯一超支部门、某软件科目执行率 131%、差旅在二季度持续加速、而某咨询预算只用了 42%。然后是关键一招——提示词里换一个词，整套分析立刻按供应商重跑。",
    },
    tasks: [
      { en: "Utilization %, variance, rankings by department and category", zh: "执行率、差异额，按部门与科目双维排序" },
      { en: "Top-10 over-budget line items", zh: "超支金额前十的明细科目" },
      { en: "Three charts, each with a one-line takeaway in the title", zh: "三张图，每张标题自带一句结论" },
    ],
    results: [
      { value: "94.4%", label: { en: "overall H1 utilization ($45.3m / $48.0m)", zh: "上半年整体执行率（4,530 / 4,800 万美元）" } },
      { value: "+$1.10m", label: { en: "largest single overrun: IT software licenses at 131%", zh: "最大单项超支：IT 软件许可，执行率 131%" } },
    ],
    chart: [
      {
        src: "/charts/utilization_by_department.png",
        alt: { en: "Bar chart of H1 2026 budget utilization by department", zh: "2026 上半年各部门预算执行率条形图" },
        caption: { en: "Reference output: utilization by department — red bar over the 100% line", zh: "参考产出：各部门执行率——红色柱越过 100% 红线" },
      },
      {
        src: "/charts/top_variances.png",
        alt: { en: "Bar chart of top 10 over-budget line items", zh: "超支前十明细科目条形图" },
        caption: { en: "Reference output: the top-10 overruns, IT software first", zh: "参考产出：超支前十，IT 软件居首" },
      },
    ],
  },
  {
    no: "05",
    tag: { en: "Report", zh: "报告" },
    stars: 5,
    minutes: { en: "15–20 min · live demo", zh: "15–20 分钟 · 现场演示" },
    title: {
      en: "The quarterly flash report from a single prompt — regenerated in seconds",
      zh: "一句提示词生成季度快报——秒级重新生成",
    },
    pain: { en: "“Near-real-time financial information”", zh: "“准实时的财务信息”" },
    story: {
      en: "Five small summary sheets in, one self-contained offline HTML report out: KPI cards with direction arrows, utilization chart, monthly trend, top vendors, open items — including the very exceptions found in Cases 2 and 3. The kill shot: change one input number, re-run the same prompt, and the report is fresh in under a minute. Assembly becomes free; judgment stays human.",
      zh: "输入五张小汇总表，输出一份自包含、可离线打开的 HTML 报告：带涨跌箭头的 KPI 卡片、执行率图、月度趋势、供应商排名、待办事项——其中就有案例 2、3 里发现的异常。杀手锏：改一个输入数字、重跑同一句提示词，一分钟内报告焕然一新。拼装归零，判断留给人。",
    },
    tasks: [
      { en: "KPI cards, three charts, open-items table — one file, works offline", zh: "KPI 卡片、三张图、待办表——单文件，可离线打开" },
      { en: "Change an input, regenerate, time it", zh: "改一个输入，重新生成，计一次时" },
      { en: "Stretch: AI writes a 3-bullet executive summary — then fact-check it", zh: "进阶：AI 写三条管理层摘要——随后逐条核实" },
    ],
    results: [
      { value: "6+10+5", label: { en: "KPIs, departments and open items — nothing dropped", zh: "KPI、部门与待办事项——一项不落" } },
      { value: "< 60s", label: { en: "to regenerate after an input change", zh: "改数后重新生成所需时间" } },
    ],
    demo: {
      href: "/demo/flash-report-sample.html",
      label: { en: "Open the actual sample report", zh: "打开真实示例报告" },
    },
  },
  {
    no: "06",
    tag: { en: "Review", zh: "复核" },
    stars: 4,
    minutes: { en: "25 min · bonus / take-home", zh: "25 分钟 · 彩蛋 / 课后" },
    title: {
      en: "Screening a Level-3 fair-value roll-forward like a reviewer",
      zh: "像复核人一样筛查 Level 3 公允价值滚动表",
    },
    pain: { en: "Quarterly valuation review working papers", zh: "季度估值复核底稿" },
    story: {
      en: "Twelve unlisted investments — preference shares, fund units, direct equity — five quarters of fair values. Three mechanical rules (FV/cost below 0.70; QoQ drop beyond −20%; transaction price older than 12 months) catch three very different problems, each invisible at portfolio level: the aggregate FV/cost of 1.04 looks perfectly healthy. AI drafts the review-note bullets; the judgment call stays with the reviewer.",
      zh: "十二笔非上市投资——优先股、基金份额、直接股权——五个季度的公允价值。三条机械规则（FV/成本低于 0.70、季度环比跌超 20%、交易价格超过 12 个月）各自逮住一类完全不同的问题，而组合层面 1.04 的 FV/成本比看起来一切安好。AI 起草复核意见要点；判断权留给复核人。",
    },
    trap: {
      en: "The subtle one: an investment carried at exactly 1.00× cost looks safest on the page — and is actually the stalest number in the book (transaction price dated 19 months ago).",
      zh: "最隐蔽的一笔：账面恰好 1.00 倍成本的投资看起来最安全——实际上是全表最过期的数字（交易价格已是 19 个月前）。",
    },
    tasks: [
      { en: "FV/cost, QoQ %, YoY % per investment; three review rules applied", zh: "逐笔计算 FV/成本、环比、同比；套用三条复核规则" },
      { en: "Charts with the 1.0 cost line and 0.70 flag line marked", zh: "图上标出 1.0 成本线与 0.70 警戒线" },
      { en: "AI-drafted review notes: the flag, the numbers, the evidence to request", zh: "AI 起草复核意见：标记、数字、需索取的证据" },
    ],
    results: [
      { value: "3 / 12", label: { en: "investments flagged — exactly one per rule", zh: "笔投资被标记——三条规则各中一笔" } },
      { value: "1.04", label: { en: "portfolio FV/cost that hides all three problems", zh: "掩盖全部三个问题的组合 FV/成本比" } },
    ],
    chart: [
      {
        src: "/charts/fv_cost_ratio.png",
        alt: { en: "Bar chart of fair value to cost by investment", zh: "各笔投资公允价值/成本比条形图" },
        caption: { en: "Reference output: FV/cost by investment — one name far below the 0.70 line", zh: "参考产出：逐笔 FV/成本——一笔远低于 0.70 警戒线" },
      },
    ],
  },
];

/* -------------------------------------------------------------- insights -- */
export const insightsSection = {
  eyebrow: { en: "Regulatory & adoption insights", zh: "监管与采纳洞察" },
  title: {
    en: "The context your finance team is operating in",
    zh: "财务团队所处的监管与采纳大势",
  },
  intro: {
    en: "A short, sourced briefing opens the session: what regulators expect, what the profession's standard-setters are saying, and what adoption data shows about why hands-on skills — not tool access — are the bottleneck. Survey figures come from Deloitte's global research; regulatory items cite the primary documents.",
    zh: "开课先上一段有出处的简报：监管者期待什么、会计与审计准则制定者在说什么、采纳数据又如何解释“瓶颈不在工具、而在上手能力”。调查数字均来自德勤全球研究，监管条目直引官方原文。",
  },
  disclaimer: {
    en: "Sources on file and verified against the original publications as of July 2026. Survey figures describe the cited Deloitte samples, not any individual institution.",
    zh: "所有来源均存档，并于 2026 年 7 月对照原始出版物核验。调查数字描述的是所引德勤样本，不指向任何单一机构。",
  },
  groups: [
    {
      title: { en: "Regulation is converging on risk-based governance", zh: "监管正收敛于基于风险的治理" },
      items: [
        {
          stat: { en: "Risk-tiered", zh: "风险分级" },
          head: { en: "EU AI Act — Regulation (EU) 2024/1689", zh: "欧盟《人工智能法案》——(EU) 2024/1689" },
          body: {
            en: "The first comprehensive AI law: prohibited / high-risk / minimal-risk tiers, with high-risk systems requiring risk management, data governance, human oversight and post-market monitoring. It reaches any institution whose AI touches EU persons — obligations phase in through 2026–27.",
            zh: "首部综合性 AI 法律：禁止类 / 高风险 / 低风险分级，高风险系统须配备风险管理、数据治理、人工监督与上市后监测。凡 AI 触及欧盟人员的机构均在射程内——义务在 2026–27 年间分阶段生效。",
          },
          src: "Regulation (EU) 2024/1689, in force Aug 2024 · obligations phase in to 2026–27",
        },
        {
          stat: { en: "Map–Measure–Manage–Govern", zh: "映射–度量–管理–治理" },
          head: { en: "NIST AI Risk Management Framework 1.0", zh: "NIST 人工智能风险管理框架 1.0" },
          body: {
            en: "The de-facto vocabulary for AI risk programs, voluntary but widely referenced by supervisors and used in US federal procurement. Its four functions translate naturally into a finance function's control language.",
            zh: "AI 风险体系事实上的通用语言，虽属自愿采用，却被监管机构广泛引用并用于美国联邦采购。四大职能可自然映射到财务职能的控制语言。",
          },
          src: "NIST AI RMF 1.0, Jan 2023",
        },
        {
          stat: { en: "77%", zh: "77%" },
          head: { en: "Sovereign AI shapes vendor choices", zh: "主权 AI 左右选型决策" },
          body: {
            en: "77% of companies now factor an AI solution's country of origin into vendor decisions, and 83% call sovereign AI important to strategic planning. Data residency and compute location have become core governance requirements — familiar territory for multilateral institutions.",
            zh: "77% 的公司在选型时考量 AI 方案的来源国，83% 认为主权 AI 对战略规划重要。数据驻留与算力所在地已成为核心治理要求——这对多边机构而言并不陌生。",
          },
          src: "Deloitte, State of AI in the Enterprise, Jan 2026 · n=3,235",
        },
        {
          stat: { en: "7 areas · 32 articles", zh: "7 方面 · 32 条" },
          head: { en: "China: AI in banking & insurance", zh: "中国：银行业保险业 AI 指导意见" },
          body: {
            en: "The national financial regulator's guidance on safe AI development and application in banking and insurance — model governance, data quality, explainability and financial-stability impact — a signal of where Asia-Pacific banking supervision is heading.",
            zh: "国家金融监督管理总局就银行业保险业 AI 安全开发应用给出的指导意见——模型治理、数据质量、可解释性与金融稳定影响——预示亚太银行监管的走向。",
          },
          src: "NFRA guidance, Jun 2026 (as catalogued in the program knowledge base)",
        },
      ],
    },
    {
      title: { en: "Boards and supervisors expect working governance", zh: "董事会与监管者要求“能运转的治理”" },
      items: [
        {
          stat: { en: "31% vs 66%", zh: "31% 对 66%" },
          head: { en: "The board readiness gap", zh: "董事会就绪度缺口" },
          body: {
            en: "Only 31% of boards have AI on the agenda, and 66% of directors report limited-to-no AI knowledge — while 40% are weighing composition changes to add AI expertise. Finance leadership that can demonstrate controlled AI use fills a visible gap.",
            zh: "仅 31% 的董事会将 AI 列入议程，66% 的董事自认 AI 知识有限——同时 40% 正考虑调整董事会构成以补足 AI 专长。能展示“受控用 AI”的财务负责人，正好补上这块显眼的短板。",
          },
          src: "Deloitte Global Boardroom Program, Governance of AI (2nd ed.), 2025 · n=695, 56 countries",
        },
        {
          stat: { en: "42% → 30%", zh: "42% → 30%" },
          head: { en: "Strategy outruns risk readiness", zh: "战略跑在风险前面" },
          body: {
            en: "42% of organisations call their AI strategy highly prepared; only 30% say the same of risk and governance — the slowest-improving dimension. Supervisory reviews will land exactly in that gap.",
            zh: "42% 的机构自评 AI 战略高度就绪，而风险与治理仅 30%——且是进步最慢的维度。监管检查恰恰会落在这道缝隙上。",
          },
          src: "Deloitte, State of AI in the Enterprise, Jan 2026 · n=3,235",
        },
        {
          stat: { en: "74% vs 21%", zh: "74% 对 21%" },
          head: { en: "Agents scale faster than guardrails", zh: "智能体跑得比护栏快" },
          body: {
            en: "74% of companies plan agentic AI within two years (23% run it today), yet only 21% have a mature governance model for autonomous agents: autonomy boundaries, human-in-the-loop gates, audit trails. The training's exception-log habit is exactly that control, practiced small.",
            zh: "74% 的公司计划两年内部署智能体（今天已部署的为 23%），但仅 21% 具备成熟的智能体治理模型：自主边界、人审关口、审计留痕。本培训反复训练的“异常日志”习惯，正是这类控制的微缩演练。",
          },
          src: "Deloitte, State of AI in the Enterprise, Jan 2026",
        },
      ],
    },
    {
      title: { en: "The profession: judgment stays human", zh: "职业界共识：判断权留给人" },
      items: [
        {
          stat: { en: "IAASB", zh: "IAASB" },
          head: { en: "Audit standards meet AI", zh: "审计准则遇上 AI" },
          body: {
            en: "The IAASB's technology position and ISA 540's challenger-model logic point one way: responsibility cannot be delegated to a machine. AI may prepare the estimate or the analysis; the auditor — and by extension the preparer — still owns the judgment.",
            zh: "IAASB 的技术立场声明与 ISA 540 的“独立预期/挑战者模型”逻辑指向同一结论：责任不可移交给机器。AI 可以起草估计或分析，判断仍归审计师——推而广之，也归编制者。",
          },
          src: "IAASB technology position & ISA 540 (Revised), 2024",
        },
        {
          stat: { en: "3 risk classes", zh: "3 类风险" },
          head: { en: "UK FRC: AI in audit", zh: "英国 FRC：审计中的 AI" },
          body: {
            en: "The FRC frames AI risk as functional (does the output hold), process (is it integrated with controls) and governance (who oversees it) — with human review and independent corroboration among the core mitigations. The same triad applies to a controller's use of AI.",
            zh: "FRC 将 AI 风险分为功能（产出是否可靠）、流程（是否嵌入控制）与治理（谁来监督）三类——人工复核与独立佐证是核心缓解措施。这套三分法同样适用于财务控制职能的 AI 使用。",
          },
          src: "UK FRC guidance on AI in audit, 2025–26 (as catalogued in the program knowledge base)",
        },
        {
          stat: { en: "财会〔2024〕11号", zh: "财会〔2024〕11号" },
          head: { en: "China MOF: accounting goes digital-native", zh: "中国财政部：会计信息化提速" },
          body: {
            en: "The Ministry of Finance's accounting-informatization rules and the nine-ministry e-voucher data standard push toward machine-readable accounting records — the very substrate AI-assisted close and audit work depends on.",
            zh: "财政部会计信息化工作规范与九部门电子凭证会计数据标准，正把会计记录推向机器可读——这正是 AI 辅助结账与审计赖以运转的底层。",
          },
          src: "MOF 财会〔2024〕11号 (2024, effective 2025) & e-voucher standard initiative",
        },
      ],
    },
    {
      title: { en: "Adoption data: access is not capability", zh: "采纳数据：有工具不等于有能力" },
      items: [
        {
          stat: { en: "<40% → ~60%", zh: "<40% → 约60%" },
          head: { en: "Access doubled in a year…", zh: "一年间工具可及率翻倍……" },
          body: {
            en: "Workforce access to sanctioned AI tools roughly doubled year-on-year — yet only about 60% of workers with access actually use AI in daily work. The activation gap is a skills gap, which is precisely what hands-on cases attack.",
            zh: "员工可用的合规 AI 工具一年间接近翻倍——但拿到工具的人里仅约六成真正在日常工作中使用。这道“激活缺口”本质是技能缺口，实操案例正是冲它而来。",
          },
          src: "Deloitte, State of AI in the Enterprise, Jan 2026 · n=3,235",
        },
        {
          stat: { en: "25%", zh: "25%" },
          head: { en: "…but pilots stall before production", zh: "……但试点大多止步于试点" },
          body: {
            en: "Only a quarter of companies have moved 40% or more of their AI experiments into production. Small, well-verified workflow wins — a reusable accrual prompt, a standing flash-report pipeline — are how finance teams escape the proof-of-concept trap.",
            zh: "仅四分之一的公司把四成以上 AI 试点推进到了生产。小而可验证的流程胜利——一条可复用的应计提示词、一条常备的快报流水线——正是财务团队跳出“试点陷阱”的路径。",
          },
          src: "Deloitte, State of AI in the Enterprise, Jan 2026",
        },
        {
          stat: { en: "84%", zh: "84%" },
          head: { en: "Work hasn't been redesigned yet", zh: "工作本身尚未被重新设计" },
          body: {
            en: "84% of companies have not redesigned roles around AI, and insufficient worker skills rank as the #1 integration barrier. Institutions that teach their finance teams to describe, delegate and verify are building the scarce capability.",
            zh: "84% 的公司尚未围绕 AI 重塑岗位，而员工技能不足高居整合障碍首位。教会财务团队“描述—委派—验证”的机构，正在积累最稀缺的那种能力。",
          },
          src: "Deloitte, State of AI in the Enterprise, Jan 2026",
        },
      ],
    },
  ] as {
    title: L;
    items: { stat: L; head: L; body: L; src: string }[];
  }[],
};

/* ------------------------------------------------------------ governance -- */
export const governance = {
  eyebrow: { en: "Governance & data safety", zh: "治理与数据安全" },
  title: {
    en: "Bank-grade habits, taught from the first prompt",
    zh: "银行级的习惯，从第一句提示词教起",
  },
  intro: {
    en: "The program treats AI use as a controlled activity, not a shortcut around control. Four rules are stated on the first slide and reinforced by the structure of every case.",
    zh: "本课程把使用 AI 当作一项受控活动，而不是绕开控制的捷径。四条规则写在第一页，并由每个案例的结构反复强化。",
  },
  rules: [
    {
      no: "R1",
      title: { en: "Simulated data in training", zh: "培训用模拟数据" },
      body: {
        en: "Every dataset is synthetic and regenerable from a fixed seed. Nothing confidential ever touches a public tool during the session.",
        zh: "所有数据均为合成、固定种子可复现。整场培训不让任何机密信息触碰公共工具。",
      },
    },
    {
      no: "R2",
      title: { en: "Approved tools for real data", zh: "真实数据只上合规工具" },
      body: {
        en: "Real institutional data belongs on the approved estate — the governed M365/Copilot tenant or internal deployments. Public chatbots are for technique, generic questions and anonymized material.",
        zh: "真实机构数据只在合规环境处理——受管控的 M365/Copilot 租户或内部部署。公共聊天工具用于练技法、问通识、处理脱敏材料。",
      },
    },
    {
      no: "R3",
      title: { en: "Two deliverables, always", zh: "永远交付两件东西" },
      body: {
        en: "Every AI output ships with its exception log or verification trail. A silent fix is worse than a dirty ledger — that is the audit mindset, applied to AI.",
        zh: "每份 AI 产出都附带异常日志或验证痕迹。无痕的“悄悄修复”比脏数据更糟——这就是审计思维在 AI 上的落地。",
      },
    },
    {
      no: "R4",
      title: { en: "AI drafts, humans own", zh: "AI 起草，人负全责" },
      body: {
        en: "Numbers get re-checked against control totals; narratives get fact-checked line by line. Consistent with IAASB and FRC positions: responsibility is not delegable to a machine.",
        zh: "数字要对控制合计复核，叙述要逐句核实。与 IAASB、FRC 的立场一致：责任不能移交给机器。",
      },
    },
  ],
};

/* ------------------------------------------------------------- materials -- */
export const materials = {
  eyebrow: { en: "What an institution receives", zh: "机构将获得什么" },
  title: { en: "A complete, reproducible training kit", zh: "一套完整、可复现的培训包" },
  items: [
    {
      title: { en: "Participant handout", zh: "学员讲义" },
      body: {
        en: "All six cases with background, data notes, tasks and self-checks — plus appendices on enabling Excel's Developer tab and signing into the AI tools. No answers inside.",
        zh: "六大案例的背景、数据说明、任务与自查清单，附 Excel 开发工具启用与 AI 工具登录指引。不含答案。",
      },
    },
    {
      title: { en: "Instructor answer pack", zh: "讲师答案册" },
      body: {
        en: "Sample prompts for both paths, Mac/Windows-compatible VBA, Python reference solutions, verified expected numbers and teaching points for every case.",
        zh: "两条路径的示范提示词、Mac/Windows 兼容 VBA、Python 参考解法、实跑验证的预期数字与逐案例讲解要点。",
      },
    },
    {
      title: { en: "Data packs & reference outputs", zh: "数据包与参考产出" },
      body: {
        en: "Six raw Excel files with seeded teaching traps, regenerable from a fixed seed; reference workbooks, charts and the sample flash report for comparison.",
        zh: "六个埋好教学陷阱的原始 Excel 文件（固定种子可再生），以及参考工作簿、图表与示例快报供对照。",
      },
    },
    {
      title: { en: "Instructor manual", zh: "讲师手册" },
      body: {
        en: "A minute-by-minute agenda, pre-session checklist, tooling plan matched to the institution's network, data-safety talking points and a Monday-morning follow-up plan.",
        zh: "分钟级议程、课前清单、匹配机构网络环境的工具方案、数据安全话术与课后“周一行动计划”。",
      },
    },
  ],
  adapt: {
    title: { en: "Adaptable beyond one institution", zh: "不止服务一家机构" },
    body: {
      en: "The case skeletons — split, merge, clean, analyze, report, review — are constant; the entities, currencies, thresholds and review rules are parameters. The current edition is tuned for a multilateral development bank's controller function; the same kit re-targets to commercial banks, central banks, insurers and sovereign funds in days, in English or Chinese.",
      zh: "案例骨架——拆分、合并、清洗、分析、报告、复核——保持不变；实体、币种、阈值与复核规则皆为参数。当前版本为一家多边开发银行的财务控制职能定制；同一套包可在数日内改配至商业银行、中央银行、保险公司与主权基金，中英文皆可交付。",
    },
    tags: [
      { en: "Multilateral development banks", zh: "多边开发银行" },
      { en: "Commercial & policy banks", zh: "商业银行与政策性银行" },
      { en: "Central banks & supervisors", zh: "中央银行与监管机构" },
      { en: "Insurers & asset managers", zh: "保险公司与资管机构" },
      { en: "Sovereign & pension funds", zh: "主权基金与养老金" },
    ],
  },
};

/* ---------------------------------------------------------------- footer -- */
export const footer = {
  line1: {
    en: "AI for the Finance Function · an in-person, hands-on training program",
    zh: "财务职能 AI 实训 · 线下实操培训课程",
  },
  line2: {
    en: "All training data is simulated. Insight figures trace to their cited publications (verified July 2026). This page names no client and shows no confidential material.",
    zh: "所有培训数据均为模拟。洞察数字可追溯至所引出版物（2026 年 7 月核验）。本页不披露客户名称，不含任何机密材料。",
  },
  built: {
    en: "Program and site prepared by the Deloitte AI enablement team.",
    zh: "课程与网站由德勤 AI 赋能团队制作。",
  },
};
