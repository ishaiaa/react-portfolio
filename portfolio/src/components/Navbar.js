import React from "react";

import styles from "./Navbar.module.css";
import logo from "../images/moon1.svg"

function Navbar(props) {
  return (
    <div className={styles.navbar}>
        <div className={styles.logo}>
            <img src={logo} className={styles.logoImage} alt="logo" />
            <p className={styles.logoText}>ZONGI.DEV</p>
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
                    <a href="#">Projects</a>
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