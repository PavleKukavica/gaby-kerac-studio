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
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Editorial fashion portrait"
            className="w-full h-full object-cover animate-image-reveal"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bone/30 via-transparent to-bone/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-12 pt-40 md:pt-48 pb-20 min-h-screen flex flex-col justify-between">
          <div className="flex justify-between items-start text-[11px] uppercase tracking-luxury text-ink/80 animate-fade-in">
            <span>Collection / SS 26</span>
            <span className="hidden md:block">Boston — New York</span>
          </div>

          <div className="max-w-5xl">
            <p className="text-[11px] uppercase tracking-luxury text-ink/70 mb-6 animate-fade-up">Fashion Designer</p>
            <h1 className="font-display text-[18vw] md:text-[11vw] leading-[0.9] text-ink animate-fade-up" style={{ animationDelay: "0.15s" }}>
              Gaby <span className="italic">Kerac</span>
            </h1>
            <div className="mt-10 grid md:grid-cols-12 gap-8 items-end animate-fade-up" style={{ animationDelay: "0.35s" }}>
              <p className="md:col-span-7 font-display text-2xl md:text-4xl leading-snug text-balance text-ink">
                Modern feminine design with a focus on elegance and structure.
              </p>
              <div className="md:col-span-4 md:col-start-9 text-sm text-stone leading-relaxed">
                A creative practice rooted in refined silhouettes, natural materials and quiet luxury — pieces that feel unique, wearable and enduring.
              </div>
            </div>
          </div>
        </div>

        {/* Floating portrait */}
        <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/3 w-[18vw] max-w-[280px] aspect-[3/4] z-10 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <div className="w-full h-full overflow-hidden shadow-[var(--shadow-soft)]">
            <img src={portrait} alt="Gaby Kerac" className="w-full h-full object-cover" />
          </div>
          <p className="mt-3 text-[10px] uppercase tracking-luxury text-stone">— Gaby, in studio</p>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border py-6 overflow-hidden bg-bone">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              {["Quiet Luxury", "Womenswear", "Refined Silhouettes", "Natural Materials", "Modern Femininity", "CLO 3D", "Editorial"].map((w) => (
                <span key={w} className="font-display italic text-2xl text-stone">{w} ·</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-32 md:py-48">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3 reveal">
            <p className="text-[11px] uppercase tracking-luxury text-stone">Studio Note — 01</p>
          </div>
          <div className="md:col-span-8 md:col-start-5 reveal">
            <p className="font-display text-3xl md:text-5xl leading-tight text-balance">
              Gabys Design is a womenswear practice exploring <em className="text-stone">structure, drape</em> and the quiet authority of a well-cut garment — clothing that moves with the woman who wears it.
            </p>
          </div>
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="bg-sand/40 py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="flex items-end justify-between mb-16 reveal">
            <div>
              <p className="text-[11px] uppercase tracking-luxury text-stone mb-4">Selected Works</p>
              <h2 className="font-display text-5xl md:text-7xl">The Portfolio</h2>
            </div>
            <Link to="/portfolio" className="hidden md:inline-block text-[11px] uppercase tracking-luxury link-underline">View all</Link>
          </div>

          <div className="grid md:grid-cols-12 gap-x-8 gap-y-24">
            {featured.map((p, i) => {
              const layouts = [
                "md:col-span-7",
                "md:col-span-4 md:col-start-9 md:mt-32",
                "md:col-span-5 md:col-start-2",
                "md:col-span-6 md:col-start-7 md:mt-20",
              ];
              return (
                <Link
                  to={`/portfolio#${p.slug}`}
                  key={p.slug}
                  className={`group reveal ${layouts[i]}`}
                >
                  <div className="img-zoom aspect-[3/4] bg-muted">
                    <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div className="mt-5 flex justify-between items-baseline">
                    <div>
                      <p className="text-[10px] uppercase tracking-luxury text-stone">{p.number} — {p.category}</p>
                      <h3 className="font-display text-2xl mt-2">{p.title}</h3>
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
          <h2 className="md:col-span-8 font-display text-5xl md:text-8xl leading-[0.95] text-balance">
            Crafting the next <em>chapter</em> of femininity.
          </h2>
          <div className="md:col-span-3 md:col-start-10">
            <Link to="/contact" className="inline-block border-b border-ink pb-1 text-[11px] uppercase tracking-luxury hover:tracking-[0.4em] transition-all duration-500">
              Begin a conversation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
