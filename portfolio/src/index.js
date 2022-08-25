import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ParallaxProvider } from 'react-scroll-parallax';
import TestApp from './TestApp';
import './index.css';


ReactDOM.render(
    <ParallaxProvider>
        <TestApp />
    </ParallaxProvider>
    

    , document.getElementById('root'));
