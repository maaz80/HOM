// File: src/App.jsx
import { useEffect, useState, useMemo } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Users from './components/Users';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="bg-white text-gray-900 poppins-regular">
      <Navbar/>
      <Hero />
      <Services />
      <Pricing />
      <Users />
      <ContactForm />
    </div>
  );
}