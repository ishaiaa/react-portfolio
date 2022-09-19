import React from "react";

import styles from "./NavScreen.module.css"

function NavScreen(props) {
    return (
        <div className={`${styles.mainContainer} ${props.on ? styles.boxOn : styles.boxOff}`}>
            <div className={styles.list}>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className={styles.icons}>
                
            </div>
        </div>
    )
}

export default NavScreen