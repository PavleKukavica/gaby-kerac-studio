import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const pageLinks = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const homeLinks = [
  { to: "#home", label: "Home" },
  { to: "#our-coat", label: "Our Coat" },
  { to: "#smart-features", label: "Smart Features" },
  { to: "#merino-wool", label: "Merino Wool" },
  { to: "#sustainability", label: "Sustainability" },
  { to: "/contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const links = isHome ? homeLinks : pageLinks;
  const isOverlay = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        !isOverlay ? "bg-bone/90 backdrop-blur-md border-b border-border text-ink" : "bg-transparent text-hero-foreground"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-xl uppercase tracking-editorial md:text-2xl">
          Gabbys Design
        </Link>
        <nav className="hidden md:flex items-center gap-12">
          {links.map((l) => l.to.startsWith("#") ? (
            <a key={l.to} href={l.to} className={`text-[11px] font-medium link-underline ${isOverlay ? "text-hero-foreground" : "text-stone hover:text-ink"}`}>
              {l.label}
            </a>
          ) : (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-[11px] font-medium link-underline ${isOverlay ? "text-hero-foreground" : isActive ? "text-ink" : "text-stone hover:text-ink"}`
              }
              end={l.to === "/"}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <button
          aria-label="Menu"
          className={isOverlay ? "md:hidden text-hero-foreground" : "md:hidden text-ink"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-bone border-t border-border animate-fade-in">
          <nav className="flex flex-col px-6 py-8 gap-6">
            {links.map((l) => l.to.startsWith("#") ? (
              <a key={l.to} href={l.to} onClick={() => setOpen(false)} className="text-sm uppercase tracking-luxury text-stone">
                {l.label}
              </a>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-luxury ${isActive ? "text-ink" : "text-stone"}`
                }
                end={l.to === "/"}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
