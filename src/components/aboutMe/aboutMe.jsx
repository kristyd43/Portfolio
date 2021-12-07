import React from "react";
import profileLogo from "../images/profile.logo.png";
import Head from "../images/head.jpg";

const AboutMe = () => {
  return (
    <div id="header">
      <main>
        <div id="about-me">
          <h3 class="standard-text">About Me</h3>
          <div id="about-container">
            <img id="headpic" alt="" src={Head} />
            <h1 class="para">
              At the moment I work as a fleet specialist for BHP; an extremely
              tech-reliant role. Through this I’ve found thorough enjoyment in
              working with computers. I’m lucky enough to have had this
              influence me to a point where I now aim for a future with a role
              that entails creativity in technical developments. This
              development plan has been supported by BHP, as I am currently
              nearing the end of a six month course in the SheCodes Program.
              Throughout the course I have developed websites in Django, React
              and HTML/CSS. I am now familiar with the fundamentals of python
              and often use git to save and track codes. On a side note, I am
              also taking on learning the saxophone and French! I believe it’s
              important to strive to learn new things and I take great enjoyment
              in bettering myself for my community, my work and for myself. My
              dream job would be contributing to developments in artificial
              intelligence as a data scientist. However, I have great confidence
              that I will both enjoy and embrace any role within a Digital team
              as I have throughout the SheCodes program.{" "}
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutMe;
