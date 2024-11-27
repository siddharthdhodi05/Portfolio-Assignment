import React, { useState } from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const App = () => {
  const [sectionKey, setSectionKey] = useState('about'); // Track the active section

  return (
    <>
      {/* Pass setSectionKey to Header */}
      <Header setSectionKey={setSectionKey} />
      
      {/* Pass sectionKey to each section */}
      <Hero />
      <About sectionKey={sectionKey} />
      <Skills sectionKey={sectionKey} />
      <Projects sectionKey={sectionKey} />
      <Contact sectionKey={sectionKey} />
    </>
  );
};

export default App;
