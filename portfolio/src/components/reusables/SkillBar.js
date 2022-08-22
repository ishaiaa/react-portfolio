import React from "react";

import styles from "./SkillBar.module.css"

function SkillBar(props) {

    return (
        <div className={styles.mainContainer}>
            <p className={styles.title}>{props.title}</p>
            <div className={styles.barBody}>
                <div 
                    className={styles.bar} 
                    style={{
                        width: `${props.progress}%`,
                        backgroundColor: `${props.color}`
                    }}
                />
            </div>
        </div>
    )
}

export default SkillBar