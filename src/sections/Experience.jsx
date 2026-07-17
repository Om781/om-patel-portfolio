import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import {IconArrow} from "../components/Icons";
import {experience} from "../data/content";
import "../styles/Experience.css";

export default function Experience() {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start 65%", "end 55%"]
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="section experience container" id="experience">
      <SectionHeading index="03" kicker="Experience" title="Where I've shipped" />
      <div className="timeline" ref={ref}>
        <div className="timeline-track">
          <motion.div className="timeline-progress" style={{scaleY}} />
        </div>

        {experience.map((x, i) => (
          <Reveal key={i} className="tl-item" delay={0.05}>
            <span className="tl-dot" />
            <div className="tl-card glass">
              <div className="tl-top">
                <img
                  className="tl-logo"
                  src={x.logo}
                  alt={x.company}
                  loading="lazy"
                />
                <div className="tl-titles">
                  <h3 className="tl-role">{x.role}</h3>
                  <a
                    className="tl-company"
                    href={x.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {x.company} <IconArrow />
                  </a>
                </div>
                <span className="tl-date mono">{x.date}</span>
              </div>

              <div className="tl-tags">
                <span className="tl-domain">{x.domain}</span>
                {x.kpis.map((k) => (
                  <span key={k} className="tl-kpi">
                    {k}
                  </span>
                ))}
              </div>

              <p className="tl-summary">{x.summary}</p>
              <ul className="tl-points">
                {x.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
