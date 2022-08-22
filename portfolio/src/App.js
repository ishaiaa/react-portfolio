import React from 'react';
import {Parallax} from '@react-spring/parallax';

import PageLayer from './components/reusables/PageLayer';

import Navbar from './components/pages/Navbar';
import ParallaxBanner from './components/pages/ParallaxBanner';
import AboutMe from './components/pages/AboutMe';
import Experience from './components/pages/Experience';

function App() {
  return (
    <div className="App">
      
      
      <Parallax pages={5.8}>
        <Navbar /> 
        <ParallaxBanner />
        <PageLayer 
          offset={1}
          primaryColor="#14191f"
          secondaryColor="#010010"
          accent="#274187"
          factor={1.2}
          wave={1}
        >
          <AboutMe />
        </PageLayer>
        <PageLayer 
          offset={2.2}
          primaryColor="#010010"
          secondaryColor="#14191f"
          accent="#274187"
          factor={1.2}
          wave={0}
        >
          <Experience />

        </PageLayer>
        <PageLayer 
          offset={3.4}
          primaryColor="#14191f"
          secondaryColor="#010010"
          accent="#274187"
          factor={1.2}
          wave={1}
        >
          <h1>About Me</h1>
          <h1>About Me</h1>
          <h1>About Me</h1>
          <h1>About Me</h1>
          <h1>About Me</h1>
          <h1>About Me</h1>
          <h1>About Me</h1>
        </PageLayer>
        <PageLayer 
          offset={4.6}
          primaryColor="#010010"
          secondaryColor="#14191f"
          accent="#274187"
          factor={1.2}
          wave={0}
        >
          <h1>About Me</h1>
          <h1>About Me</h1>
          <h1>About Me</h1>
          <h1>About Me</h1>
          <h1>About Me</h1>
          <h1>About Me</h1>
          <h1>About Me</h1>
        </PageLayer>
      </Parallax>
    </div>
  );
}

export default App;
