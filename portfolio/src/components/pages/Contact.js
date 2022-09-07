import React from "react";

import styles from "./Contact.module.css"
import pageLayout from "./PageLayout.module.css"

import BouncyLetter from "../reusables/BouncyLetter";
import SkillSphere from "../reusables/SkillSphere";

function Contact(props) {
    const title = "Contact Me"

    return (
        <div className={`${pageLayout.mainContainer}`}>
            <div  className={pageLayout.widgetContainer}>
                
            </div>
            <div className={pageLayout.textContainer}>
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

export default Contact;