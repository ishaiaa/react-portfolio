import React, { useEffect, useState, useRef } from "react";


import styles from "./AboutMe.module.css";
import BouncyLetter from "./BouncyLetter";
import SkillSphere from "./SkillSphere";

function AboutMe(props) {

    const title = "About Me"

    return (
        <div className={styles.mainContainer}>
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
            <div  className={styles.widgetContainer}>
                <SkillSphere />
            </div>
        </div>
    )
}

export default AboutMe;