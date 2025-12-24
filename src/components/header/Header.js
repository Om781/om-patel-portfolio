import React, { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import ResumeButton from "../resumeButton/ResumeButton";
import StyleContext from "../../contexts/StyleContext";
import { greeting, workExperiences, skillsSection } from "../../portfolio";

function Header() {
  const { isDark } = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewSkills = skillsSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href={process.env.PUBLIC_URL + "/"} className="logo">
          <span className="grey-color">&lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className={isDark ? "navicon navicon-dark" : "navicon"} />
        </label>

        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}

          {viewExperience && (
            <li>
              <a href="#experience">Experience</a>
            </li>
          )}

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

          {/* Resume Button */}
          <li className="resume-nav-item">
            <ResumeButton variant="nav" source="header" text="Resume" />
          </li>

          {/* Dark mode toggle */}
          <li className="toggle-btn">
            <ToggleSwitch />
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;