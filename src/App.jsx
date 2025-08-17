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
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';
const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowCase />
      {/* <LogoSection /> */}
      <FeatureCards/>
      <ExperienceSection />
      <EducationSection />
      <TechStack />
      <Testimonials />
      <ContactSection />
      <Footer />
    </>
    
  );
};

export default App;