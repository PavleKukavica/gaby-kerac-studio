import { Link } from "react-router-dom";
import { useReveal } from "@/hooks/use-reveal";
import { projects } from "@/data/projects";
import hero from "@/assets/hero-fashion.jpg";
import portrait from "@/assets/gaby-portrait.jpg";

const Index = () => {
  const ref = useReveal();
  const featured = projects.slice(0, 4);

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
          <div className="absolute inset-0 bg-gradient-to-b from-bone/20 via-transparent to-bone/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-12 pt-40 md:pt-48 pb-20 min-h-screen flex flex-col justify-between">
          <div className="flex justify-between items-start text-[11px] uppercase tracking-luxury text-ink/80 animate-fade-in">
            <span>Collection / SS 26</span>
            <span className="hidden md:block">Boston — New York</span>
          </div>

          <div className="max-w-5xl">
            <p className="text-[11px] uppercase tracking-luxury text-ink/70 mb-6 animate-fade-up">Fashion Designer</p>
            <h1 className="font-display text-[16vw] md:text-[9vw] leading-[0.9] text-ink animate-fade-up" style={{ animationDelay: "0.15s" }}>
              Gaby <span className="italic">Kerac</span>
            </h1>
            <div className="mt-10 grid md:grid-cols-12 gap-8 items-end animate-fade-up" style={{ animationDelay: "0.35s" }}>
              <p className="md:col-span-7 font-display text-2xl md:text-4xl leading-snug text-balance text-ink">
                Womenswear shaped by restraint, movement, and the quiet authority of a well-cut line.
              </p>
              <div className="md:col-span-4 md:col-start-9 text-sm text-stone leading-relaxed">
                A Boston-based design practice working between tailoring, drape and digital craft — pieces made to be worn, not just seen.
              </div>
            </div>
          </div>
        </div>

        {/* Floating portrait */}
        <div className="hidden lg:block absolute right-12 top-1/2 w-[18vw] max-w-[280px] aspect-[3/4] z-10 animate-float-soft">
          <div className="w-full h-full overflow-hidden shadow-[var(--shadow-soft)] ring-1 ring-bone/40">
            <img src={portrait} alt="Gaby Kerac" className="w-full h-full object-cover" />
          </div>
          <p className="mt-3 text-[10px] uppercase tracking-luxury text-stone">— Gaby, in studio</p>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border py-5 overflow-hidden bg-bone">
        <div className="flex gap-20 animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-20 items-center">
              {["Quiet Luxury", "Womenswear", "Tailoring", "Drape", "Modern Femininity", "Editorial"].map((w) => (
                <span key={w} className="font-display italic text-xl text-stone/70">{w} ·</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* EDITORIAL STATEMENT */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-32 md:py-48">
        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="w-16 h-px bg-stone/40 mx-auto mb-12" />
          <p className="font-display text-3xl md:text-5xl leading-[1.2] text-balance text-ink">
            A wardrobe of <em className="text-stone">considered pieces</em> — refined, feminine, and made to endure.
          </p>
          <div className="w-16 h-px bg-stone/40 mx-auto mt-12" />
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="bg-sand/40 py-24 md:py-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="flex items-end justify-between mb-20 reveal">
            <div>
              <p className="text-[11px] uppercase tracking-luxury text-stone mb-4">Selected Work — 2024 / 2025</p>
              <h2 className="font-display text-5xl md:text-7xl">Recent Pieces</h2>
              <p className="mt-5 text-sm text-stone max-w-md">
                Garments from an ongoing study of feminine silhouette, structure and drape.
              </p>
            </div>
            <Link to="/portfolio" className="hidden md:inline-block text-[11px] uppercase tracking-luxury link-underline">View all</Link>
          </div>

          <div className="grid md:grid-cols-12 gap-x-8 gap-y-32">
            {featured.map((p, i) => {
              const layouts = [
                "md:col-span-7",
                "md:col-span-4 md:col-start-9 md:mt-40",
                "md:col-span-5 md:col-start-2",
                "md:col-span-6 md:col-start-7 md:mt-24",
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
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-32 md:py-48">
        <div className="grid md:grid-cols-12 gap-8 items-end reveal">
          <h2 className="md:col-span-8 font-display text-5xl md:text-7xl leading-[0.95] text-balance">
            Let's shape what <em>she wears</em> next.
          </h2>
          <div className="md:col-span-3 md:col-start-10">
            <Link to="/contact" className="group inline-flex items-center gap-2 border-b border-ink pb-1 text-[11px] uppercase tracking-luxury">
              <span className="transition-all duration-500 group-hover:tracking-[0.4em]">Start a conversation</span>
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
