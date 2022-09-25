import React from "react";
import { useEffect } from "react";

import styles from "./NavScreen.module.css"

import LinkIcon from '../reusables/LinkIcon';

import github from '../../images/icons/guthub-transparent.png'
import linkedin from '../../images/icons/linkedin-tranparent.png'
import discord from '../../images/icons/discord-transparent.png'
import mail from '../../images/icons/mail-transparent.png'


function NavScreen(props) {

    useEffect(() => {
        // The debounce function receives our function as a parameter
        const debounce = (fn) => {
            // This holds the requestAnimationFrame reference, so we can cancel it if we wish
            let frame;
            
            // The debounce function returns a new function that can receive a variable number of arguments
            return (...params) => {
            
                // If the frame variable has been defined, clear it now, and queue for next frame
            if (frame) { 
                cancelAnimationFrame(frame);
            }
  
            // Queue our function call for the next frame
            frame = requestAnimationFrame(() => {
                
                // Call our function and pass any params we received
                fn(...params);
            });
        
            } 
        };
  
  
        // Reads out the scroll position and stores it in the data attribute
        // so we can use it in our stylesheets
        const storeScroll = () => {
            document.documentElement.dataset.scroll = window.scrollY;
        }
  
        // Listen for new scroll events, here we debounce our `storeScroll` function
        document.addEventListener('scroll', debounce(storeScroll), { passive: true });
        
        // Update scroll position for first time
        storeScroll();
    }, []
    )

    function scrollTo(event) {
        event.preventDefault()

        console.log(event.currentTarget.name)

        const offset = document.getElementById(event.currentTarget.name).getBoundingClientRect().top

        console.log(offset)

        window.scrollTo({
            left: 0,
            top: offset-100,
            behavior: "smooth",
        })


        props.stateUpdate(false)

        
    }

    return (
        <div className={`${styles.mainContainer} ${props.on ? styles.boxOn : styles.boxOff}`}>
            <div className={styles.list}>
                <ul>
                    <li>
                        <a onClick={scrollTo} name="about" href="#about">About</a>
                    </li>
                    <li>
                        <a onClick={scrollTo} name="experience" href="#experience">Experience</a>
                    </li>
                    <li>
                        <a onClick={scrollTo} name="projects" href="#projects">Projects</a>
                    </li>
                    <li>
                        <a onClick={scrollTo} name="contact" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className={styles.icons}>
                    <LinkIcon
                        icon={linkedin}
                        alt="Open linkedin profile"
                        link="https://www.linkedin.com/in/sebastian-golba/"
                    />
                    <LinkIcon
                        icon={github}
                        alt="Open Github profile"
                        link="https://github.com/zongii"
                    />
                    <LinkIcon
                        icon={discord}
                        alt="Open discord"
                        link="https://discord.gg/rNV2jnXMnv"
                    />
                    <LinkIcon 
                        clipboard
                        icon={mail}
                        alt="Copy mail address"
                        link="contact@zongi.dev" 
                    />
            </div>
        </div>
    )
}

export default NavScreen