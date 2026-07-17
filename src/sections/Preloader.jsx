import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import Hexagon from "../components/Hexagon";
import "../styles/Preloader.css";

const STEPS = [
  "initializing secure session",
  "verifying credentials",
  "decrypting profile",
  "access granted"
];

/** Boot-sequence preloader. Calls onDone() when the bar fills. */
export default function Preloader({onDone}) {
  const [pct, setPct] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      onDone();
      return;
    }
    let p = 0;
    const iv = setInterval(() => {
      p += Math.random() * 8 + 4;
      if (p >= 100) {
        p = 100;
        clearInterval(iv);
        setTimeout(onDone, 600);
      }
      setPct(Math.floor(p));
      setStep(Math.min(STEPS.length - 1, Math.floor((p / 100) * STEPS.length)));
    }, 120);
    return () => clearInterval(iv);
  }, [onDone]);

  return (
    <motion.div
      className="preloader"
      initial={{opacity: 1}}
      exit={{opacity: 0, filter: "blur(10px)"}}
      transition={{duration: 0.6, ease: "easeInOut"}}
    >
      <div className="preloader-inner">
        <Hexagon size={64} className="preloader-hex" />
        <div className="preloader-status mono">
          <span className="preloader-caret">$</span> {STEPS[step]}
          <span className="preloader-blink">_</span>
        </div>
        <div className="preloader-bar">
          <div className="preloader-bar-fill" style={{width: `${pct}%`}} />
        </div>
        <div className="preloader-pct mono">{String(pct).padStart(3, "0")} %</div>
      </div>
    </motion.div>
  );
}
