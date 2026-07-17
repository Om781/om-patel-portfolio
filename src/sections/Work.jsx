import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import {IconArrow} from "../components/Icons";
import {projects} from "../data/content";
import "../styles/Work.css";

export default function Work() {
  return (
    <section className="section work container" id="work">
      <SectionHeading index="04" kicker="Selected Work" title="Systems I've built" />
      <div className="work-grid">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.07}>
            <a
              className="proj glass"
              href={p.url}
              target="_blank"
              rel="noreferrer"
            >
              <span className="proj-scan" />
              <header className="proj-head">
                <span className="proj-id mono">{p.id}</span>
                <span className="proj-year mono">{p.year}</span>
              </header>
              <h3 className="proj-name">{p.name}</h3>
              <p className="proj-desc mute">{p.desc}</p>
              <div className="proj-tags">
                {p.tags.map((t) => (
                  <span key={t} className="proj-tag">
                    {t}
                  </span>
                ))}
              </div>
              <footer className="proj-foot">
                <span className="proj-metric">{p.metric}</span>
                <span className="proj-org">
                  {p.org} <IconArrow />
                </span>
              </footer>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
