import type { L } from "./i18n";

/* Prompt Library data — the exact prompts from the instructor pack, plus each
   case's key takeaways (the instructor's "say it to the room" lines). Gated
   client-side; participants copy prompts from here during the exercises.
   Prompt text is English by design: it is meant to be pasted verbatim. */

export type VaultPrompt = {
  label: L;
  where: L; // which surface to paste it into
  text: string;
};

export type VaultCase = {
  num: number;
  app: string;
  label: string;
  prompts: VaultPrompt[];
  takeaways: L[];
};

export const promptVaultUi = {
  eyebrow: { en: "Module 4b · The prompt library", zh: "模块四之二 · 提示词库" },
  title: {
    en: "Every prompt from the session — ready to copy",
    zh: "本场培训的全部提示词——即拷即用",
  },
  intro: {
    en: "The exact prompts the instructor uses in each case, with the key takeaways worth keeping. Copy a prompt, adjust the file and column names to what is on your screen, and run it. Treat every prompt as a starting point — the skill is describing your outcome, not reciting someone else's.",
    zh: "讲师在每个案例中使用的原版提示词，以及值得记住的关键要点。复制提示词、把文件名列名改成你屏幕上的实际内容，然后运行。把每条提示词当作起点——功夫在于描述你要的结果，而不是背诵别人的句子。",
  },
  gate: {
    heading: { en: "Participant access", zh: "学员登录" },
    body: {
      en: "This library is for session participants. Enter the access credentials shared in the room.",
      zh: "本库供参训学员使用。请输入现场提供的访问账号。",
    },
    user: { en: "Username", zh: "用户名" },
    pass: { en: "Password", zh: "密码" },
    button: { en: "Unlock the library", zh: "解锁提示词库" },
    error: { en: "Wrong username or password.", zh: "用户名或密码不正确。" },
    lockNote: {
      en: "Credentials are announced during the session.",
      zh: "访问账号在培训现场公布。",
    },
  },
  labels: {
    prompts: { en: "The prompts", zh: "提示词" },
    takeaways: { en: "Key takeaways", zh: "关键要点" },
    copy: { en: "Copy", zh: "复制" },
    copied: { en: "Copied ✓", zh: "已复制 ✓" },
    where: { en: "Paste into", zh: "粘贴到" },
    signOut: { en: "Lock", zh: "锁定" },
    note: {
      en: "Prompts are starting points — rename sheets, columns and thresholds to match your file, and always keep a report-back line at the end.",
      zh: "提示词只是起点——把表名、列名、阈值改成你文件里的实际值，并始终在结尾保留一句“报告你做了什么”。",
    },
  },
};

