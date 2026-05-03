import { useReveal } from "@/hooks/use-reveal";
import { Mail, Linkedin, Instagram, MapPin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useReveal();

  const links = [
    {
      label: "Email",
      value: "gabi.kerac@gmail.com",
      href: "mailto:gabi.kerac@gmail.com",
      Icon: Mail,
    },
    {
      label: "LinkedIn",
      value: "in/gabriela-kerac",
      href: "https://www.linkedin.com/in/gabriela-kerac/",
      Icon: Linkedin,
    },
    {
      label: "Instagram",
      value: "@_gabbys_design_",
      href: "https://www.instagram.com/_gabbys_design_/",
      Icon: Instagram,
    },
  ];

  return (
    <div ref={ref} className="pt-32 min-h-screen">
      <header className="mx-auto max-w-[1600px] px-6 md:px-12 py-16 md:py-24">
        <p className="text-[11px] uppercase tracking-luxury text-stone reveal">
          Contact — Studio
        </p>
        <h1 className="font-display text-5xl md:text-7xl mt-6 leading-[0.95] reveal">
          Let's <em>create</em>.
        </h1>
        <p className="max-w-xl mt-6 text-stone text-sm md:text-base reveal">
          Open for full-time positions, collaborations, freelance projects and
          editorial features within the womenswear and luxury market.
        </p>
      </header>

      <section className="mx-auto max-w-[1600px] px-6 md:px-12 pb-32">
        <div className="flex items-center gap-3 border-t border-border pt-8 reveal">
          <MapPin className="w-4 h-4 text-stone" strokeWidth={1.5} />
          <p className="text-[11px] uppercase tracking-luxury text-stone">
            Boston, MA · Available worldwide
          </p>
        </div>

        <ul className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 reveal">
          {links.map(({ label, value, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex flex-col h-full border border-border p-6 md:p-8 transition-all duration-500 hover:bg-sand/40 hover:border-ink"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    className="w-5 h-5 text-stone group-hover:text-ink transition-colors duration-500"
                    strokeWidth={1.5}
                  />
                  <ArrowUpRight
                    className="w-4 h-4 text-stone group-hover:text-ink group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                    strokeWidth={1.5}
                  />
                </div>
                <p className="text-[10px] uppercase tracking-luxury text-stone mt-10">
                  {label}
                </p>
                <p className="mt-2 text-base md:text-lg text-ink break-all">
                  {value}
                </p>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-24 reveal">
          <p className="font-display italic text-xl md:text-2xl text-stone max-w-2xl text-balance">
            "Design, to me, is the quiet conversation between a woman and what
            she chooses to wear."
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-luxury">
            — Gaby Kerac
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
