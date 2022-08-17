import React, {useEffect, useState, useRef} from "react";

function SkillSphere(props) {
    const TagCloud = require('TagCloud');
    const container = '.tagcloud';
    const texts = [
        'JavaScript', 'CSS3', 'HTML5', 'ReactJS',
        'SQL', 'npm', 'Git', 'NodeJS', 'ExpressJS',
        'PHP', 'MongoDB', 'MySQL', 'jQuery', 'Bootstrap'
    ];

    const [options, setOptions] = useState({
        radius: window.innerWidth > 1000 ? (window.innerWidth / 5) : 200,
        maxSpeed: 'fast',
        initSpeed: 'fast',
        direction: 135,
    });

    useEffect(() => {
        function handleResize() {
          setOptions(prevState => ({...prevState, radius: window.innerWidth > 1000 ? (window.innerWidth / 5) : 200}));
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    useEffect(() => {
        let cloud = TagCloud(container, texts, options);
        console.log("test")
        return(() => {cloud.destroy()})
    }, [options]);

    return (<span className="tagcloud" />)
}

export default SkillSphere;