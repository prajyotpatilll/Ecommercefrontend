import React from "react";
import "./Hero.css";
import "./Custom1.css";
import hand_icon from "../Assets/hand_icon.png";
import hero_image from "../Assets/hero_image.png";
import arrow_icon from '../Assets/arrow.png'

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2 className="h2-hero">NEW ARRIVALS ONLY</h2>
        <div>
          <div className="h11">
            <p>
              NEW
              <img src={hand_icon} />
              <br /> Collection <br />
              for Everyone
            </p>
            <button className="button-17" role="button">
              Latest Collection<i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="Heroimg" />
      </div>
    </div>
  );
}

export default Hero;
