import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Leaf, Thermometer, Wind } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { projects } from "@/data/projects";
import heroKickstarter from "@/assets/kickstarter-hero-clean.jpg";
import blackSet from "@/assets/photos/black-vest-set.jpg";
import KickstarterCampaign from "@/components/KickstarterCampaign";

const findProject = (slug: string) => projects.find((p) => p.slug === slug)!;

const SectionLabel = ({ index, title }: { index: string; title: string }) => (
  <div className="flex items-center gap-4 text-[11px] uppercase tracking-luxury text-stone">
    <span>{index}</span>
    <span className="w-8 h-px bg-stone/40" />
    <span>{title}</span>
  </div>
);

const LAUNCH_DATE = new Date("2026-11-29T17:00:00Z");

const getCountdown = () => {
  const now = new Date();
  const total = Math.max(0, LAUNCH_DATE.getTime() - now.getTime());
  let months = 0;
  const cursor = new Date(now);
  while (true) {
    const next = new Date(cursor);
    next.setMonth(next.getMonth() + 1);
    if (next > LAUNCH_DATE) break;
    months += 1;
    cursor.setMonth(cursor.getMonth() + 1);
  }
  const rest = Math.max(0, LAUNCH_DATE.getTime() - cursor.getTime());
  const seconds = Math.floor(rest / 1000);
  return {
    Months: months,
    Days: Math.floor(seconds / 86400),
    Hours: Math.floor((seconds % 86400) / 3600),
    Minutes: Math.floor((seconds % 3600) / 60),
    Seconds: seconds % 60,
  };
};

const heroFeatures = [
  { label: "Regulates temperature", icon: Thermometer },
  { label: "Water resistant", icon: Droplets },
  { label: "Breathable Merino wool", icon: Wind },
  { label: "Sustainable & natural", icon: Leaf },
];

const featureCards = [
  { title: "Smart temperature control", icon: Thermometer, href: "#smart-features" },
  { title: "Water resistant", icon: Droplets, href: "#smart-features" },
  { title: "Breathable Merino wool", icon: Wind, href: "#merino-wool" },
];

const signature = [
  { num: "01", src: findProject("blue-fit-and-flare").image, title: "Cobalt Fit-and-Flare", year: "2024", pos: "object-[center_25%]" },
  { num: "02", src: findProject("abstract-print-shirt").image, title: "Abstract Print Shirt", year: "2026", pos: "object-[center_30%]" },
  { num: "03", src: findProject("oriental-fitted").image, title: "Oriental Brocade", year: "2025", pos: "object-[center_25%]" },
];

