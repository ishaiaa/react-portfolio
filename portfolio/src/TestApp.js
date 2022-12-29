import React from 'react';

import styles from './TestApp.module.css'

import PageLayer from './components/reusables/PageLayer';

import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {data} from "./defaultData";

import Navbar from './components/pages/Navbar';
import Banner from './components/pages/Banner';
import AboutMe from './components/pages/AboutMe';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

import Footer from './components/pages/Footer';

import { useEffect } from 'react';
import { useState } from 'react';
import SkillSphere from './components/reusables/SkillSphere';
import { isWindows } from 'react-device-detect';

function TestApp(props) {

  const [skillData, setSkillSphere] = useState(null);
  const [skillBars, setSkillBars] = useState(null);
  const [workplaces, setWorkplaces] = useState(null);
  const [projects, setProjects] = useState(null);
  const [contact, setContact] = useState(null)


  useEffect(() => {
    fetch('https://raw.githubusercontent.com/zongii/datasets/main/portfolio/skills.json')
    .then(response => response.json())
    .then(res => {
        if(res.skill_cloud) {
          setSkillSphere(res.skill_cloud)
          setSkillBars(res.skill_bars)
          return
        }
        setSkillSphere(data.skill_cloud)
        setSkillBars(data.skill_bars)
      })
      .catch(() => {
        setSkillSphere(data.skill_cloud)
        setSkillBars(data.skill_bars)
      })

      fetch('https://raw.githubusercontent.com/zongii/datasets/main/portfolio/work.json')
      .then(response => response.json())
      .then(res => {
          if(res.workplaces) {
            setWorkplaces(res.workplaces)
            setProjects(res.projects)
            setContact(res.contact_string)
            return
          }
          setWorkplaces(data.workplaces)
          setProjects(data.projects)
          setContact(data.contact_string)
        })
        .catch(() => {
          setWorkplaces(data.workplaces)
          setProjects(data.projects)
          setContact(data.contact_string)
        })
  }, [])
  useEffect(() => {
    window.addEventListener('load', function () {
      props.loadingScreen.className = "nodisplay"
      document.body.className = ""

      window.removeEventListener('load', window);
    })  
  }, [])


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
          <AboutMe useID="about" className={styles.absolute} skillSphereData={skillData}/>
        </PageLayer>
        <PageLayer
          className={styles.pageContainer2}
          primaryColor="#010010"
          secondaryColor="#14191f"

          accent="#274187"
          wave={1} 
          
        >
          <Experience useID="experience" className={styles.absolute} skillBarsData={skillBars} workplacesData={workplaces}/>

        </PageLayer>
        <PageLayer 
          className={styles.pageContainer2}
          primaryColor="#14191f"
          secondaryColor="#010010"

          accent="#274187"
          wave={1}
        >
          <Projects useID="projects" className={styles.absolute} projectsData={projects}/>
        </PageLayer>
        <PageLayer 
          className={styles.pageContainer2}
          primaryColor="#010010"
          secondaryColor="#14191f"

          accent="#274187"
          wave={0}
        >
          <Contact useID="contact" contactString={contact} className={styles.absolute}/>
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
