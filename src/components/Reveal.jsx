import {motion} from "framer-motion";

/**
 * Scroll-into-view reveal. Fades + rises once, then stays put.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 26,
  duration = 0.7,
  className = "",
  as = "div"
}) {
  const M = motion[as] || motion.div;
  return (
    <M
      className={className}
      initial={{opacity: 0, y}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, margin: "-60px"}}
      transition={{duration, delay, ease: [0.16, 1, 0.3, 1]}}
    >
      {children}
    </M>
  );
}
