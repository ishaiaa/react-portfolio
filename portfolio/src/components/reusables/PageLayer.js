import React from "react";

import { Parallax } from "react-scroll-parallax";

import darkWave     from "../../images/landscape/wave.svg"
import darkWaveBlue from "../../images/landscape/wave-blue.svg"

import styles from "./PageLayer.module.css";

function PageLayer(props) {
  
    const bannerImages = {
        wave:       darkWave,
        waveBlue:   darkWaveBlue
    }

    console.log(props.children)
  
    return (
    <div className={styles.mainContainer}>

        <Parallax translateY={[20, -20]} className={styles.parallax}>
            <div className={styles.layer} style={{backgroundColor: props.accent, '--backgroundImage': `url(${props.wave ? bannerImages.waveBlue : bannerImages.wave})`}} />
        </Parallax>

        <div className={styles.layer} style={{backgroundColor: props.secondaryColor, '--backgroundImage': `url(${props.wave ? bannerImages.wave : bannerImages.waveBlue})`}} />


        <div className={styles.page}  style={{backgroundColor: props.primaryColor}}>
            <div className={styles.pageContent}>
                {props.children}
            </div>
        </div>

        
    </div>
  );
}

export default PageLayer;