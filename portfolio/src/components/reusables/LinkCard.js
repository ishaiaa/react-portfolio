import React from "react";

import styles from "./LinkCard.module.css"

import placeholderIcon from "../../images/freelancing.png";

function LinkCard(props) {

    return (
        <div className={styles.cardBody}>
            <div className={styles.cardInfo}>
                <img src={props.icon ?? placeholderIcon} alt={`${props.title} icon`}/>
                <div className={styles.cardDescription}>
                    <p className={styles.title}>{props.title}</p>
                    {props.description && <p className={styles.desc}>{props.description}</p>}
                </div>
            </div>
            <div className={styles.cardLink}>
                <a href={props.link} target="_blank">{props.clipboard ? "copy" : "open"}</a>
            </div>
        </div>
    )
}

export default LinkCard;