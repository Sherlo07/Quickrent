import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { GadgetList } from './components/GadgetList';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <GadgetList />
        <Contact />
      </main>
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            © 2024 QuickRent. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;