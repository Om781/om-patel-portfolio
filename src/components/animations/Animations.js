import React from "react";
import {motion} from "framer-motion";

/**
 * Fade animation component - replacement for react-reveal Fade
 * Supports: bottom, left, right, top directions
 */
export function Fade({
  children,
  bottom,
  left,
  right,
  top,
  duration = 1000,
  distance = "20px"
}) {
  const distanceValue = parseInt(distance, 10);

  const getInitialPosition = () => {
    if (bottom) return {opacity: 0, y: distanceValue};
    if (top) return {opacity: 0, y: -distanceValue};
    if (left) return {opacity: 0, x: -distanceValue};
    if (right) return {opacity: 0, x: distanceValue};
    return {opacity: 0};
  };

  const getFinalPosition = () => {
    if (bottom || top) return {opacity: 1, y: 0};
    if (left || right) return {opacity: 1, x: 0};
    return {opacity: 1};
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={getFinalPosition()}
      viewport={{once: true, amount: 0.1}}
      transition={{duration: duration / 1000, ease: "easeOut"}}
    >
      {children}
    </motion.div>
  );
}

/**
 * Slide animation component - replacement for react-reveal Slide
 * Supports: left, right, top, bottom directions
 */
export function Slide({
  children,
  left,
  right,
  top,
  bottom,
  duration = 1000
}) {
  const getInitialPosition = () => {
    if (left) return {x: "-100%"};
    if (right) return {x: "100%"};
    if (top) return {y: "-100%"};
    if (bottom) return {y: "100%"};
    return {x: "-100%"};
  };

  const getFinalPosition = () => {
    if (left || right) return {x: 0};
    if (top || bottom) return {y: 0};
    return {x: 0};
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={getFinalPosition()}
      viewport={{once: true, amount: 0.1}}
      transition={{duration: duration / 1000, ease: "easeOut"}}
    >
      {children}
    </motion.div>
  );
}
