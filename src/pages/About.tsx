import { useReveal } from "@/hooks/use-reveal";
import portrait from "@/assets/gaby-portrait.jpg";
import editorial from "@/assets/about-editorial.jpg";

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
            <img src={portrait} alt="Gaby Kerac, fashion designer" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <p className="mt-4 text-[10px] uppercase tracking-luxury text-stone">Boston · Studio Portrait</p>
        </div>

        <div className="md:col-span-6 md:col-start-7 space-y-8 text-lg leading-relaxed text-ink/90 reveal">
          <p className="font-display text-3xl md:text-4xl leading-snug text-balance">
            Gaby Kerac is the fashion designer behind <em>Gabys Design</em>, a womenswear practice creating feminine, modern pieces that pair elegance with everyday wearability.
          </p>
          <p>
            Her work is inspired by quality craftsmanship, natural materials, and the beauty of the female form. Each garment begins with a quiet observation — of posture, of light, of the way a fabric falls when left to itself.
          </p>
          <p>
            Her design approach emphasises structure, clean silhouettes and thoughtful detail. She creates clothing that feels comfortable, unique and empowering — allowing women to express confidence and individuality.
          </p>
          <p>
            Gaby integrates traditional design techniques with modern tools — digital design, CLO 3D and AI-assisted creative processes — to develop innovative and refined collections.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-32 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 md:col-start-2 reveal order-2 md:order-1">
          <p className="text-[11px] uppercase tracking-luxury text-stone mb-6">Philosophy</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight text-balance">
            Quiet luxury, <em>lived</em> in.
          </h2>
          <p className="mt-8 text-stone leading-relaxed">
            Her goal is to contribute to the contemporary fashion industry — bringing a refined, considered voice to the studios and houses she collaborates with, with a focus on growing within the Boston market and beyond.
          </p>
        </div>
        <div className="md:col-span-5 md:col-start-8 reveal order-1 md:order-2">
          <div className="aspect-[4/5] img-zoom">
            <img src={editorial} alt="Silk drape study" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 border-t border-border">
        <div className="grid md:grid-cols-3 gap-12 reveal">
          {[
            { k: "Discipline", v: "Womenswear, RTW & Couture studies" },
            { k: "Tools", v: "CLO 3D · Adobe Suite · Hand patterning · AI" },
            { k: "Based", v: "Boston, MA — open to relocation" },
          ].map((item) => (
            <div key={item.k}>
              <p className="text-[10px] uppercase tracking-luxury text-stone mb-3">{item.k}</p>
              <p className="font-display text-2xl">{item.v}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
