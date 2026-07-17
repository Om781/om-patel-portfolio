import Reveal from "./Reveal";
import DecryptText from "./DecryptText";

/**
 * Shared section header: kicker + index line, then a decrypting title.
 */
export default function SectionHeading({index, kicker, title, id}) {
  return (
    <div className="section-heading" id={id}>
      <Reveal className="section-heading-top">
        <span className="kicker">{kicker}</span>
        <span className="section-index">/ {index}</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="h-section">
          <DecryptText text={title} />
        </h2>
      </Reveal>
    </div>
  );
}
