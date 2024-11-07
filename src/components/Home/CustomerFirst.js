import React from 'react';
import Image from 'next/image';
import { useTranslation } from '../../context/TranslationContext';

const CustomerFirst = () => {
  const { getTranslatedText } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-50 p-8 lg:p-16">
      {/* Text Section */}
      <div className="lg:w-1/2 w-full text-left lg:pr-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
          {getTranslatedText("CUSTOMER FIRST")}
        </h2>
        <p className="text-gray-600 mb-4">
          {getTranslatedText("At Nexgen Orthocare, we believe in putting our customers first. We understand that our customers' needs are unique, so we offer customized solutions that meet their specific requirements. Our team of experts works closely with our customers to ensure they receive exceptional service and support, from product training to technical assistance.")}
        </p>
        <p className="text-gray-600 mb-4">
          {getTranslatedText("We are committed to being the best orthopedic implants exporter that improves the quality of life for patients, and our customers are at the forefront of everything we do.")}
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 w-full mt-8 lg:mt-0 flex justify-center lg:justify-end">
        <div className="rounded-lg shadow-lg overflow-hidden">
          <Image
            src="/path-to-your-image" // Replace with actual image path
            alt={getTranslatedText("Customer First")}
            width={600}
            height={400}
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerFirst;
