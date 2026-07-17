import {motion} from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import {expertise} from "../data/content";
import "../styles/Expertise.css";

export default function Expertise() {
  return (
    <section className="section expertise container" id="expertise">
      <SectionHeading index="02" kicker="Expertise" title="What I work with" />
      <div className="expertise-grid">
        {expertise.map((e, i) => (
          <Reveal key={e.id} delay={i * 0.08}>
            <article className="exp-card glass">
              <header className="exp-card-head">
                <h3>{e.title}</h3>
                <span className="exp-level mono">{e.level}%</span>
              </header>
              <p className="exp-blurb mute">{e.blurb}</p>
              <div className="exp-bar">
                <motion.span
                  className="exp-bar-fill"
                  initial={{width: 0}}
                  whileInView={{width: `${e.level}%`}}
                  viewport={{once: true, margin: "-40px"}}
                  transition={{duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1}}
                />
              </div>
              <div className="exp-skills">
                {e.skills.map((s) => (
                  <span key={s} className="exp-skill">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
