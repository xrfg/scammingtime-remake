import React from "react";
import "./part1.css";
import "../../styles/surething-mob.css";

export default function Part1() {
  return (
    <div>
      <div class="txt pt2 multiply"></div>

      <div class="txt pt2 top">
        <img src="assets/text-top.png" width="100%" />
      </div>
      <div class="layed">
        <img class="white" alt="" src="./assets/gsap/1.jpeg" width="100%" />
        <img
          class="bgimg"
          alt=""
          id="c4"
          src="./assets/gsap/2.jpeg"
          width="100%"
        />
        <img class="white" alt="" src="./assets/gsap/3.jpeg" width="100%" />
        <img
          class="bgimg"
          alt=""
          id="c5"
          src="./assets/gsap/4.jpeg"
          width="100%"
        />
        <img class="white" alt="" src="./assets/gsap/5.jpeg" width="100%" />
        <img
          class="bgimg"
          id="c6"
          alt=""
          src="./assets/gsap/6.jpeg"
          width="100%"
        />
        <img class="white" alt="" src="./assets/gsap/7.jpeg" width="100%" />
        <div class="banner">
          <img class="green" alt="" src="./assets/gsap/8.jpeg" width="100%" />
          {/* <div class="marquee">
            Here you go hun, i thought you said you wanted to hallucinate:
            welcome to the land of all alone to the apathetic detachment veiling
            your every move fictions running through the boundless mental space
            of your silence and you’ve arrived. Your glasses as foggy as the air
            outside drawn inwards to the body-less presence emanating of all the
            voices digitalia brings you in touch with. The self-sufficient
            individual and the lonely hacker: holy capable and alone. Parallelly
            runs the image of your freckled body on all fours on the ugly blue
            couch, one hand thrusting and twisting the other resting gently on
            your lower back pinching grabbing stroking and slap slap slap the
            energy piles up condensates and the weather now provides us with
            foggy windows and we smoke and listen to the drone of the cars
            sliding on water and my lucky heating system already on and still
            september - our voices so present (...)
          </div> */}
        </div>
        <img class="white" alt="" src="./assets/gsap/9.jpeg" width="100%" />
        <div class="portal flowers">
          <a href="/index.html">
            {" "}
            <img
              class="portalglow"
              id="boobs"
              alt=""
              src="./assets/gsap/portalglow.png"
              width="16%"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
