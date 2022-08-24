import React, { useState } from "react";

import styles from "./BouncyLetter.module.css";

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
            {props.letter === " " ? '\u00A0' : props.letter}
        </span>
    )
}

export default BouncyLetter;