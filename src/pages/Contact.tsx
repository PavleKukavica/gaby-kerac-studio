import { useReveal } from "@/hooks/use-reveal";

const Contact = () => {
  const ref = useReveal();
  const links = [
    { label: "Email", value: "gabi.kerac@gmail.com", href: "mailto:gabi.kerac@gmail.com" },
    { label: "LinkedIn", value: "in/gabriela-kerac", href: "https://www.linkedin.com/in/gabriela-kerac/" },
    { label: "Instagram", value: "@_gabbys_design_", href: "https://www.instagram.com/_gabbys_design_/" },
  ];

  return (
    <div ref={ref} className="pt-32 min-h-screen">
      <header className="mx-auto max-w-[1600px] px-6 md:px-12 py-16 md:py-24">
        <p className="text-[11px] uppercase tracking-luxury text-stone reveal">Contact — Studio</p>
        <h1 className="font-display text-6xl md:text-9xl mt-6 leading-[0.95] reveal">
          Let's <em>create</em>.
        </h1>
        <p className="max-w-xl mt-8 text-stone reveal">
          Open for full-time positions, collaborations, freelance projects and editorial features within the womenswear and luxury market.
        </p>
      </header>

      <section className="mx-auto max-w-[1600px] px-6 md:px-12 pb-32">
        <div className="grid md:grid-cols-12 gap-12 border-t border-border pt-16">
          <div className="md:col-span-4 reveal">
            <p className="text-[11px] uppercase tracking-luxury text-stone">Direct</p>
            <p className="font-display text-3xl mt-4">Boston, MA</p>
            <p className="text-stone mt-2 text-sm">Available worldwide</p>
          </div>

          <ul className="md:col-span-7 md:col-start-6 space-y-2 reveal">
            {links.map((l) => (
              <li key={l.label} className="border-b border-border">
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-baseline justify-between py-8 transition-all duration-500 hover:px-4 hover:bg-sand/40"
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-luxury text-stone mb-2">{l.label}</p>
                    <p className="font-display text-3xl md:text-5xl">{l.value}</p>
                  </div>
                  <span className="font-display text-3xl text-stone group-hover:text-ink group-hover:translate-x-2 transition-all duration-500">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-32 reveal">
          <p className="font-display italic text-2xl md:text-4xl text-stone max-w-3xl text-balance">
            "Design, to me, is the quiet conversation between a woman and what she chooses to wear."
          </p>
          <p className="mt-6 text-[11px] uppercase tracking-luxury">— Gaby Kerac</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
