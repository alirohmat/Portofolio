import React from 'react';
import { motion } from 'framer-motion';
import BackgroundGrid from './components/layout/BackgroundGrid';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import OperationalLogs from './components/sections/OperationalLogs';
import DeployedSystems from './components/sections/DeployedSystems';
import BackgroundSection from './components/sections/BackgroundSection';
import TechStack from './components/sections/TechStack';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <BackgroundGrid />
      <Navbar />
      <main className="relative min-h-screen">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <Hero />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <OperationalLogs />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <DeployedSystems />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <BackgroundSection />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <TechStack />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Contact />
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
