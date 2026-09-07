import React from 'react';
import HowItWorks from '../components/HowItWorks';
import PreBookSection from '../components/PreBookSection';
import CTASection from '../components/CTASection';

const HowItWorksPage = () => {
  return (
    <main style={{ paddingTop: '100px' }}>
      <HowItWorks />
      <PreBookSection />
      <CTASection />
    </main>
  );
};

export default HowItWorksPage;