import { useReveal } from "@/hooks/use-reveal";
import portrait from "@/assets/photos/black-vest-set.jpg";
import editorial from "@/assets/about-editorial.jpg";
import bluePhoto from "@/assets/photos/blue-flare-dress.jpg";
import orientalPhoto from "@/assets/photos/red-oriental-dress.jpg";
import paintedShirt from "@/assets/photos/painted-shirt.jpg";

const About = () => {
  const ref = useReveal();
  return (
    <div ref={ref} className="pt-32">
      <header className="mx-auto max-w-[1600px] px-6 md:px-12 py-16 md:py-24">
        <p className="text-[11px] uppercase tracking-luxury text-stone reveal">About — The Designer</p>
        <h1 className="font-display text-6xl md:text-9xl mt-6 leading-[0.95] reveal">
          Gaby <em>Kerac</em>
        </h1>
      </header>

      <section className="mx-auto max-w-[1600px] px-6 md:px-12 grid md:grid-cols-12 gap-12 py-16">
        <div className="md:col-span-5 reveal">
          <div className="aspect-[3/4] img-zoom">
            <img src={portrait} alt="Gaby Kerac, fashion designer" loading="lazy" className="w-full h-full object-cover object-[center_25%] editorial-img" />
          </div>
          <p className="mt-4 text-[10px] uppercase tracking-luxury text-stone">In her own design — vest & trouser set</p>
        </div>

        <div className="md:col-span-6 md:col-start-7 space-y-8 text-lg leading-relaxed text-ink/90 reveal">
          <p className="font-display text-3xl md:text-4xl leading-snug text-balance">
            Gaby Kerac is the fashion designer behind <em>Gabys Design</em> — a womenswear practice creating feminine, structured pieces that balance elegance with bold visual expression.
          </p>
          <p>
            Her work is inspired by the relationship between color, form, and movement. She draws from nature and architecture, translating those influences into clean silhouettes enriched with pattern and color.
          </p>
          <p>
            Her designs aim to bring positive energy, confidence, and individuality while staying refined and wearable — clothing that feels distinctive without losing the everyday.
          </p>
          <p>
            Gaby combines traditional craftsmanship with modern tools — including CLO 3D and AI-assisted design processes — to create innovative, contemporary collections.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-32 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 md:col-start-2 reveal order-2 md:order-1">
          <p className="text-[11px] uppercase tracking-luxury text-stone mb-6">Philosophy</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight text-balance">
            Structure, <em>softened</em> by color.
          </h2>
          <p className="mt-8 text-stone leading-relaxed">
            Her goal is to grow within the contemporary fashion industry — bringing a confident, color-forward voice to the studios and houses she collaborates with, with a focus on the Boston market and beyond.
          </p>
        </div>
        <div className="md:col-span-5 md:col-start-8 reveal order-1 md:order-2">
          <div className="aspect-[4/5] img-zoom">
            <img src={editorial} alt="Material study" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-20 border-t border-border">
        <div className="grid md:grid-cols-3 gap-12 reveal">
          {[
            { k: "Discipline", v: "Womenswear, RTW & Couture studies" },
            { k: "Tools", v: "CLO 3D · Adobe Suite · Hand patterning · AI-assisted design" },
            { k: "Based", v: "Boston, MA — open to relocation" },
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
            { src: bluePhoto, label: "Cobalt fit-and-flare", pos: "object-[center_25%]" },
            { src: orientalPhoto, label: "Red brocade", pos: "object-[center_25%]" },
            { src: paintedShirt, label: "Hand-painted shirt", pos: "object-[center_30%]" },
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
