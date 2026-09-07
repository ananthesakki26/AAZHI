import React from 'react';
import Hero from '../components/Hero';
import BrandIntro from '../components/BrandIntro';
import SeafoodSection from '../components/SeafoodSection';
import PrawnsSection from '../components/PrawnsSection';
import CrabSection from '../components/CrabSection';
import KaruvaduSection from '../components/KaruvaduSection';
import PreBookSection from '../components/PreBookSection';
import HowItWorks from '../components/HowItWorks';
import About from '../components/About';
import CTASection from '../components/CTASection';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <BrandIntro />
      <SeafoodSection />
      <PrawnsSection />
      <CrabSection />
      <KaruvaduSection />
      <PreBookSection />
      <HowItWorks />
      <About />
      <CTASection />
      <Contact />
    </main>
  );
};

export default Home;