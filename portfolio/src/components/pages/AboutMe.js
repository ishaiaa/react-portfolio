import React, { useEffect, useState, useRef } from "react";


import styles from "./PageLayout.module.css";
import BouncyLetter from "../reusables/BouncyLetter";
import SkillSphere from "../reusables/SkillSphere";

function AboutMe(props) {

    const title = "About Me"

    return (
        <div className={`${styles.mainContainer} ${styles.inverseWidget}`}>
            <div  className={styles.widgetContainer}>
                <SkillSphere />
            </div>
            <div className={styles.textContainer}>
                <h2 className="bouncingLetters">
                {
                    title.split("").map((letter, index) => {
                        return <BouncyLetter key={index} letter={letter} />
                    })
                }
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