import React from 'react';
import Image from 'next/image';
import { useTranslation } from '../../context/TranslationContext';

const categories = [
  { title: 'Trauma', imgUrl: '/1.jpg' },
  { title: 'Arthroscopy', imgUrl: '/1.jpg' },
  { title: 'Spinal Implants', imgUrl: '/1.jpg' },
  { title: 'Dental Implants', imgUrl: '/1.jpg' }
];

const CategoryCard = ({ title, imgUrl }) => {
  const { getTranslatedText } = useTranslation();

  return (
    <div className="relative rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div className="h-48 w-full relative bg-gray-200">
        <Image src={imgUrl} alt={getTranslatedText(title)} layout="fill" objectFit="cover" />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-lg font-semibold">
        {getTranslatedText(title)}
      </div>
    </div>
  );
};

const CategoriesGrid = () => {
  const { getTranslatedText } = useTranslation();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        {getTranslatedText("Choose Your Area of Interest")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        {categories.map((category, index) => (
          <CategoryCard key={index} title={category.title} imgUrl={category.imgUrl} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesGrid;
