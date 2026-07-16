import { motion, useInView } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Ban,
  BookOpenCheck,
  Boxes,
  Bot,
  CheckCircle2,
  ClipboardCheck,
  Check,
  Clock3,
  Download,
  Eye,
  ExternalLink,
  FileSpreadsheet,
  FileText,
  FolderArchive,
  Landmark,
  Languages,
  Layers,
  Mail,
  Copy,
  KeyRound,
  Lock,
  MessageSquareText,
  MoveRight,
  Presentation,
  Quote,
  ScanSearch,
  ShieldAlert,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  TrendingUp,
  UserRound,
  Wand2,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  bigNumbers,
  casesUi,
  copilot,
  downloads,
  footer,
  foundations,
  governance,
  hero,
  instructor,
  insightsSection,
  materials,
  nav,
  outlook,
  program,
} from "./content";
import { caseDocs } from "./casesData";
import { promptVault, promptVaultUi } from "./promptsData";
import { useLang } from "./i18n";

/* ------------------------------------------------------------ primitives -- */

/**
 * Scroll-reveal that can never leave content invisible: animates when the
 * element enters the viewport, or after a short fallback timeout - whichever
 * comes first (headless browsers, embeds and odd scroll containers included).
 */
function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "article" | "p" | "h3";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const [forced, setForced] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setForced(true), 1800);
    return () => clearTimeout(t);
  }, []);
  const show = inView || forced;
  const M = motion[as];
  return (
    <M
      ref={ref}
      className={className}
      initial={{ y: 18 }}
      animate={show ? { y: 0 } : undefined}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </M>
  );
}

/**
 * Animated bar that can never end up empty: it fills when scrolled into view,
 * or after a short fallback timeout - whichever comes first. Same guarantee as
 * Reveal, and for the same reason: headless renders, print/PDF export and odd
 * scroll containers must still show the data, not a blank track.
 */
function Bar({
  pct,
  fill,
  delay = 0,
  height = "h-2",
}: {
  pct: number; // 0-100, share of the track to fill
  fill: string; // any CSS background value
  delay?: number;
  height?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [forced, setForced] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setForced(true), 1600);
    return () => clearTimeout(t);
  }, []);
  const show = inView || forced;
  return (
    <div ref={ref} className={`${height} w-full overflow-hidden rounded-full bg-mist/70`}>
      <motion.div
        className="h-full rounded-full"
        style={{ background: fill }}
        initial={{ width: 0 }}
        animate={{ width: show ? `${Math.max(0, Math.min(100, pct))}%` : 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay }}
      />
    </div>
  );
}

function SectionHead({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display mt-3 text-3xl leading-tight font-semibold text-navy md:text-[2.6rem]">
        {title}
      </h2>
      {intro ? <p className="mt-5 text-[15px] leading-7 text-slate">{intro}</p> : null}
      <div className="rule mt-8" />
    </Reveal>
  );
}

