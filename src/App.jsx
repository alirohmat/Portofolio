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
      <div id="top" className="min-h-screen pb-20 sm:pb-0">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-4 focus:rounded-lg focus:bg-lime focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:font-bold focus:text-lime-ink"
        >
          Skip to main content
        </a>
        <BackgroundGrid />
        <Navbar />
        <main id="main-content" className="relative">
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
