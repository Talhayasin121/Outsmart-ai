import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl font-serif tracking-wider">
                <span className="text-green-500">O</span>
                <span className="text-green-500">A</span>
              </span>
              <span className="text-xl font-bold">Outsmart AI</span>
            </div>
            <p className="text-gray-400">
              Empowering businesses through intelligent automation solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-green-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Process Automation</li>
              <li className="text-gray-400">AI Integration</li>
              <li className="text-gray-400">Workflow Optimization</li>
              <li className="text-gray-400">Custom Solutions</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-5 w-5 text-green-500" />
                <span>outsmartsolution@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-5 w-5 text-green-500" />
                <span>+</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-5 w-5 text-green-500" />
                <span>123 Innovation Street, Islamabad</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Outsmart AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
