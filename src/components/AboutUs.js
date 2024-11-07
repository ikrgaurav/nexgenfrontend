import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '../context/TranslationContext';  // Ensure this import is correct

const AboutUs = () => {
  const { getTranslatedText } = useTranslation();

  return (
    <section className="bg-white py-16 lg:py-24 px-8 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-800 mb-6">
          {getTranslatedText('We are inspired to create a better tomorrow with the best healthcare solutions')}
        </h1>

        {/* Image Section - Add Image Here */}
        <div className="relative w-full h-96 mb-10">
          {/* Replace src with actual image path */}
          <Image 
            src="/path-to-your-image" 
            alt={getTranslatedText('Healthcare Solutions')} 
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Subtitle */}
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">
          {getTranslatedText('Welcome to Nexgen Orthocare - Where Health Meets Happiness!')}
        </h2>

        {/* Content Section */}
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          {getTranslatedText('Discover a New Era of Personalized Care and Wellness at Nexgen Orthocare. Your Journey to Optimal Health Begins Here, with our Cutting-Edge Services.')}
        </p>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          {getTranslatedText('We at Nexgen Orthocare are committed to revolutionizing orthopedic care with our groundbreaking implants. Check out what we have to offer and see how our services can improve your operations. Team up with us, and let’s make a difference in people’s lives, one implant at a time.')}
        </p>

        <Link href="/contact">
          <button className="inline-block bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 mb-10">
            {getTranslatedText('Get in touch with us today')}
          </button>
        </Link>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-100 py-16 mt-10">
        <div className="max-w-7xl mx-auto text-left">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            {getTranslatedText('Why Choose Us')}
          </h3>
          <ul className="list-disc text-gray-600 ml-5 space-y-4 text-lg">
            <li>{getTranslatedText('Extensive range of high-quality orthopedic implants')}</li>
            <li>{getTranslatedText('Commitment to superior quality and patient safety')}</li>
            <li>{getTranslatedText('Innovative designs that enhance surgical efficiency')}</li>
            <li>{getTranslatedText('Customization options to meet individual patient requirements')}</li>
            <li>{getTranslatedText('Global reach and distribution network')}</li>
            <li>{getTranslatedText('Exceptional customer support and service')}</li>
          </ul>
        </div>
      </div>

      {/* Our Mission, Vision, Values Section */}
      <div className="max-w-7xl mx-auto mt-16 space-y-12 text-left">
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            {getTranslatedText('Our Goal')}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            {getTranslatedText('To provide healthcare professionals with the highest quality orthopedic implants and instruments.')}
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            {getTranslatedText('Our Mission')}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            {getTranslatedText('To improve patient outcomes and quality of life through innovative orthopedic solutions.')}
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            {getTranslatedText('Our Vision')}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            {getTranslatedText('To be a trusted global leader in the field of orthopedic implants, driving advancements and setting new standards in patient care.')}
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            {getTranslatedText('Our Values')}
          </h3>
          <ul className="list-disc text-gray-600 ml-5 space-y-2 text-lg">
            <li>{getTranslatedText('Excellence')}</li>
            <li>{getTranslatedText('Integrity')}</li>
            <li>{getTranslatedText('Innovation')}</li>
            <li>{getTranslatedText('Patient-centric approach')}</li>
            <li>{getTranslatedText('Collaboration')}</li>
            <li>{getTranslatedText('Continuous improvement')}</li>
          </ul>
        </div>
      </div>

      {/* Our Specialty Section */}
      <div className="bg-gray-100 py-16 mt-10">
        <div className="max-w-7xl mx-auto text-left">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            {getTranslatedText('Our Speciality')}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {getTranslatedText('Wide range of orthopedic implants, such as joint replacements, trauma implants, spine implants, and sports medicine implants.')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {getTranslatedText('Anatomically accurate and custom-fitted implant options. Using advanced manufacturing methods and materials.')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            {getTranslatedText('Collaboration with people who work in healthcare. Strict attention to regulations and compliance.')}
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h3 className="text-4xl font-extrabold text-blue-600 mb-6">
          {getTranslatedText('Your Health is Our Passion')}
        </h3>
        <Link href="/contact">
          <button className="inline-block bg-blue-600 text-white text-lg font-medium px-8 py-4 rounded-lg hover:bg-blue-700 transition duration-300">
            {getTranslatedText('Join Us on the Journey to a Brighter Tomorrow')}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
