import React, { useState, useRef, useEffect } from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({ cardInfo, isDark, index }) {
  const imgRef = useRef(null);
  const cardRef = useRef(null);

  const [accentColor, setAccentColor] = useState("#645beb");
  const [imgError, setImgError] = useState(false);
  const [visible, setVisible] = useState(false);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  // Extract dominant logo color
  const onImageLoad = () => {
    try {
      const thief = new ColorThief();
      const [r, g, b] = thief.getColor(imgRef.current);
      setAccentColor(`rgb(${r}, ${g}, ${b})`);
    } catch {
      console.warn("Color extraction failed");
    }
  };

  // Initials fallback
  const initials = cardInfo.company
    .split(" ")
    .map(w => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="timeline-item">
      {/* Timeline line */}
      <div
        className="timeline-line"
        style={{ backgroundColor: accentColor }}
      />

      {/* Timeline dot */}
      <div
        className="timeline-dot"
        style={{ backgroundColor: accentColor }}
      />

      <div
        ref={cardRef}
        className={`experience-card ${visible ? "visible" : ""} ${
          isDark ? "experience-card-dark" : ""
        }`}
        style={{ borderLeft: `4px solid ${accentColor}` }}
      >
        {/* Header */}
        <div className="experience-header">
          <a
            href={cardInfo.companyUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="logo-link"
          >
            {!imgError ? (
              <img
                ref={imgRef}
                src={cardInfo.companylogo}
                alt={cardInfo.company}
                className="experience-logo"
                crossOrigin="anonymous"
                onLoad={onImageLoad}
                onError={() => setImgError(true)}
              />
            ) : (
              <div
                className="experience-logo fallback-logo"
                style={{ backgroundColor: accentColor }}
              >
                {initials}
              </div>
            )}
          </a>

          <div>
            <h3 className={isDark ? "dark-mode-text" : ""}>
              {cardInfo.role}
            </h3>
            <p className="experience-company">{cardInfo.company}</p>
            <span className="experience-date">{cardInfo.date}</span>
          </div>
        </div>

        {/* Description */}
        <p className={`experience-desc ${isDark ? "dark-mode-text" : ""}`}>
          {cardInfo.desc}
        </p>

        {/* KPI Badges */}
        {cardInfo.kpis && (
          <div className="kpi-container">
            {cardInfo.kpis.map((kpi, i) => (
              <span
                key={i}
                className="kpi-badge"
                style={{ backgroundColor: accentColor }}
              >
                {kpi}
              </span>
            ))}
          </div>
        )}

        <ul className="experience-bullets">
          {cardInfo.descBullets?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}