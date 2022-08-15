import React from "react";

import styles from "./Navbar.module.css";

function Navbar(props) {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
            
        </div>
        <div className={styles.menu}>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
    </div>
    );
}

export default Navbar;