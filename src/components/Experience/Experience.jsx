import React from "react";
import { useNavigate } from "react-router-dom";
import Luxe from "../images/Luxe.PNG";
import PreachTeach from "../images/PreachTeach.PNG";
import News from "../images/News.PNG";

const Experience = () => {
  return (
    <div id="header">
      <main>
        <div id="about-me">
          <h3 class="standard-text">Experience</h3>
          <h1 class="para">
            Want to see some of the projects I've worked on? Look no further!{" "}
          </h1>
          <div id="card-container">
            <div>
              <a
                href="https://secret-island-31015.herokuapp.com/"
                rel="noreferrer"
              >
                <img
                  id="experience-card"
                  alt="luxe; group project"
                  src={Luxe}
                ></img>
                <h3 class="card-title">Luxe</h3>
              </a>
            </div>
            <div>
              <a
                href="https://mysterious-coast-33239.herokuapp.com/"
                rel="noreferrer"
              >
                <img
                  id="experience-card"
                  alt="PreachingTeaching; solo crowdfunding project"
                  src={PreachTeach}
                  style={{ objectFit: "fill" }}
                ></img>
                <h3 class="card-title">PreachingTeaching</h3>
              </a>
            </div>
            <div>
              <a
                href="https://vast-harbor-77640.herokuapp.com/news/"
                rel="noreferrer"
              >
                {" "}
                <img
                  id="experience-card"
                  alt="SheCodes News; Solo, Django"
                  src={News}
                  style={{ objectFit: "fill" }}
                ></img>
                <h3 class="card-title">SheCodes News</h3>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Experience;
