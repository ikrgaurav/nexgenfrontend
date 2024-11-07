// components/Navbar.js
import React from 'react';
import Link from "next/link";
import { useTranslation } from '../context/TranslationContext';

const Navbar = () => {
  const { language, setLanguage, getTranslatedText } = useTranslation();

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <nav className="bg-white shadow-lg w-full">
      <div className="w-full px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-gray-700 hover:text-gray-900">
              <span className="font-bold text-lg">{getTranslatedText('NexGen')}</span>
            </Link>
          </div>

          {/* Primary Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              {getTranslatedText('Home')}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">
              {getTranslatedText('About Us')}
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-gray-900">
              {getTranslatedText('Products')}
            </Link>
            <Link href="/blogs" className="text-gray-700 hover:text-gray-900">
              {getTranslatedText('Blogs')}
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900">
              {getTranslatedText('Contact Us')}
            </Link>
          </div>

          {/* Language Selector */}
          <div className="flex items-center">
            <select
              value={language}
              onChange={handleLanguageChange}
              className="border border-gray-300 rounded px-2 py-1"
            >
              <option value="en">English</option>
              <option value="ar">Arabic</option>
              <option value="zh">Chinese (Simplified)</option>
              <option value="nl">Dutch</option>
              <option value="eo">Esperanto</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
