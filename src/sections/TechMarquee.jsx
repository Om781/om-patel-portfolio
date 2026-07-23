import {techMarquee} from "../data/content";
import "../styles/TechMarquee.css";

/** Auto-scrolling strip of the tech stack. Decorative (stack also listed in Expertise). */
export default function TechMarquee() {
  const items = [...techMarquee, ...techMarquee];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span className="marquee-item" key={i}>
            {t}
            <span className="marquee-sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
