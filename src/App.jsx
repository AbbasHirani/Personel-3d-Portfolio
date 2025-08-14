import React from 'react';
import Hero from './sections/Hero';
import ShowCase from './sections/ShowCase';
import Navbar from './components/navbar';
import LogoSection from './components/LogoSection';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowCase />
      <LogoSection />
    </>
    
  );
};

export default App;