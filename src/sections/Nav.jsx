import {useEffect, useState} from "react";
import Hexagon from "../components/Hexagon";
import MagneticButton from "../components/MagneticButton";
import {IconDownload} from "../components/Icons";
import {nav, profile} from "../data/content";
import "../styles/Nav.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      {rootMargin: "-45% 0px -50% 0px"}
    );
    nav.forEach((n) => {
      const el = document.getElementById(n.href.slice(1));
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <a href="#top" className="nav-brand" aria-label="Om Patel — home">
          <Hexagon size={34} />
          <span className="nav-brand-text mono">
            {profile.handle}
            <span className="nav-cursor">_</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`nav-link ${active === n.href.slice(1) ? "active" : ""}`}
            >
              <span className="nav-link-id mono">{n.id}</span>
              <span>{n.label}</span>
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <span className="nav-status">
            <span className="nav-status-dot" /> secure
          </span>
          <MagneticButton
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost nav-resume"
          >
            <IconDownload /> Resume
          </MagneticButton>
          <button
            className={`nav-burger ${open ? "open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`nav-mobile ${open ? "open" : ""}`}>
        {nav.map((n) => (
          <a
            key={n.href}
            href={n.href}
            className="nav-mobile-link"
            onClick={() => setOpen(false)}
          >
            <span className="mono nav-link-id">{n.id}</span> {n.label}
          </a>
        ))}
        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
          onClick={() => setOpen(false)}
        >
          <IconDownload /> Download Resume
        </a>
      </div>
    </>
  );
}
