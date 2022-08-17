import React from "react";

import { ParallaxLayer } from "@react-spring/parallax";

import darkWave     from "../images/landscape/wave.svg"
import darkWaveBlue from "../images/landscape/wave-blue.svg"

import styles from "./PageLayer.module.css";

function PageLayer(props) {
  
    const bannerImages = {
        wave:       darkWave,
        waveBlue:   darkWaveBlue
    }

    console.log(props.children)
  
    return (
    <>
        <ParallaxLayer offset={props.offset} speed={0} factor={props.factor}>
          <div className={styles.page}  style={{backgroundColor: props.primaryColor}}>
            <div className={styles.pageContent}>
                {props.children}
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer className={styles.mouseOver} offset={props.offset + 0.01} speed={0.01} factor={props.factor}>
          <div className={styles.layer} style={{backgroundColor: props.accent, '--backgroundImage': `url(${props.wave ? bannerImages.waveBlue : bannerImages.wave})`}} />
        </ParallaxLayer>

        <ParallaxLayer className={styles.mouseOver} offset={props.offset} speed={0} factor={props.factor}>
          <div className={styles.layer} style={{backgroundColor: props.secondaryColor, '--backgroundImage': `url(${props.wave ? bannerImages.wave : bannerImages.waveBlue})`}} />
        </ParallaxLayer>
    </>
  );
}

export default PageLayer;