import React from "react";

import styles from "./Contact.module.css"
import pageLayout from "./PageLayout.module.css"

import FormPanel from "../reusables/FormPanel";
import FormTab from "../reusables/FormTab";

import LinkCard from "../reusables/LinkCard";

import BouncyText from "../reusables/BouncyText";

import { toast } from "react-toastify";

import { Fade } from "react-reveal";

import discordIcon from  "../../images/icons/discord.png"
import linkedinIcon from  "../../images/icons/linkedin.png"
import githubIcon from  "../../images/icons/github.png"
import emailIcon from  "../../images/icons/email.png"
import { useState } from "react";

function Contact(props) {
    const title = "Contact Me"

    function b64_to_utf8(str) {
        return decodeURIComponent(escape(window.atob(str)));
    }

    const [formData, setFormData] = useState({
        name: "",
        mail: "",
        subject: "",
        message: "",
        errors: {
            name: false,
            mail: false,
            subject: false,
            message: false
        }
    })

    function handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setFormData(state => {
            return {
                ...state,
                [name]: value,
                errors: {
                    ...state.errors,
                    [name]: (value === "")
                }
            }
        })

        
    }

    function handleClick(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        console.log(value)

        setFormData(state => {
            return {
                ...state,
                errors: {
                    ...state.errors,
                    [name]: (value === "")
                }
            }
        })
    }

    function submitForm() {
        if(formData.name === "") {
            missing("your name")
            return
        }
        if(formData.mail === "") {
            missing("your mail")
            return
        }
        if(formData.subject === "") {
            missing("the subject")
            return
        }
        if(formData.message === "") {
            missing("the message")
            return
        }

        

        fetch(b64_to_utf8(props.contactString),
        {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: formData.name,
                avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPF453kei0dtGmPbIHB-itgoUCdBx3m_181e_p5zxOZGvtapYIWy6S6ymlVvMuHicUBAA&usqp=CAU",
                embeds: [{
                    title: formData.subject,
                    description: formData.message,
                    color: 15258703,
                    fields: [{
                        name: "Mail",
                        value: formData.mail,
                        inline: false
                    }]
                }]
            })
        })
        .then(res => {
            if(res.status === 204) {
                toast.success(`Message sent successfully!`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });
            }
            else {
                internalError();
            }
        })
        .catch(() => {
            internalError();
        })

        function internalError() {
            toast.error(`An internal error occured!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        }

        function missing(text) {
            toast.warning(`You havent specified ${text}!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        }
        
    }

    return (
        <div id={props.useID} className={`${pageLayout.mainContainer} ${pageLayout.inverseWidget}`}>
            <Fade left>
            <div  className={pageLayout.widgetContainer}>
                
                    <FormPanel>
                        <FormTab name="Message Me">
                            <div className={styles.formCard}>
                                <input 
                                    onChange={handleInputChange} 
                                    onClick={handleClick} 
                                    value={formData.name}     
                                    name="name"      
                                    className={`${styles.nameField} ${formData.errors.name && styles.emptyField}`} 
                                    type="text" 
                                    placeholder="Name" />
                                <input    
                                    onChange={handleInputChange}   
                                    onClick={handleClick} 
                                    value={formData.mail}     
                                    name="mail"      
                                    className={`${styles.mailField} ${formData.errors.mail && styles.emptyField}`} 
                                    type="text" 
                                    placeholder="Mail" />
                                <input    
                                    onChange={handleInputChange} 
                                    onClick={handleClick} 
                                    value={formData.subject}  
                                    name="subject"   
                                    className={`${styles.subjectField} ${formData.errors.subject && styles.emptyField}`} 
                                    type="text" 
                                    placeholder="Subject" />
                                <textarea 
                                    onChange={handleInputChange} 
                                    onClick={handleClick} 
                                    value={formData.message}  
                                    name="message"   
                                    className={`${styles.textField} ${formData.errors.message && styles.emptyField}`}   
                                    placeholder="Message" />
                                
                                <button 
                                    className={styles.formButton}
                                    onClick={submitForm}
                                >Send Message</button>
                            </div>
                        </FormTab>
                        <FormTab name="Find Me">
                            <div className={styles.linkCards}>
                                <LinkCard 
                                    icon={discordIcon}
                                    title="Discord"
                                    description="zongi#4424"
                                    link="https://discord.gg/rNV2jnXMnv"
                                />
                                <LinkCard 
                                    icon={linkedinIcon}
                                    title="Linkedin"
                                    link="https://www.linkedin.com/in/sebastian-golba/"
                                />
                                <LinkCard 
                                    icon={githubIcon}
                                    title="Github"
                                    description="@zongii"
                                    link="https://github.com/zongii"
                                />
                                <LinkCard 
                                    icon={emailIcon}
                                    title="Mail"
                                    description="contact.sebastian.golba@gmail.com"
                                    link="contact.sebastian.golba@gmail.com"
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