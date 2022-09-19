import React from "react";

import styles from "./Contact.module.css"
import pageLayout from "./PageLayout.module.css"

import BouncyText from "../reusables/BouncyText";
import SkillSphere from "../reusables/SkillSphere";

function Contact(props) {
    const title = "Contact Me"

    return (
        <div className={`${pageLayout.mainContainer}`}>
            <div  className={pageLayout.widgetContainer}>
                
            </div>
            <div className={pageLayout.textContainer}>
                <h2 className="bouncingLetters">
                    <BouncyText text={title} />
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