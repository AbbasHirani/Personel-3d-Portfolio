import React from 'react';
import Hero from './sections/Hero';
import ShowCase from './sections/ShowCase';
import Navbar from './components/navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowCase />
    </>
    
  );
};

export default App;