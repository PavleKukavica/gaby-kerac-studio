import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/use-reveal";
import { projects } from "@/data/projects";
import hero from "@/assets/hero-fashion.jpg";
import blackSet from "@/assets/photos/black-vest-set.jpg";
import bluePhoto from "@/assets/photos/blue-flare-dress.jpg";
import paintedShirt from "@/assets/photos/painted-shirt.jpg";
import orientalPhoto from "@/assets/photos/red-oriental-dress.jpg";

const SectionLabel = ({ index, title }: { index: string; title: string }) => (
  <div className="flex items-center gap-4 text-[11px] uppercase tracking-luxury text-stone">
    <span>{index}</span>
    <span className="w-8 h-px bg-stone/40" />
    <span>{title}</span>
  </div>
);

const signature = [
  { num: "01", src: bluePhoto, title: "Cobalt Fit-and-Flare", year: "2024", pos: "object-[center_25%]" },
  { num: "02", src: paintedShirt, title: "Painted Panel Shirt", year: "2025", pos: "object-[center_30%]" },
  { num: "03", src: orientalPhoto, title: "Oriental Brocade", year: "2023", pos: "object-[center_25%]" },
];

const Index = () => {
  const ref = useReveal();
  const works = projects.slice(0, 4);
  const feature = projects[4];

  return (
    <div ref={ref}>
      {/* 01 — HERO */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img src={hero} alt="Editorial fashion portrait" className="w-full h-full object-cover animate-ken-burns" />
          <div className="absolute inset-0 bg-gradient-to-b from-bone/15 via-transparent to-bone/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-12 pt-40 md:pt-48 pb-20 min-h-screen flex flex-col justify-between">
          <div className="flex justify-between items-start text-[11px] uppercase tracking-luxury text-ink/80 animate-fade-in">
            <span>Collection / SS 26</span>
            <span className="hidden md:block">Boston — New York</span>
          </div>

          <div className="max-w-5xl">
            <p className="text-[11px] uppercase tracking-luxury text-ink/70 mb-6 animate-fade-up">Fashion Designer</p>
            <h1 className="font-display text-[18vw] md:text-[9vw] leading-[0.9] text-ink animate-fade-up" style={{ animationDelay: "0.15s" }}>
              Gaby <span className="italic">Kerac</span>
            </h1>
            <p className="mt-10 max-w-2xl font-display text-2xl md:text-3xl leading-snug text-balance text-ink animate-fade-up" style={{ animationDelay: "0.35s" }}>
              Modern feminine design with a focus on <em>elegance</em> and <em>structure</em>.
            </p>
          </div>
        </div>

        <div className="hidden lg:block absolute right-12 top-1/2 w-[18vw] max-w-[280px] aspect-[3/4] z-10 animate-float-soft">
          <div className="w-full h-full overflow-hidden shadow-[var(--shadow-soft)] ring-1 ring-bone/40">
            <img src={blackSet} alt="Gaby Kerac wearing her own design" className="w-full h-full object-cover object-[center_30%] editorial-img" />
          </div>
          <p className="mt-3 text-[10px] uppercase tracking-luxury text-stone">— Gaby, in her own design</p>
        </div>
      </section>

      {/* 02 — INTRODUCTION */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-28">
          <div className="reveal mb-12"><SectionLabel index="01" title="Introduction" /></div>
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
            <SectionLabel index="02" title="Signature Pieces" />
            <h2 className="font-display text-4xl md:text-6xl">Color, considered.</h2>
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
              <SectionLabel index="03" title="Selected Works" />
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
          <div className="mb-12 reveal"><SectionLabel index="04" title="About the Designer" /></div>
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="md:col-span-5 reveal">
              <div className="aspect-[3/4] overflow-hidden bg-muted">
                <img src={blackSet} alt="Gaby Kerac" className="w-full h-full object-cover object-[center_25%] editorial-img" />
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7 reveal space-y-6">
              <h2 className="font-display text-4xl md:text-5xl leading-tight">Gaby Kerac</h2>
              <p className="text-base md:text-lg text-stone leading-relaxed">
                The designer behind Gabys Design — a womenswear practice creating feminine, structured pieces that balance elegance with bold visual expression.
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
          <div className="mb-12 reveal"><SectionLabel index="05" title="Contact" /></div>
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
