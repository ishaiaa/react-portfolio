import React from "react";

import styles from "./BouncyText.module.css"
import BouncyLetter from "./BouncyLetter";

function BouncyText(props) {
  const words = props.text.replace(" ", "| |").split("|");

  var globalOffset = [0];

  words.forEach((word, index) => {
    globalOffset.push(globalOffset[index] + word.length);
  });


  return (
    <span>
    {
      words.map((word, wordIndex) => {
        return (
          <span className={styles.noBreak} key={`${word}${wordIndex}`}>
          {
            word.split("").map((letter, letterIndex) => { 
                return <BouncyLetter key={letterIndex} letter={letter} delay={(globalOffset[wordIndex]*60) + (letterIndex*50) + (props.animationOffset ?? 0)}/>
            })
          }
          </span>
        )
        
      })
    }
    </span>      
  )
}

export default BouncyText;