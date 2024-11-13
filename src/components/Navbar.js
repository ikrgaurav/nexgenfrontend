import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '../context/TranslationContext';

const Navbar = () => {
  const { language, setLanguage, getTranslatedText } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg w-full transition-shadow duration-300 ease-in-out">
      <div className="w-full px-6 lg:px-8 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png"
                alt="NexGen Logo"
                width={100}
                height={100}
                className="transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-lg">
            <Link href="/" className="text-gray-800 hover:text-gray-900 transition-transform duration-300 ease-in-out transform hover:scale-105">
              {getTranslatedText('Home')}
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-gray-900 transition-transform duration-300 ease-in-out transform hover:scale-105">
              {getTranslatedText('About Us')}
            </Link>
            <Link href="/products" className="text-gray-800 hover:text-gray-900 transition-transform duration-300 ease-in-out transform hover:scale-105">
              {getTranslatedText('Products')}
            </Link>
            <Link href="/blogs" className="text-gray-800 hover:text-gray-900 transition-transform duration-300 ease-in-out transform hover:scale-105">
              {getTranslatedText('Blogs')}
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-gray-900 transition-transform duration-300 ease-in-out transform hover:scale-105">
              {getTranslatedText('Contact Us')}
            </Link>
          </div>

          {/* Language Selector */}
          <div className="relative hidden md:flex items-center">
            <select
              value={language}
              onChange={handleLanguageChange}
              className="border border-gray-300 rounded-md px-4 py-2 bg-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-blue-400 appearance-none"
              style={{
                outline: 'none',
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>')`,
                backgroundPosition: 'right 1rem center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '1.5rem',
              }}
            >
              <option value="en">🇬🇧 English</option>
              <option value="ar">🇦🇪 Arabic</option>
              <option value="zh">🇨🇳 Chinese (Simplified)</option>
              <option value="nl">🇳🇱 Dutch</option>
              <option value="eo">🌐 Esperanto</option>
              <option value="fr">🇫🇷 French</option>
              <option value="es">🇪🇸 Spanish</option>
            </select>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col space-y-4 px-6 py-4 text-lg">
            <Link href="/" className="text-gray-800 hover:text-gray-900 transition-transform duration-300 ease-in-out transform hover:scale-105" onClick={toggleMobileMenu}>
              {getTranslatedText('Home')}
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-gray-900 transition-transform duration-300 ease-in-out transform hover:scale-105" onClick={toggleMobileMenu}>
              {getTranslatedText('About Us')}
            </Link>
            <Link href="/products" className="text-gray-800 hover:text-gray-900 transition-transform duration-300 ease-in-out transform hover:scale-105" onClick={toggleMobileMenu}>
              {getTranslatedText('Products')}
            </Link>
            <Link href="/blogs" className="text-gray-800 hover:text-gray-900 transition-transform duration-300 ease-in-out transform hover:scale-105" onClick={toggleMobileMenu}>
              {getTranslatedText('Blogs')}
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-gray-900 transition-transform duration-300 ease-in-out transform hover:scale-105" onClick={toggleMobileMenu}>
              {getTranslatedText('Contact Us')}
            </Link>

            {/* Language Selector in Mobile Menu */}
            <select
              value={language}
              onChange={handleLanguageChange}
              className="border border-gray-300 rounded-md px-4 py-2 bg-white shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-blue-400"
              style={{
                outline: 'none',
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>')`,
                backgroundPosition: 'right 1rem center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '1.5rem',
              }}
            >
              <option value="en">🇬🇧 English</option>
              <option value="ar">🇦🇪 Arabic</option>
              <option value="zh">🇨🇳 Chinese (Simplified)</option>
              <option value="nl">🇳🇱 Dutch</option>
              <option value="eo">🌐 Esperanto</option>
              <option value="fr">🇫🇷 French</option>
              <option value="es">🇪🇸 Spanish</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
