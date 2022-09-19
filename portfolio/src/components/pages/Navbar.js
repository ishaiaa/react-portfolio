import React from "react";
import Sound from 'react-sound'


import styles from "./Navbar.module.css";
import logo from "../../images/moon1.svg"
import musicNote from "../../images/music-note.svg"

import music from "../../media/music.wav"

import NavScreen from "./NavScreen";
import { useState } from "react";

function Navbar(props) {
    
    const [menuToggle, setMenuToggle] = useState(false);
    const [playMusic, setPlayMusic] = useState(false);

    function toggleMenu() {
        setMenuToggle(value => !value);
        window.scroll(0, 0)
    }

    function toggleMusic() {
        setPlayMusic(value => !value);
    }

    document.getElementById("body").className = menuToggle ? "noscroll" : ""
    return (
    <>
    <NavScreen on={menuToggle}/>
    <div className={styles.navbar}>
        <div className={styles.logo}>
            <img src={logo} className={styles.logoImage} alt="logo" />
            <p className={styles.logoText}>ZONGI.DEV</p>
        </div>
        <div className={styles.rightBox}>
            <div onClick={toggleMenu}className={`${styles.hamburgerMenu} ${menuToggle ? styles.menuToggle : ''}`}>
                <div className={styles.hamburgerMenuBar} /> 
                <div className={styles.hamburgerMenuBar} /> 
                <div className={styles.hamburgerMenuBar} /> 
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
            <div 
                style={{
                    '--backgroundImage': `url(${musicNote})`
                }}

                onClick={toggleMusic} 
                className={`${styles.musicToggle} ${playMusic ? "" : styles.crossed}`} />
            <Sound
                url={music}
                playStatus={playMusic ? Sound.status.PLAYING : Sound.status.STOPPED}
                loop={true}
            />
        </div>
        
    </div>
    
    </>
    );
}

export default Navbar;