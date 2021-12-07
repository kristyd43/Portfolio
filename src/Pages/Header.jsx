import React, { Image } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import profileLogo from "../../src/components/images/profile.logo.png";
import AboutMe from "../components/aboutMe/aboutMe";
import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="header">
      <div id="header-container">
        <img id="logo" src={profileLogo} />
        <h3 class="header-text" id="top">
          Kristy Davidson
        </h3>
      </div>
      <div id="nav-container">
        <Link activeClass="active" to="AboutMe" spy={true} smooth={true}>
          <button class="nav">About Me</button>
        </Link>
        <Link activeClass="active" to="Experience" spy={true} smooth={true}>
          <button class="nav">Experience</button>
        </Link>
        <Link activeClass="active" to="Contact" spy={true} smooth={true}>
          <button class="nav">Contact</button>
        </Link>
      </div>
      <div id="AboutMe">
        <AboutMe />
      </div>
      <div id="Experience">
        <Experience />
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <div id="topbutt">
        <Link activeClass="active" to="top" spy={true} smooth={true}>
          <button id="top.button" class="nav">
            Back To Top
          </button>
        </Link>
      </div>
      <footer
        style={{ display: "flex", justifyContent: "center", marginBottom: "0" }}
      >
        ~Kristy Davidson~
      </footer>
    </div>
  );
};
export default Header;
