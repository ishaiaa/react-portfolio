import React from 'react';
import {Parallax} from '@react-spring/parallax';

import styles from './TestApp.module.css'

import PageLayer from './components/reusables/PageLayer';

import Navbar from './components/pages/Navbar';
import ParallaxBanner from './components/pages/ParallaxBanner';
import AboutMe from './components/pages/AboutMe';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';

function TestApp() {
  return (
    <div className={styles.app}>
        <Navbar /> 
        {/*<ParallaxBanner />*/}
        <div className={styles.pageContainer}>
            <AboutMe />
        </div>
        <div className={styles.pageContainer2}>
            <Experience />
        </div>
        <div className={styles.pageContainer}>
            <Projects />
        </div>
    </div>
  );
}

export default TestApp;
