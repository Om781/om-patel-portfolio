import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import {about, education} from "../data/content";
import "../styles/About.css";

export default function About() {
  return (
    <section className="section about container" id="about">
      <SectionHeading
        index="01"
        kicker="About"
        title="The engineer behind the systems"
      />
      <div className="about-grid">
        <div className="about-story">
          {about.story.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p className="about-p">{p}</p>
            </Reveal>
          ))}

          <Reveal delay={0.1}>
            <blockquote className="about-quote glass">
              <span className="about-quote-mark">"</span>
              {about.philosophy}
            </blockquote>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="about-edu">
              <span className="about-edu-icon">🎓</span>
              <div>
                <div className="about-edu-degree">{education.degree}</div>
                <div className="about-edu-school">
                  {education.school} · {education.date}
                </div>
                <div className="about-edu-detail mute">{education.detail}</div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="about-brings">
          <Reveal>
            <h3 className="about-brings-title mono">// what I bring</h3>
          </Reveal>
          <div className="brings-grid">
            {about.brings.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.06}>
                <div className="bring-card glass">
                  <span className="bring-icon">{b.icon}</span>
                  <div className="bring-title">{b.title}</div>
                  <div className="bring-text mute">{b.text}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
