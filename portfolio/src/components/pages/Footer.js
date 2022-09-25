import React from 'react';

import styles from './Footer.module.css'
import wave from '../../images/landscape/wave-footer.svg'

import LinkIcon from '../reusables/LinkIcon';

import github from '../../images/guthub-transparent.png'
import linkedin from '../../images/linkedin-tranparent.png'
import discord from '../../images/discord-transparent.png'
import mail from '../../images/mail-transparent.png'

function Footer(props) {
    return (
        <div 
            className={styles.mainContainer}
            style={{'--backgroundColor': props.primaryColor}}
        >
            <div 
                className={styles.wave}
                style={
                    {
                        backgroundColor: props.accent,
                         '--backgroundImage': `url(${wave})`
                    }
                }
                >
                
            </div>
            <div 
                className={styles.content}
                style={{'--backgroundColor': props.accent}}
            >
                <p className={styles.footerTitle}>Live by your passions</p>
                <div className={styles.linkContainer}>
                    <LinkIcon
                        icon={linkedin}
                        alt="Open linkedin profile"
                        link="https://www.linkedin.com/in/sebastian-golba/"
                    />
                    <LinkIcon
                        icon={github}
                        alt="Open Github profile"
                        link="https://github.com/zongii"
                    />
                    <LinkIcon
                        icon={discord}
                        alt="Open discord"
                        link="https://discord.gg/rNV2jnXMnv"
                    />
                    <LinkIcon 
                        clipboard
                        icon={mail}
                        alt="Copy mail address"
                        link="contact@zongi.dev" 
                    />
                </div>
                <p className={styles.copyright}>
                    Copyright © 2022, Sebastian Golba
                </p>
            </div>
        </div>
    );
}



export default Footer;