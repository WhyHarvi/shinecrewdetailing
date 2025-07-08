import React from 'react';
import Hero from './components/Hero/hero';
import Us from './components/Us/Us';
import { BentoGridDemo } from './components/About/About';
import CleaningProcess from './components/Cleaning-Process/Cleaning-Process';
import ChooseUs from './components/Choose-Us/Choose-Us';
import Features from './components/Features/Features';
import ContactSection from './components/Contact/Contact';
import SocialMediaSection from './components/Social/Social';
import LocationSection from './components/Location.jsx/Location';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ScrollToTopButton from './components/ui/ScrollToTopButton';
function App() {
  return (
    <div> 
    <Navbar />
      <Hero />
    <Features />
    <Us />
    <BentoGridDemo />
    <CleaningProcess />
    <ContactSection />
    <SocialMediaSection />
    <LocationSection />
    <Footer /> 
   <ScrollToTopButton />
    </div>
  );
}
export default App;
