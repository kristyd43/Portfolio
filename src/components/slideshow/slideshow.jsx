import React, { Image } from "react";
import { Slide } from "react-slideshow-image/dist/styles.css";
import "../images/class.jpg";
import "../images/gallery.jpg";
import "../images/sax.jpg";
import "../images/jetski.jpg";
import "../../Pages/Homepage.css";

const slideImages = [
  "src/components/images/class.jpg",
  "src/components/images/gallery.jpg",
  "src/components/images/sax.jpg",
  "src/components/images/jetski.jpg",
];

const slideShow = () => {
  return (
    <div class="slide-container">
      <Slide>
        <div class="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div class="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            <span>Slide 2</span>
          </div>
        </div>
        <div class="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            <span>Slide 3</span>
          </div>
        </div>
        <div class="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[3]})` }}>
            <span>Slide 4</span>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default slideShow;
