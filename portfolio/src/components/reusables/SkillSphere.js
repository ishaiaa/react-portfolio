import React, {useEffect, useState, useRef} from "react";

function SkillSphere(props) {
    const TagCloud = require('TagCloud');
    const container = '.tagcloud';
    const texts = props.skillList;

    const [options, setOptions] = useState({
        radius: window.innerWidth > 1100 ? (window.innerWidth / 5) : (window.innerWidth / 3),
        maxSpeed: 'fast',
        initSpeed: 'fast',
        direction: 135,
    });

    useEffect(() => {
        function handleResize() {
          setOptions(prevState => ({...prevState, radius: window.innerWidth > 1100 ? (window.innerWidth / 5) : (window.innerWidth / 3)}));
        }
        console.log("eventListener Added")
        window.addEventListener('resize', handleResize);
        return () => {console.log("deleted");window.removeEventListener('resize', handleResize)};
    }, []);


    useEffect(() => {
        let cloud = TagCloud(container, texts, options);
        return(() => {cloud.destroy()})
    }, [options]);

    return (<span className="tagcloud" />)
}

export default SkillSphere;