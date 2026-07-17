import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

/** Cycles through a list of words with a vertical fade. */
export default function RotatingText({items, interval = 2200, className = ""}) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), interval);
    return () => clearInterval(t);
  }, [items, interval]);

  return (
    <span className={`rotating ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          className="rotating-item"
          initial={{y: "0.75em", opacity: 0}}
          animate={{y: 0, opacity: 1}}
          exit={{y: "-0.75em", opacity: 0}}
          transition={{duration: 0.4, ease: [0.16, 1, 0.3, 1]}}
        >
          {items[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
