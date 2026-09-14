import React from 'react';
import BackgroundGrid from './components/layout/BackgroundGrid';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import OperationalLogs from './components/sections/OperationalLogs';
import DeployedSystems from './components/sections/DeployedSystems';
import TechStack from './components/sections/TechStack';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ErrorBoundary from './components/ui/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div id="top" className="min-h-screen">
        <BackgroundGrid />
        <Navbar />
        <main className="relative">
          <Hero />
          <div className="container-shell">
            <div className="h-px bg-[var(--border-color)]" />
          </div>
          <OperationalLogs />
          <DeployedSystems />
          <TechStack />
          <Contact />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
