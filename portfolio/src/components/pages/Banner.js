import React from "react";

import { Parallax } from "react-scroll-parallax";

import styles from "./Banner.module.css";

import BouncyText from "../reusables/BouncyText";

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
        name: "I'm Sebastian,",
        secondLine: "Web Developer",
    }
  
    return (  
    <div id={props.useID} className={styles.page}>
        <div className={styles.mouseOver}>
          <div className={styles.sky} style={{background: 'linear-gradient(to bottom, rgb(47, 70, 139) 0%, rgb(93, 121, 189) 100%)'}}>
          </div>
        </div>
        <Parallax translateY={[-80, 80]} className={styles.parallax}>
          <div className={styles.layer} style={{'--backgroundImage': `url(${bannerImages.landscape.image1})`}} />
        </Parallax>
        <Parallax translateY={[-60, 60]} className={styles.parallax}>
          <div className={styles.layer} style={{'--backgroundImage': `url(${bannerImages.landscape.image2})`}} />
        </Parallax>
        
        <Parallax translateY={[-40, 40]} className={styles.parallax}>
          <div className={styles.layer} style={{'--backgroundImage': `url(${bannerImages.landscape.image3})`}} />
        </Parallax>

        
        <Parallax translateY={[-10, 10]} className={`${styles.mouseOver} ${styles.parallax}`}>
          <div className={styles.layer} style={{'--backgroundImage': `url(${bannerImages.landscape.image4})`}} />
        </Parallax>
        <Parallax translateY={[-30, 30]} className={styles.parallax}>
          <div className={styles.title} style={{'--backgroundImage': `url(${bannerImages.landscape.image3})`}} >
            <h3 className="bouncingLetters">
              <BouncyText text={title.greeting} animationOffset={0} />
            </h3>
            <h2 className="bouncingLetters">
              <BouncyText text={title.name} animationOffset={title.greeting.length*50} />
            </h2>
            <h3 className="bouncingLetters">
              <BouncyText text={title.secondLine} animationOffset={title.greeting.length*50 + title.name.length*50} />
            </h3>
          </div>
        </Parallax>
        <div className={styles.mouseOver}>
          <div className={styles.layer} style={{'--backgroundImage': `url(${bannerImages.landscape.image5})`}} />
        </div>
    </div>
    )
}

export default Banner;