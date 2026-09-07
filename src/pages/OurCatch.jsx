import React from 'react';
import SeafoodSection from '../components/SeafoodSection';
import PrawnsSection from '../components/PrawnsSection';
import CrabSection from '../components/CrabSection';
import CTASection from '../components/CTASection';

const OurCatch = () => {
  return (
    <main style={{ paddingTop: '100px' }}>
      <div className="py-5 text-center text-white" style={{ backgroundColor: 'var(--c-primary)' }}>
        <div className="container">
          <span className="letter-space-wide text-warning">DIRECT FROM RAMESWARAM HARBOUR</span>
          <h1 className="display-4 font-serif fw-bold mt-2">OUR DAILY SEA CATCH</h1>
          <p className="text-white-50 max-w-700 mx-auto">
            Experience true open-sea flavours. Availability varies strictly with the day's catch.
          </p>
        </div>
      </div>
      <SeafoodSection />
      <PrawnsSection />
      <CrabSection />
      <CTASection />
    </main>
  );
};

export default OurCatch;