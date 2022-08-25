import React from "react";

import styles from "./Loading.module.css"

function Loading() {
    return (
        <div className={styles.screen}>
            <div class={styles.moon}>
                <div class={styles.disc}></div>
            </div>
        </div>
        
    )
}

export default Loading;