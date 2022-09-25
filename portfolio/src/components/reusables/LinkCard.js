import React from "react";

import styles from "./LinkCard.module.css"
import {toast} from 'react-toastify'


import placeholderIcon from "../../images/icons/freelancing.png";

function LinkCard(props) {

    function clipboard(event) {
        if(!props.clipboard) return
        
        event.preventDefault()

        navigator.clipboard.writeText(event.currentTarget.name);

        toast.success(`Copied to clipboard!`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
        console.log("copied to clipboard")
    }

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
                <a onClick={clipboard} name={props.link} href={props.link} target="_blank" rel="noreferrer">{props.clipboard ? "copy" : "open"}</a>
            </div>
        </div>
    )
}

export default LinkCard;