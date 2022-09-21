import React from "react";
import { useEffect } from "react";

import styles from "./NavScreen.module.css"

function NavScreen(props) {

    const isOn = props.on;

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


    return (
        <div className={`${styles.mainContainer} ${props.on ? styles.boxOn : styles.boxOff}`}>
            <div className={styles.list}>
                <ul>
                    <li>
                        <a onClick={()=>props.stateUpdate(false)} href="#">Home</a>
                    </li>
                    <li>
                        <a onClick={()=>props.stateUpdate(false)} href="#">About</a>
                    </li>
                    <li>
                        <a onClick={()=>props.stateUpdate(false)} href="#">Projects</a>
                    </li>
                    <li>
                        <a onClick={()=>props.stateUpdate(false)} href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className={styles.icons}>
                
            </div>
        </div>
    )
}

export default NavScreen