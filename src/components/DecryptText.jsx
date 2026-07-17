import {useEffect, useRef, useState} from "react";

const GLYPHS = "ABCDEF0123456789#%&$/\\<>[]{}=+*!";

const scramble = (text) =>
  text
    .split("")
    .map((c) => (c === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
    .join("");

/**
 * Text that "decrypts" — resolves from random glyphs to the final string
 * left-to-right the first time it scrolls into view.
 */
export default function DecryptText({
  text,
  as: Tag = "span",
  className = "",
  speed = 26,
  startDelay = 0
}) {
  const [output, setOutput] = useState(() => scramble(text));
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setOutput(text);
      return;
    }

    let interval;
    let revealed = 0;
    const run = () => {
      const timer = setTimeout(() => {
        interval = setInterval(() => {
          revealed += 0.5;
          const r = Math.floor(revealed);
          setOutput(
            text
              .split("")
              .map((ch, i) => {
                if (ch === " ") return " ";
                if (i < r) return ch;
                return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
              })
              .join("")
          );
          if (r >= text.length) {
            clearInterval(interval);
            setOutput(text);
          }
        }, speed);
      }, startDelay);
      return timer;
    };

    let timer;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          timer = run();
          io.disconnect();
        }
      },
      {threshold: 0.35}
    );
    if (ref.current) io.observe(ref.current);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      io.disconnect();
    };
  }, [text, speed, startDelay]);

  return (
    <Tag ref={ref} className={className}>
      {output}
    </Tag>
  );
}
