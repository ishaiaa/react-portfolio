import React from "react";

import styles from "./Card.module.css"

function Card(props) {

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <img className={styles.cardIcon} src={props.icon} alt="Company Icon" />
                <p className={styles.cardCompany}>{props.company}</p>
            </div>

            <h4 className={styles.cardTitle}>{props.title}</h4>
            <p className={styles.cardDescription}>{props.description}</p>
            <p className={styles.cardTimespan}>{props.timespan}</p>
        
        </div>
    )
}

export default Card