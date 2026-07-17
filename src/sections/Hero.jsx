import Reveal from "../components/Reveal";
import DecryptText from "../components/DecryptText";
import RotatingText from "../components/RotatingText";
import MagneticButton from "../components/MagneticButton";
import Fingerprint from "../components/Fingerprint";
import {
  IconGithub,
  IconLinkedin,
  IconTwitter,
  IconMail,
  IconArrow,
  IconDownload
} from "../components/Icons";
import {profile, stats, socials, domains} from "../data/content";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero-grid">
        <div className="hero-text">
          <Reveal className="hero-status" as="div">
            <span className="hero-status-dot" />
            <span className="mono">{profile.status}</span>
          </Reveal>

          <Reveal delay={0.05}>
            <span className="kicker hero-kicker">
              {profile.role} · {profile.yearsExperience} yrs
            </span>
          </Reveal>

          <h1 className="hero-title">
            <DecryptText as="span" text={profile.roleWords[0]} className="hero-line" />
            <DecryptText
              as="span"
              text={profile.roleWords[1]}
              className="hero-line text-grad"
              startDelay={260}
            />
          </h1>

          <Reveal delay={0.1}>
            <div className="hero-rotor mono">
              <span className="hero-rotor-caret">$</span>
              <span className="hero-rotor-cmd">building</span>
              <span className="hero-rotor-out">
                <RotatingText items={profile.rotating} />
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="hero-tagline">{profile.tagline}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="hero-cta">
              <MagneticButton href="#work" className="btn btn-primary">
                View Work <IconArrow />
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

          <Reveal delay={0.25}>
            <div className="hero-domains">
              <span className="hero-domains-label mono">shipped in</span>
              {domains.map((d) => (
                <span key={d} className="chip">
                  {d}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="hero-socials">
              <a className="hero-social" href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <IconGithub />
              </a>
              <a className="hero-social" href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <IconLinkedin />
              </a>
              <a className="hero-social" href={socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
                <IconTwitter />
              </a>
              <a className="hero-social" href={socials.email} aria-label="Email">
                <IconMail />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="hero-visual">
          <Reveal delay={0.15} y={40}>
            <Fingerprint id={profile.fingerprintId} />
          </Reveal>
          <div className="hero-stats">
            {stats.map((s, i) => (
              <Reveal className="hero-stat" key={s.label} delay={0.35 + i * 0.08}>
                <div className="num text-grad">{s.value}</div>
                <div className="lbl">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll mono" aria-label="Scroll to about section">
        <span>scroll</span>
        <span className="hero-scroll-line" />
      </a>
    </section>
  );
}
