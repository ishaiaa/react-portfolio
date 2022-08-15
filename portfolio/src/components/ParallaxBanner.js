import React from "react";

import styles from "./ParallaxBanner.module.css";

import { ParallaxLayer } from "@react-spring/parallax";
import BouncyLetter from "./BouncyLetter";


import darkImage1   from "../images/dark/1.svg"
import darkImage2   from "../images/dark/2.svg"
import darkImage3   from "../images/dark/3.svg"
import darkImage4   from "../images/dark/4.svg"
import darkImage5   from "../images/dark/5.svg"
import darkWave     from "../images/dark/wave.svg"
import darkWaveBlue from "../images/dark/wave-blue.svg"

const bannerImages = {
    landscape: {
        image1:     darkImage1,
        image2:     darkImage2,
        image3:     darkImage3,
        image4:     darkImage4,
        image5:     darkImage5,
        wave:       darkWave,
        waveBlue:   darkWaveBlue
    }
}

function ParallaxBanner(props) {



  const title = {
    greeting: "Hello, I'm ",
    name: "Zongi",
    secondLine: "I'm a Web Developer",
  }
  
  return (
    <>
        <ParallaxLayer offset={0} speed={0} factor={1}>
          <div className={styles.sky} style={{background: 'linear-gradient(to bottom, rgb(47, 70, 139) 0%, rgb(93, 121, 189) 100%)'}}/>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.6} factor={1}>
          <div className={styles.layer} style={{'--backgroundImage': `url(${bannerImages.landscape.image1})`}} />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.45} factor={1}>
          <div className={styles.layer} style={{'--backgroundImage': `url(${bannerImages.landscape.image2})`}} />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.3} factor={1}>
          <div className={styles.layer} style={{'--backgroundImage': `url(${bannerImages.landscape.image3})`}} />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={-0.15} factor={1}>
          <div className={styles.layer} style={{'--backgroundImage': `url(${bannerImages.landscape.image4})`}} />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0} factor={1}>
          <div className={styles.layer} style={{'--backgroundImage': `url(${bannerImages.landscape.image5})`}} />
        </ParallaxLayer>


        <ParallaxLayer offset={0} speed={-0.4} factor={1}>
          <div className={styles.title} style={{'--backgroundImage': `url(${bannerImages.landscape.image3})`}} >
            <h1 className={styles.bouncingLetters}>
            {
              title.greeting.split("").map((letter, index) => {
                return <BouncyLetter key={index} letter={letter} />
              })
            }
            {
              title.name.split("").map((letter, index) => {
                return <BouncyLetter key={index} letter={letter} />
              })
            }
            </h1>
            <h2 className={styles.bouncingLetters}>
            {
              title.secondLine.split("").map((letter, index) => {
                return <BouncyLetter key={index} letter={letter} />
              })
            }
            </h2>
          </div>
        </ParallaxLayer>


        <ParallaxLayer offset={1} speed={0} factor={2}>
          <div className={styles.page} />
        </ParallaxLayer>


        <ParallaxLayer offset={1.1} speed={0.1} factor={1}>
          <div className={styles.layer} style={{'--backgroundImage': `url(${bannerImages.landscape.waveBlue})`}} />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0} factor={2}>
          <div className={styles.layer} style={{'--backgroundImage': `url(${bannerImages.landscape.wave})`}} />
        </ParallaxLayer>

    </>
  );
}

export default ParallaxBanner;