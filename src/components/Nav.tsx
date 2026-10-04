import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#our-coat", label: "The Coat" },
  { href: "/#smart-features", label: "Smart Features" },
  { href: "/#merino-wool", label: "Merino Wool" },
  { href: "/#development", label: "Development" },
  { href: "/#sustainability", label: "Sustainability" },
  { href: "/contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isOverlay = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${isOverlay ? "bg-transparent text-hero-foreground" : "border-b border-border bg-bone/95 text-ink backdrop-blur-md"}`}>
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between gap-6 px-6 md:px-12">
        <Link to="/" className="shrink-0 font-display text-xl uppercase tracking-editorial md:text-2xl">Gabbys Design</Link>
        <nav className="hidden items-center gap-5 xl:flex">
          {links.map((link) => <a key={link.href} href={link.href} className={`text-[10px] font-medium ${isOverlay ? "text-hero-foreground/85 hover:text-hero-foreground" : "text-stone hover:text-ink"}`}>{link.label}</a>)}
        </nav>
        <div className="hidden xl:block"><Button asChild size="sm" className="bg-early-bird text-early-bird-foreground hover:bg-early-bird/90"><a href="/#kickstarter-signup">Join the waitlist</a></Button></div>
        <Button type="button" variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)} className={`xl:hidden ${isOverlay ? "text-hero-foreground hover:bg-hero-panel/50 hover:text-hero-foreground" : "text-ink"}`}>{open ? <X size={22} /> : <Menu size={22} />}</Button>
      </div>
      {open && <div className="border-t border-border bg-bone text-ink xl:hidden"><nav className="flex flex-col gap-5 px-6 py-7">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm uppercase tracking-editorial text-stone">{link.label}</a>)}<Button asChild className="mt-2 w-full bg-early-bird text-early-bird-foreground"><a href="/#kickstarter-signup">Join the waitlist</a></Button></nav></div>}
    </header>
  );
};
