import React, { useState, useContext } from "react";
import "./ResumeButton.scss";
import { trackResumeClick } from "../../utils/analytics";
import StyleContext from "../../contexts/StyleContext";

/**
 * ResumeButton - Animated resume download button with analytics tracking
 * @param {string} variant - 'primary' (main button) or 'nav' (header nav style)
 * @param {string} source - Analytics source identifier
 * @param {string} text - Button text (default: "Resume")
 */
export default function ResumeButton({
  variant = "primary",
  source = "unknown",
  text = "Resume"
}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { isDark } = useContext(StyleContext);

  const handleClick = (e) => {
    // Track the click
    trackResumeClick(source);

    // Trigger animation
    setIsAnimating(true);

    // Show success state after download animation
    setTimeout(() => {
      setIsAnimating(false);
      setShowSuccess(true);

      // Reset success state
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
    }, 800);
  };

  const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;

  if (variant === "nav") {
    return (
      <a
        href={resumeUrl}
        target="_blank"
        rel="noreferrer"
        className={`resume-btn-nav ${isAnimating ? "downloading" : ""} ${showSuccess ? "success" : ""} ${isDark ? "dark" : ""}`}
        onClick={handleClick}
      >
        <span className="btn-content">
          <svg
            className="download-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span className="btn-text">{showSuccess ? "Opened!" : text}</span>
        </span>
        <span className="btn-progress"></span>
      </a>
    );
  }

  // Primary variant (main button style)
  return (
    <a
      href={resumeUrl}
      target="_blank"
      rel="noreferrer"
      className={`resume-btn-primary ${isAnimating ? "downloading" : ""} ${showSuccess ? "success" : ""} ${isDark ? "dark" : ""}`}
      onClick={handleClick}
    >
      <span className="btn-content">
        <svg
          className="download-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        <span className="btn-text">{showSuccess ? "Opened!" : text}</span>
      </span>
      <span className="btn-progress"></span>
      <span className="btn-ripple"></span>
    </a>
  );
}
