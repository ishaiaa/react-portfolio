import React from "react";

import styles from "./SkillBar.module.css"
import Reveal from 'react-reveal/Reveal'
import LightSpeed from 'react-reveal/LightSpeed'
import Zoom from 'react-reveal/Zoom'

function SkillBar(props) {

    return (
        <div className={styles.mainContainer}>
            <Zoom duration={500} right><p className={styles.title}>{props.title}</p></Zoom>
            
            
            <div className={styles.barBody}>
                <Reveal duration={1000} effect={styles.loadAnim}>
                    <div 
                        className={styles.bar} 
                        style={{
                            '--custom-width': `${props.progress}%`,
                            backgroundColor: `${props.color}`
                        }}
                    />
                </Reveal>
            </div>
            

            
        </div>
    )
}

export default SkillBar