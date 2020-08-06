import React from 'react';
import Header from '../src/components/landing-section/landing-section.component'
import './App.css';
import LandingSection from '../src/components/landing-section/landing-section.component'
import InstructionSection from '../src/components/instruction-section/instruction-section.component'
import ProductSection from '../src/components/product-section/product-section.component'
import StaffSection from '../src/components/staff-section/staff-section.component'
import Footer from '../src/components/footer/footer.component'

function App() {
  return (
    <div className="App">
      <LandingSection />
      <InstructionSection />
      <ProductSection />
      <StaffSection />
      <Footer />
    </div>
  );
}

export default App;
