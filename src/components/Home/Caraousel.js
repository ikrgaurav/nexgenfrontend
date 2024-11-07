import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../context/TranslationContext';

const images = [
  {
    src: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Welcome to NexGen Orthopedic Solutions",
    description: "Nexgen Ortho is dedicated to providing products to improve current treatments in orthopaedic trauma surgery.",
    buttonText: "Enquire Now"
  },
  {
    src: "https://images.unsplash.com/photo-1580281780460-82d277b0e3f8?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Advanced Medical Solutions",
    description: "We specialize in innovative and cutting-edge medical solutions for a variety of healthcare needs.",
    buttonText: "Learn More"
  },
  {
    src: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Cutting-edge Technology",
    description: "Our technology is designed to meet the modern healthcare challenges.",
    buttonText: "Discover More"
  },
  {
    src: "https://images.unsplash.com/photo-1706777193603-76c3e9613553?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Expert Medical Care",
    description: "Our team of experts ensures the best outcomes for patients with state-of-the-art treatments.",
    buttonText: "Contact Us"
  },
  {
    src: "https://images.unsplash.com/photo-1551524559-8af4e6624178?q=80&w=3126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Innovative Solutions",
    description: "Our solutions are tailored to meet the unique needs of every patient.",
    buttonText: "Get Started"
  },
];

function Carousel() {
  const { getTranslatedText } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="min-w-full relative">
            <img
              src={image.src}
              alt={getTranslatedText(image.alt)}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
            {/* Overlay with text and button */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 rounded-lg p-4">
              <h2 className="text-3xl font-bold text-white mb-2">{getTranslatedText(image.alt)}</h2>
              <p className="text-lg text-white mb-4">{getTranslatedText(image.description)}</p>
              <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-300 ease-in-out">
                {getTranslatedText(image.buttonText)}
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-1/2 left-4 z-30 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-4 z-30 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200 transition"
        onClick={nextSlide}
      >
        &gt;
      </button>
      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
