import React, {useState, useEffect} from "react";

import Slider from 'infinite-react-carousel';

import styles from './Projects.module.css'
import BouncyText from "../reusables/BouncyText";
import ImageCard from "../reusables/ImageCard";

import reactIcon            from "../../images/techIcons/react.svg"
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
import survivalgames        from "../../images/projects/marvo-sg.png"
import bedwars              from "../../images/projects/marvo-bedwars.png"

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
                            image={portfolio}
                            title="My Portfolio"
                            description={"My personal website. You're currently on it."}
                            icons={[reactIcon, htmlIcon, cssIcon, javascriptIcon, toolsIcon]}
                            link="https://github.com/zongii/react-portfolio"
                            git={true}
                        />
                        <ImageCard 
                            image={survivalgames}
                            title="Marvo SurvivalGames"
                            description={"Event organised as part of Marvo Cup. I was responsible for entire server infrastructure"}
                            icons={[toolsIcon, serverIcon, javascriptIcon]}
                            link="https://www.facebook.com/MARVOpl/photos/pb.100063669276250.-2207520000../544632693551398/?type=3"
                            git={false}

                        />
                        <ImageCard 
                            image={spookyevent}
                            title="Marvo SpookyEvent"
                            description={"Event organised by Marvo. I was one of two developers responsible for the project"}
                            icons={[toolsIcon, serverIcon, javascriptIcon]}
                            link="https://www.facebook.com/MARVOpl/photos/pb.100063669276250.-2207520000../603278537686813/?type=3"
                            git={false}

                        />
                        <ImageCard 
                            image={bedwars}
                            title="Marvo Bedwars"
                            description={"Event organised as part of Marvo Cup. I was one of two developers responsible for the project"}
                            icons={[toolsIcon, serverIcon, javascriptIcon]}
                            link="https://www.facebook.com/photo.php?fbid=444235064375466&set=pb.100063669276250.-2207520000..&type=3"
                            git={false}

                        />
                        <ImageCard 
                            image={gateway}
                            title="Gate-Way"
                            description={"Gate-Way is a puzzle game, created by two passionate developers. Nominated to the final of GEEK 2022 contest."}
                            icons={[unityIcon , csharpIcon, toolsIcon ]}
                            link="https://zongi.dev/gateway-build"
                            git={false}
                        />
                        <ImageCard 
                            image={portfolio}
                            title="My Portfolio"
                            description={"My personal website. You're currently on it."}
                            icons={[reactIcon, htmlIcon, cssIcon, javascriptIcon, toolsIcon]}
                            link="https://github.com/zongii/react-portfolio"
                            git={true}
                        />
                        <ImageCard 
                            image={survivalgames}
                            title="Marvo SurvivalGames"
                            description={"Event organised as part of Marvo Cup. I was responsible for entire server infrastructure"}
                            icons={[toolsIcon, serverIcon, javascriptIcon]}
                            link="https://www.facebook.com/MARVOpl/photos/pb.100063669276250.-2207520000../544632693551398/?type=3"
                            git={false}

                        />
                        <ImageCard 
                            image={spookyevent}
                            title="Marvo SpookyEvent"
                            description={"Event organised by Marvo. I was one of two developers responsible for the project"}
                            icons={[toolsIcon, serverIcon, javascriptIcon]}
                            link="https://www.facebook.com/MARVOpl/photos/pb.100063669276250.-2207520000../603278537686813/?type=3"
                            git={false}

                        />
                        <ImageCard 
                            image={bedwars}
                            title="Marvo Bedwars"
                            description={"Event organised as part of Marvo Cup. I was one of two developers responsible for the project"}
                            icons={[toolsIcon, serverIcon, javascriptIcon]}
                            link="https://www.facebook.com/photo.php?fbid=444235064375466&set=pb.100063669276250.-2207520000..&type=3"
                            git={false}

                        />
                    </Slider>
                </Fade>
                
            </div>
        </div>
    )
}

export default Projects