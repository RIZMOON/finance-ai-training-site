import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  ExternalLink,
  FileSpreadsheet,
  Landmark,
  Languages,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  bigNumbers,
  cases,
  casesSection,
  footer,
  governance,
  hero,
  insightsSection,
  materials,
  nav,
  pains,
  program,
} from "./content";
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
            href="/demo/flash-report-sample.html"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-navy/25 bg-panel px-5 py-3 text-sm font-semibold text-navy transition-colors hover:border-teal hover:text-teal-deep"
          >
            {t(hero.ctaDemo)}
            <ExternalLink size={14} />
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

/* ------------------------------------------------------------ pain points -- */

function Pains() {
  const { t } = useLang();
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead eyebrow={t(pains.eyebrow)} title={t(pains.title)} intro={t(pains.body)} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pains.items.map((p, i) => (
            <Reveal
              key={p.k}
              delay={i * 0.08}
              className="card-hover rounded-lg border border-mist bg-panel p-6"
            >
              <div className="font-mono text-xs font-semibold text-teal-deep">{p.k}</div>
              <h3 className="font-display mt-2 text-lg font-semibold text-navy">{t(p.title)}</h3>
              <p className="mt-3 text-[13.5px] leading-6 text-slate">{t(p.body)}</p>
              <p className="mt-4 font-mono text-xs font-semibold text-gold">{t(p.maps)}</p>
            </Reveal>
          ))}
        </div>
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

/* ----------------------------------------------------------------- cases -- */

function Cases() {
  const { t } = useLang();
  return (
    <section id="cases" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow={t(casesSection.eyebrow)}
          title={t(casesSection.title)}
          intro={t(casesSection.intro)}
        />
        <div className="mt-12 space-y-8">
          {cases.map((c, idx) => (
            <Reveal
              as="article"
              key={c.no}
              className="overflow-hidden rounded-xl border border-mist bg-panel"
            >
              <div className="grid lg:grid-cols-[1.15fr_1fr]">
                {/* left: narrative */}
                <div className="p-7 md:p-9">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-3xl font-semibold text-mist">{c.no}</span>
                    <span className="rounded-full bg-navy px-3 py-1 font-mono text-[11px] font-semibold tracking-wider text-white uppercase">
                      {t(c.tag)}
                    </span>
                    <Stars n={c.stars} />
                    <span className="font-mono text-[11px] text-slate">{t(c.minutes)}</span>
                  </div>
                  <h3 className="font-display mt-4 text-2xl leading-snug font-semibold text-navy">
                    {t(c.title)}
                  </h3>
                  <p className="mt-1.5 font-mono text-xs font-medium text-gold">{t(c.pain)}</p>
                  <p className="mt-4 text-[14px] leading-6.5 text-slate">{t(c.story)}</p>
                  {c.trap ? (
                    <p className="mt-4 rounded-md border-l-[3px] border-flag bg-[#FBF1F1] px-4 py-3 text-[13px] leading-6 text-[#7A2E2E]">
                      {t(c.trap)}
                    </p>
                  ) : null}
                  <ul className="mt-5 space-y-2">
                    {c.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[13.5px] leading-6 text-ink">
                        <CheckCircle2 size={15} className="mt-1 shrink-0 text-teal" />
                        {t(task)}
                      </li>
                    ))}
                  </ul>
                  {c.demo ? (
                    <a
                      href={c.demo.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-md border border-teal/40 bg-teal-wash px-4 py-2.5 text-[13px] font-semibold text-teal-deep transition-colors hover:border-teal"
                    >
                      {t(c.demo.label)}
                      <ArrowUpRight size={14} />
                    </a>
                  ) : null}
                </div>

                {/* right: evidence */}
                <div className="flex flex-col justify-between gap-6 border-t border-mist bg-paper/70 p-7 md:p-9 lg:border-t-0 lg:border-l">
                  <div>
                    <p className="eyebrow">{t(casesSection.verifiedNote)}</p>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {c.results.map((r, i) => (
                        <div key={i} className="rounded-lg border border-mist bg-panel px-4 py-4">
                          <div className="font-mono text-[1.45rem] leading-none font-semibold text-teal-deep">
                            {r.value}
                          </div>
                          <div className="mt-2 text-[12px] leading-5 text-slate">{t(r.label)}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {c.chart ? (
                    <div className="space-y-4">
                      {c.chart.map((ch, i) => (
                        <figure key={i} className="overflow-hidden rounded-lg border border-mist bg-white">
                          <img src={ch.src} alt={t(ch.alt)} loading="lazy" className="w-full" />
                          <figcaption className="border-t border-mist px-4 py-2.5 font-mono text-[10.5px] text-slate">
                            {t(ch.caption)}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" className="mt-8 flex items-center gap-2 font-mono text-xs text-slate">
          <ShieldCheck size={14} className="text-teal" />
          {t(casesSection.simNote)}
        </Reveal>
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
        <Pains />
        <Program />
        <Cases />
        <Insights />
        <Governance />
        <Materials />
      </main>
      <Footer />
    </div>
  );
}
