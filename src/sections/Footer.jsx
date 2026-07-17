import Hexagon from "../components/Hexagon";
import {IconGithub, IconLinkedin, IconTwitter, IconMail} from "../components/Icons";
import {nav, socials, profile} from "../data/content";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Hexagon size={42} />
          <div>
            <div className="footer-name">Om Patel</div>
            <div className="footer-role mute">{profile.role}</div>
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="footer-socials">
          <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <IconGithub />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <IconLinkedin />
          </a>
          <a href={socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
            <IconTwitter />
          </a>
          <a href={socials.email} aria-label="Email">
            <IconMail />
          </a>
        </div>
      </div>

      <div className="container footer-bottom mono">
        <span>© 2026 Om Patel — designed &amp; engineered from scratch.</span>
        <a href="#top" className="footer-top">
          back to top ↑
        </a>
      </div>
    </footer>
  );
}
