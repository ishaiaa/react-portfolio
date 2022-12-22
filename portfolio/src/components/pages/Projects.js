import React, {useState, useEffect} from "react";

import Slider from 'infinite-react-carousel';

import styles from './Projects.module.css'
import BouncyText from "../reusables/BouncyText";
import ImageCard from "../reusables/ImageCard";

import reactIcon            from "../../images/techIcons/react.svg"
import reactNativeIcon      from "../../images/techIcons/react-native.png"
import htmlIcon             from "../../images/techIcons/html.svg"
import cssIcon              from "../../images/techIcons/css.svg"
import javascriptIcon       from "../../images/techIcons/javascript.svg"
import unityIcon            from "../../images/techIcons/unity.svg"
import nodejsIcon           from "../../images/techIcons/nodejs.svg"
import csharpIcon           from "../../images/techIcons/csharp.svg"
import toolsIcon            from "../../images/techIcons/tools.svg"
import serverIcon            from "../../images/techIcons/server.png"

import Fade                 from "react-reveal/Fade"

import gateway              from "../../images/projects/gateway.png"
import portfolio            from "../../images/projects/portfolio.png"
import spookyevent          from "../../images/projects/marvo-spookyevent.jpg"
import jaskolka             from "../../images/projects/jaskolka.png"
import bedwars              from "../../images/projects/marvo-bedwars.png"

const iconSet = {
        react:       {icon: reactIcon,          tooltip: "ReactJS"},    
        reactnative: {icon: reactNativeIcon,    tooltip: "React Native"},  
        html:        {icon: htmlIcon,           tooltip: "HTML"},         
        css:         {icon: cssIcon,            tooltip: "CSS"},          
        javascript:  {icon: javascriptIcon,     tooltip: "JavaScript"},   
        unity:       {icon: unityIcon,          tooltip: "Unity"},        
        nodejs:      {icon: nodejsIcon,         tooltip: "NodeJS"},       
        csharp:      {icon: csharpIcon,         tooltip: "C#"},       
        design:      {icon: toolsIcon,          tooltip: "Project Design & Management"},        
        server:      {icon: serverIcon,         tooltip: "Server Administration & Management"}       
}

function Projects(props) {
    const title = "My Projects"

    const [options, setOptions] = useState({
        autoplay: false,
        centerMode: true,
        dots: true,
        slidesToShow: window.innerWidth / 336,
        centerPadding: 0,
        adaptiveHeight: true,
        virtualList: true,
        wheel: true
    });

    useEffect(() => {
        function handleResize() {
          setOptions(prevState => ({...prevState, slidesToShow: window.innerWidth / 336}));
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id={props.useID} className={styles.mainContainer}>
            <div className={styles.textContainer}>
                <h2 className="bouncingLetters">
                    <BouncyText text={title} />
                </h2>
                <p>
                    Here is list of most important projects i've worked on in past few years
                </p>
            </div>
            <div className={styles.carouselContainer}>
                {props.projectsData !== null && <Fade bottom>
                    <Slider { ...options }>
                        {props.projectsData.map((element, index) => {
                            return (
                                <ImageCard 
                                    image={element.image}
                                    title={element.title}
                                    description={element.description}
                                    icons={element.technologies.map((iconName) => {
                                        return iconSet[iconName]
                                    })}
                                    link={element.link}
                                    git={element.isGit}
                                />
                            )
                        })}

                        {props.projectsData.map((element, index) => {
                            return (
                                <ImageCard 
                                    image={element.image}
                                    title={element.title}
                                    description={element.description}
                                    icons={element.technologies.map((iconName) => {
                                        return iconSet[iconName]
                                    })}
                                    link={element.link}
                                    git={element.isGit}
                                />
                            )
                        })}
                    </Slider>
                </Fade>
                
                
                }
                
                
            </div>
        </div>
    )
}

export default Projects