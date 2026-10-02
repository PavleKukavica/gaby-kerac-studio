import { useReveal } from "@/hooks/use-reveal";
import portraitAsset from "@/assets/portfolio/DVA09491.jpeg.asset.json";
import drapeAsset from "@/assets/portfolio/DVA09513.jpeg.asset.json";
import blueAsset from "@/assets/portfolio/DVA09296.jpeg.asset.json";
import orientalAsset from "@/assets/portfolio/DVA09433.jpeg.asset.json";
import shirtAsset from "@/assets/portfolio/DVA09170.jpeg.asset.json";

const About = () => {
  const ref = useReveal();
  return (
    <div ref={ref} className="pt-32">
      <header className="mx-auto max-w-[1600px] px-6 md:px-12 py-16 md:py-24">
        <p className="text-[11px] uppercase tracking-luxury text-stone reveal">About — The Founder</p>
        <h1 className="font-display text-6xl md:text-9xl mt-6 leading-[0.95] reveal">
          Gabriela <em>Kerac</em>
        </h1>
      </header>

      <section className="mx-auto max-w-[1600px] px-6 md:px-12 grid md:grid-cols-12 gap-12 py-16">
        <div className="md:col-span-5 reveal">
          <div className="aspect-[3/4] img-zoom">
            <img src={portraitAsset.url} alt="Gabriela Kerac in her atelier" loading="lazy" className="w-full h-full object-cover object-[center_25%] editorial-img" />
          </div>
          <p className="mt-4 text-[10px] uppercase tracking-luxury text-stone">In the atelier — where every piece begins</p>
        </div>

        <div className="md:col-span-6 md:col-start-7 space-y-8 text-lg leading-relaxed text-ink/90 reveal">
          <p className="font-display text-3xl md:text-4xl leading-snug text-balance">
            I'm Gabriela — founder of <em>Gabbys Design</em>. I make clothing that looks beautiful and works as hard as the women who wear it.
          </p>
          <p>
            Every piece starts with a question: why can't elegant clothing be smarter? I draw from architecture and nature — clean lines, honest materials, bold color — and build garments that move with you through real life.
          </p>
          <p>
            My process blends old and new. Hand sketches and pattern making in the atelier, 3D prototyping in CLO 3D, then careful hand finishing. Nothing leaves the studio until it fits, feels and performs right.
          </p>
          <p>
            Now I'm bringing that vision to you through Kickstarter — starting with the world's first Smart Merino Coat. Backing the campaign means helping an independent designer turn a studio dream into something you can wear every day.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src={drapeAsset.url} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-20" />
        <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 md:col-start-2 reveal order-2 md:order-1">
            <p className="text-[11px] uppercase tracking-luxury text-stone mb-6">Philosophy</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight text-balance">
              Structure, <em>softened</em> by color.
            </h2>
            <p className="mt-8 text-stone leading-relaxed">
              Tailoring gives a garment its backbone; color and fabric give it a soul. Each design is draped, pinned and refined by hand until structure and softness feel effortless together — modern pieces made to last, not to follow trends.
            </p>
          </div>
          <div className="md:col-span-5 md:col-start-8 reveal order-1 md:order-2">
            <div className="aspect-[4/5] img-zoom">
              <img src={drapeAsset.url} alt="Fabric draped on a dress form in the atelier" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 border-t border-border">
        <div className="grid md:grid-cols-3 gap-12 reveal">
          {[
            { k: "Discipline", v: "Womenswear, RTW & Couture studies" },
            { k: "Tools", v: "CLO 3D · Adobe Suite · Hand patterning · AI-assisted design" },
            { k: "Based", v: "Boston, MA" },
          ].map((item) => (
            <div key={item.k}>
              <p className="text-[10px] uppercase tracking-luxury text-stone mb-3">{item.k}</p>
              <p className="font-display text-2xl">{item.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-28 border-t border-border">
        <p className="text-[11px] uppercase tracking-luxury text-stone mb-8 reveal">Selected pieces, worn by the designer</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { src: blueAsset.url, label: "Cobalt fit-and-flare", pos: "object-[center_25%]" },
            { src: orientalAsset.url, label: "Red brocade", pos: "object-[center_25%]" },
            { src: shirtAsset.url, label: "Hand-painted shirt", pos: "object-[center_30%]" },
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
    </div>
  );
};

export default About;
