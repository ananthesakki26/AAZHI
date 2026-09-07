import React from 'react';
import About from '../components/About';
import BrandIntro from '../components/BrandIntro';
import CTASection from '../components/CTASection';

const AboutPage = () => {
  return (
    <main style={{ paddingTop: '100px' }}>
      <BrandIntro />
      <About />
      <CTASection />
    </main>
  );
};

export default AboutPage;