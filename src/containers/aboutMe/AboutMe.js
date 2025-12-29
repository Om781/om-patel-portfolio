import React, {useContext} from "react";
import "./AboutMe.scss";
import {aboutMeSection} from "../../portfolio";
import {Fade} from "../../components/animations/Animations";
import StyleContext from "../../contexts/StyleContext";

export default function AboutMe() {
  const {isDark} = useContext(StyleContext);

  if (!aboutMeSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="about-me-main" id="about">
        <div className="about-me-container">
          {/* Left Side - Story */}
          <div className="about-me-content">
            <h1 className={isDark ? "dark-mode about-me-title" : "about-me-title"}>
              {aboutMeSection.title}
            </h1>
            <p className={isDark ? "dark-mode about-me-subtitle" : "about-me-subtitle"}>
              {aboutMeSection.subtitle}
            </p>

            <div className="about-me-story">
              {aboutMeSection.story.map((paragraph, index) => (
                <p
                  key={index}
                  className={isDark ? "dark-mode story-text" : "story-text"}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* What I Bring */}
            <div className="what-i-bring">
              <h3 className={isDark ? "dark-mode" : ""}>What I Bring to the Table</h3>
              <ul className="bring-list">
                {aboutMeSection.whatIBring.map((item, index) => (
                  <li key={index} className={isDark ? "dark-mode" : ""}>
                    <span className="bring-icon">{item.icon}</span>
                    <span className="bring-text">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side - Highlight Cards */}
          <div className="about-me-highlights">
            {aboutMeSection.highlights.map((highlight, index) => (
              <div
                key={index}
                className={`highlight-card ${isDark ? "dark-mode" : ""}`}
                style={{"--delay": `${index * 0.1}s`}}
              >
                <div className="highlight-icon">{highlight.icon}</div>
                <div className="highlight-value">{highlight.value}</div>
                <div className="highlight-label">{highlight.label}</div>
              </div>
            ))}

            {/* Quote Card */}
            <div className={`quote-card ${isDark ? "dark-mode" : ""}`}>
              <div className="quote-icon">"</div>
              <p className="quote-text">{aboutMeSection.philosophy}</p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
