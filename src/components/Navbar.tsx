import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-3xl font-serif tracking-wider">
                <span className="text-green-500">O</span>
                <span className="text-green-500">A</span>
              </span>
              
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-green-500 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-green-500 transition-colors">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-green-500 transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-green-500 transition-colors">
              Contact
            </Link>
            <a
              href="#book-demo"
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transform hover:scale-105 transition-all duration-200 shadow-md"
            >
              Book Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-green-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-green-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-green-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-gray-300 hover:text-green-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-green-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="#book-demo"
                className="block px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;