import { useReveal } from "@/hooks/use-reveal";
import { projects } from "@/data/projects";

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
          Five editorial case studies tracing concept, material and construction — each piece an exercise in restraint and feminine form.
        </p>
      </header>

      <div>
        {projects.map((p, i) => {
          const flip = i % 2 === 1;
          return (
            <article
              key={p.slug}
              id={p.slug}
              className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-40 border-t border-border"
            >
              <div className={`grid md:grid-cols-12 gap-8 md:gap-16 items-center ${flip ? "" : ""}`}>
                <div className={`reveal ${flip ? "md:col-span-7 md:order-2" : "md:col-span-7"}`}>
                  <div className="img-zoom aspect-[4/5] bg-muted">
                    <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className={`reveal ${flip ? "md:col-span-4 md:col-start-1 md:order-1" : "md:col-span-4 md:col-start-9"}`}>
                  <p className="text-[11px] uppercase tracking-luxury text-stone">Project {p.number} · {p.category}</p>
                  <h2 className="font-display text-4xl md:text-5xl mt-5 leading-tight">{p.title}</h2>
                  <div className="w-12 h-px bg-ink my-8" />
                  <p className="text-stone leading-relaxed">{p.concept}</p>

                  <dl className="mt-10 space-y-3 text-sm">
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
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