function Stars({ n }: { n: number }) {
  return (
    <span className="inline-flex items-center gap-[2px] text-gold" aria-label={`difficulty ${n} of 5`}>
      {Array.from({ length: n }).map((_, i) => (
        <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
      ))}
      {Array.from({ length: 5 - n }).map((_, i) => (
        <Star key={i} size={12} className="text-mist" strokeWidth={1.4} />
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------- nav -- */

function Nav() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-mist/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-navy font-display text-lg font-bold text-[#66D1CC]">
            Æ
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight text-navy md:text-base">
            {t(nav.brand)}
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-[13.5px] font-medium text-slate transition-colors hover:text-teal-deep"
            >
              {t(l.label)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="flex items-center gap-1.5 rounded-full border border-mist bg-panel px-3 py-1.5 font-mono text-xs font-medium text-navy transition-colors hover:border-teal hover:text-teal-deep"
            aria-label="Switch language"
          >
            <Languages size={13} />
            {lang === "en" ? "中文" : "EN"}
          </button>
          <button
            className="md:hidden rounded-md border border-mist bg-panel px-2.5 py-1.5 text-xs font-mono text-navy"
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            ☰
          </button>
        </div>
      </div>
      {open ? (
        <nav className="border-t border-mist bg-paper px-5 py-3 md:hidden">
          {nav.links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-slate"
            >
              {t(l.label)}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

/* ------------------------------------------------------------------ hero -- */

function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="ledger-bg relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24">
      <div className="relative mx-auto max-w-6xl px-5">
        <p className="eyebrow">{t(hero.eyebrow)}</p>
        <h1 className="font-display mt-5 max-w-4xl text-4xl leading-[1.12] font-bold text-navy md:text-[4rem]">
          {t(hero.title)}
        </h1>
        <p className="mt-6 max-w-3xl text-[15.5px] leading-7 text-slate">{t(hero.subtitle)}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#cases"
            className="group inline-flex items-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-2"
          >
            {t(hero.ctaCases)}
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#downloads"
            className="inline-flex items-center gap-2 rounded-md border border-navy/25 bg-panel px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-teal hover:text-teal-deep"
          >
            {t(hero.ctaDownloads)}
          </a>
        </div>

        <p className="mt-6 inline-flex max-w-2xl items-start gap-2 rounded-md border border-teal/40 bg-teal-wash px-3.5 py-2.5 text-[12.5px] font-medium leading-5 text-teal-deep">
          <Landmark size={14} className="mt-0.5 shrink-0" />
          {t(hero.badge)}
        </p>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-mist bg-mist md:grid-cols-4">
          {hero.stats.map((s, i) => (
            <div key={i} className="bg-panel px-5 py-5">
              <div className="font-mono text-[1.7rem] font-semibold text-teal-deep">{s.value}</div>
              <div className="mt-1 text-[12.5px] leading-5 text-slate">{t(s.label)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- opening numbers -- */

function BigNumbers() {
  const { t } = useLang();
  return (
    <section className="dark-band py-20 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-3xl">
          <p className="eyebrow !text-[#7FD8D4]">{t(bigNumbers.eyebrow)}</p>
          <h2 className="font-display mt-3 text-3xl leading-tight font-semibold md:text-[2.6rem]">
            {t(bigNumbers.title)}
          </h2>
          <p className="mt-5 text-[15px] leading-7 text-white/70">{t(bigNumbers.intro)}</p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bigNumbers.stats.map((st, i) => (
            <Reveal
              key={i}
              delay={i * 0.05}
              className="flex flex-col rounded-lg border border-white/12 bg-white/[0.05] p-6"
            >
              <div className="font-mono text-[2.6rem] leading-none font-semibold tracking-tight text-[#7FD8D4]">
                {st.value}
              </div>
              <p className="mt-4 text-[13.5px] leading-6 text-white/80">{t(st.label)}</p>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" className="mt-8 font-mono text-[11px] leading-5 text-white/45">
          {bigNumbers.source}
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- program -- */

function Program() {
  const { t } = useLang();
  return (
    <section id="program" className="dark-band py-20 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-3xl">
          <p className="eyebrow !text-[#7FD8D4]">{t(program.eyebrow)}</p>
          <h2 className="font-display mt-3 text-3xl leading-tight font-semibold md:text-[2.6rem]">
            {t(program.title)}
          </h2>
          <p className="mt-5 text-[15px] leading-7 text-white/70">{t(program.intro)}</p>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {program.paths.map((p, i) => (
            <Reveal
              key={i}
              delay={i * 0.1}
              className={`rounded-lg border p-6 ${
                i === 1 ? "border-[#66D1CC]/50 bg-white/[0.07]" : "border-white/15 bg-white/[0.04]"
              }`}
            >
              <p className={`font-mono text-[11px] tracking-wider uppercase ${i === 1 ? "text-[#7FD8D4]" : "text-white/50"}`}>
                {t(p.tag)}
              </p>
              <h3 className="font-display mt-2 text-xl font-semibold">{t(p.title)}</h3>
              <p className="mt-3 text-[13.5px] leading-6 text-white/70">{t(p.body)}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="h3" className="font-display mt-14 text-xl font-semibold">
          {t(program.principlesTitle)}
        </Reveal>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {program.principles.map((p, i) => (
            <Reveal
              key={i}
              delay={i * 0.06}
              className="rounded-lg border border-white/12 bg-white/[0.04] p-5"
            >
              <div className="font-mono text-[11px] text-[#7FD8D4]">{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-1.5 font-semibold">{t(p.title)}</div>
              <p className="mt-2 text-[12.5px] leading-5 text-white/60">{t(p.body)}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <Reveal as="h3" className="font-display text-xl font-semibold">
              {t(program.agendaTitle)}
            </Reveal>
            <div className="mt-5 overflow-hidden rounded-lg border border-white/12">
              {program.agenda.map((a, i) => (
                <Reveal
                  key={i}
                  delay={i * 0.03}
                  className={`flex items-start gap-4 px-5 py-3.5 text-[13.5px] ${
                    i % 2 ? "bg-white/[0.03]" : "bg-white/[0.06]"
                  }`}
                >
                  <span className="font-mono text-xs text-[#7FD8D4] pt-0.5 w-10 shrink-0">{a.time}</span>
                  <span className="font-mono text-[11px] text-white/40 pt-0.5 w-8 shrink-0">{a.len}</span>
                  <span className="leading-5 text-white/85">{t(a.label)}</span>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal className="rounded-lg border border-white/12 bg-white/[0.04] p-6 self-start">
            <div className="flex items-center gap-2">
              <Clock3 size={16} className="text-[#7FD8D4]" />
              <h4 className="font-display text-lg font-semibold">{t(program.audience.title)}</h4>
            </div>
            <p className="mt-3 text-[13.5px] leading-6 text-white/70">{t(program.audience.body)}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- insights -- */

function Insights() {
  const { t } = useLang();
  return (
    <section id="insights" className="border-y border-mist bg-[#EFF3F6] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow={t(insightsSection.eyebrow)}
          title={t(insightsSection.title)}
          intro={t(insightsSection.intro)}
        />
        <div className="mt-12 space-y-12">
          {insightsSection.groups.map((g, gi) => (
            <div key={gi}>
              <Reveal
                as="h3"
                className="font-display flex items-center gap-2.5 text-xl font-semibold text-navy"
              >
                <Sparkles size={17} className="text-teal" />
                {t(g.title)}
              </Reveal>
              <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {g.items.map((it, i) => (
                  <Reveal
                    key={i}
                    delay={i * 0.06}
                    className="card-hover flex flex-col rounded-lg border border-mist bg-panel p-6"
                  >
                    <div className="font-mono text-lg font-semibold text-teal-deep">{t(it.stat)}</div>
                    <h4 className="mt-2 text-[15px] font-semibold text-navy">{t(it.head)}</h4>
                    <p className="mt-2.5 flex-1 text-[13px] leading-6 text-slate">{t(it.body)}</p>
                    <p className="mt-4 border-t border-mist pt-3 font-mono text-[10.5px] leading-4 text-slate/80">
                      {it.src}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Reveal as="p" className="mt-10 max-w-3xl font-mono text-[11px] leading-5 text-slate/80">
          {t(insightsSection.disclaimer)}
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- outlook -- */

function Outlook() {
  const { t } = useLang();
  const maxPct = Math.max(...outlook.risks.map((r) => r.pct));
  const maxOptimised = Math.max(...outlook.pillars.map((p) => p.optimised));
  return (
    <section id="outlook" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow={t(outlook.eyebrow)}
          title={t(outlook.title)}
          intro={t(outlook.intro)}
        />

        {/* 0 — the source report */}
        <Reveal className="mt-10">
          <a
            href={outlook.sourceHero.href}
            target="_blank"
            rel="noreferrer"
            className="card-hover group flex flex-col gap-4 rounded-xl border border-teal/30 bg-teal-wash/50 p-6 md:flex-row md:items-center md:gap-7 md:p-7"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy">
              <BookOpenCheck size={21} className="text-[#7FD8D4]" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="eyebrow">{t(outlook.sourceHero.label)}</p>
              <h3 className="font-display mt-1.5 text-lg leading-snug font-semibold text-navy">
                {t(outlook.sourceHero.title)}
              </h3>
              <p className="mt-1.5 font-mono text-[11px] leading-5 text-slate">
                {t(outlook.sourceHero.meta)}
              </p>
            </div>
            <ArrowUpRight
              size={18}
              className="shrink-0 text-teal transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>

        {/* 1 — the gap */}
        <Reveal
          as="h3"
          className="font-display mt-12 flex items-center gap-2.5 text-xl font-semibold text-navy"
        >
          <TrendingUp size={17} className="text-teal" />
          {t(outlook.gapTitle)}
        </Reveal>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {outlook.gap.map((g, i) => (
            <Reveal
              key={g.stat}
              delay={i * 0.06}
              className="card-hover flex flex-col rounded-lg border border-mist bg-panel p-6"
            >
              <div className="font-mono text-3xl leading-none font-semibold text-teal-deep">
                {g.stat}
              </div>
              <h4 className="mt-3.5 text-[15px] leading-6 font-semibold text-navy">{t(g.head)}</h4>
              <p className="mt-2.5 flex-1 text-[13px] leading-6 text-slate">{t(g.body)}</p>
              <p className="mt-4 border-t border-mist pt-3 font-mono text-[10.5px] leading-4 text-slate/80">
                {g.src}
              </p>
            </Reveal>
          ))}
        </div>

        {/* 2 — the reframe */}
        <Reveal className="dark-band mt-12 rounded-xl px-7 py-10 text-white md:px-12 md:py-12">
          <Quote size={26} className="text-[#7FD8D4]" />
          <blockquote className="font-display mt-4 max-w-4xl text-[22px] leading-[1.45] font-semibold md:text-[30px]">
            {t(outlook.quote)}
          </blockquote>
          <p className="mt-4 font-mono text-[11px] leading-5 text-white/55">{outlook.quoteSrc}</p>
          <div className="mt-8 max-w-3xl border-t border-white/15 pt-6">
            <p className="text-[14px] leading-7 text-white/85">{t(outlook.quoteFollow)}</p>
            <p className="mt-3 font-mono text-[10.5px] text-white/45">{outlook.quoteFollowSrc}</p>
          </div>
        </Reveal>

        {/* 2b — the five pillars */}
        <Reveal
          as="h3"
          className="font-display mt-14 flex items-center gap-2.5 text-xl font-semibold text-navy"
        >
          <Layers size={17} className="text-teal" />
          {t(outlook.pillarsTitle)}
        </Reveal>
        <Reveal as="p" className="mt-4 max-w-3xl text-[14px] leading-7 text-slate">
          {t(outlook.pillarsLede)}
        </Reveal>
        <Reveal className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10.5px] text-slate">
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-teal" />
            {t(outlook.pillarsLegend.optimised)}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-flag/70" />
            {t(outlook.pillarsLegend.adhoc)}
          </span>
        </Reveal>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {outlook.pillars.map((p, i) => (
            <Reveal
              key={i}
              delay={i * 0.06}
              className={`card-hover flex flex-col rounded-lg border bg-panel p-5 ${
                i >= 3 ? "border-flag/35" : "border-mist"
              }`}
            >
              <h4 className="min-h-[2.6rem] text-[13.5px] leading-snug font-semibold text-navy">
                {t(p.name)}
              </h4>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="font-mono text-3xl leading-none font-semibold text-teal-deep">
                  {p.optimised}%
                </span>
                <span className="font-mono text-[10px] text-slate/80">
                  {t(outlook.pillarsLegend.optimised)}
                </span>
              </div>
              <div className="mt-3">
                <Bar
                  pct={(p.optimised / maxOptimised) * 100}
                  fill="linear-gradient(90deg,#00666d,#00a4a4)"
                  delay={0.15 + i * 0.07}
                  height="h-1.5"
                />
              </div>
              <p className="mt-3 font-mono text-[10.5px] text-slate">
                <span className="text-flag">{p.adhoc}%</span>{" "}
                {t(outlook.pillarsLegend.adhoc).toLowerCase()}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-5 flex max-w-3xl gap-3 rounded-lg border border-flag/30 bg-flag/[0.05] p-5">
          <ShieldAlert size={17} className="mt-0.5 shrink-0 text-flag" />
          <p className="text-[13.5px] leading-6 font-medium text-navy">{t(outlook.pillarsKicker)}</p>
        </Reveal>
        <p className="mt-4 font-mono text-[10.5px] leading-4 text-slate/80">{outlook.pillarsSrc}</p>

        {/* 3 — what banks fear */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-14">
          <Reveal>
            <h3 className="font-display flex items-center gap-2.5 text-xl leading-tight font-semibold text-navy">
              <ShieldAlert size={17} className="shrink-0 text-teal" />
              {t(outlook.risksTitle)}
            </h3>
            <p className="mt-4 text-[14px] leading-7 text-slate">{t(outlook.risksLede)}</p>
            <p className="mt-5 font-mono text-[10.5px] leading-4 text-slate/80">
              {outlook.risksSrc}
            </p>
          </Reveal>
          <Reveal delay={0.08} className="rounded-lg border border-mist bg-panel p-6 md:p-7">
            <ul className="space-y-5">
              {outlook.risks.map((r, i) => (
                <li key={i}>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-[13.5px] font-medium text-navy">{t(r.label)}</span>
                    <span className="font-mono text-[15px] font-semibold text-teal-deep tabular-nums">
                      {r.pct}%
                    </span>
                  </div>
                  <div className="mt-2">
                    <Bar
                      pct={(r.pct / maxPct) * 100}
                      fill={
                        i < 4
                          ? "linear-gradient(90deg,#00666d,#00a4a4)"
                          : "linear-gradient(90deg,#93a7ba,#b8c7d4)"
                      }
                      delay={0.1 + i * 0.09}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-mist pt-4 text-[12.5px] leading-6 text-slate">
              <span className="font-semibold text-navy">
                {t({
                  en: "Four of the top five are governance problems.",
                  zh: "前五项里有四项是治理问题。",
                })}
              </span>{" "}
              {t({
                en: "None of them is solved by buying a better model.",
                zh: "没有一项能靠买一个更好的模型解决。",
              })}
            </p>
          </Reveal>
        </div>

        {/* 4 — trustworthy AI dimensions */}
        <Reveal className="mt-14 rounded-xl border border-mist bg-teal-wash/60 p-7 md:p-9">
          <h3 className="font-display flex items-center gap-2.5 text-xl font-semibold text-navy">
            <ShieldCheck size={17} className="text-teal" />
            {t(outlook.framework.title)}
          </h3>
          <p className="mt-4 max-w-3xl text-[14px] leading-7 text-slate">
            {t(outlook.framework.lede)}
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {outlook.framework.items.map((d, i) => (
              <Reveal
                key={i}
                delay={i * 0.05}
                className="rounded-md border border-teal/30 bg-panel px-4 py-2.5"
              >
                <span className="font-mono text-[10px] text-teal-deep/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="ml-2 text-[13.5px] font-semibold text-navy">{t(d)}</span>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 font-mono text-[10.5px] text-slate/80">{outlook.framework.src}</p>
        </Reveal>

        {/* 5 — agentic frontier */}
        <Reveal
          as="h3"
          className="font-display mt-14 flex items-center gap-2.5 text-xl font-semibold text-navy"
        >
          <Bot size={17} className="text-teal" />
          {t(outlook.agentic.title)}
        </Reveal>
        <Reveal as="p" className="mt-4 max-w-3xl text-[14px] leading-7 text-slate">
          {t(outlook.agentic.lede)}
        </Reveal>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {outlook.agentic.items.map((a, i) => (
            <Reveal
              key={a.stat}
              delay={i * 0.06}
              className="rounded-lg border-l-2 border-teal bg-panel/70 py-4 pl-5"
            >
              <div className="font-mono text-2xl leading-none font-semibold text-navy">
                {a.stat}
              </div>
              <p className="mt-2.5 text-[13px] leading-6 text-slate">{t(a.body)}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6 flex max-w-3xl gap-3 rounded-lg border border-gold/35 bg-gold/[0.07] p-5">
          <MoveRight size={17} className="mt-0.5 shrink-0 text-gold" />
          <p className="text-[14px] leading-7 font-medium text-navy">
            {t(outlook.agentic.kicker)}
          </p>
        </Reveal>
        <p className="mt-4 font-mono text-[10.5px] text-slate/80">{outlook.agentic.src}</p>

        {/* 6 — the regulatory clock */}
        <Reveal
          as="h3"
          className="font-display mt-16 flex items-center gap-2.5 text-xl font-semibold text-navy"
        >
          <Clock3 size={17} className="text-teal" />
          {t(outlook.clock.title)}
        </Reveal>
        <Reveal as="p" className="mt-4 max-w-3xl text-[14px] leading-7 text-slate">
          {t(outlook.clock.lede)}
        </Reveal>
        <ol className="mt-8 border-l border-mist">
          {outlook.clock.items.map((c, i) => (
            <Reveal
              key={i}
              delay={i * 0.05}
              as="div"
              className="relative pb-8 pl-7 last:pb-0 md:pl-9"
            >
              <span className="absolute top-[7px] -left-[4.5px] h-[9px] w-[9px] rounded-full bg-teal ring-4 ring-paper" />
              <div className="font-mono text-[11px] tracking-wide text-teal-deep">{t(c.date)}</div>
              <h4 className="mt-1.5 text-[15.5px] font-semibold text-navy">{t(c.title)}</h4>
              <p className="mt-2 max-w-3xl text-[13px] leading-6 text-slate">{t(c.body)}</p>
              <p className="mt-2 font-mono text-[10.5px] leading-4 text-slate/70">{c.src}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10 max-w-4xl rounded-lg border border-mist bg-panel p-7">
          <p className="text-[15px] leading-8 text-ink">{t(outlook.closer)}</p>
        </Reveal>
        <Reveal as="p" className="mt-8 max-w-3xl font-mono text-[11px] leading-5 text-slate/80">
          {t(outlook.disclaimer)}
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ governance -- */

function Governance() {
  const { t } = useLang();
  return (
    <section id="governance" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow={t(governance.eyebrow)}
          title={t(governance.title)}
          intro={t(governance.intro)}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {governance.rules.map((r, i) => (
            <Reveal
              key={r.no}
              delay={i * 0.06}
              className="flex gap-5 rounded-lg border border-mist bg-panel p-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy font-mono text-xs font-semibold text-[#7FD8D4]">
                {r.no}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-navy">{t(r.title)}</h3>
                <p className="mt-2 text-[13.5px] leading-6 text-slate">{t(r.body)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- materials -- */

const materialIcons = [BookOpenCheck, ClipboardCheck, FileSpreadsheet, Landmark];

function Materials() {
  const { t } = useLang();
  return (
    <section id="materials" className="dark-band py-20 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-3xl">
          <p className="eyebrow !text-[#7FD8D4]">{t(materials.eyebrow)}</p>
          <h2 className="font-display mt-3 text-3xl leading-tight font-semibold md:text-[2.6rem]">
            {t(materials.title)}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {materials.items.map((m, i) => {
            const Icon = materialIcons[i % materialIcons.length];
            return (
              <Reveal
                key={i}
                delay={i * 0.07}
                className="rounded-lg border border-white/12 bg-white/[0.05] p-6"
              >
                <Icon size={19} className="text-[#7FD8D4]" />
                <h3 className="font-display mt-3 text-lg font-semibold">{t(m.title)}</h3>
                <p className="mt-2.5 text-[13.5px] leading-6 text-white/70">{t(m.body)}</p>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-10 rounded-lg border border-[#66D1CC]/40 bg-[#66D1CC]/[0.08] p-7">
          <h3 className="font-display text-xl font-semibold">{t(materials.adapt.title)}</h3>
          <p className="mt-3 max-w-4xl text-[13.5px] leading-6 text-white/75">{t(materials.adapt.body)}</p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {materials.adapt.tags.map((tag, i) => (
              <span
                key={i}
                className="rounded-full border border-white/20 bg-white/[0.06] px-3.5 py-1.5 font-mono text-[11px] text-white/80"
              >
                {t(tag)}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ instructor -- */

function Instructor() {
  const { t } = useLang();
  return (
    <section id="instructor" className="dark-band py-20 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
          <Reveal>
            <p className="eyebrow !text-[#7FD8D4]">{t(instructor.eyebrow)}</p>
            <div className="mt-4 flex items-center gap-4">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#66D1CC]/40 bg-white/[0.06] text-[#7FD8D4]">
                <UserRound size={28} />
              </span>
              <div>
                <h2 className="font-display text-3xl font-semibold">{t(instructor.name)}</h2>
                <p className="mt-1 text-[13.5px] text-[#9FD9D6]">{t(instructor.role)}</p>
              </div>
            </div>
            <p className="mt-6 text-[14px] leading-7 text-white/75">{t(instructor.lead)}</p>
            {instructor.bio.map((b, i) => (
              <p key={i} className="mt-3 text-[13px] leading-6.5 text-white/60">{t(b)}</p>
            ))}
            <div className="mt-6">
              <p className="font-mono text-[10.5px] tracking-wider text-[#7FD8D4] uppercase">{t(instructor.expertiseTitle)}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {instructor.expertise.map((e, i) => (
                  <span key={i} className="rounded-full border border-white/20 bg-white/[0.06] px-3 py-1 font-mono text-[11px] text-white/80">
                    {t(e)}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-white/12 bg-white/10">
              {instructor.stats.map((s, i) => (
                <div key={i} className="bg-[#0f3050] px-4 py-4">
                  <div className="font-mono text-lg font-semibold text-[#7FD8D4]">{s.value}</div>
                  <div className="mt-1 text-[11px] leading-4 text-white/60">{t(s.label)}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="flex flex-col justify-center gap-4">
            {instructor.points.map((p, i) => (
              <Reveal
                key={i}
                delay={i * 0.08}
                className="rounded-lg border border-white/12 bg-white/[0.05] p-6"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#7FD8D4]" />
                  <div>
                    <h3 className="font-display text-lg font-semibold">{t(p.title)}</h3>
                    <p className="mt-1.5 text-[13px] leading-6 text-white/70">{t(p.body)}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.26} className="rounded-lg border border-[#66D1CC]/35 bg-[#66D1CC]/[0.08] p-6">
              <p className="font-display text-[15px] leading-7 text-white/90 italic">{t(instructor.quote)}</p>
              <p className="mt-3 font-mono text-[11px] text-[#7FD8D4]">— {t(instructor.name)}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}



/* --------------------------------------------------------------- copilot -- */

const cpPointIcons: Record<string, typeof Wand2> = {
  edit: Wand2,
  shield: ShieldCheck,
  watch: Eye,
  quirk: AlertTriangle,
  limit: Ban,
  family: Boxes,
};
const cpAppIcons = [FileSpreadsheet, FileText, Presentation];

function Copilot() {
  const { t } = useLang();
  return (
    <section id="copilot" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow={t(copilot.eyebrow)} title={t(copilot.title)} intro={t(copilot.intro)} />

        {/* mental model */}
        <Reveal
          as="h3"
          className="font-display mt-12 flex items-center gap-2.5 text-xl font-semibold text-navy"
        >
          <Sparkles size={17} className="text-teal" />
          {t(copilot.modelTitle)}
        </Reveal>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {copilot.steps.map((st, i) => (
            <Reveal
              key={st.n}
              delay={i * 0.06}
              className="relative rounded-lg border border-mist bg-panel p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy font-mono text-sm font-semibold text-[#7FD8D4]">
                  {st.n}
                </span>
                <h4 className="font-display text-[16px] font-semibold text-navy">{t(st.verb)}</h4>
              </div>
              <p className="mt-3 text-[13.5px] leading-6 text-slate">{t(st.body)}</p>
              {i < copilot.steps.length - 1 ? (
                <ArrowRight
                  size={18}
                  className="absolute top-1/2 -right-3 hidden -translate-y-1/2 text-teal md:block"
                />
              ) : null}
            </Reveal>
          ))}
        </div>

        {/* where it lives */}
        <Reveal
          as="h3"
          className="font-display mt-14 flex items-center gap-2.5 text-xl font-semibold text-navy"
        >
          <Layers size={17} className="text-teal" />
          {t(copilot.appsTitle)}
        </Reveal>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {copilot.apps.map((a, i) => {
            const Icon = cpAppIcons[i] ?? FileSpreadsheet;
            return (
              <Reveal
                key={a.app}
                delay={i * 0.06}
                className="card-hover rounded-lg border border-mist bg-panel p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-teal-wash text-teal-deep">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h4 className="font-display text-[16px] font-semibold text-navy">{a.app}</h4>
                    <p className="font-mono text-[10.5px] text-teal-deep/80">{t(a.tag)}</p>
                  </div>
                </div>
                <p className="mt-3 text-[13px] leading-6 text-slate">{t(a.body)}</p>
              </Reveal>
            );
          })}
        </div>

        {/* six things to know */}
        <Reveal
          as="h3"
          className="font-display mt-14 flex items-center gap-2.5 text-xl font-semibold text-navy"
        >
          <BookOpenCheck size={17} className="text-teal" />
          {t(copilot.pointsTitle)}
        </Reveal>
        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {copilot.points.map((pt, i) => {
            const Icon = cpPointIcons[pt.icon] ?? Wand2;
            return (
              <Reveal
                key={i}
                delay={i * 0.05}
                className="flex flex-col rounded-lg border border-mist bg-panel p-6"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-navy text-[#7FD8D4]">
                  <Icon size={16} />
                </span>
                <h4 className="mt-3.5 text-[14.5px] font-semibold text-navy">{t(pt.head)}</h4>
                <p className="mt-2 flex-1 text-[13px] leading-6 text-slate">{t(pt.body)}</p>
              </Reveal>
            );
          })}
        </div>

        {/* setup + closer */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-xl border border-teal/30 bg-teal-wash/50 p-6 md:p-7">
            <h3 className="font-display flex items-center gap-2.5 text-lg font-semibold text-navy">
              <ShieldCheck size={17} className="text-teal" />
              {t(copilot.setupTitle)}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {copilot.setup.map((c, i) => (
                <li key={i} className="flex gap-2.5 text-[13.5px] leading-6 text-ink">
                  <Check size={15} className="mt-1 shrink-0 text-teal" />
                  {t(c)}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[12.5px] leading-6 text-slate">{t(copilot.setupNote)}</p>
          </Reveal>
          <Reveal delay={0.08} className="dark-band flex items-center rounded-xl p-7 text-white md:p-9">
            <div>
              <Quote size={24} className="text-[#7FD8D4]" />
              <p className="font-display mt-4 text-[18px] leading-8 font-semibold md:text-[20px]">
                {t(copilot.closer)}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ foundations -- */


const moduleIcons: Record<string, typeof MessageSquareText> = {
  prompt: MessageSquareText,
  context: ScanSearch,
  harness: SlidersHorizontal,
};

function Foundations() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const m = foundations.modules[active];
  const Icon = moduleIcons[m.icon] ?? MessageSquareText;
  return (
    <section id="foundations" className="border-y border-mist bg-[#EFF3F6] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow={t(foundations.eyebrow)}
          title={t(foundations.title)}
          intro={t(foundations.intro)}
        />

        {/* tab bar */}
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {foundations.modules.map((mod, i) => {
            const TabIcon = moduleIcons[mod.icon] ?? MessageSquareText;
            const on = i === active;
            return (
              <button
                key={mod.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3.5 rounded-lg border p-4 text-left transition-all ${
                  on
                    ? "border-teal bg-navy text-white shadow-lg"
                    : "border-mist bg-panel text-navy hover:border-teal/60"
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${
                    on ? "bg-white/10 text-[#7FD8D4]" : "bg-teal-wash text-teal-deep"
                  }`}
                >
                  <TabIcon size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[15px] leading-tight font-semibold">
                    {t(mod.name)}
                  </span>
                  <span
                    className={`mt-0.5 block font-mono text-[10.5px] ${on ? "text-white/60" : "text-slate"}`}
                  >
                    {t(mod.tagline)}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* panel */}
        <div key={m.id} className="mt-6 rounded-xl border border-mist bg-panel p-6 md:p-9">
          <div className="flex items-start gap-4">
            <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy text-[#7FD8D4] md:flex">
              <Icon size={19} />
            </span>
            <p className="max-w-4xl text-[15px] leading-7 font-medium text-navy">
              {t(m.definition)}
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {m.points.map((pt, i) => (
              <Reveal
                key={i}
                delay={i * 0.04}
                className="rounded-lg border border-mist bg-paper/60 p-5"
              >
                <h4 className="text-[13.5px] font-semibold text-teal-deep">{t(pt.title)}</h4>
                <p className="mt-2 text-[13px] leading-6 text-slate">{t(pt.body)}</p>
              </Reveal>
            ))}
          </div>

          {/* example */}
          <div className="mt-8 rounded-lg border border-mist bg-paper p-5 md:p-6">
            <p className="eyebrow">{t(m.example.label)}</p>
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              <div className="rounded-md border border-flag/30 bg-flag/[0.04] p-4">
                <span className="font-mono text-[10px] font-semibold tracking-wide text-flag">
                  ✗ {t({ en: "WEAK", zh: "弱" })}
                </span>
                <p className="mt-2 font-mono text-[12.5px] leading-6 text-ink/80">{m.example.bad}</p>
              </div>
              <div className="rounded-md border border-teal/40 bg-teal-wash/60 p-4">
                <span className="font-mono text-[10px] font-semibold tracking-wide text-teal-deep">
                  ✓ {t({ en: "STRONG", zh: "强" })}
                </span>
                <p className="mt-2 font-mono text-[12.5px] leading-6 text-ink">{m.example.good}</p>
              </div>
            </div>
            <p className="mt-4 max-w-3xl text-[13px] leading-6 text-slate">{t(m.example.note)}</p>
          </div>

          {/* do / don't */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-teal/30 bg-teal-wash/40 p-5">
              <h4 className="font-mono text-[11px] font-semibold tracking-wide text-teal-deep">
                {t({ en: "DO", zh: "要这样做" })}
              </h4>
              <ul className="mt-3 space-y-2">
                {m.dodont.dos.map((d, i) => (
                  <li key={i} className="flex gap-2.5 text-[13px] leading-6 text-ink">
                    <Check size={15} className="mt-1 shrink-0 text-teal" />
                    {t(d)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-flag/25 bg-flag/[0.04] p-5">
              <h4 className="font-mono text-[11px] font-semibold tracking-wide text-flag">
                {t({ en: "DON'T", zh: "别这样做" })}
              </h4>
              <ul className="mt-3 space-y-2">
                {m.dodont.donts.map((d, i) => (
                  <li key={i} className="flex gap-2.5 text-[13px] leading-6 text-ink">
                    <X size={15} className="mt-1 shrink-0 text-flag" />
                    {t(d)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Reveal className="mt-8 max-w-4xl rounded-lg border border-mist bg-panel p-6">
          <p className="font-display text-[17px] leading-8 font-semibold text-navy">
            {t(foundations.closer)}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- cases -- */

function Cases() {
  const { t, lang } = useLang();
  const [active, setActive] = useState(0);
  const c = caseDocs[active];
  return (
    <section id="cases" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow={t(casesUi.eyebrow)} title={t(casesUi.title)} intro={t(casesUi.intro)} />

        <div className="mt-10 grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
          {/* case picker */}
          <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
            {caseDocs.map((cd, i) => {
              const on = i === active;
              return (
                <button
                  key={cd.num}
                  onClick={() => setActive(i)}
                  className={`shrink-0 rounded-lg border px-4 py-3 text-left transition-all lg:w-full ${
                    on
                      ? "border-teal bg-navy text-white shadow-md"
                      : "border-mist bg-panel text-navy hover:border-teal/60"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] tracking-wide ${on ? "text-[#7FD8D4]" : "text-teal-deep"}`}
                  >
                    CASE {cd.num} · {cd.app.toUpperCase()}
                  </span>
                  <span className="mt-0.5 block text-[13px] leading-snug font-semibold">
                    {cd.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* case panel */}
          <div key={c.num} className="min-w-0 rounded-xl border border-mist bg-panel">
            <div className="border-b border-mist p-6 md:p-7">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="rounded bg-navy px-2.5 py-1 font-mono text-[11px] font-semibold text-[#7FD8D4]">
                  Case {c.num}
                </span>
                <span className="rounded border border-teal/40 bg-teal-wash px-2.5 py-1 font-mono text-[11px] font-medium text-teal-deep">
                  {c.app}
                </span>
                <Stars n={c.difficulty} />
                {c.time ? (
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-slate">
                    <Clock3 size={12} />
                    {c.time}
                  </span>
                ) : null}
              </div>
              <h3 className="font-display mt-3 text-2xl leading-tight font-semibold text-navy">
                {c.label}
              </h3>
              <p className="mt-2 text-[14px] leading-6 text-slate">{c.subtitle}</p>
              {c.dataFile ? (
                <a
                  href={`/downloads/data/${c.dataFile}`}
                  download
                  className="mt-4 inline-flex items-center gap-2 rounded-md border border-teal/40 bg-teal-wash px-3.5 py-2 font-mono text-[12px] font-medium text-teal-deep transition-colors hover:bg-teal hover:text-white"
                >
                  <FileSpreadsheet size={14} />
                  {c.dataFile}
                  <Download size={13} />
                </a>
              ) : (
                <p className="mt-4 inline-flex items-start gap-2 rounded-md border border-gold/35 bg-gold/[0.07] px-3.5 py-2 text-[12.5px] leading-5 text-navy">
                  <MoveRight size={14} className="mt-0.5 shrink-0 text-gold" />
                  {t(casesUi.labels.noData)}
                </p>
              )}
            </div>
            <div className="case-doc p-6 md:p-7" dangerouslySetInnerHTML={{ __html: c.html }} />
          </div>
        </div>
        {lang === "zh" ? (
          <p className="mt-6 font-mono text-[11px] leading-5 text-slate/80">
            案例正文与纸质讲义保持一致，保留课堂工作语言（英文）原文。
          </p>
        ) : null}
      </div>
    </section>
  );
}


/* ------------------------------------------------------------ prompt vault -- */

const VAULT_KEY = "prompt-vault-auth";

function PromptCard({ prompt }: { prompt: (typeof promptVault)[number]["prompts"][number] }) {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const doCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = prompt.text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  return (
    <div className="overflow-hidden rounded-lg border border-mist">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-mist bg-paper px-4 py-2.5">
        <div className="min-w-0">
          <p className="text-[13px] font-semibold text-navy">{t(prompt.label)}</p>
          <p className="mt-0.5 font-mono text-[10.5px] text-teal-deep">
            {t(promptVaultUi.labels.where)}: {t(prompt.where)}
          </p>
        </div>
        <button
          onClick={doCopy}
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-md border px-3 py-1.5 font-mono text-[11px] font-semibold transition-colors ${
            copied
              ? "border-teal bg-teal text-white"
              : "border-navy/25 bg-panel text-navy hover:border-teal hover:text-teal-deep"
          }`}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          {copied ? t(promptVaultUi.labels.copied) : t(promptVaultUi.labels.copy)}
        </button>
      </div>
      <pre className="overflow-x-auto bg-[#FBFCFD] px-4 py-3.5 font-mono text-[11.5px] leading-[1.65] whitespace-pre-wrap text-ink">
        {prompt.text}
      </pre>
    </div>
  );
}

function PromptVault() {
  const { t } = useLang();
  const [unlocked, setUnlocked] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(VAULT_KEY) === "granted";
  });
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState(false);
  const [active, setActive] = useState(0);
  const vc = promptVault[active];

  const tryUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (user.trim().toLowerCase() === "aiib" && pass.trim() === "2026") {
      window.localStorage.setItem(VAULT_KEY, "granted");
      setUnlocked(true);
      setErr(false);
    } else {
      setErr(true);
    }
  };
  const lock = () => {
    window.localStorage.removeItem(VAULT_KEY);
    setUnlocked(false);
    setUser("");
    setPass("");
  };

  return (
    <section id="prompts" className="border-y border-mist bg-[#EFF3F6] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow={t(promptVaultUi.eyebrow)}
          title={t(promptVaultUi.title)}
          intro={t(promptVaultUi.intro)}
        />

        {!unlocked ? (
          <Reveal className="mx-auto mt-12 max-w-md">
            <form
              onSubmit={tryUnlock}
              className="rounded-xl border border-mist bg-panel p-7 shadow-sm md:p-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-navy text-[#7FD8D4]">
                <Lock size={18} />
              </span>
              <h3 className="font-display mt-4 text-xl font-semibold text-navy">
                {t(promptVaultUi.gate.heading)}
              </h3>
              <p className="mt-2 text-[13.5px] leading-6 text-slate">
                {t(promptVaultUi.gate.body)}
              </p>
              <label className="mt-5 block">
                <span className="font-mono text-[10.5px] tracking-wide text-slate uppercase">
                  {t(promptVaultUi.gate.user)}
                </span>
                <input
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  autoComplete="username"
                  className="mt-1.5 w-full rounded-md border border-mist bg-paper px-3.5 py-2.5 text-[14px] text-ink outline-none focus:border-teal"
                />
              </label>
              <label className="mt-4 block">
                <span className="font-mono text-[10.5px] tracking-wide text-slate uppercase">
                  {t(promptVaultUi.gate.pass)}
                </span>
                <input
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  autoComplete="current-password"
                  className="mt-1.5 w-full rounded-md border border-mist bg-paper px-3.5 py-2.5 text-[14px] text-ink outline-none focus:border-teal"
                />
              </label>
              {err ? (
                <p className="mt-3 text-[12.5px] font-medium text-flag">
                  {t(promptVaultUi.gate.error)}
                </p>
              ) : null}
              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-2"
              >
                <KeyRound size={15} />
                {t(promptVaultUi.gate.button)}
              </button>
              <p className="mt-4 text-center font-mono text-[10.5px] text-slate/80">
                {t(promptVaultUi.gate.lockNote)}
              </p>
            </form>
          </Reveal>
        ) : (
          <>
            <div className="mt-10 grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
              {/* case picker */}
              <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
                {promptVault.map((v, i) => {
                  const on = i === active;
                  return (
                    <button
                      key={v.num}
                      onClick={() => setActive(i)}
                      className={`shrink-0 rounded-lg border px-4 py-3 text-left transition-all lg:w-full ${
                        on
                          ? "border-teal bg-navy text-white shadow-md"
                          : "border-mist bg-panel text-navy hover:border-teal/60"
                      }`}
                    >
                      <span
                        className={`font-mono text-[10px] tracking-wide ${on ? "text-[#7FD8D4]" : "text-teal-deep"}`}
                      >
                        CASE {v.num} · {v.app.toUpperCase()}
                      </span>
                      <span className="mt-0.5 block text-[13px] leading-snug font-semibold">
                        {v.label}
                      </span>
                    </button>
                  );
                })}
                <button
                  onClick={lock}
                  className="shrink-0 rounded-lg border border-mist bg-panel px-4 py-2.5 text-left font-mono text-[11px] text-slate transition-colors hover:border-flag/50 hover:text-flag lg:w-full"
                >
                  <Lock size={11} className="mr-1.5 inline" />
                  {t(promptVaultUi.labels.signOut)}
                </button>
              </div>

              {/* panel */}
              <div key={vc.num} className="min-w-0 space-y-6">
                {/* takeaways */}
                <div className="rounded-xl border border-gold/40 bg-gold/[0.07] p-6 md:p-7">
                  <h3 className="font-display flex items-center gap-2.5 text-lg font-semibold text-navy">
                    <Star size={16} className="text-gold" fill="currentColor" strokeWidth={0} />
                    {t(promptVaultUi.labels.takeaways)} · Case {vc.num}
                  </h3>
                  <ul className="mt-4 space-y-3.5">
                    {vc.takeaways.map((k, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-[3px] font-mono text-[11px] font-semibold text-gold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[13.5px] leading-6 font-medium text-ink">{t(k)}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* prompts */}
                <div className="rounded-xl border border-mist bg-panel p-6 md:p-7">
                  <h3 className="font-display flex items-center gap-2.5 text-lg font-semibold text-navy">
                    <MessageSquareText size={16} className="text-teal" />
                    {t(promptVaultUi.labels.prompts)}
                  </h3>
                  <div className="mt-4 space-y-4">
                    {vc.prompts.map((pr, i) => (
                      <PromptCard key={`${vc.num}-${i}`} prompt={pr} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Reveal as="p" className="mt-8 max-w-3xl font-mono text-[11px] leading-5 text-slate/80">
              {t(promptVaultUi.labels.note)}
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- downloads -- */


function Downloads() {
  const { t } = useLang();
  return (
    <section id="downloads" className="border-y border-mist bg-[#EFF3F6] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow={t(downloads.eyebrow)} title={t(downloads.title)} intro={t(downloads.intro)} />

        {/* zip hero */}
        <Reveal className="mt-10">
          <div className="dark-band flex flex-col gap-6 rounded-xl p-7 text-white md:flex-row md:items-center md:p-9">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-white/10">
              <FolderArchive size={26} className="text-[#7FD8D4]" />
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-xl font-semibold">{t(downloads.zip.title)}</h3>
              <p className="mt-2 max-w-2xl text-[13.5px] leading-6 text-white/80">
                {t(downloads.zip.body)}
              </p>
              <p className="mt-2 font-mono text-[11px] text-white/50">
                {downloads.zip.name} · {downloads.zip.size}
              </p>
            </div>
            <a
              href={downloads.zip.href}
              download
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-teal-wash"
            >
              <Download size={16} />
              {t(downloads.zip.button)}
            </a>
          </div>
        </Reveal>

        {/* individual files */}
        <Reveal as="h3" className="font-display mt-12 text-lg font-semibold text-navy">
          {t(downloads.filesTitle)}
        </Reveal>
        <div className="mt-4 overflow-hidden rounded-lg border border-mist bg-panel">
          {downloads.files.map((f, i) => (
            <a
              key={f.name}
              href={f.href}
              download
              className={`flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-teal-wash/50 ${
                i > 0 ? "border-t border-mist" : ""
              }`}
            >
              <span className="w-14 shrink-0 font-mono text-[11px] font-semibold text-teal-deep">
                {f.case}
              </span>
              <FileSpreadsheet size={15} className="shrink-0 text-slate" />
              <span className="min-w-0 flex-1 truncate font-mono text-[12.5px] text-ink">
                {f.name}
              </span>
              <span className="hidden font-mono text-[11px] text-slate/70 sm:block">{f.size}</span>
              <Download size={14} className="shrink-0 text-teal" />
            </a>
          ))}
        </div>

        {/* documents */}
        <Reveal as="h3" className="font-display mt-12 text-lg font-semibold text-navy">
          {t(downloads.docsTitle)}
        </Reveal>
        <div className="mt-4 grid gap-5 md:grid-cols-2">
          {downloads.docs.map((d, i) => (
            <Reveal
              key={i}
              delay={i * 0.06}
              className="card-hover flex flex-col rounded-lg border border-mist bg-panel p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-md bg-navy text-[#7FD8D4]">
                  <FileText size={16} />
                </span>
                <h4 className="text-[15px] font-semibold text-navy">{t(d.name)}</h4>
              </div>
              <p className="mt-3 flex-1 text-[13px] leading-6 text-slate">{t(d.detail)}</p>
              <a
                href={d.href}
                download
                className="mt-4 inline-flex items-center gap-2 self-start rounded-md border border-teal/40 bg-teal-wash px-3.5 py-2 font-mono text-[12px] font-medium text-teal-deep transition-colors hover:bg-teal hover:text-white"
              >
                <Download size={13} />
                {t({ en: "Download", zh: "下载" })} · {d.size}
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="mt-8 max-w-3xl font-mono text-[11px] leading-5 text-slate/80">
          {t(downloads.note)}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- footer -- */


function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-mist bg-paper py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-navy font-display text-sm font-bold text-[#66D1CC]">
            Æ
          </span>
          <p className="font-display text-sm font-semibold text-navy">{t(footer.line1)}</p>
        </div>
        <p className="mt-4 max-w-3xl text-xs leading-5 text-slate">{t(footer.line2)}</p>
        <p className="mt-2 text-xs leading-5 text-slate">{t(footer.built)}</p>
        <p className="mt-5 font-mono text-[10.5px] text-slate/70">© 2026 · English / 中文</p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------- app -- */

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <BigNumbers />
        <Outlook />
        <Insights />
        <Copilot />
        <Foundations />
        <Governance />
        <Cases />
        <PromptVault />
        <Downloads />
        <Program />
        <Instructor />
        <Materials />
      </main>
      <Footer />
    </div>
  );
}
