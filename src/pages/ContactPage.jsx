import React from 'react';
import Contact from '../components/Contact';
import CTASection from '../components/CTASection';

const ContactPage = () => {
  return (
    <main style={{ paddingTop: '100px' }}>
      <Contact />
      <CTASection />
    </main>
  );
};

export default ContactPage;