export const promptVault: VaultCase[] = [
  {
    num: 1,
    app: "Excel",
    label: "Data Splitting — two ways",
    prompts: [
      {
        label: { en: "Part 1 · Generate the VBA macro", zh: "第一部分 · 生成 VBA 宏" },
        where: { en: "Any AI chat (Copilot Chat, ChatGPT, Claude)", zh: "任一 AI 聊天（Copilot Chat、ChatGPT、Claude）" },
        text: `I have an Excel file with one sheet called "Expense Ledger H1 2026",
720 rows. Column C is "Department" (10 departments). Please write a
VBA macro that:
1. Creates one worksheet per department containing only that
   department's rows, with the header row kept;
2. Adds a "Summary" sheet listing each department, its number of
   entries and the total of column I "Amount (USD)", sorted largest
   first.
Everything stays inside this one workbook. I am on a Mac (or: on
Windows). Tell me step by step where to paste and run it.`,
      },
      {
        label: { en: "Part 2 · The same job in Copilot", zh: "第二部分 · Copilot 完成同一任务" },
        where: { en: "Copilot pane in Excel — mode: Allow editing", zh: "Excel 的 Copilot 窗格——模式：允许编辑" },
        text: `Create one worksheet per department containing only that department's
rows, keeping the header row. Then add a Summary sheet listing each
department, its number of entries and the total of Amount (USD),
sorted largest first. Tell me the row count of each new sheet.`,
      },
      {
        label: { en: "Follow-up · Fix the number format", zh: "追问 · 修正数字格式" },
        where: { en: "Copilot pane in Excel", zh: "Excel 的 Copilot 窗格" },
        text: `Format the totals in the Summary sheet as plain numbers with a
thousands separator and two decimals - no currency symbol.`,
      },
      {
        label: { en: "Stretch · Share of total spend", zh: "进阶 · 支出占比" },
        where: { en: "Copilot pane in Excel", zh: "Excel 的 Copilot 窗格" },
        text: `In the Summary sheet, add a column showing each department's share of
total spend as a percentage, and highlight in amber any department
above 15% of the total.`,
      },
    ],
    takeaways: [
      {
        en: "Everything AI does to a computer, it does one way: it writes instructions, and the machine executes them. See it once — and it is a tool, not a magic trick.",
        zh: "AI 对计算机做的一切，方式只有一种：写指令，机器执行。亲眼看过一次——它就是工具，不是魔术。",
      },
      {
        en: "What you needed to be today: not a programmer — a clear describer. AI wrote the whole macro from four sentences of plain English.",
        zh: "今天你需要成为的，不是程序员——而是一个把话说清楚的人。AI 用四句大白话写出了整个宏。",
      },
      {
        en: "The last line — “tell me the row count of each sheet” — costs nothing and turns a black box into something you can audit. Put that line, or one like it, in every prompt you ever write.",
        zh: "最后一句——“报告每张表的行数”——不费一字之力，却把黑箱变成可审计的东西。以后你写的每一条提示词，都带上这样一句。",
      },
      {
        en: "The numbers were right and the currency symbol was wrong. AI gets the hard part right and the easy part wrong more often than the reverse — that is exactly why the checking stays with you.",
        zh: "数字全对，货币符号却错了。AI 常常做对难的、做错易的——这正是复核必须留在你手里的原因。",
      },
      {
        en: "Access to the tool is not the skill. Describing clearly and checking properly — that is the skill, and it is yours by the end of today.",
        zh: "拿到工具不等于掌握技能。把要求说清楚、把结果验扎实——那才是技能，而今天结束时它就是你的。",
      },
    ],
  },
  {
    num: 2,
    app: "Excel",
    label: "Quarter-End Accrual Consolidation",
    prompts: [
      {
        label: { en: "Opening move · Copilot as formula doctor", zh: "开场 · 让 Copilot 当公式医生" },
        where: { en: "Copilot pane in Excel", zh: "Excel 的 Copilot 窗格" },
        text: `My XLOOKUP of Vendor ID from "Open POs" into "Vendor Master" returns
#N/A even though the IDs look the same in both sheets. Why, and how
do I fix it?`,
      },
      {
        label: { en: "The build · schedule + JE summary + flags", zh: "主体 · 应计表 + 分录汇总 + 标记" },
        where: { en: "Copilot pane in Excel — mode: Allow editing", zh: "Excel 的 Copilot 窗格——模式：允许编辑" },
        text: `This workbook has 3 sheets: "Open POs" (36 rows: PO Number, PO Date,
Department, Vendor ID, PO Description, PO Amount, Invoiced to Date,
PO Status), "Delivery Confirmations" (PO Number, % Delivered as of
30 Jun 2026, Confirmed By) and "Vendor Master" (Vendor ID, Vendor
Name, Country, Payment Terms).
Careful: Vendor ID is text in Open POs but a number in Vendor Master
- normalize before matching.
Create a sheet "Accrual Schedule": all Open PO rows, plus Vendor Name
and Country from the master, plus % Delivered, plus an Accrual column
= PO Amount * % Delivered - Invoiced to Date, floored at zero.
POs with no confirmation: zero accrual and flag "NO CONFIRMATION".
Vendor IDs not in the master: flag "VENDOR NOT IN MASTER".
Then create a sheet "JE Summary": accrual total per department and a
grand total row. Tell me every flag you raised.`,
      },
      {
        label: { en: "The hand-off · the chase email", zh: "交接 · 催办邮件" },
        where: { en: "Copilot in Word — after pasting the flagged rows", zh: "Word 的 Copilot——先把被标记的行粘进去" },
        text: `Using the table above, draft a short, polite email to the department
focal points chasing the missing delivery confirmations for Q2 close.
List the specific PO numbers and amounts, state that without a
confirmation we must accrue zero, and ask for a reply by Friday.
Keep it under 150 words.`,
      },
    ],
    takeaways: [
      {
        en: "Every #N/A, every broken SUMIFS at quarter-end now has a first responder: paste the formula, paste the symptom, ask why. For many people these three minutes alone justify the licence.",
        zh: "季末每一个 #N/A、每一条坏掉的 SUMIFS，现在都有了第一响应者：贴公式、贴症状、问为什么。对很多人来说，仅这三分钟就值回整个许可证。",
      },
      {
        en: "“What didn't match?” is the professional question — and it is YOUR question, not the machine's. A clean-looking schedule with no exceptions listed isn't clean; it's unexamined.",
        zh: "“哪些没对上？”是职业问题——而且是你的问题，不是机器的。一张看起来干净却没有例外清单的表，不是干净，是没被检查过。",
      },
      {
        en: "AI must never invent a number to fill a gap — it must surface the gap. Zero accrual plus a flag beats a guessed percentage every time. If your prompt doesn't say what to do with missing data, the AI will guess. So say it.",
        zh: "AI 绝不能编一个数字去填缺口——它必须把缺口亮出来。零应计加一个标记，永远好过一个猜出来的百分比。你的提示词不说缺数据怎么办，AI 就会猜。所以要说。",
      },
      {
        en: "The chase email was not a spreadsheet operation at all. The numbers were Excel's job; the follow-up is Word's. The work follows you across rooms.",
        zh: "那封催办邮件根本不是表格操作。数字是 Excel 的活，跟进是 Word 的活。工作会跟着你换房间。",
      },
    ],
  },
  {
    num: 3,
    app: "Excel",
    label: "AP Invoice Register Cleanup",
    prompts: [
      {
        label: { en: "The cleaning prompt", zh: "清洗主提示词" },
        where: { en: "Copilot pane in Excel — mode: Allow editing", zh: "Excel 的 Copilot 窗格——模式：允许编辑" },
        text: `Sheet "Invoice Register (raw)" (~64 rows) has columns: Invoice No,
Vendor Name, Invoice Date, Received Date, Currency, Amount,
Department, PO Reference, Status. First copy it to a new sheet
"Cleaned", then on "Cleaned":
1. Delete completely blank rows, and rows that are exact duplicates
   of another row across ALL columns;
2. Convert every Invoice Date and Received Date to a real date
   (several formats are mixed in, including one Excel serial number);
3. Convert Amount to real numbers; an amount in parentheses is a
   credit note and must be negative; if a value is not a number at
   all (e.g. "TBC"), leave the cell but highlight it yellow;
4. Standardize: trim Vendor Name spaces, fix ALL-CAPS names to proper
   case, unify "Ltd."/"Ltd"; make Currency uppercase "USD"; map
   department shorthand to the standard names ("IT" ->
   "Information Technology", "Office of Controller" -> "Office of
   the Controller");
5. Highlight RED any Invoice No that appears more than once, and
   highlight YELLOW any row where Received Date is before Invoice
   Date, or the Invoice No is missing.
List every change and every highlight you made, grouped by type.`,
      },
      {
        label: { en: "The money question · duplicate payments", zh: "关键一问 · 重复付款" },
        where: { en: "Copilot pane in Excel", zh: "Excel 的 Copilot 窗格" },
        text: `In "Cleaned", find invoices that share an Invoice No but differ in
other columns (different received date or status). For each, explain
why it might be a duplicate payment risk and what AP should check.`,
      },
    ],
    takeaways: [
      {
        en: "Stop looking for problems; define what clean means, column by column, and let Copilot enforce the definition on every row. Defining “clean” is accounting knowledge — the sweep is the machine's job.",
        zh: "别再靠肉眼找问题；逐列定义什么叫“干净”，让 Copilot 把定义施加到每一行。定义“干净”是会计的专业知识——扫描是机器的活。",
      },
      {
        en: "Cleaning always produces TWO deliverables: the clean table AND the log of every change. A silent fix is worse than dirty data — dirty data is at least honest about itself.",
        zh: "清洗永远交付两样东西：干净的表，和每一处改动的日志。悄悄修掉比脏数据更糟——脏数据起码诚实。",
      },
      {
        en: "Should the AI have deleted INV-38150 as a duplicate — or kept it and flagged it? That distinction is a control decision, and it came from this room, not from the model.",
        zh: "INV-38150 该当重复删掉，还是留下并标记？这个区分是控制决策——它来自这间屋子，不来自模型。",
      },
      {
        en: "64 rows is an afternoon by hand. 6,400 rows is the same prompt. Full-population checking replaces sampling — the same shift your auditors are making.",
        zh: "64 行手工要一下午，6,400 行还是同一条提示词。全量核查取代抽样——你的审计师正在经历同样的转变。",
      },
    ],
  },
  {
    num: 4,
    app: "Excel",
    label: "Budget vs Actual Variance Dashboard",
    prompts: [
      {
        label: { en: "Beat 1 · The variance table", zh: "第一步 · 差异表" },
        where: { en: "Copilot pane in Excel — mode: Allow editing", zh: "Excel 的 Copilot 窗格——模式：允许编辑" },
        text: `This workbook has "Budget FY2026" (Department, Expense Category, GL
Account, FY2026 Budget, H1 Budget) and "Actuals H1 2026" (Posting
Month, Department, Cost Center, GL Account, Expense Category, Vendor,
Amount - 849 rows). Create a sheet "Variance by Department": for each
department, H1 actual, H1 budget, variance (actual minus budget) and
utilization % (actual / H1 budget), sorted by utilization descending,
utilization formatted as a percentage. Highlight red any department
above 100%.`,
      },
      {
        label: { en: "Beat 2 · The one-word rerun", zh: "第二步 · 改一个词重跑" },
        where: { en: "Copilot pane in Excel", zh: "Excel 的 Copilot 窗格" },
        text: `Same again on a new sheet, but by Expense Category instead of
Department. Then a third sheet "Top Overruns": the top 10
Department x Expense Category line items by variance in USD, with
utilization %.`,
      },
      {
        label: { en: "Beat 3 · Charts that carry conclusions", zh: "第三步 · 带结论的图表" },
        where: { en: "Copilot pane in Excel", zh: "Excel 的 Copilot 窗格" },
        text: `Create a bar chart of utilization % by department with a line marking
100%, and put a one-sentence takeaway from the data in the chart
title. Then a chart of monthly total spend Jan-Jun; if spend is
accelerating, say so in the title.`,
      },
      {
        label: { en: "Beat 4 · Commentary — with the control built in", zh: "第四步 · 评论——自带控制" },
        where: { en: "Copilot pane in Excel", zh: "Excel 的 Copilot 窗格" },
        text: `Which single line item, if brought back to budget, would move the
bank-wide utilization the most, and by how many percentage points?
Then write three bullet points of commentary for the budget review -
each bullet must quote the specific numbers it relies on.`,
      },
    ],
    takeaways: [
      {
        en: "Watch the prompt, not the screen. Analysis has a grammar — dimension, measure, comparison. Change one word and you get a different analysis. You are not receiving reports from AI; you are steering it.",
        zh: "盯着提示词，别盯着屏幕。分析自有语法——维度、度量、比较基准。改一个词，就是另一份分析。你不是在接收 AI 的报告，你在驾驶它。",
      },
      {
        en: "An axis is not an insight. Every chart that leaves your desk should carry its conclusion in the title — if a manager has to read the bars to find the point, the chart isn't finished.",
        zh: "坐标轴不是洞察。离开你桌面的每张图，标题里都该写着结论——如果经理还得自己读柱子找重点，这张图就没做完。",
      },
      {
        en: "The numbers came from the data. The commentary came from a language model — different origin, different risk, different check. Make it quote its numbers, then trace one to a cell before you believe it.",
        zh: "数字来自数据，评论来自语言模型——来源不同、风险不同、核对方式也不同。让它引用数字，然后先追到单元格，再选择相信。",
      },
    ],
  },
  {
    num: 5,
    app: "Word",
    label: "The Quarterly Flash-Report Memo",
    prompts: [
      {
        label: { en: "The draft · memo from the pasted tables", zh: "起草 · 从粘贴的表格生成备忘录" },
        where: { en: "Copilot in Word — after pasting the five tables in", zh: "Word 的 Copilot——先把五张表粘进文档" },
        text: `Using only the five tables in this document, draft the "Office of the
Controller - Q2 2026 Flash Report" as a memo with Word heading styles:
1. "Executive summary" - exactly 3 bullets, each quoting the numbers
   it relies on;
2. "Key indicators" - all 6 KPIs with the direction vs prior period;
3. "Budget position" - name who is over 100% and who is far under;
4. "Monthly trend" - is spend accelerating? Quote the months;
5. "Top vendors" - state the concentration in one line;
6. "Open items" - keep all 5, add a one-line status read.
Strictly from these numbers - if a claim is not supported by a table
in this document, do not make it.`,
      },
      {
        label: { en: "Edit ① · Tighten", zh: "修改① · 收紧" },
        where: { en: "Copilot in Word", zh: "Word 的 Copilot" },
        text: `Tighten the executive summary to three single sentences.`,
      },
      {
        label: { en: "Edit ② · Board register", zh: "修改② · 董事会语域" },
        where: { en: "Copilot in Word", zh: "Word 的 Copilot" },
        text: `Rewrite the "Budget position" section for a board audience: neutral
register, no adjective that the numbers don't support, no more than
120 words.`,
      },
      {
        label: { en: "Edit ③ · Structure the open items", zh: "修改③ · 待办事项表格化" },
        where: { en: "Copilot in Word", zh: "Word 的 Copilot" },
        text: `Turn the open items into a table with columns: Item, Owner, Due date,
Status. Keep every item.`,
      },
      {
        label: { en: "The fix · repair an unsupported claim", zh: "修复 · 纠正无依据的表述" },
        where: { en: "Copilot in Word — after your fact-check finds one", zh: "Word 的 Copilot——在你核查出问题之后" },
        text: `The bullet about [X] is not supported by the tables. Rewrite it using
only the figures in the "Key indicators" and "Budget position"
sections, and quote them.`,
      },
    ],
    takeaways: [
      {
        en: "One rule explains everything in Word: Copilot only knows what is IN your document. Thirty seconds of paste, then ask. That is not a workaround — that is the design.",
        zh: "Word 里一条规则解释一切：Copilot 只认识文档里已有的内容。先花三十秒粘贴，再开口问。这不是变通——这就是设计。",
      },
      {
        en: "You are not writing anymore — you are editing by instruction. Assembly is now free; what remains of your afternoon is judgment.",
        zh: "你已经不是在写作——你是在用指令编辑。组装已经免费，下午剩下的，是判断。",
      },
      {
        en: "“This is the sentence that would have gone to the Board. It took forty seconds to catch against the table.” The drafting is free — those forty seconds are the job now. Fact-check the executive summary every single time.",
        zh: "“这就是差点上董事会的那句话——对着表格核对只花了四十秒。”起草已经免费——那四十秒才是工作本身。执行摘要每次都要逐句核对。",
      },
    ],
  },
  {
    num: 6,
    app: "PowerPoint",
    label: "The Board Briefing Deck",
    prompts: [
      {
        label: { en: "Create · deck from the memo", zh: "生成 · 由备忘录建 deck" },
        where: { en: "PowerPoint → Copilot → Create presentation from file → pick the memo (must be in OneDrive)", zh: "PowerPoint → Copilot → 从文件创建演示文稿 → 选中备忘录（须存于 OneDrive）" },
        text: `(UI action - no prompt needed: Copilot reads the memo's heading
structure and drafts the deck. Then run the polish prompts below.)`,
      },
      {
        label: { en: "Polish ① · Titles that state the finding", zh: "打磨① · 让标题说出结论" },
        where: { en: "Copilot pane in PowerPoint", zh: "PowerPoint 的 Copilot 窗格" },
        text: `Rewrite every slide title so that it states the takeaway, not the
topic. The title must contain the finding and, where relevant, the
number. One message per slide - if a slide argues two things, split
it into two.`,
      },
      {
        label: { en: "Polish ② · Opening slide + speaker notes", zh: "打磨② · 开场页与演讲备注" },
        where: { en: "Copilot pane in PowerPoint", zh: "PowerPoint 的 Copilot 窗格" },
        text: `Add an opening slide after the title: "The three things you need to
know" - three bullets, each one a number, not an adjective. Then make
sure every slide has speaker notes saying what the presenter should
actually say - two or three sentences, in a neutral register.`,
      },
      {
        label: { en: "The test · condense and see what it cuts", zh: "测试 · 压缩并看它砍了什么" },
        where: { en: "Copilot pane in PowerPoint", zh: "PowerPoint 的 Copilot 窗格" },
        text: `Condense this to five slides for a shorter slot. Then tell me what
you dropped and why.`,
      },
      {
        label: { en: "Fallback · slides from a pasted outline", zh: "兜底 · 从粘贴的大纲生成" },
        where: { en: "Copilot pane in PowerPoint — if create-from-file is unavailable", zh: "PowerPoint 的 Copilot 窗格——当“从文件创建”不可用时" },
        text: `Create slides from this outline: one slide per heading, the takeaway
as the slide title, the supporting numbers as bullets, and speaker
notes for each slide.`,
      },
    ],
    takeaways: [
      {
        en: "Structure in, structure out. PowerPoint builds slides from your heading structure — the outline in Word's navigation pane IS the deck. You already built it.",
        zh: "结构进，结构出。PowerPoint 按标题层级生成幻灯片——Word 导航窗格里的大纲就是这份 deck。你早就把它建好了。",
      },
      {
        en: "Read only the titles, in order. That is the entire briefing — if they don't tell the story alone, the deck isn't finished. And a title that carries a conclusion forces YOU to decide what the conclusion is.",
        zh: "只按顺序读标题。那就是整场汇报——如果光读标题讲不通故事，deck 就没做完。而一个带结论的标题，会逼你先决定结论是什么。",
      },
      {
        en: "What an AI chooses to cut is the fastest way to see what it thinks matters — and to notice it doesn't know what your auditors care about. “Important” is a professional judgment, not a statistical one.",
        zh: "看 AI 砍掉了什么，是看清它心中轻重的最快方式——也是发现它并不懂你的审计师在乎什么的最快方式。“重要”是职业判断，不是统计判断。",
      },
      {
        en: "Step back: a raw ERP extract became reports, a reconciled accrual, a clean register, a dashboard, a memo and this deck — in the three apps you already had open. And every judgment along the way was yours.",
        zh: "回头看：一份 ERP 原始导出，变成了部门报表、对平的应计、干净的台账、看板、备忘录和这份 deck——全在你本来就开着的三个应用里。而一路上每个判断都是你下的。",
      },
    ],
  },
  {
    num: 7,
    app: "Excel + Word",
    label: "Investment FV Roll-Forward Review (take-home)",
    prompts: [
      {
        label: { en: "Step 1 · The screening columns", zh: "第一步 · 筛查列" },
        where: { en: "Copilot pane in Excel — mode: Allow editing", zh: "Excel 的 Copilot 窗格——模式：允许编辑" },
        text: `Sheet "FV Rollforward" has 12 investments with columns: Cost (USD),
FV FY25Q2 ... FV FY26Q2 (five quarters), Valuation Method, Last
Transaction Date. Add columns:
1. "FV/Cost" = FV FY26Q2 / Cost;
2. "QoQ %" = FV FY26Q2 / FV FY26Q1 - 1, as a percentage;
3. "YoY %" = FV FY26Q2 / FV FY25Q2 - 1, as a percentage;
4. "Flag" - letter A if FV/Cost < 0.70; letter B if QoQ < -20%; letter
   C if Valuation Method is "Recent Transaction Price" AND the Last
   Transaction Date is earlier than 2025-06-30; combine letters if
   several apply, blank if none.
Then sort by FV/Cost ascending and colour flagged rows: red for A,
amber for B or C. Tell me which investments got which flags.`,
      },
      {
        label: { en: "Step 2 · The chart with thresholds", zh: "第二步 · 带阈值线的图" },
        where: { en: "Copilot pane in Excel", zh: "Excel 的 Copilot 窗格" },
        text: `Create a bar chart of FV/Cost by investment ID, sorted ascending, with
horizontal lines at 1.0 (cost) and 0.70 (review threshold), and a
one-line takeaway in the title naming the outliers.`,
      },
      {
        label: { en: "Step 3 · The review memo", zh: "第三步 · 复核备忘录" },
        where: { en: "Copilot in Word — after pasting the flagged rows", zh: "Word 的 Copilot——先把被标记的行粘进去" },
        text: `Using the table above, draft a "Matters for reviewer attention"
section for the Q2 valuation review memo. For each flagged
investment: the flag, the specific numbers, and what evidence to
request from the deal team. Formal register. Do not soften the
numbers.`,
      },
    ],
    takeaways: [
      {
        en: "The rules come from the reviewer; the sweep comes from the machine. Thresholds are parameters — when someone says “our threshold isn't 0.70”, change one line and rerun.",
        zh: "规则来自复核人，扫描来自机器。阈值只是参数——有人说“我们的阈值不是 0.70”，改一行、重跑就是。",
      },
      {
        en: "The portfolio ratio is 1.04 — comfortably above cost — and it is hiding a collapsed position, a 23% quarterly drop, and a valuation nobody has re-priced in 19 months. Aggregates camouflage; screen at line level.",
        zh: "组合比率 1.04，稳稳高于成本——却藏着一笔崩塌的头寸、一笔单季跌 23% 的头寸、和一笔十九个月没人重估的估值。汇总数会伪装；要逐行筛查。",
      },
      {
        en: "Copilot screens and drafts; the reviewer decides. The write-down call, the evidence assessment, the sign-off — none of that moved, and none of it will.",
        zh: "Copilot 负责筛查和起草；复核人负责决定。减值判断、证据评估、签字——这些都没有移交，也永远不会。",
      },
    ],
  },
];
