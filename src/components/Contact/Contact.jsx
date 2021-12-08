import React from "react";
import profileLogo from "../images/profile.logo.png";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  return (
    <div id="header">
      <main>
        <div id="about-me">
          <h3 class="standard-text">Contact</h3>
          <h1 class="para">Let's Talk...</h1>
          <form action="https://formspree.io/f/xvolpebe" method="post">
            <div class="form-item">
              <label class="para" for="name">
                Name:{" "}
              </label>
              <input type="text" id="name" name="name" />
            </div>
            <div class="form-item">
              <label class="para" for="email">
                Email:{" "}
              </label>
              <input type="text" id="email" name="email" />
            </div>
            <div class="form-item">
              <label class="para" for="message">
                Message:{" "}
              </label>
              <textarea type="text" id="message" name="message" />
            </div>
            <div class="form-item">
              <button class="nav" type="submit">
                SEND
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
