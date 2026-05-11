import { useReveal } from "@/hooks/use-reveal";
import { projects, type ProcessItem } from "@/data/projects";

const ProcessTile = ({ item }: { item: ProcessItem }) => {
  if (item.kind === "placeholder" || !item.image) {
    return (
      <div className="group">
        <div className="aspect-[3/4] bg-sand/60 border border-border flex items-center justify-center">
          <div className="text-center px-4">
            <p className="text-[10px] uppercase tracking-luxury text-stone">Coming soon</p>
            <p className="font-display italic text-stone/80 mt-2">process artifact</p>
          </div>
        </div>
        <p className="mt-3 text-[10px] uppercase tracking-luxury text-stone">{item.caption}</p>
      </div>
    );
  }
  return (
    <div className="group">
      <div className="img-zoom aspect-[3/4] bg-muted">
        <img src={item.image} alt={item.caption} loading="lazy" className="w-full h-full object-cover" />
      </div>
      <p className="mt-3 text-[10px] uppercase tracking-luxury text-stone">{item.caption}</p>
    </div>
  );
};

const Portfolio = () => {
  const ref = useReveal();
  return (
    <div ref={ref} className="pt-32">
      <header className="mx-auto max-w-[1600px] px-6 md:px-12 py-16 md:py-24">
        <p className="text-[11px] uppercase tracking-luxury text-stone reveal">Portfolio — 2023 / 2025</p>
        <h1 className="font-display text-6xl md:text-9xl mt-6 leading-[0.95] reveal">
          Selected <em>Works</em>
        </h1>
        <p className="max-w-xl mt-8 text-stone reveal">
          Seven case studies tracing concept, construction, and the bold use of color — each piece a study in feminine structure and considered detail.
        </p>
      </header>

      <div>
        {projects.map((p, i) => {
          const flip = i % 2 === 1;
          return (
            <article
              key={p.slug}
              id={p.slug}
              className="border-t border-border py-20 md:py-32"
            >
              {/* Hero image — full bleed */}
              <div className="reveal mb-16 md:mb-24">
                <div className="img-zoom w-full aspect-[16/10] md:aspect-[21/9] bg-muted overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className={`w-full h-full object-cover ${p.imagePosition ?? "object-[center_25%]"}`} />
                </div>
              </div>

              {/* Title block */}
              <div className="mx-auto max-w-[1600px] px-6 md:px-12 grid md:grid-cols-12 gap-8 md:gap-16">
                <div className={`reveal md:col-span-5 ${flip ? "md:col-start-7" : ""}`}>
                  <p className="text-[11px] uppercase tracking-luxury text-stone">Project {p.number} · {p.category}</p>
                  <h2 className="font-display text-4xl md:text-6xl mt-5 leading-tight">{p.title}</h2>
                  <div className="w-12 h-px bg-ink my-8" />
                </div>
                <div className={`reveal md:col-span-6 ${flip ? "md:col-start-1 md:row-start-1" : "md:col-start-7"}`}>
                  <p className="text-stone leading-relaxed text-lg">{p.concept}</p>
                  <dl className="mt-8 space-y-3 text-sm">
                    <div className="flex justify-between border-b border-border pb-2">
                      <dt className="text-stone uppercase tracking-editorial text-[10px]">Year</dt>
                      <dd>{p.year}</dd>
                    </div>
                    <div className="flex justify-between border-b border-border pb-2">
                      <dt className="text-stone uppercase tracking-editorial text-[10px]">Process</dt>
                      <dd className="text-right">{p.details.join(" · ")}</dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* Process strip */}
              <div className="mx-auto max-w-[1600px] px-6 md:px-12 mt-16 md:mt-24 reveal">
                <p className="text-[11px] uppercase tracking-luxury text-stone mb-6">Process</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {p.process.map((item, idx) => (
                    <ProcessTile key={idx} item={item} />
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
