import React, {useState, useEffect} from "react";

import Slider from 'infinite-react-carousel';

import styles from './Projects.module.css'
import BouncyLetter from "../reusables/BouncyLetter";
import ImageCard from "../reusables/ImageCard";

import reactIcon            from "../../images/techIcons/react.svg"
import htmlIcon             from "../../images/techIcons/html.svg"
import cssIcon              from "../../images/techIcons/css.svg"
import javascriptIcon       from "../../images/techIcons/javascript.svg"
import unityIcon            from "../../images/techIcons/unity.svg"
import nodejsIcon           from "../../images/techIcons/nodejs.svg"
import csharpIcon           from "../../images/techIcons/csharp.svg"
import toolsIcon            from "../../images/techIcons/tools.svg"

import Fade                 from "react-reveal/Fade"

import gateway              from "../../images/gateway.png"

function Projects(props) {
    const icons = [reactIcon, htmlIcon, cssIcon, javascriptIcon, unityIcon, nodejsIcon, csharpIcon, toolsIcon]

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
        <div class={styles.mainContainer}>
            <div class={styles.textContainer}>
                <h2 className="bouncingLetters">
                    {
                        title.split("").map((letter, index) => {
                            return <BouncyLetter key={index} letter={letter} delay={index*80}/>
                        })
                    }
                </h2>
                <p>
                    Here is list of most important projects i've worked on in past few years
                </p>
            </div>
            <div className={styles.carouselContainer}>
                <Fade bottom>
                    <Slider { ...options }>
                        <ImageCard 
                            image={gateway}
                            title="Gate-Way"
                            description={"Gate-Way is a puzzle game, created by two passionate developers. Nominated to the final of GEEK 2022 contest."}
                            icons={[unityIcon , csharpIcon, toolsIcon ]}
                            link="https://zongi.dev/gateway-build"
                            git={false}
                        />
                        <ImageCard 
                            image="https://picsum.photos/500/500?random=1"
                            title="Example Title"
                            description={"Nisi cupidatat duis exercitation non enim ipsum ipsum tempor adipisicing nostrud sit."}
                            icons={[icons[0], icons[4], icons[2], icons[1]]}
                            link="https://zongi.dev/gateway-build"
                            git={true}
                        />
                        <ImageCard 
                            image="https://picsum.photos/500/500?random=2"
                            title="Example Title"
                            description={"Nisi cupidatat duis exercitation non enim ipsum ipsum tempor adipisicing nostrud sit."}
                            icons={[icons[4], icons[5], icons[6], icons[7]]}
                            link="https://zongi.dev/gateway-build"
                            git={false}

                        />
                        <ImageCard 
                            image="https://picsum.photos/500/500?random=3"
                            title="Example Title"
                            description={"Nisi cupidatat duis exercitation non enim ipsum ipsum tempor adipisicing nostrud sit."}
                            icons={[icons[3], icons[5], icons[1]]}
                            link="https://zongi.dev/gateway-build"
                            git={false}

                        />
                        <ImageCard 
                            image="https://picsum.photos/500/500?random=4"
                            title="Example Title"
                            description={"Nisi cupidatat duis exercitation non enim ipsum ipsum tempor adipisicing nostrud sit."}
                            icons={[icons[3], icons[6]]}
                            link="https://zongi.dev/gateway-build"
                            git={true}

                        />
                        <ImageCard 
                            image="https://picsum.photos/500/500?random=5"
                            title="Example Title"
                            description={"Nisi cupidatat duis exercitation non enim ipsum ipsum tempor adipisicing nostrud sit."}
                            icons={[icons[4], icons[2], icons[0]]}
                            link="https://zongi.dev/gateway-build"
                            git={true}

                        /> 
                        <ImageCard 
                            image="https://picsum.photos/500/500?random=6"
                            title="Example Title"
                            description={"Nisi cupidatat duis exercitation non enim ipsum ipsum tempor adipisicing nostrud sit."}
                            icons={[icons[1], icons[4], icons[5], icons[7]]}
                            link="https://zongi.dev/gateway-build"
                            git={false}
                        /> 
                    </Slider>
                </Fade>
                
            </div>
        </div>
    )
}

export default Projects

{/*                



                    <img className={styles.card} src={gateway } alt="pfe" />
                    <img className={styles.card} src={gateway } alt="pfe" />
                    <img className={styles.card} src={gateway } alt="pfe" />
                    <img className={styles.card} src={gateway } alt="pfe" />
                    <img className={styles.card} src={gateway } alt="pfe" />
                    <img className={styles.card} src={gateway } alt="pfe" />
                    <img className={styles.card} src={gateway } alt="pfe" />
                    <img className={styles.card} src={gateway } alt="pfe" />
                
*/}