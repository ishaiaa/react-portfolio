import React from "react";

import styles from "./Contact.module.css"
import pageLayout from "./PageLayout.module.css"

import FormPanel from "../reusables/FormPanel";
import FormTab from "../reusables/FormTab";

import BouncyText from "../reusables/BouncyText";

function Contact(props) {
    const title = "Contact Me"

    return (
        <div className={`${pageLayout.mainContainer} ${pageLayout.inverseWidget}`}>
            <div  className={pageLayout.widgetContainer}>
                <FormPanel>
                    <FormTab name="Message Me">
                        <h1>Karta 1</h1>
                    </FormTab>
                    <FormTab name="Find Me">
                        <h1>Karta 2</h1>
                    </FormTab>
                </FormPanel>
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