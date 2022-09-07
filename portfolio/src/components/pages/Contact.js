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
                        return <BouncyLetter key={index} letter={letter} delay={index*80}/>
                    })
                }
                </h2>
                <p>
                    I'm interested in freelance opportunities aswell as long term jobs.
                    However, if you have other request or question, don’t hesitate to use the form, or get in touch using different methods.


                </p>
            </div>
        </div>
    )
}

export default Contact;