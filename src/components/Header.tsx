import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">ServicePro</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-10">
            <Link to="/features" className="text-gray-500 hover:text-gray-900">Features</Link>
            <Link to="/industries" className="text-gray-500 hover:text-gray-900">Industries</Link>
            <Link to="/pricing" className="text-gray-500 hover:text-gray-900">Pricing</Link>
            <Link to="/blog" className="text-gray-500 hover:text-gray-900">Blog</Link>
            <Link to="/contact" className="text-gray-500 hover:text-gray-900">Contact</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link
              to="/trial"
              className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-blue-600">ServicePro</span>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link to="/features" className="text-gray-500 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Features</Link>
                  <Link to="/industries" className="text-gray-500 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Industries</Link>
                  <Link to="/pricing" className="text-gray-500 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
                  <Link to="/blog" className="text-gray-500 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                  <Link to="/contact" className="text-gray-500 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                  <Link to="/trial" className="text-gray-500 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Start Free Trial</Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
