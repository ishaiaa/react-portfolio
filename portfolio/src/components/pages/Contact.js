import React from "react";

import styles from "./Contact.module.css"
import pageLayout from "./PageLayout.module.css"

import FormPanel from "../reusables/FormPanel";
import FormTab from "../reusables/FormTab";

import LinkCard from "../reusables/LinkCard";

import BouncyText from "../reusables/BouncyText";

import { Fade } from "react-reveal";

import discordIcon from  "../../images/discord.png"
import linkedinIcon from  "../../images/linkedin.png"
import githubIcon from  "../../images/github.png"
import emailIcon from  "../../images/email.png"


function Contact(props) {
    const title = "Contact Me"

    return (
        <div className={`${pageLayout.mainContainer} ${pageLayout.inverseWidget}`}>
            <Fade left>
            <div  className={pageLayout.widgetContainer}>
                
                    <FormPanel>
                        <FormTab name="Message Me">
                            <h1>Karta 1</h1>
                        </FormTab>
                        <FormTab name="Find Me">
                            <div className={styles.linkCards}>
                                <LinkCard 
                                    icon={discordIcon}
                                    title="Discord"
                                    description="zongi#4424"
                                    link="#"
                                />
                                <LinkCard 
                                    icon={linkedinIcon}
                                    title="Linkedin"
                                    link="#"
                                />
                                <LinkCard 
                                    icon={githubIcon}
                                    title="Github"
                                    description="@zongii"
                                    link="#"
                                />
                                <LinkCard 
                                    icon={emailIcon}
                                    title="Mail"
                                    description="contact@zongi.dev"
                                    link="#"
                                    clipboard={true}
                                />
                            </div>
                        </FormTab>
                    </FormPanel>
                
            </div>
            </Fade>
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