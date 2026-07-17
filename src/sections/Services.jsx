import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import MagneticButton from "../components/MagneticButton";
import {IconArrow} from "../components/Icons";
import {services} from "../data/content";
import "../styles/Services.css";

export default function Services() {
  return (
    <section className="section services container" id="services">
      <SectionHeading index="05" kicker="Services" title="How I can help" />
      <div className="services-grid">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <article className="svc-card glass">
              <span className="svc-icon">{s.icon}</span>
              <h3 className="svc-title">{s.title}</h3>
              <p className="svc-text mute">{s.text}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="services-cta glass">
          <div>
            <div className="services-cta-title">Have a project in mind?</div>
            <div className="services-cta-sub mute">
              Available for freelance & contract work — remote, worldwide.
            </div>
          </div>
          <MagneticButton href="#contact" className="btn btn-primary">
            Start a project <IconArrow />
          </MagneticButton>
        </div>
      </Reveal>
    </section>
  );
}
