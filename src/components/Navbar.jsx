// File: src/components/Navbar.jsx
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Users', href: '#users' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [active, setActive] = useState('Home');

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 text-white backdrop-blur-sm flex item-center justify-center">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <ul className="flex gap-16">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`text-base !text-white font-medium transition-all hover:!text-blue-300 ${
                  active === link.label ? '!text-blue-300 underline underline-offset-4' : 'text-white/80'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
