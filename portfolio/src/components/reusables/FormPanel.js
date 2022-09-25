import React from "react";
import { useState } from "react";

import styles from './FormPanel.module.css'
import { Zoom } from "react-reveal";

function FormPanel(props) {

    const [formIndex, setFormIndex] = useState(0);


    function selectNavItem(index) {
        setFormIndex(index)
    }

    return(
        <div className={styles.mainContainer}>
            <div className={styles.navBar}>
                {
                       React.Children.map(props.children, (child, index)=> {
                        if(!React.isValidElement(child)) return;
                
                        const navElement = child.props.name;
                        
                        return(
                            <p 
                                className={formIndex===index ? styles.navSelected : ""}
                                key={index} 
                                onClick={(event) => selectNavItem(index)} 
                            >
                                {navElement}
                            </p>
                        )
                    })
                }
            </div>
            <div className={styles.formsContainer}>
                {
                       React.Children.map(props.children, (child, index)=> {
                        if(!React.isValidElement(child)) return;
            
                        return(
                            
                            <Zoom bottom opposite when={formIndex === index}>
                                <div
                                key={index}
                                className={`${styles.formTab} ${formIndex !== index ? styles.noActive : ""}`}
                            >
                                {child}
                            </div>
                            </Zoom>
                                
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FormPanel;