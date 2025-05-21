// React is imported for JSX support
import React from 'react';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Summary from './components/sections/Summary';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-grow">
        <Summary />
        <Skills />
        <Education />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
