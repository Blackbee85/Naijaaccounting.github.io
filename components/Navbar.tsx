
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Landmark } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
  ];

  const handleGetStarted = () => {
    if (location.pathname !== '/') {
      window.location.hash = '#/';
      setTimeout(() => {
        document.getElementById('get-started-form')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById('get-started-form')?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-navy text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Landmark className="h-8 w-8 text-gold" />
              <span className="font-bold text-xl tracking-tight">NAIJA<span className="text-gold">ACCOUNTANTS</span></span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`hover:text-gold transition-colors font-medium ${
                  location.pathname === link.path ? 'text-gold' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={handleGetStarted}
              className="bg-gold text-navy px-6 py-2 rounded-md font-bold hover:bg-gold-dark transition-all transform hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gold focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-navy-dark border-t border-navy-light pb-6">
          <div className="px-2 pt-2 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-4 text-base font-medium hover:text-gold border-b border-gray-700"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={handleGetStarted}
              className="w-full mt-4 bg-gold text-navy px-6 py-3 rounded-md font-bold hover:bg-gold-dark"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
