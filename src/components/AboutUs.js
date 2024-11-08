import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '../context/TranslationContext';

const AboutUs = () => {
  const { getTranslatedText } = useTranslation();
  const [visibleSection, setVisibleSection] = useState(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    const sectionPositions = document.querySelectorAll('.fade-in').forEach((section, index) => {
      const sectionTop = section.offsetTop;
      if (scrollPosition >= sectionTop) setVisibleSection(index);
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { title: 'Why Choose Us', content: [
      'Extensive range of high-quality orthopedic implants',
      'Commitment to superior quality and patient safety',
      'Innovative designs that enhance surgical efficiency',
      'Customization options to meet individual patient requirements',
      'Global reach and distribution network',
      'Exceptional customer support and service',
    ]},
    { title: 'Our Speciality', content: [
      'Wide range of orthopedic implants, such as joint replacements, trauma implants, spine implants, and sports medicine implants.',
      'Anatomically accurate and custom-fitted implant options using advanced manufacturing methods and materials.',
      'Collaboration with healthcare professionals and strict attention to regulations and compliance.',
    ]},
  ];

  return (
    <section className="bg-white py-16 lg:py-24 px-8 lg:px-24">
      <div className="max-w-7xl mx-auto text-center fade-in transition-opacity duration-700">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-800 mb-8 animate-fadeIn">
          {getTranslatedText('We are inspired to create a better tomorrow with the best healthcare solutions')}
        </h1>
        <div className="relative w-full h-96 mb-10">
          <Image 
            src="/4.jpeg" 
            alt={getTranslatedText('Healthcare Solutions')} 
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg shadow-md"
          />
        </div>
        <h2 className="text-3xl font-semibold text-blue-600 mb-6 animate-fadeIn">
          {getTranslatedText('Welcome to Nexgen Orthocare - Where Health Meets Happiness!')}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          {getTranslatedText('Discover a New Era of Personalized Care and Wellness at Nexgen Orthocare. Your Journey to Optimal Health Begins Here, with our Cutting-Edge Services.')}
        </p>
        <Link href="/contact">
          <button className="inline-block bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105">
            {getTranslatedText('Get in touch with us today')}
          </button>
        </Link>
      </div>

      {sections.map((section, index) => (
        <div key={index} className={`bg-gray-50 py-16 mt-10 fade-in transition-opacity duration-700 ${visibleSection >= index ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-7xl mx-auto text-left">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">{getTranslatedText(section.title)}</h3>
            <ul className="list-disc text-gray-600 ml-5 space-y-4 text-lg">
              {section.content.map((item, idx) => (
                <li key={idx}>{getTranslatedText(item)}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <div className="max-w-7xl mx-auto mt-16 space-y-12 text-left fade-in transition-opacity duration-700">
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">{getTranslatedText('Our Goal')}</h3>
          <p className="text-lg text-gray-600 leading-relaxed">{getTranslatedText('To provide healthcare professionals with the highest quality orthopedic implants and instruments.')}</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">{getTranslatedText('Our Mission')}</h3>
          <p className="text-lg text-gray-600 leading-relaxed">{getTranslatedText('To improve patient outcomes and quality of life through innovative orthopedic solutions.')}</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">{getTranslatedText('Our Vision')}</h3>
          <p className="text-lg text-gray-600 leading-relaxed">{getTranslatedText('To be a trusted global leader in the field of orthopedic implants, driving advancements and setting new standards in patient care.')}</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">{getTranslatedText('Our Values')}</h3>
          <ul className="list-disc text-gray-600 ml-5 space-y-2 text-lg">
            {['Excellence', 'Integrity', 'Innovation', 'Patient-centric approach', 'Collaboration', 'Continuous improvement'].map((value, idx) => (
              <li key={idx}>{getTranslatedText(value)}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center mt-16 fade-in transition-opacity duration-700">
        <h3 className="text-4xl font-extrabold text-blue-600 mb-6">{getTranslatedText('Your Health is Our Passion')}</h3>
        <Link href="/contact">
          <button className="inline-block bg-blue-600 text-white text-lg font-medium px-8 py-4 rounded-lg hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105">
            {getTranslatedText('Join Us on the Journey to a Brighter Tomorrow')}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
