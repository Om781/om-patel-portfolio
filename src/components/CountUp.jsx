import {useEffect, useRef, useState} from "react";

/**
 * Counts a numeric value up from 0 when it scrolls into view.
 * Preserves prefixes/suffixes like "+", "%", and decimals (e.g. "3.7+").
 */
export default function CountUp({value, duration = 1600}) {
  const ref = useRef(null);
  const started = useRef(false);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const m = String(value).match(/^([\d.]+)(.*)$/);
    if (!m) {
      setDisplay(value);
      return;
    }
    const target = parseFloat(m[1]);
    const suffix = m[2];
    const decimals = (m[1].split(".")[1] || "").length;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    setDisplay("0" + (decimals ? "." + "0".repeat(decimals) : "") + suffix);

    let raf;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
            setDisplay((target * eased).toFixed(decimals) + suffix);
            if (p < 1) raf = requestAnimationFrame(tick);
            else setDisplay(target.toFixed(decimals) + suffix);
          };
          raf = requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      {threshold: 0.5}
    );
    if (ref.current) io.observe(ref.current);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}
