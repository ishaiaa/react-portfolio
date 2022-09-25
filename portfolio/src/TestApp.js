import React from 'react';
import {Parallax} from '@react-spring/parallax';

import styles from './TestApp.module.css'

import PageLayer from './components/reusables/PageLayer';

import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


import Navbar from './components/pages/Navbar';
import Banner from './components/pages/Banner';
import AboutMe from './components/pages/AboutMe';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

import Footer from './components/pages/Footer';

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
            <Banner useID="home" className={styles.absolute}/>
        </div>
        

        <PageLayer 
          className={styles.pageContainer2}

          primaryColor="#14191f"
          secondaryColor="#010010"

          accent="#274187"
          wave={0}
        >
          <AboutMe useID="about" className={styles.absolute}/>
        </PageLayer>
        <PageLayer
          className={styles.pageContainer2}
          primaryColor="#010010"
          secondaryColor="#14191f"

          accent="#274187"
          wave={1} 
          
        >
          <Experience useID="experience" className={styles.absolute}/>

        </PageLayer>
        <PageLayer 
          className={styles.pageContainer2}
          primaryColor="#14191f"
          secondaryColor="#010010"

          accent="#274187"
          wave={1}
        >
          <Projects useID="projects" className={styles.absolute}/>
        </PageLayer>
        <PageLayer 
          className={styles.pageContainer2}
          primaryColor="#010010"
          secondaryColor="#14191f"

          accent="#274187"
          wave={0}
        >
          <Contact useID="contact" className={styles.absolute}/>
        </PageLayer>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Footer
          primaryColor="#010010"
          accent="#14191f"

        />
    </div>
  );
}

export default TestApp;
