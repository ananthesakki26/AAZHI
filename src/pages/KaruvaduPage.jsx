import React from 'react';
import KaruvaduSection from '../components/KaruvaduSection';
import CTASection from '../components/CTASection';

const KaruvaduPage = () => {
  return (
    <main style={{ paddingTop: '100px' }}>
      <div className="py-5 text-center text-white" style={{ backgroundColor: 'var(--c-primary)' }}>
        <div className="container">
          <span className="letter-space-wide text-warning">HERITAGE COASTAL PRESERVES</span>
          <h1 className="display-4 font-serif fw-bold mt-2">RAMESWARAM KARUVADU</h1>
          <p className="text-white-50">Traditional coastal flavours dried under pristine coastal sun.</p>
        </div>
      </div>
      <KaruvaduSection />
      <CTASection />
    </main>
  );
};

export default KaruvaduPage;