import React from 'react';
import Hero from './sections/Hero';
import ShowCase from './sections/ShowCase';
import Navbar from './components/navbar';
import LogoSection from './components/LogoSection';
import FeatureCards from './sections/FeatureCards';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowCase />
      <LogoSection />
      <FeatureCards />
    </>
    
  );
};

export default App;