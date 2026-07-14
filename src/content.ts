import type { L } from "./i18n";

/* ------------------------------------------------------------------ nav -- */
export const nav = {
  brand: { en: "AI for the Finance Function", zh: "财务职能 AI 实训" },
  links: [
    { id: "outcomes", label: { en: "Outcomes", zh: "培训成效" } },
    { id: "instructor", label: { en: "Instructor", zh: "讲师" } },
    { id: "clients", label: { en: "Clients", zh: "服务客户" } },
    { id: "workflows", label: { en: "What We Train", zh: "培训内容" } },
    { id: "outlook", label: { en: "AI Outlook", zh: "AI 展望" } },
    { id: "insights", label: { en: "Insights", zh: "监管与洞察" } },
  ] as { id: string; label: L }[],
  cta: { en: "Book a session", zh: "预约培训" },
};

/* ----------------------------------------------------------------- hero -- */
export const hero = {
  eyebrow: {
    en: "In-person · hands-on · for the finance teams behind tomorrow's infrastructure",
    zh: "线下实操 · 献给支撑“明日基建”的财务团队",
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
  ctaCases: { en: "See what we train", zh: "查看培训内容" },
  ctaDemo: { en: "Book a session", zh: "预约培训" },
  stats: [
    { value: "2.5–3h", label: { en: "one focused session", zh: "一场聚焦的工作坊" } },
    { value: "6", label: { en: "hands-on cases, one connected quarter", zh: "个实操案例，串成同一个季度" } },
    { value: "3", label: { en: "Microsoft apps: Excel, Word, PowerPoint — no new tool", zh: "个微软应用：Excel、Word、PowerPoint——不引入新工具" } },
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
    en: "The macro picture the session opens with — drawn from Deloitte's financial-services cut, not a generic tech survey. The story it tells: tool access has already been solved. Capability has not.",
    zh: "培训开场先讲的宏观图景——取自德勤金融服务业专项样本，而非泛泛的科技调查。它说的是一件事：工具可及性已经解决，能力还没有。",
  },
  stats: [
    {
      value: "30% → 62%",
      label: { en: "of workers in financial services now have sanctioned AI tools — access doubled in a single year", zh: "金融业员工中已配备合规 AI 工具的比例——一年之内翻倍" },
    },
    {
      value: "24%",
      label: { en: "have moved 40%+ of their AI experiments into production — most pilots still stall before the finish line", zh: "把四成以上 AI 试点推进到了生产——多数试点仍倒在终点线前" },
    },
    {
      value: "53%",
      label: { en: "expect to reach that level within three to six months — the wave lands next quarter, ready or not", zh: "预计在三到六个月内达到该水平——不管准备好没有，浪就在下个季度拍岸" },
    },
    {
      value: "41%",
      label: { en: "still use AI only at surface level, with little or no change to the underlying process", zh: "至今只在表层使用 AI，底层流程几乎原封不动" },
    },
    {
      value: "84%",
      label: { en: "have not redesigned work around AI — and insufficient worker skills is named the #1 barrier to integration", zh: "尚未围绕 AI 重塑工作方式——而“员工技能不足”被列为整合的头号障碍" },
    },
    {
      value: "31% / 66%",
      label: { en: "of boards have AI on the agenda, while 66% of directors report limited-to-no AI knowledge", zh: "的董事会将 AI 列入议程，而 66% 的董事自认 AI 知识有限或没有" },
    },
  ] as { value: string; label: L }[],
  source:
    "Deloitte, State of AI in the Financial Services Industry: The untapped edge (Mar 2026 · N=573 financial-services leaders, from a survey of 3,235 director-to-C-suite respondents across 24 countries) · Deloitte Global Boardroom Program, Governance of AI 2nd ed. (2025 · n=695, 56 countries)",
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
  title: { en: "One session, three apps, one habit", zh: "一场课、三个应用、一个习惯" },
  intro: {
    en: "A quarter's reporting is three moves — and Microsoft 365 Copilot sits inside all three. Every case teaches the same loop: describe the outcome, let Copilot execute, then verify like an accountant. Nothing to install, no new login, and the data never leaves the bank's governed environment.",
    zh: "一个季度的报告工作，本质是三步动作——而 Microsoft 365 Copilot 就在这三个应用里。每个案例都在训练同一个循环：把结果描述清楚、让 Copilot 执行、再像会计师一样复核。零安装、无需新账号，数据也始终留在银行受管控的环境内。",
  },
  paths: [
    {
      tag: { en: "Excel · the numbers", zh: "Excel · 数字" },
      title: { en: "Build, merge, clean, analyse, chart", zh: "构建、合并、清洗、分析、作图" },
      body: {
        en: "Copilot's editing mode works multi-step inside the open workbook: it splits ledgers, joins sheets across a broken key, cleans a register and flags exceptions, and builds PivotTables and charts — all as native, auditable objects a reviewer can click into.",
        zh: "Copilot 的编辑模式在打开的工作簿里多步作业：拆分台账、跨表按错位主键匹配、清洗登记簿并标出异常、生成透视表与图表——产出的都是复核人能逐格点开的原生、可审计对象。",
      },
    },
    {
      tag: { en: "Word · the narrative", zh: "Word · 叙述" },
      title: { en: "Draft, restructure, tighten, fact-check", zh: "起草、重构、收紧、事实核查" },
      body: {
        en: "The numbers become a memo: an executive summary, a budget-position read, a chase email. Copilot drafts and edits by instruction — and the case makes the room fact-check every claim against the tables, because the summary is the paragraph management actually reads.",
        zh: "数字变成备忘录：执行摘要、预算解读、催办邮件。Copilot 按指令起草与修改——而案例会逼学员把每一句结论都对回表格核验，因为摘要恰恰是管理层唯一会读的那一段。",
      },
    },
    {
      tag: { en: "PowerPoint · the message", zh: "PowerPoint · 表达" },
      title: { en: "Structure in, structure out", zh: "结构进，结构出" },
      body: {
        en: "PowerPoint builds the board deck from the Word memo's heading structure, then rewrites every slide title so it states the finding, not the topic. The pack that took an afternoon is now a rendering of the numbers — regenerate it when a figure changes.",
        zh: "PowerPoint 依据 Word 备忘录的标题层级生成董事会简报，再把每页标题改写成“结论”而非“话题”。过去要耗一个下午的汇报包，如今只是数字的一次渲染——数字一变，重新生成即可。",
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
  agendaTitle: { en: "Suggested agenda · 175 minutes", zh: "建议议程 · 175 分钟" },
  agenda: [
    { time: "0:00", len: "15′", label: { en: "Opening: what AI can and cannot be trusted with; the Excel → Word → PowerPoint spine; a live 2-minute teaser", zh: "开场：AI 什么能信、什么不能信；Excel → Word → PowerPoint 主线；2 分钟现场预演" } },
    { time: "0:15", len: "10′", label: { en: "State of AI in financial institutions: adoption vs activation, supervisory direction, what peers are doing", zh: "金融机构 AI 现状：采纳与激活的落差、监管走向、同业在做什么" } },
    { time: "0:25", len: "10′", label: { en: "Setup check: tools signed in, data pack in place", zh: "环境检查：工具登录、数据包就位" } },
    { time: "0:35", len: "15′", label: { en: "Case 1 · Split — everyone gets a win", zh: "案例 1 · 拆分——人人先赢一局" } },
    { time: "0:50", len: "30′", label: { en: "Case 2 · Accrual consolidation — the silent VLOOKUP trap", zh: "案例 2 · 应计归集——VLOOKUP 静默失败之坑" } },
    { time: "1:20", len: "10′", label: { en: "Break", zh: "休息" } },
    { time: "1:30", len: "25′", label: { en: "Case 3 · Invoice cleanup — catch the duplicate payment", zh: "案例 3 · 发票清洗——揪出重复付款" } },
    { time: "1:55", len: "25′", label: { en: "Case 4 · Variance dashboard — change one word, new analysis", zh: "案例 4 · 差异看板——改一个词，换一种分析" } },
    { time: "2:05", len: "15′", label: { en: "Case 5 · The quarterly memo, in Word — draft, tighten, fact-check", zh: "案例 5 · 季度备忘录（Word）——起草、收紧、事实核查" } },
    { time: "2:20", len: "15′", label: { en: "Case 6 · The board deck, in PowerPoint — titles that state the finding", zh: "案例 6 · 董事会简报（PowerPoint）——让标题说出结论" } },
    { time: "2:35", len: "10′", label: { en: "AI risk & governance for finance teams: the four working rules, IAASB/FRC positions, agent guardrails", zh: "财务条线的 AI 风险与治理：四条使用规则、IAASB/FRC 立场、智能体护栏" } },
    { time: "2:45", len: "10′", label: { en: "Wrap-up: Monday-morning plan, Q&A · the valuation-review case as take-home", zh: "收尾：周一行动计划、答疑 · 估值复核案例留作课后" } },
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

/* --------------------------------------------------------------- outlook -- */
/* Every figure below is traceable to a Deloitte publication or an official
   regulator/standard-setter. No secondary sources; no non-Deloitte firms.   */
export const outlook = {
  eyebrow: { en: "AI outlook 2026", zh: "AI 展望 2026" },
  title: {
    en: "Governance is not the brake on AI. It is the licence to scale.",
    zh: "治理不是 AI 的刹车，而是规模化的通行证。",
  },
  intro: {
    en: "In July 2026 Deloitte published Banking on trust — an index of how 135 senior leaders at systemically important and other large banks across 16 countries actually govern AI. Its finding is uncomfortable and useful: banks have written the policies. They have not built the accountability, the monitoring or the people. Everything below is from that report or from a primary regulatory document.",
    zh: "2026 年 7 月，德勤发布《Banking on trust》——对 16 个国家、135 位全球系统重要性银行及其他大型银行高管的 AI 治理成熟度做了指数化测评。结论既扎心又有用：政策，银行都写好了；问责、监控与人，还没建起来。以下每一条，不是出自该报告，就是出自一手监管文件。",
  },
  sourceHero: {
    label: { en: "The source report", zh: "核心报告" },
    title: { en: "Banking on trust: AI governance for growth, resilience and scale", zh: "《Banking on trust：以 AI 治理驱动增长、韧性与规模化》" },
    meta: {
      en: "Deloitte Asia Pacific (Trustworthy AI · Deloitte Access Economics) · July 2026 · 135 senior leaders across 16 countries, incl. G-SIBs and D-SIBs",
      zh: "德勤亚太（可信 AI · 德勤经济研究院）· 2026 年 7 月 · 16 国 135 位高管，涵盖全球系统重要性银行（G-SIB）与国内系统重要性银行（D-SIB）",
    },
    href: "https://www.deloitte.com/ap/en/perspectives/banking-on-trust.html",
  },

  /* ---- 1. the gap ---- */
  gapTitle: { en: "The governance gap, measured", zh: "被量化出来的治理缺口" },
  gap: [
    {
      stat: "87%",
      head: { en: "of banks have room to materially strengthen AI governance", zh: "的银行在 AI 治理上仍有实质性提升空间" },
      body: {
        en: "Only 13% of global banks reach the “optimised” tier of Deloitte's AI Governance Index — and 10% are still effectively ad hoc. Meanwhile weekly AI use by bank employees doubled in a year, reaching 63% in 2026. Adoption is running ahead of control.",
        zh: "只有 13% 的银行达到德勤 AI 治理指数的“成熟”级，仍有 10% 基本处于“初级”。与此同时，银行员工每周使用 AI 的比例一年翻倍，2026 年已达 63%。采纳跑在了控制前面。",
      },
      src: "Deloitte, Banking on trust, Jul 2026 · n=135 banks, 16 countries",
    },
    {
      stat: "72%",
      head: { en: "cannot see half of their own AI", zh: "连自家一半的 AI 都看不见" },
      body: {
        en: "72% of banks have less than half of their AI use cases recorded in a central register. You cannot govern — or audit — an inventory you do not have. This is the most concrete, most fixable finding in the report.",
        zh: "72% 的银行，其 AI 用例登记在中央清单里的不足一半。一个不存在的清单，既无法治理，也无法审计。这是全篇最具体、也最容易补上的一条。",
      },
      src: "Deloitte, Banking on trust, Jul 2026",
    },
    {
      stat: "15%",
      head: { en: "train their people on AI governance", zh: "的银行为员工提供持续的 AI 治理培训" },
      body: {
        en: "Only 15% of banks give regularly refreshed AI governance training to all staff; around a third rely on ad hoc training or none at all. Deloitte names people and skills as one of the two weakest pillars — the gap is human, not procedural.",
        zh: "只有 15% 的银行为全体员工提供定期更新的 AI 治理培训，约三分之一只有临时培训甚至完全没有。德勤将“人与技能”列为两大最弱支柱之一——缺口在人，不在流程。",
      },
      src: "Deloitte, Banking on trust, Jul 2026",
    },
  ] as { stat: string; head: L; body: L; src: string }[],

  /* ---- 2. the reframe (pull quote) ---- */
  quote: {
    en: "As AI becomes more deeply embedded in core banking activities, the governance gap will increasingly become a performance gap.",
    zh: "随着 AI 更深地嵌入核心银行业务，治理缺口将日益变成业绩缺口。",
  },
  quoteSrc: "Deloitte, Banking on trust: AI governance for growth, resilience and scale, July 2026",
  quoteFollow: {
    en: "The report's evidence runs against the instinct that control slows you down. Banks with optimised governance have fully implemented AI in five of ten business areas — more than double the rudimentary tier, and more than five times the ad hoc tier. Deloitte's conclusion, in its own words: effective AI governance “does not appear to suppress adoption; rather, it creates the conditions for broader and faster deployment.” Governance is how a bank gets out of pilot purgatory.",
    zh: "报告的证据与“控制会拖慢速度”的直觉正好相反：治理达到“成熟”级的银行，已在 10 个业务领域中的 5 个完成 AI 全面落地——是“发展中”级的两倍多、“初级”级的五倍以上。德勤的原话是：有效的 AI 治理“并未抑制采纳，反而创造了更广、更快部署的条件”。治理，正是银行走出“试点炼狱”的方式。",
  },
  quoteFollowSrc: "Deloitte, Banking on trust, Jul 2026 · fully implemented AI solutions across 10 business areas, by governance tier",

  /* ---- 3. the five pillars ---- */
  pillarsTitle: { en: "Where the gap actually is", zh: "缺口究竟在哪里" },
  pillarsLede: {
    en: "Deloitte scores five pillars. Read them in order and the story tells itself: banks have the procedures and the policies. What they lack is the org structure that names who is accountable — and the people trained to apply any of it. In Deloitte's words, “the main gaps in AI governance are human and organisational rather than procedural.”",
    zh: "德勤对五大支柱逐一打分。顺着看下来，结论不言自明：流程和政策，银行有；缺的是“谁来担责”的组织架构，以及有能力把这一切执行下去的人。德勤原文：“AI 治理的主要缺口是人与组织层面的，而非流程层面的。”",
  },
  pillars: [
    { name: { en: "Procedures & controls", zh: "流程与控制" }, optimised: 25, adhoc: 11 },
    { name: { en: "Principles & policy", zh: "原则与政策" }, optimised: 20, adhoc: 19 },
    { name: { en: "Monitoring & reporting", zh: "监控与报告" }, optimised: 20, adhoc: 12 },
    { name: { en: "Organisational structure", zh: "组织架构" }, optimised: 13, adhoc: 27 },
    { name: { en: "People & skills", zh: "人与技能" }, optimised: 11, adhoc: 14 },
  ] as { name: L; optimised: number; adhoc: number }[],
  pillarsLegend: {
    optimised: { en: "Optimised", zh: "成熟级" },
    adhoc: { en: "Ad hoc", zh: "初级" },
  },
  pillarsSrc: "Deloitte, Banking on trust, Jul 2026 · Chart 3.2, distribution of AI governance across global banks, by pillar (n=135)",
  pillarsKicker: {
    en: "Organisational structure is the least mature pillar — more than a quarter of banks sit in the lowest category. People and skills has the fewest banks at the top: 11%.",
    zh: "“组织架构”是最不成熟的支柱——超过四分之一的银行落在最低档。“人与技能”则是登顶者最少的一项：仅 11%。",
  },

  /* ---- 4. what banks actually fear ---- */
  risksTitle: {
    en: "What financial institutions say they fear",
    zh: "金融机构自陈最担心什么",
  },
  risksLede: {
    en: "Asked which AI risks concern them most, financial-services leaders named four — and every one of them is a governance problem, not a technology problem. None of them is solved by buying a better model.",
    zh: "当被问及最担心哪些 AI 风险时，金融业高管点出了四项——而每一项都是治理问题，不是技术问题。没有一项能靠买一个更好的模型解决。",
  },
  risks: [
    { pct: 80, label: { en: "Data privacy and/or security", zh: "数据隐私与安全" } },
    { pct: 55, label: { en: "Legal, IP, or regulatory compliance", zh: "法律、知识产权与合规" } },
    { pct: 48, label: { en: "Governance capabilities and oversight", zh: "治理能力与监督" } },
    { pct: 43, label: { en: "Model quality, consistency, explainability", zh: "模型质量、一致性与可解释性" } },
    { pct: 25, label: { en: "Workforce impact", zh: "对员工的影响" } },
  ] as { pct: number; label: L }[],
  risksSrc: "Deloitte, State of AI in the Financial Services Industry: The untapped edge, Mar 2026 · N=573 financial-services leaders",

  /* ---- 5. trustworthy AI framework ---- */
  framework: {
    title: { en: "What “trustworthy” has to mean", zh: "“可信”必须落到哪七件事上" },
    lede: {
      en: "Deloitte's Trustworthy AI™ framework names seven dimensions an AI solution must satisfy before an institution can defend it — to a board, to a supervisor, or to an auditor. The working rules taught in this program are a desk-level translation of exactly these.",
      zh: "德勤 Trustworthy AI™ 框架给出七个维度——只有满足它们，机构才能在董事会、监管者或审计师面前站得住。本课程教的那几条工作规则，正是这七个维度在案头层面的翻译。",
    },
    items: [
      { en: "Transparent & explainable", zh: "透明、可解释" },
      { en: "Fair & impartial", zh: "公平、中立" },
      { en: "Robust & reliable", zh: "稳健、可靠" },
      { en: "Private", zh: "保护隐私" },
      { en: "Safe & secure", zh: "安全、稳妥" },
      { en: "Responsible", zh: "承担责任" },
      { en: "Accountable", zh: "问责" },
    ] as L[],
    src: "Deloitte Trustworthy AI™ framework · Deloitte AI Institute",
  },

  /* ---- 6. the agentic frontier ---- */
  agentic: {
    title: { en: "Next: agents that act, not just advise", zh: "下一步：会“动手”的智能体" },
    lede: {
      en: "Agentic AI changes the control question. A model that recommends can be reviewed after the fact; an agent that initiates a payment, changes a credit limit or amends a disclosure cannot. Deloitte's recommendation is a shift banks have barely started: from “human in the loop” to “human on the loop” — people set the boundaries, monitor, and intervene, while automated monitoring, exception reporting, usage logging and access controls carry the routine load.",
      zh: "智能体改变了控制的命题。给建议的模型可以事后复核；能发起付款、调整授信、改动披露的智能体不行。德勤给出的建议，是一次多数银行才刚起步的转变：从“human in the loop”（人在环内逐条批）走向“human on the loop”（人在环上）——由人设定边界、监控、必要时介入，而自动化监控、异常报告、使用留痕与权限控制承担日常负荷。",
    },
    items: [
      {
        stat: "44%",
        body: {
          en: "of banks have risk monitoring across the implementation lifecycle for agentic AI — versus 61% for traditional AI. Oversight thins out exactly where autonomy rises.",
          zh: "的银行对智能体 AI 建立了覆盖全实施生命周期的风险监控——传统 AI 是 61%。自主性越高的地方，监督反而越薄。",
        },
      },
      {
        stat: "23%",
        body: {
          en: "of financial-services companies report a mature governance model for autonomous agents — while agents already reach payments, trading, credit decisions and customer disclosures.",
          zh: "的金融机构自称拥有成熟的自主智能体治理模型——而智能体已经触及付款、交易、授信决策与客户披露。",
        },
      },
      {
        stat: "84%",
        body: {
          en: "have not redesigned jobs or work around AI, and insufficient worker skills is named the single biggest barrier to integration. Capability — not licences — is the bottleneck.",
          zh: "尚未围绕 AI 重新设计岗位与工作方式，而“员工技能不足”被列为整合的头号障碍。瓶颈是能力，不是许可证。",
        },
      },
    ] as { stat: string; body: L }[],
    src: "Deloitte, Banking on trust (Jul 2026) · Deloitte, State of AI in the Financial Services Industry (Mar 2026, N=573)",
    kicker: {
      en: "Two of those three numbers are about people, not technology. That is the whole argument for this program: the tools have arrived, the working habits have not.",
      zh: "这三个数字里有两个说的是人，不是技术。这就是这门课存在的全部理由：工具已经到位，工作习惯还没有。",
    },
  },

  /* ---- 7. the regulatory clock ---- */
  clock: {
    title: { en: "The regulatory clock — and it just moved", zh: "监管时钟——而且刚刚被拨动过" },
    lede: {
      en: "For an institution operating across jurisdictions the direction of travel is unmistakable: classify the risk, keep a human in the decision, and leave an auditable trail. Every item below is a primary document, checked in July 2026.",
      zh: "对跨法域运营的机构而言，方向已无悬念：把风险分级、让人留在决策里、留下可审计的痕迹。以下每一条都出自一手文件，并于 2026 年 7 月复核。",
    },
    items: [
      {
        date: { en: "Jan 2023", zh: "2023年1月" },
        title: { en: "NIST AI Risk Management Framework 1.0", zh: "NIST 人工智能风险管理框架 1.0" },
        body: {
          en: "Four functions — Govern, Map, Measure, Manage. Voluntary, and now the common vocabulary for AI risk programs worldwide.",
          zh: "四大功能——治理、映射、衡量、管理。虽属自愿采用，如今已是全球 AI 风险体系的通用语言。",
        },
        src: "NIST AI 100-1 · nist.gov/itl/ai-risk-management-framework",
      },
      {
        date: { en: "Dec 2023", zh: "2023年12月" },
        title: { en: "ISO/IEC 42001 — AI management systems", zh: "ISO/IEC 42001 人工智能管理体系" },
        body: {
          en: "The world's first certifiable AI management system standard. Unlike a framework, it is something an independent body can audit you against — the difference between a principle and an obligation.",
          zh: "全球首个可认证的 AI 管理体系标准。与“框架”不同，它是独立机构可以照着审你的东西——这正是“原则”与“义务”的分界。",
        },
        src: "ISO/IEC 42001:2023 · iso.org/standard/42001",
      },
      {
        date: { en: "Feb 2025", zh: "2025年2月" },
        title: { en: "EU AI Act: prohibitions and AI literacy apply", zh: "欧盟《人工智能法案》：禁止条款与 AI 素养义务生效" },
        body: {
          en: "Article 4 obliges providers and deployers alike to take measures on the AI literacy of their staff. It binds a bank that merely uses a third-party AI system — not only one that builds it. (A simplification package adopted in June 2026 softens the wording; the obligation itself remains.)",
          zh: "第 4 条要求提供者与部署者都必须就员工的 AI 素养采取措施。它约束的不只是“造 AI”的机构，也包括“只是用了第三方 AI”的银行。（2026 年 6 月通过的简化法案放宽了措辞，但义务本身仍在。）",
        },
        src: "Regulation (EU) 2024/1689, Art. 4 · in force since 2 Feb 2025",
      },
      {
        date: { en: "Apr 2026", zh: "2026年4月" },
        title: { en: "The US rewrites the model-risk bedrock", zh: "美国重写模型风险的地基" },
        body: {
          en: "SR 26-2 replaces SR 11-7, the guidance that has defined model risk management for fifteen years. Whatever a bank's model inventory looked like, the standard it is measured against has changed.",
          zh: "SR 26-2 取代了统治模型风险管理十五年的 SR 11-7。无论一家银行的模型清单原本长什么样，衡量它的那把尺已经换了。",
        },
        src: "Federal Reserve / OCC / FDIC, SR 26-2 · federalreserve.gov",
      },
      {
        date: { en: "Jun 2026", zh: "2026年6月" },
        title: { en: "China: AI in banking & insurance (Jinfa [2026] No. 8)", zh: "中国：金发〔2026〕8号" },
        body: {
          en: "Eight parts, 32 articles. Full-lifecycle management; risk classification; named high-risk domains (funds transactions, credit approval, underwriting and claims, risk management); mandatory human oversight, a human final decision for high-risk uses, and periodic algorithm audits.",
          zh: "八部分 32 条。全生命周期管理；风险分类分级；点名高风险领域（资金交易、信贷审批、承保理赔、风险管理）；强制人工监督、高风险须由人做最终决策，并定期开展算法审计。",
        },
        src: "国家金融监督管理总局《关于银行业保险业人工智能安全开发应用的指导意见》· nfra.gov.cn, 18 Jun 2026",
      },
      {
        date: { en: "Jun 2026", zh: "2026年6月" },
        title: { en: "FSB: 12 Sound Practices for responsible AI adoption", zh: "FSB：负责任采用 AI 的 12 项稳健做法" },
        body: {
          en: "A consultation report, not final guidance — but it is the shape of things. Two pillars: organisation-wide governance, and lifecycle management. Sound Practice 10 makes human oversight scale with the system's autonomy — the same logic Deloitte reaches from the other side.",
          zh: "这是征求意见稿，尚非最终指引——但轮廓已经清楚。两大支柱：全组织治理，与全生命周期管理。其中第 10 项要求人工监督的强度随系统自主性而提升——与德勤从另一端得出的逻辑完全一致。",
        },
        src: "Financial Stability Board, Sound Practices for Responsible Adoption of AI (consultation), 10 Jun 2026 · fsb.org",
      },
      {
        date: { en: "Dec 2027", zh: "2027年12月" },
        title: { en: "EU high-risk obligations — where credit scoring sits", zh: "欧盟高风险义务——信用评分正落在这里" },
        body: {
          en: "Annex III(5)(b) classifies AI that evaluates the creditworthiness of natural persons as high-risk (fraud detection is carved out). Those obligations were deferred from Aug 2026 to 2 December 2027 by the Digital Omnibus — adopted by Parliament on 16 June and Council on 29 June 2026, signed 8 July, and awaiting publication in the Official Journal. Penalties reach €35m or 7% of worldwide turnover. And for banks the Act is enforced by the financial supervisor, not a separate AI regulator.",
          zh: "附件三第 5(b) 项把“评估自然人信用状况”的 AI 列为高风险（反欺诈用途除外）。这些义务已由《数字综合法案》从 2026 年 8 月推迟至 2027 年 12 月 2 日——该法案于 2026 年 6 月 16 日经欧洲议会、6 月 29 日经理事会通过，7 月 8 日签署，尚待在《官方公报》刊登。罚则最高可达 3,500 万欧元或全球营业额的 7%。而对银行而言，执法者是金融监管机构本身，而非另设的 AI 监管者。",
        },
        src: "Regulation (EU) 2024/1689, Annex III(5)(b), Arts. 74(6) & 99 · Digital Omnibus on AI, adopted 16/29 Jun 2026, awaiting OJ publication",
      },
    ] as { date: L; title: L; body: L; src: string }[],
  },

  closer: {
    en: "Read the clock together and one conclusion is hard to avoid: every regime is converging on the same three demands — classify the risk, keep a human in the decision, and leave an auditable trail. A finance team that already works that way is not preparing for regulation. It is already moving in the direction of it. And the deferral of the EU's high-risk dates is not a reprieve — the supervisory layer is tightening now, faster than the statute.",
    zh: "把这张时钟连起来看，一个结论几乎无法回避：所有法域都在收敛到同样三项要求——把风险分级、让人留在决策里、留下可审计的痕迹。一支已经这样工作的财务团队，不是在为监管做准备——它本就走在监管指向的方向上。而欧盟高风险义务的推迟并不是喘息：监管层面的收紧正在发生，且比立法本身更快。",
  },
  disclaimer: {
    en: "Every figure on this page is taken from a Deloitte publication or a primary regulatory document, and was checked against the original in July 2026. Survey figures describe the cited samples, not any individual institution. Where a legislative act has been adopted but not yet published in the Official Journal, that status is stated rather than glossed.",
    zh: "本页每一个数字都取自德勤出版物或一手监管文件，并已于 2026 年 7 月对照原文核验。调查数字描述的是所引样本，不指向任何单一机构。凡属“已通过但尚未在官方公报刊登”的立法，均如实标注其状态，不作模糊处理。",
  },
};

/* -------------------------------------------------------------- insights -- */
export const insightsSection = {
  eyebrow: { en: "Boardroom & profession", zh: "董事会与职业界" },
  title: {
    en: "Three currents that decide whether AI sticks",
    zh: "决定 AI 能否留下来的三股暗流",
  },
  intro: {
    en: "Beyond the outlook above, three forces shape what a finance function can actually do with AI: what boards are ready to supervise, where the data has to live, and what the accounting and audit profession will accept as evidence. Deloitte survey figures cite their samples; every regulatory or professional item points to the primary document.",
    zh: "在上面的展望之外，还有三股力量决定财务职能到底能拿 AI 做什么：董事会有能力监督到什么程度、数据必须留在哪里、以及会计与审计职业界认可什么作为证据。德勤调查数字均注明样本，监管与职业条目均直指一手文件。",
  },
  disclaimer: {
    en: "Sources verified against the original publications as of July 2026. Survey figures describe the cited samples, not any individual institution.",
    zh: "所有来源均于 2026 年 7 月对照原始出版物核验。调查数字描述的是所引样本，不指向任何单一机构。",
  },
  groups: [
    {
      title: { en: "Boards are being asked to supervise what they don't yet know", zh: "董事会被要求监督他们尚不熟悉的东西" },
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
          stat: { en: "77% / 83%", zh: "77% / 83%" },
          head: { en: "Sovereign AI now shapes vendor choice", zh: "主权 AI 已在左右选型" },
          body: {
            en: "77% of companies factor an AI solution's country of origin into vendor decisions, and 83% call sovereign AI important to strategic planning. Data residency and compute location have become governance requirements — familiar territory for a multilateral institution.",
            zh: "77% 的公司在选型时考量 AI 方案的来源国，83% 认为主权 AI 对战略规划重要。数据驻留与算力所在地已成为治理要求——这对多边机构而言并不陌生。",
          },
          src: "Deloitte, State of AI in the Enterprise, 2026 · n=3,235 · 24 countries",
        },
        {
          stat: { en: "1 in 2", zh: "半数以上" },
          head: { en: "Staff don't believe the controls hold", zh: "员工并不相信控制守得住" },
          body: {
            en: "More than half of technology workers do not believe their organisation can effectively manage AI-related risk. Credibility with your own people is won by visibly working the controls, not by announcing them.",
            zh: "超过半数的技术工作者不认为自己所在的组织能有效应对 AI 相关风险。在自己人面前的可信度，靠的是把控制真正做出来给他们看，而不是宣布它存在。",
          },
          src: "Deloitte Asia Pacific AI Institute & Deloitte Economics Institute, 2025",
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
          src: "IAASB technology position statement, Oct 2024 · ISA 540 (Revised) · iaasb.org",
        },
        {
          stat: { en: "Function · Process · Governance", zh: "功能 · 流程 · 治理" },
          head: { en: "UK FRC: AI in audit", zh: "英国 FRC：审计中的 AI" },
          body: {
            en: "The FRC's guidance on AI in audit — the UK's first, with generative and agentic follow-ups — frames the risk in three layers and puts human review and independent corroboration among the core mitigations. The same triad applies to a controller's use of AI.",
            zh: "FRC 发布了英国首份审计中 AI 使用指引（并有生成式与智能体的后续指引），将风险分为三层，并把人工复核与独立佐证列为核心缓解措施。这套三分法同样适用于财务控制职能的 AI 使用。",
          },
          src: "UK Financial Reporting Council, guidance on the use of AI in audit, 2025–26 · frc.org.uk",
        },
        {
          stat: { en: "财会〔2024〕11号", zh: "财会〔2024〕11号" },
          head: { en: "China MOF: accounting goes machine-readable", zh: "中国财政部：会计记录走向机器可读" },
          body: {
            en: "The Ministry of Finance's accounting-informatization rules (effective 2025) and the nine-ministry e-voucher data standard push accounting records toward machine-readable form — the substrate that AI-assisted close and full-population testing depend on.",
            zh: "财政部《会计信息化工作规范》（2025 年施行）与九部门电子凭证会计数据标准，正把会计记录推向机器可读——这正是 AI 辅助结账与全量测试赖以运转的底层。",
          },
          src: "MOF 财会〔2024〕11号 & 〔2024〕12号, effective 1 Jan 2025 · mof.gov.cn",
        },
      ],
    },
  ] as {
    title: L;
    items: { stat: L; head: L; body: L; src: string }[];
  }[],
};

export const governance = {
  eyebrow: { en: "Governance & data safety", zh: "治理与数据安全" },
  title: {
    en: "Bank-grade habits, taught from the first prompt",
    zh: "银行级的习惯，从第一句提示词教起",
  },
  intro: {
    en: "The program treats AI use as a controlled activity, not a shortcut around control. Four rules are stated on the first slide and reinforced by the structure of every case — a working method a lean, clean and green institution can adopt as-is.",
    zh: "本课程把使用 AI 当作一项受控活动，而不是绕开控制的捷径。四条规则写在第一页，并由每个案例的结构反复强化——一套“精干、廉洁、绿色”机构可直接采纳的工作方法。",
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
        en: "The exact Copilot prompts for every case, what you will see when they run, the verified expected numbers, the common wobbles with their fixes, and the teaching points.",
        zh: "每个案例的确切 Copilot 提示词、运行时会看到什么、实跑验证的预期数字、常见卡壳与解法，以及讲解要点。",
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

/* -------------------------------------------------------------- outcomes -- */
export const outcomes = {
  eyebrow: { en: "What changes after the session", zh: "培训之后，什么变了" },
  title: {
    en: "The same work — hours to minutes, and better controlled",
    zh: "同样的活——从几小时到几分钟，而且更受控",
  },
  intro: {
    en: "Access to AI tools is not the bottleneck; hands-on capability is. Participants leave able to describe, delegate and verify — and they take reusable prompts back to the next close.",
    zh: "瓶颈从来不是有没有 AI 工具，而是会不会用。学员离场时已经学会“描述—委派—验证”，并把可复用的提示词带回下一个结账周期。",
  },
  pairs: [
    {
      task: { en: "Quarter-end accruals", zh: "季末应计" },
      before: {
        en: "Hours of manual VLOOKUP across three systems; a few rows silently return #N/A every quarter.",
        zh: "跨三套系统几小时的手工 VLOOKUP，每季度总有几行悄悄返回 #N/A。",
      },
      after: {
        en: "One instruction consolidates the accrual and returns the exception list of everything that didn't match.",
        zh: "一句指令归集出应计，并附上一份“没对上”的异常清单。",
      },
    },
    {
      task: { en: "Invoice register cleanup", zh: "发票台账清洗" },
      before: {
        en: "An afternoon of cleanup by hand, with a duplicate-payment risk easy to miss.",
        zh: "一个下午的手工清洗，重复付款风险很容易漏掉。",
      },
      after: {
        en: "Cleaned, standardized and validated in minutes — and the re-submitted invoice is flagged, not paid twice.",
        zh: "几分钟内清洗、规范、校验完成——重复提交的发票被标旗，而不是付两遍。",
      },
    },
    {
      task: { en: "Quarterly reporting", zh: "季度报告" },
      before: {
        en: "A pack assembled by hand from five files, stale the day it ships.",
        zh: "从五个文件手工拼装的报告包，送出当天就已过期。",
      },
      after: {
        en: "A formatted report generated from one prompt, regenerated in under a minute when a number changes.",
        zh: "一句提示词生成排好版的报告，改一个数一分钟内重新生成。",
      },
    },
    {
      task: { en: "Team capability", zh: "团队能力" },
      before: {
        en: "Tools available but unused; a widening gap between having AI and using it.",
        zh: "工具有了却没人用；“有 AI”和“会用 AI”之间的差距越拉越大。",
      },
      after: {
        en: "A team that instructs AI in plain language and verifies like accountants — with the control mindset intact.",
        zh: "一支能用大白话指挥 AI、又像会计师一样复核的团队——控制思维不打折。",
      },
    },
  ] as { task: L; before: L; after: L }[],
};

/* ------------------------------------------------------------ instructor -- */
export const instructor = {
  eyebrow: { en: "Your instructor", zh: "你的讲师" },
  name: { en: "Tom Wang", zh: "王雨岩 Tom Wang" },
  role: { en: "Audit Partner, Deloitte · CPA, MSF", zh: "德勤审计合伙人 · CPA、MSF" },
  lead: {
    en: "Tom is an Audit Partner at Deloitte with sixteen years across major accounting firms and enterprise finance advisory in Canada, the United States and China. He has spent his career inside the work this training automates — audits of financial institutions, quarter-end closes, fair-value review of hard-to-value investments — and now teaches finance teams to hand the mechanical parts of that work to AI without giving up an inch of control.",
    zh: "王雨岩现任德勤审计合伙人，拥有 16 年横跨加拿大、美国与中国的大型会计师事务所与企业财务咨询经验。他的职业生涯恰好浸泡在本课程要自动化的那些工作里——金融机构审计、季末结账、难估值投资的公允价值复核——如今他教财务团队把这些工作中机械的部分交给 AI，而控制力一寸不让。",
  },
  bio: [
    {
      en: "Every program is built the same way: a structured pre-session diagnostic of the client's own processes, data shapes and approved tools — then cases written to mirror them, so the room recognizes its own files on day one.",
      zh: "每套课程的搭建方式都一样：先对客户自身的流程、数据形态与合规工具做结构化课前调研，再据此编写案例——学员第一天就能认出自己的文件。",
    },
    {
      en: "The teaching stance comes from audit, not from technology sales: AI output is a draft until it is verified; every deliverable ships with its exception list; judgment is never delegated to a machine. That is why controllers, auditors and risk teams trust the material.",
      zh: "教学立场来自审计，而非技术销售：AI 产出在被验证之前只是草稿；每份交付物都附异常清单；判断永远不移交给机器。这正是财务控制、审计与风险团队信任这套材料的原因。",
    },
  ] as L[],
  expertiseTitle: { en: "Where he works", zh: "专业领域" },
  expertise: [
    { en: "Audit of financial institutions", zh: "金融机构审计" },
    { en: "Quarter-end close & financial reporting", zh: "季末结账与财务报告" },
    { en: "Fair-value & Level-3 valuation review", zh: "公允价值与 Level 3 估值复核" },
    { en: "Anti-fraud & forensic data analytics", zh: "反欺诈与数据鉴证分析" },
    { en: "GenAI enablement for finance teams", zh: "财务团队生成式 AI 赋能" },
  ] as L[],
  quote: {
    en: "“Training only counts if it survives contact with Monday morning. My job is that your team walks out with prompts they will actually use at the next close — and the judgment to check what comes back.”",
    zh: "“培训只有扛得住周一早上的真实工作才算数。我的任务是让团队带着下个结账周期真会用的提示词离场——以及核验 AI 产出的判断力。”",
  },
  points: [
    {
      title: { en: "Built by a practitioner, not a vendor", zh: "出自实务者，而非厂商" },
      body: {
        en: "Cases come from real finance and audit work — accruals, AP, variance, valuation review — so the room recognizes its own files on day one.",
        zh: "案例源自真实的财务与审计工作——应计、应付、差异、估值复核——学员第一天就认出自己的文件。",
      },
    },
    {
      title: { en: "Control-first, audit-grade", zh: "控制优先、审计级" },
      body: {
        en: "Every AI output is paired with an exception log and a verification step, consistent with IAASB and FRC positions: judgment stays human.",
        zh: "每份 AI 产出都配异常日志与验证步骤，与 IAASB、FRC 立场一致：判断权留给人。",
      },
    },
    {
      title: { en: "Bilingual, cross-border", zh: "双语、跨境" },
      body: {
        en: "Delivered in English or Chinese, calibrated to your network, approved tools and quarter-end calendar.",
        zh: "中英文皆可交付，按你的网络环境、合规工具与季末日历量身校准。",
      },
    },
  ],
  stats: [
    { value: "16 yrs", label: { en: "finance, audit & advisory", zh: "财务、审计与咨询" } },
    { value: "3", label: { en: "markets: Canada · US · China", zh: "市场：加拿大 · 美国 · 中国" } },
    { value: "EN / 中文", label: { en: "bilingual delivery", zh: "中英双语交付" } },
  ] as { value: string; label: L }[],
};

/* ---------------------------------------------------------- track record -- */
export const trackRecord = {
  eyebrow: { en: "Clients", zh: "服务客户" },
  title: { en: "Trusted by finance and audit teams at regulated institutions", zh: "受监管机构的财务与审计团队都在用" },
  intro: {
    en: "Programs delivered to date span development finance, insurance and asset-heavy corporates — institutions whose finance teams sit behind climate-era mandates and member-facing reporting. Client names are withheld as a matter of professional practice; each program was built from the institution's own processes and data shapes, and every dataset used in training is simulated.",
    zh: "已交付课程覆盖开发性金融、保险与重资产企业——这些机构的财务团队正支撑着气候时代的使命与面向成员的报告责任。按职业惯例隐去客户名称；每套课程都基于该机构自身的流程与数据形态搭建，培训所用数据均为模拟。",
  },
  segmentsTitle: { en: "Who this is for", zh: "适合哪些机构" },
  segments: [
    { en: "Multilateral development banks", zh: "多边开发银行" },
    { en: "Commercial & policy banks", zh: "商业银行与政策性银行" },
    { en: "Central banks & supervisors", zh: "中央银行与监管机构" },
    { en: "Insurers & asset managers", zh: "保险公司与资管机构" },
    { en: "Sovereign & pension funds", zh: "主权基金与养老金" },
    { en: "CFO offices of large corporates", zh: "大型企业 CFO 办公室" },
  ] as L[],
  programs: [
    {
      client: { en: "Multilateral development bank", zh: "多边开发银行" },
      tag: { en: "Controller's function", zh: "财务控制职能" },
      body: {
        en: "Quarter-end close, accruals, reporting and Level-3 valuation review — the six-case program featured on this site.",
        zh: "季末结账、应计、报告与 Level 3 估值复核——即本站展示的六案例课程。",
      },
    },
    {
      client: { en: "Top-tier Chinese insurer", zh: "头部中资保险公司" },
      tag: { en: "Internal audit", zh: "内部审计" },
      body: {
        en: "A seven-case program from remediation trackers to Benford-based anti-fraud analytics and valuation audit.",
        zh: "七案例课程，从整改台账到基于 Benford 定律的反欺诈分析与估值审计。",
      },
    },
    {
      client: { en: "Commercial-vehicle finance & logistics group", zh: "商用车金融与物流集团" },
      tag: { en: "Finance & operations", zh: "财务与运营" },
      body: {
        en: "Ledger automation, portfolio-quality analytics and reporting pipelines across finance and operations.",
        zh: "覆盖财务与运营的台账自动化、资产质量分析与报告流水线。",
      },
    },
  ] as { client: L; tag: L; body: L }[],
};

/* -------------------------------------------------------------- workflows -- */
export const workflows = {
  eyebrow: { en: "What we train", zh: "培训内容" },
  title: {
    en: "From a raw ledger to a board deck — in one connected quarter",
    zh: "从原始台账到董事会简报——串在同一个季度里",
  },
  intro: {
    en: "Participants work one simulated quarter end to end: Excel finds the numbers, Word turns them into the memo, PowerPoint turns the memo into the deck. Six hands-on cases in the session, plus a valuation-review case to take home. Full case materials, data packs and reference solutions are provided in the session, not published here.",
    zh: "学员完整跑通一个模拟季度：Excel 把数字算出来，Word 把数字写成备忘录，PowerPoint 把备忘录变成简报。课内六个实操案例，另附一个估值复核案例带回去做。完整案例材料、数据包与参考解法在课上提供，不在本站公开。",
  },
  items: [
    { tag: { en: "Excel · Split", zh: "Excel · 拆分" }, title: { en: "Ledger splitting & distribution", zh: "总账拆分与分发" } },
    { tag: { en: "Excel · Merge", zh: "Excel · 合并" }, title: { en: "Quarter-end accrual consolidation", zh: "季末应计归集" } },
    { tag: { en: "Excel · Clean", zh: "Excel · 清洗" }, title: { en: "Invoice-register cleanup & duplicate-payment checks", zh: "发票台账清洗与重复付款核查" } },
    { tag: { en: "Excel · Analyze", zh: "Excel · 分析" }, title: { en: "Budget-vs-actual variance dashboards", zh: "预算执行差异看板" } },
    { tag: { en: "Word · Draft", zh: "Word · 起草" }, title: { en: "The quarterly memo — drafted, tightened, fact-checked", zh: "季度备忘录——起草、收紧、逐句核对" } },
    { tag: { en: "PowerPoint · Present", zh: "PowerPoint · 表达" }, title: { en: "The board briefing deck, built from the memo", zh: "由备忘录直接生成的董事会简报" } },
    { tag: { en: "Take-home · Review", zh: "课后 · 复核" }, title: { en: "Fair-value roll-forward screening (Level 3)", zh: "公允价值滚动筛查（Level 3）" } },
  ] as { tag: L; title: L }[],
  note: {
    en: "Everything runs on Microsoft 365 Copilot inside Excel, Word and PowerPoint — the apps your team already has open — with the four prompt principles drilled at every step.",
    zh: "全程都在 Microsoft 365 Copilot 上完成——Excel、Word、PowerPoint，团队本来就开着的那三个应用；四条提示词原则贯穿每一步。",
  },
};

/* -------------------------------------------------------------------- cta -- */
export const cta = {
  eyebrow: { en: "Bring this to your team", zh: "把它带给你的团队" },
  title: {
    en: "A working session your finance team will use the next Monday",
    zh: "一场你的财务团队下周一就会用起来的实操课",
  },
  body: {
    en: "Tuned to your institution, your network and your approved tools — in English or Chinese. Tell us your team's biggest quarter-end pain and we'll shape the session around it.",
    zh: "按你的机构、网络与合规工具定制——中英文皆可。告诉我们团队季末最大的痛点，我们就围绕它设计这场课。",
  },
  emailLabel: { en: "Email the instructor", zh: "邮件联系讲师" },
  email: "tomywang@deloitte.com.cn",
  secondaryLabel: { en: "See the full program", zh: "查看完整课程" },
  points: [
    { en: "2.5–3 hours, in person, up to ~30 participants", zh: "2.5–3 小时，线下，约 30 人以内" },
    { en: "Zero installs; runs on the tools you already have", zh: "零安装；用你现成的工具即可" },
    { en: "Full kit included: handouts, data packs, answer pack", zh: "含全套包：讲义、数据包、答案册" },
  ] as L[],
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
