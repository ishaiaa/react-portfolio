import React, { useState } from "react";

import styles from "./BouncyLetter.module.css";

function BouncyText(props) {
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
            {props.letter === " " ? "⠀" : props.letter}
        </span>
    )
}

export default BouncyText;