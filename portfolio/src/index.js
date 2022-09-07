import React from 'react';
import ReactDOM from 'react-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import TestApp from './TestApp';
import './index.css';

const loading = document.getElementById('screen');
const root = document.getElementById('root');


ReactDOM.render(
    <ParallaxProvider>
        <TestApp loadingScreen={loading}/>
    </ParallaxProvider>
    
    , root
);
