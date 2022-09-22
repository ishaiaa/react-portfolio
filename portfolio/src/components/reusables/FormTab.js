import React from "react";

import styles from './FormTab.module.css'

function FormTab(props) {
    return (
        <div className={styles.tabContainer}>
            {props.children}
        </div>
    )
}

export default FormTab