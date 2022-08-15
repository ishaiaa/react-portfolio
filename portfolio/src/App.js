import React from 'react';
import {Parallax} from '@react-spring/parallax';

import Navbar from './components/Navbar';
import ParallaxBanner from './components/ParallaxBanner';


function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Parallax pages={3}>
        <ParallaxBanner />
      </Parallax>
    </div>
  );
}

export default App;
