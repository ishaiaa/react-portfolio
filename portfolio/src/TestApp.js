import React from 'react';
import {Parallax} from '@react-spring/parallax';

import styles from './TestApp.module.css'

import PageLayer from './components/reusables/PageLayer';

import Navbar from './components/pages/Navbar';
import Banner from './components/pages/Banner';
import AboutMe from './components/pages/AboutMe';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';
import { useEffect } from 'react';

function TestApp(props) {

  useEffect(() => {
    window.addEventListener('load', function () {
      props.loadingScreen.className = "nodisplay"
      document.body.className = ""
    })
      
  })

  return (
    <div className={styles.app}>
        <Navbar /> 
        <div className={styles.pageContainer1}>
            <Banner className={styles.absolute}/>
        </div>
        

        <PageLayer 
          className={styles.pageContainer2}

          primaryColor="#14191f"
          secondaryColor="#010010"

          accent="#274187"
          wave={0}
        >
          <AboutMe className={styles.absolute}/>
        </PageLayer>
        <PageLayer
          className={styles.pageContainer2}
          primaryColor="#010010"
          secondaryColor="#14191f"

          accent="#274187"
          wave={1} 
          
        >
          <Experience className={styles.absolute}/>

        </PageLayer>
        <PageLayer 
          className={styles.pageContainer2}
          primaryColor="#14191f"
          secondaryColor="#010010"

          accent="#274187"
          wave={1}
        >
          <Projects className={styles.absolute}/>
        </PageLayer>
        <PageLayer 
          className={styles.pageContainer2}
          primaryColor="#010010"
          secondaryColor="#14191f"

          accent="#274187"
          wave={0}
        >
        </PageLayer>
    </div>
  );
}

export default TestApp;
