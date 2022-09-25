import React from 'react';

import styles from './LinkIcon.module.css'
import {toast} from 'react-toastify'

function LinkIcon(props) {
    
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
        <a onClick={clipboard} name={props.link} href={props.link} target="_blank" rel="noreferrer" className={styles.mainContainer}>
            <div></div>
            <img src={props.icon} alt={props.alt}></img>
        </a>
    );
}

export default LinkIcon;