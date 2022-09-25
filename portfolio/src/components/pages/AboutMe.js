import React, { useEffect, useState, useRef } from "react";


import styles from "./PageLayout.module.css";
import BouncyText from "../reusables/BouncyText";
import Fade from 'react-reveal/Fade';


import SkillSphere from "../reusables/SkillSphere";

function AboutMe(props) {

    const title = "About Me"

    return (
        <div id={props.useID} className={`${styles.mainContainer} ${styles.inverseWidget}`}>
            <div  className={styles.widgetContainer}>
                <Fade duration={1500} delay={100}>
                    <SkillSphere />
                </Fade>
                
            </div>
            <div className={styles.textContainer}>
                <h2 className="bouncingLetters">
                    <BouncyText text={title} />
                </h2>
                <p>
                    I am a web developer with a passion for creating beautiful and functional websites. <br />
                    I have a strong background in web development and have worked with many different languages and frameworks. <br />
                    I am currently looking for a position in the web development industry.
                </p>
            </div>
            
        </div>
    )
}

export default AboutMe;