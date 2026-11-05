"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <nav className={scrolled ? "nav is-scrolled" : "nav"} aria-label="Main">
      <div className="nav__row container">
        <a className="nav__name" href="#top">
          <svg viewBox="0 0 32 32" aria-hidden><rect width="32" height="32" rx="7" /><text x="16" y="21.5" textAnchor="middle">KC</text></svg>
          Khushant Chopra
        </a>
        <ul className="nav__links">
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a className="btn btn--ink btn--sm" href="#contact">Start a project</a>
      </div>
    </nav>
  );
}
