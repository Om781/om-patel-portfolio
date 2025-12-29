import React, { useContext } from "react";
import "./Footer.scss";
import {Fade} from "../animations/Animations";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          © {new Date().getFullYear()} Om Patel. All rights reserved.
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Built with React
        </p>
      </div>
    </Fade>
  );
}