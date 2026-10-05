import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
  const { pathname } = useLocation();
  return (
  <footer className={`border-t border-border ${pathname === "/" ? "" : "mt-32"}`}>
    <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-16 grid md:grid-cols-3 gap-12">
      <div>
        <p className="font-display text-3xl">Gabbys Design</p>
        <p className="mt-3 text-sm text-stone max-w-xs">
          The Smart Merino Coat — natural comfort, considered design and smarter warmth in development.
        </p>
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-luxury text-stone mb-4">Explore</p>
        <ul className="space-y-2 text-sm">
          <li><a href="/#our-coat" className="link-underline">The Coat</a></li>
          <li><a href="/#smart-features" className="link-underline">Smart Features</a></li>
          <li><a href="/#development" className="link-underline">Development</a></li>
          <li><Link to="/portfolio" className="link-underline">Portfolio</Link></li>
          <li><Link to="/about" className="link-underline">About</Link></li>
          <li><Link to="/contact" className="link-underline">Contact</Link></li>
        </ul>
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-luxury text-stone mb-4">Studio</p>
        <ul className="space-y-2 text-sm">
          <li><a href="mailto:gabi.kerac@gmail.com" className="link-underline">gabi.kerac@gmail.com</a></li>
          <li><a href="https://www.instagram.com/_gabbys_design_/" target="_blank" rel="noreferrer" className="link-underline">Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/gabriela-kerac/" target="_blank" rel="noreferrer" className="link-underline">LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between text-[11px] uppercase tracking-editorial text-stone">
        <span>© {new Date().getFullYear()} Gabbys Design</span>
        <span>Boston MA</span>
      </div>
    </div>
  </footer>
  );
};
