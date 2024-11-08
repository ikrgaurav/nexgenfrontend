import React from 'react';
import Image from 'next/image';
import { useTranslation } from '../../context/TranslationContext';

const ProductShowcase = () => {
  const { getTranslatedText } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-50 p-8 lg:p-16">
      {/* Image Section */}
      <div className="lg:w-1/2 w-full mb-8 lg:mb-0 flex justify-center lg:justify-start">
        <div className="border-4 border-blue-600 p-4 rounded-lg shadow-lg">
          <Image
            src="/2.jpg" // Replace with actual image path
            alt={getTranslatedText("Nexgen Orthocare Product")}
            width={600}
            height={400}
            className="rounded-md"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 w-full text-left lg:pl-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">
          {getTranslatedText("INSTRUMENTS ARE DESIGNED TO BE FLUID IN LAYOUT AND INTUITIVE IN FUNCTION.")}
        </h2>
        <p className="text-gray-600 mb-4">
          {getTranslatedText("Makes the surgery experience one of ease from pre-op to close. Nexgen Orthocare is an orthopedic implants manufacturer & supplier company approved by FDA and ISO. We are a leading manufacturer & supplier of trauma implants for the surgical treatment of bone fractures, abnormalities, and diseases of the hands, arms, hips, pelvis, legs, ankles, and feet.")}
        </p>
        <p className="text-gray-600 mb-4">
          {getTranslatedText("Nexgen Orthocare furnishes physicians worldwide with a comprehensive suite of products. Among them are intramuscular nails, cannulated screws, external fixation devices, plates, and related instrumentation. Committed to improving surgical treatment and serving individual patient needs, Nexgen Orthocare invests heavily in research and development. Innovations in materials and technologies help surgeons to choose the best solution for every patient and procedure.")}
        </p>
      </div>
    </div>
  );
};

export default ProductShowcase;
