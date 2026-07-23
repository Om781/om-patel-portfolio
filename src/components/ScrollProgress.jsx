import {motion, useScroll, useSpring} from "framer-motion";

/** Thin gradient bar at the very top showing page scroll progress. */
export default function ScrollProgress() {
  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3
  });
  return <motion.div className="scroll-progress" style={{scaleX}} aria-hidden="true" />;
}
