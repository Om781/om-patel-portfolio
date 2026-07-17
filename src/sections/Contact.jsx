import Reveal from "../components/Reveal";
import MagneticButton from "../components/MagneticButton";
import {IconMail, IconDownload} from "../components/Icons";
import {profile} from "../data/content";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="section contact container" id="contact">
      <div className="contact-inner glass">
        <span className="contact-glow" aria-hidden="true" />
        <Reveal>
          <span className="kicker">Contact / 06</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="contact-title">
            Let's build something <span className="text-grad">that scales.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="contact-sub mute">
            Open to Software Engineer roles worldwide (including relocation) and
            available for remote freelance &amp; contract work. My inbox is always
            open — let's talk.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="contact-cta">
            <MagneticButton
              href={`mailto:${profile.email}`}
              className="btn btn-primary"
            >
              <IconMail /> Say hello
            </MagneticButton>
            <MagneticButton
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              <IconDownload /> Resume
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="contact-details mono">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span className="contact-sep">·</span>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            <span className="contact-sep">·</span>
            <span>{profile.location}</span>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="contact-note mono">
            🔒 Reference letters from all employers available on request.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