const Index = () => {
  const ref = useReveal();
  const works = projects.slice(0, 4);
  const feature = projects[4];
  const [countdown, setCountdown] = useState(getCountdown);

  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(getCountdown()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div ref={ref}>
      {/* 01 — HERO */}
      <section id="home" className="relative min-h-[940px] lg:min-h-screen w-full overflow-hidden bg-hero-navy text-hero-foreground">
        <img src={heroKickstarter} alt="Woman wearing the cobalt Smart Merino coat in a winter landscape" className="absolute inset-0 h-full w-full object-cover object-[58%_center] lg:object-center" />
        <div className="absolute inset-0 bg-hero-shade" />

        <div className="relative z-10 mx-auto flex min-h-[940px] max-w-[1600px] flex-col px-6 pb-10 pt-28 md:px-12 md:pt-32 lg:min-h-screen lg:pb-8">
          <div className="max-w-[620px] animate-fade-up lg:mt-6">
            <p className="text-[11px] font-medium uppercase tracking-luxury text-hero-accent">Launching soon</p>
            <h1 className="mt-5 font-sans text-4xl font-semibold leading-[1.08] md:text-6xl lg:text-7xl">
              The World’s 1st<br />
              <span className="text-hero-accent">Smart Merino Kaput.</span>
            </h1>
            <p className="mt-5 text-[10px] font-medium uppercase tracking-luxury text-hero-foreground/85 md:text-xs">
              Natural comfort. Smarter living.
            </p>

            <div className="mt-8 grid max-w-[520px] grid-cols-2 gap-5 sm:grid-cols-4">
              {heroFeatures.map(({ label, icon: Icon }) => (
                <a key={label} href={label.includes("Merino") ? "#merino-wool" : label.includes("Sustainable") ? "#sustainability" : "#smart-features"} className="group text-center">
                  <span className="mx-auto flex size-12 items-center justify-center rounded-full border border-hero-accent/80 bg-hero-panel/40 transition-colors group-hover:bg-hero-accent/20">
                    <Icon size={23} strokeWidth={1.5} />
                  </span>
                  <span className="mt-2 block text-[9px] font-semibold uppercase leading-tight text-hero-foreground/90">{label}</span>
                </a>
              ))}
            </div>

            <div className="mt-8 max-w-[550px] rounded-[6px] border border-hero-accent/75 bg-hero-panel/65 p-4 shadow-hero-glow backdrop-blur-md md:p-5">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-luxury">Launching in</p>
              <div className="grid grid-cols-5 divide-x divide-hero-accent/25">
                {Object.entries(countdown).map(([label, value]) => (
                  <div key={label} className="px-1 text-center">
                    <p className="font-display text-2xl tabular-nums md:text-4xl">{String(value).padStart(2, "0")}</p>
                    <p className="mt-1 text-[7px] uppercase md:text-[9px]">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <a href="#kickstarter-signup" className="group mt-5 inline-flex min-h-14 items-center justify-center gap-5 rounded-full border border-hero-accent bg-hero-panel/70 px-8 text-sm font-semibold shadow-hero-glow backdrop-blur-md transition-colors hover:bg-hero-accent/20">
              Coming Soon on Kickstarter
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
            </a>
          </div>

          <div className="mt-auto hidden w-[315px] self-end space-y-3 lg:block">
            {featureCards.map(({ title, icon: Icon, href }) => (
              <a key={title} href={href} className="group flex items-center gap-4 rounded-[6px] border border-hero-accent/60 bg-hero-panel/70 p-4 shadow-hero-glow backdrop-blur-md transition-transform hover:-translate-x-1">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-hero-accent/60"><Icon size={23} strokeWidth={1.5} /></span>
                <span className="text-xs font-semibold uppercase leading-snug text-hero-accent">{title}</span>
                <ArrowRight className="ml-auto opacity-60 transition-transform group-hover:translate-x-1" size={17} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-early-bird text-early-bird-foreground">
        <a href="#kickstarter-signup" className="group mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-6 py-7 md:px-12 md:py-9">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-luxury">Limited launch offer</p>
            <p className="mt-2 font-display text-3xl md:text-5xl">Pre-Order · 20% Early Bird</p>
          </div>
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-early-bird-foreground/50 transition-transform group-hover:translate-x-1 md:size-16"><ArrowRight /></span>
        </a>
      </section>

      {/* 02 — KICKSTARTER CAMPAIGN */}
      <KickstarterCampaign />

      {/* 03 — INTRODUCTION */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-28">
          <div className="reveal mb-12"><SectionLabel index="02" title="Introduction" /></div>
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 reveal">
            <p className="md:col-span-7 font-display text-2xl md:text-3xl leading-snug text-balance text-ink">
              A fashion designer focused on structured silhouettes, bold color expression, and refined femininity — pieces that feel both distinctive and entirely wearable.
            </p>
            <dl className="md:col-span-4 md:col-start-9 space-y-5 self-end">
              {[
                ["Based", "Boston, MA"],
                ["Focus", "Womenswear"],
                ["Tools", "CLO 3D · Adobe · Hand patterning"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between items-baseline border-b border-border pb-3">
                  <dt className="text-[10px] uppercase tracking-luxury text-stone">{k}</dt>
                  <dd className="text-sm text-ink text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y border-border py-5 overflow-hidden bg-bone">
          <div className="flex gap-20 animate-marquee whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-20 items-center">
                {["Structured Femininity", "Bold Color", "Architectural Lines", "Movement", "Pattern", "Modern Tailoring"].map((w) => (
                  <span key={w} className="font-display italic text-xl text-stone/70">{w} ·</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — SIGNATURE PIECES */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-32">
        <div className="flex items-end justify-between mb-12 reveal">
          <div className="space-y-6">
            <SectionLabel index="03" title="Signature Pieces" />
            <h2 className="font-display text-4xl md:text-6xl">Tailoring, texture & visual storytelling.</h2>
          </div>
          <span className="hidden md:block text-[11px] uppercase tracking-luxury text-stone">2023 — 2025</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {signature.map((it) => (
            <div key={it.num} className="reveal">
              <div className="img-zoom aspect-[3/4] bg-muted">
                <img src={it.src} alt={it.title} loading="lazy" className={`w-full h-full object-cover editorial-img ${it.pos}`} />
              </div>
              <div className="mt-5 flex justify-between items-baseline">
                <div>
                  <p className="text-[10px] uppercase tracking-luxury text-stone">{it.num}</p>
                  <h3 className="font-display text-xl md:text-2xl mt-1">{it.title}</h3>
                </div>
                <span className="text-xs text-stone">{it.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04 — SELECTED WORKS */}
      <section className="bg-bone border-y border-border py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="flex items-end justify-between mb-14 reveal">
            <div className="space-y-6">
              <SectionLabel index="04" title="Selected Works" />
              <h2 className="font-display text-4xl md:text-6xl">Recent Pieces</h2>
            </div>
            <Link to="/portfolio" className="hidden md:inline-block text-[11px] uppercase tracking-luxury link-underline">View all</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {works.map((p) => (
              <Link to={`/portfolio#${p.slug}`} key={p.slug} className="group reveal">
                <div className="overflow-hidden aspect-[3/4] bg-muted">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                </div>
                <div className="mt-5 flex justify-between items-baseline">
                  <div>
                    <p className="text-[10px] uppercase tracking-luxury text-stone">{p.number} — {p.category}</p>
                    <h3 className="font-display text-2xl mt-2 relative inline-block">
                      {p.title}
                      <span className="absolute left-0 -bottom-1 w-full h-px bg-ink origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                    </h3>
                  </div>
                  <span className="text-xs text-stone">{p.year}</span>
                </div>
              </Link>
            ))}
          </div>

          {feature && (
            <Link to={`/portfolio#${feature.slug}`} className="group reveal block mt-20">
              <div className="overflow-hidden aspect-[16/9] bg-muted">
                <img
                  src={feature.image}
                  alt={feature.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 flex justify-between items-baseline">
                <div>
                  <p className="text-[10px] uppercase tracking-luxury text-stone">{feature.number} — {feature.category}</p>
                  <h3 className="font-display text-2xl md:text-3xl mt-2">{feature.title}</h3>
                </div>
                <span className="text-xs text-stone">{feature.year}</span>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* 05 — PHILOSOPHY */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-28 md:py-36">
        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="w-16 h-px bg-stone/40 mx-auto mb-12" />
          <p className="font-display text-4xl md:text-6xl leading-[1.15] text-balance text-ink">
            Structure, <em className="text-stone">softened by color.</em>
          </p>
          <div className="w-16 h-px bg-stone/40 mx-auto mt-12" />
        </div>
      </section>

      {/* 06 — ABOUT PREVIEW */}
      <section className="border-t border-border bg-bone">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-32">
          <div className="mb-12 reveal"><SectionLabel index="05" title="About the Designer" /></div>
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-5 reveal">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img src={blackSet} alt="Gabriela Kerac" className="w-full h-full object-cover object-[center_25%] editorial-img" />
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7 reveal space-y-6">
              <h2 className="font-display text-4xl md:text-5xl leading-tight">Gabriela Kerac</h2>
              <p className="text-base md:text-lg text-stone leading-relaxed">
                The designer behind Gabbys Design — a womenswear practice creating feminine, structured pieces that balance elegance with bold visual expression.
              </p>
              <p className="text-base md:text-lg text-stone leading-relaxed">
                Drawing from nature and architecture, her work translates those influences into clean silhouettes enriched with pattern and color.
              </p>
              <Link to="/about" className="group inline-flex items-center gap-2 border-b border-ink pb-1 text-[11px] uppercase tracking-luxury">
                <span className="transition-all duration-500 group-hover:tracking-[0.4em]">Read more</span>
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 07 — CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-32">
          <div className="mb-12 reveal"><SectionLabel index="06" title="Contact" /></div>
          <div className="grid md:grid-cols-12 gap-8 items-end reveal">
            <h2 className="md:col-span-8 font-display text-5xl md:text-7xl leading-[0.95] text-balance">
              Designing what comes <em>next</em> — together.
            </h2>
            <div className="md:col-span-3 md:col-start-10">
              <Link to="/contact" className="group inline-flex items-center gap-2 border-b border-ink pb-1 text-[11px] uppercase tracking-luxury">
                <span className="transition-all duration-500 group-hover:tracking-[0.4em]">Get in touch</span>
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
