import React from 'react';
import Header from '../src/components/landing-section/landing-section.component'
import './App.css';
import LandingSection from '../src/components/landing-section/landing-section.component';
import InstructionSection from '../src/components/instruction-section/instruction-section.component'

function App() {
  return (
    <div className="App">
      <LandingSection />
      <InstructionSection />
    </div>
  );
}

export default App;
