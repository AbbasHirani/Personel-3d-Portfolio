import React from 'react';
import Hero from './sections/Hero';
import ShowCase from './sections/ShowCase';
import Navbar from './components/navbar';
import LogoSection from './sections/LogoSection';
import FeatureCards from './sections/FeatureCards';
import ExperienceSection from './sections/ExperienceSection';
import EducationSection from './sections/EducationSection'
import TechStack from './sections/TechStack';
import Testimonials from './sections/Testimonials';
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowCase />
      <LogoSection />
      <FeatureCards/>
      <ExperienceSection />
      <EducationSection />
      <TechStack />
      <Testimonials />
    </>
    
  );
};

export default App;