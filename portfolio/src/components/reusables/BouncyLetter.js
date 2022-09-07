import React, { useState } from "react";

import styles from "./BouncyLetter.module.css";
import Bounce from 'react-reveal/Bounce';


function BouncyLetter(props) {
    const [bouncing, setBouncing] = useState(false);

    function toggleBounce(state) {
        setBouncing(state);
    } 

    return (
        <span 
            className={bouncing? styles.bounce : ""} 
            onMouseOver={() => toggleBounce(true)} 
            onClick={() => toggleBounce(true)}
            onAnimationEnd={() => setBouncing(false)}
        >
            <Bounce delay={props.delay}>{props.letter === " " ? '\u00A0' : props.letter}</Bounce>
        </span>
    )
}

export default BouncyLetter;