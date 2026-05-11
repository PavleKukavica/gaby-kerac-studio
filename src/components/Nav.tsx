import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

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
        scrolled || pathname !== "/" ? "bg-bone/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-xl md:text-2xl tracking-wide">
          Gabbys <span className="italic text-stone">Design</span>
        </Link>
        <nav className="hidden md:flex items-center gap-12">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-[11px] uppercase tracking-luxury link-underline ${isActive ? "text-ink" : "text-stone hover:text-ink"}`
              }
              end={l.to === "/"}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <button
          aria-label="Menu"
          className="md:hidden text-ink"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-bone border-t border-border animate-fade-in">
          <nav className="flex flex-col px-6 py-8 gap-6">
            {links.map((l) => (
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
