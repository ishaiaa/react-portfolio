import React from "react";

import styles from './PageLayout.module.css'
import cardStyles from './Experience.module.css'
import BouncyText from "../reusables/BouncyText"
import SkillBar from '../reusables/SkillBar'
import Card from '../reusables/Card'

import Bounce from 'react-reveal/Bounce'

function Experience(props) {
    const title = "My Experience"

    return (
        <div id={props.useID} className={styles.mainContainer}>
            <div className={styles.textContainer}>
                <h2 className="bouncingLetters">
                    <BouncyText text={title} />
                </h2>
                <p>
                I've been programming for 5 years, and took part in many contests and competitions on National and International levels. 
                I'm constantly trying to gain more experience and learn new skills.
                Please keep in mind that this skillchat shows only a few most important skills of mine
                </p>
            </div>
        
            <div  className={styles.widgetContainer}>
                {props.skillBarsData !== null && props.skillBarsData.map((element, index) => {
                    if(index < 7) return (
                        <SkillBar
                            key={index}
                            title={element.name}
                            progress={element.level}
                            color={element.color}
                        />
                    )
                    return (<></>)
                })}

                <div className={cardStyles.cardContainer} >
                {props.workplacesData !== null && props.workplacesData.map((element, index) => {
                    if(index < 2) return (
                        <Bounce key={index} delay={index*500}>
                            <Card 
                                icon={element.icon}
                                title={element.title}
                                company={element.company}
                                timespan={element.timespan}
                                description={element.description}
                            />
                        </Bounce>
                    )
                    return (<></>)
                })}
                </div>
            </div>
        </div>
    )
}

export default Experience;