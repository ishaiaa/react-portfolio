import React from "react";

import { Parallax } from "react-scroll-parallax";

import styles from "./Banner.module.css";

import BouncyLetter from "../reusables/BouncyLetter";


import darkImage1   from "../../images/dark/1.svg"
import darkImage2   from "../../images/dark/2.svg"
import darkImage3   from "../../images/dark/3.svg"
import darkImage4   from "../../images/dark/4.svg"
import darkImage5   from "../../images/dark/5.svg"

const bannerImages = {
    landscape: {
        image1:     darkImage1,
        image2:     darkImage2,
        image3:     darkImage3,
        image4:     darkImage4,
        image5:     darkImage5
    }
}


function Banner(props) {
    

    const title = {
        greeting: "Hello,",
        name: "I'm Sebastian",
        secondLine: "Freelance Web Developer",
    }
  
    return (  
    <div className={styles.page}>
        <div className={styles.mouseOver}>
          <div className={styles.sky} style={{background: 'linear-gradient(to bottom, rgb(47, 70, 139) 0%, rgb(93, 121, 189) 100%)'}}/>
        </div>
        <Parallax translateY={[-40, 40]} className={styles.parallax}>
          <div className={styles.layer} style={{'--backgroundImage': `url(${bannerImages.landscape.image1})`}} />
        </Parallax>
        <Parallax translateY={[-30, 30]} className={styles.parallax}>
          <div className={styles.layer} style={{'--backgroundImage': `url(${bannerImages.landscape.image2})`}} />
        </Parallax>
        <Parallax translateY={[-20, 20]} className={styles.parallax}>
          <div className={styles.layer} style={{'--backgroundImage': `url(${bannerImages.landscape.image3})`}} />
        </Parallax>
        
        <Parallax translateY={[-15, 15]} className={styles.parallax}>
          <div className={styles.title} style={{'--backgroundImage': `url(${bannerImages.landscape.image3})`}} >
            <h2 className="bouncingLetters">
            {
              title.greeting.split("").map((letter, index) => {
                return <BouncyLetter key={index} letter={letter} />
              })
            }
            </h2>
            <h2 className="bouncingLetters">
            {
              title.name.split("").map((letter, index) => {
                return <BouncyLetter key={index} letter={letter} />
              })
            }
            </h2>
            <h2 className="bouncingLetters">
            {
              title.secondLine.split("").map((letter, index) => {
                return <BouncyLetter key={index} letter={letter} />
              })
            }
            </h2>
          </div>
        </Parallax>
        
        <Parallax translateY={[-10, 10]} className={`${styles.mouseOver} ${styles.parallax}`}>
          <div className={styles.layer} style={{'--backgroundImage': `url(${bannerImages.landscape.image4})`}} />
        </Parallax>
        <div className={styles.mouseOver}>
          <div className={styles.layer} style={{'--backgroundImage': `url(${bannerImages.landscape.image5})`}} />
        </div>
    </div>
    )
}

export default Banner;