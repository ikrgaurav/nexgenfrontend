// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import { useTranslation } from '../context/TranslationContext';

const Navbar = () => {
  const { language, setLanguage, getTranslatedText } = useTranslation();

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <nav className="bg-white shadow-lg w-full transition-shadow duration-300 ease-in-out">
      <div className="w-full px-6 lg:px-8 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-gray-800 hover:text-gray-900">
              <span className="font-bold text-2xl transition-transform duration-300 ease-in-out transform hover:scale-110">
                {getTranslatedText('NexGen')}
              </span>
            </Link>
          </div>

          {/* Primary Nav */}
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
          <div className="relative flex items-center">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
