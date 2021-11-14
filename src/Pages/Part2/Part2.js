//* react imports
import React, { useState } from "react";
import { Link } from "react-router-dom";

//* css imports
import "./part2.css";
import "../../styles/surething-mob.css";

//* spreading texts
import textBig from "./assets/text-multiply.jpg";
import textSmall from "./assets/text-top.png";

//* blank images + glowing images
import imageOne from "./assets/gsap/images1.jpeg";
import imageTwo from "./assets/gsap/images2.jpeg";
import imageThree from "./assets/gsap/images3.jpeg";
import imageFour from "./assets/gsap/images4.jpeg";
import imageFive from "./assets/gsap/images5.jpeg";
import imageSix from "./assets/gsap/images6.jpeg";
import imageSeven from "./assets/gsap/images7.jpeg";
import green from "./assets/gsap/images8.jpeg";
import imageNine from "./assets/gsap/images9.jpeg";

//* boobs + flower bg
import boobs from "./assets/gsap/portalglow.png";
import flowerBg from "./assets/gsap/portalbg.jpg";

//* texts
import tvNews from "./tvNews.json";

export default function Part1() {
  const [running, setRunning] = useState(true);
  return (
    <div className="page">
      <div className="">
        <img className="textBig" src={textBig} width="100%" alt="" />
        <img className="textSmall" src={textSmall} width="100%" alt="" />
      </div>
      <div class="imagesUnderContainer">
        <img className="imagesUnder" src={imageOne} alt="" />
        <img className="imagesUnder" src={imageTwo} alt="" />
        <img className="imagesUnder" src={imageThree} alt="" />
        <img className="imagesUnder" src={imageFour} alt="" />
        <img className="imagesUnder" src={imageFive} alt="" />
        <img className="imagesUnder" src={imageSix} alt="" />
        <img className="imagesUnder" src={imageSeven} alt="" />
        <div className="tvNewsContainer">
          <img className="green" src={green} alt="" />
          <div
            class="tvNews"
            style={{ animationPlayState: running ? "running" : "paused" }}
            onMouseOver={() => setRunning(!running)}
            onMouseOut={() => setRunning(true)}
          >
            {tvNews.tvNews}
          </div>
        </div>
        <img className="imagesUnder" src={imageNine} alt="" />
        <div
          className="portalBg"
          style={{ backgroundImage: `url(${flowerBg})` }}
        >
          <Link to="/pt3">
            <img
              className="portalGlow"
              src={boobs}
              alt=""
              id="boobs"
              width="16%"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
