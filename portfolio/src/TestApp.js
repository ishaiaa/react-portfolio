import React from 'react';
import {Parallax} from '@react-spring/parallax';

import styles from './TestApp.module.css'

import PageLayer from './components/reusables/PageLayer';

import Navbar from './components/pages/Navbar';
import Banner from './components/pages/Banner';
import AboutMe from './components/pages/AboutMe';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';

function TestApp() {
  return (
    <div className={styles.app}>
        <Navbar /> 
        
        <div className={styles.pageContainer1}>
            <Banner className={styles.absolute}/>
        </div>
        <div className={styles.pageContainer}>
            <AboutMe className={styles.absolute}/>
        </div>
        <div className={styles.pageContainer2}>
            <Experience className={styles.absolute}/>
        </div>
        <div className={styles.pageContainer}>
            <Projects className={styles.absolute}/>
        </div>
    </div>
  );
}

export default TestApp;
