import React from "react";

import styles from "./ImageCard.module.css"

import githubIcon           from "../../images/icons/github.svg"
import linkIcon             from "../../images/icons/link.png"

function ImageCard(props) {

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <img className={styles.cardImage} src={props.image} alt="Company Icon" />
                <a className={styles.cardLink} target="_blank" rel="noreferrer" href={props.link}>
                    <img src={props.git ? githubIcon : linkIcon} alt="link" />
                </a>
            </div>
            <div className={styles.cardBottom}>
                <h4 className={styles.cardTitle}>{props.title}</h4>
                <p className={styles.cardDescription}>{props.description}</p>
                <div className={styles.cardIcons}>
                    {
                        props.icons.map((icon, index) => {
                            return(
                                <div key={index} className={styles.cardIcon}>
                                    <img src={icon.icon} alt={""} />
                                    <p className={styles.tooltip}>{icon.tooltip}</p>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default ImageCard