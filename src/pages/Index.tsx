import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/use-reveal";
import { projects } from "@/data/projects";
import hero from "@/assets/hero-fashion.jpg";
import blackSet from "@/assets/photos/black-vest-set.jpg";
import bluePhoto from "@/assets/photos/blue-flare-dress.jpg";
import paintedShirt from "@/assets/photos/painted-shirt.jpg";
import orientalPhoto from "@/assets/photos/red-oriental-dress.jpg";

const Index = () => {
  const ref = useReveal();
  const featured = projects.slice(0, 5);

  return (
    <div ref={ref}>
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={hero}
            alt="Editorial fashion portrait"
            className="w-full h-full object-cover animate-ken-burns"
          />
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
            <div className="mt-10 grid md:grid-cols-12 gap-8 items-end animate-fade-up" style={{ animationDelay: "0.35s" }}>
              <p className="md:col-span-7 font-display text-2xl md:text-4xl leading-snug text-balance text-ink">
                Modern feminine design with a focus on <em>elegance</em> and <em>structure</em>.
              </p>
              <div className="md:col-span-4 md:col-start-9 text-sm text-stone leading-relaxed">
                A fashion designer focused on structured silhouettes, bold color expression, and refined femininity — pieces that feel both distinctive and entirely wearable.
              </div>
            </div>
          </div>
        </div>

        {/* Floating portrait — real photo */}
        <div className="hidden lg:block absolute right-12 top-1/2 w-[18vw] max-w-[280px] aspect-[3/4] z-10 animate-float-soft">
          <div className="w-full h-full overflow-hidden shadow-[var(--shadow-soft)] ring-1 ring-bone/40">
            <img src={blackSet} alt="Gaby Kerac wearing her own design" className="w-full h-full object-cover object-[center_30%] editorial-img" />
          </div>
          <p className="mt-3 text-[10px] uppercase tracking-luxury text-stone">— Gaby, in her own design</p>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border py-5 overflow-hidden bg-bone">
        <div className="flex gap-20 animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-20 items-center">
              {["Structured Femininity", "Bold Color", "Architectural Lines", "Movement", "Pattern", "Modern Tailoring"].map((w) => (
                <span key={w} className="font-display italic text-xl text-stone/70">{w} ·</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* COLOR STORY */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-28">
        <div className="flex items-end justify-between mb-10 reveal">
          <p className="text-[11px] uppercase tracking-luxury text-stone">Color Story — Selected Pieces</p>
          <span className="hidden md:block text-[11px] uppercase tracking-luxury text-stone">2023 — 2025</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { src: bluePhoto, label: "Cobalt — SS24", pos: "object-[center_25%]" },
            { src: paintedShirt, label: "Hand-painted — FW24", pos: "object-[center_30%]" },
            { src: orientalPhoto, label: "Brocade — SS23", pos: "object-[center_25%]" },
          ].map((it) => (
            <div key={it.label} className="reveal">
              <div className="img-zoom aspect-[3/4] bg-muted">
                <img src={it.src} alt={it.label} loading="lazy" className={`w-full h-full object-cover ${it.pos}`} />
              </div>
              <p className="mt-3 text-[10px] uppercase tracking-luxury text-stone">{it.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EDITORIAL STATEMENT */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-36">
        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="w-16 h-px bg-stone/40 mx-auto mb-12" />
          <p className="font-display text-3xl md:text-5xl leading-[1.2] text-balance text-ink">
            Structured silhouettes, <em className="text-stone">lived in color</em> — designed to feel distinctive, feminine, and entirely wearable.
          </p>
          <div className="w-16 h-px bg-stone/40 mx-auto mt-12" />
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="bg-bone py-24 md:py-36">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="flex items-end justify-between mb-20 reveal">
            <div>
              <p className="text-[11px] uppercase tracking-luxury text-stone mb-4">Selected Work — 2023 / 2025</p>
              <h2 className="font-display text-5xl md:text-7xl">Recent Pieces</h2>
              <p className="mt-5 text-sm text-stone max-w-md">
                Garments from an ongoing study of feminine silhouette, structure, and color.
              </p>
            </div>
            <Link to="/portfolio" className="hidden md:inline-block text-[11px] uppercase tracking-luxury link-underline">View all</Link>
          </div>

          <div className="grid md:grid-cols-12 gap-x-8 gap-y-24 md:gap-y-32">
            {featured.map((p, i) => {
              const layouts = [
                "md:col-span-7",
                "md:col-span-4 md:col-start-9 md:mt-40",
                "md:col-span-5 md:col-start-2",
                "md:col-span-6 md:col-start-7 md:mt-24",
                "md:col-span-7 md:col-start-3",
              ];
              return (
                <Link
                  to={`/portfolio#${p.slug}`}
                  key={p.slug}
                  className={`group reveal ${layouts[i]}`}
                >
                  <div className="overflow-hidden aspect-[3/4] bg-muted">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="mt-6 flex justify-between items-baseline">
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
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-36">
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
      </section>
    </div>
  );
};

export default Index;
