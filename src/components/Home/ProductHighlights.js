import React from "react";
import { useTranslation } from "../../context/TranslationContext";

export default function ProductHighlights() {
  const { getTranslatedText } = useTranslation();

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-12">
          
          {/* Product Approvals */}
          <div className="group text-center md:text-left bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center">
              <img
                src="https://www.uteshiyamedicare.com/wp-content/uploads/2023/04/cdsco.webp"
                alt={getTranslatedText("CDSCO Logo")}
                className="h-12 w-12 mb-4 transition duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 transition duration-500 ease-in-out group-hover:text-indigo-600">
              {getTranslatedText("PRODUCT APPROVALS")}
            </h3>
            <p className="text-gray-600 transition duration-500 ease-in-out group-hover:text-gray-800">
              {getTranslatedText("NexGen Ortho is one of the very few companies from India with more than 1000 approved products from CDSCO.")}
            </p>
          </div>

          {/* Sterile Facility */}
          <div className="group text-center md:text-left bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center">
              <img
                src="https://www.uteshiyamedicare.com/wp-content/uploads/2023/04/Sterile.webp"
                alt={getTranslatedText("Sterile Facility")}
                className="h-12 w-12 mb-4 transition duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 transition duration-500 ease-in-out group-hover:text-indigo-600">
              {getTranslatedText("STERILE FACILITY")}
            </h3>
            <p className="text-gray-600 transition duration-500 ease-in-out group-hover:text-gray-800">
              {getTranslatedText("NexGen Ortho is now approved by CDSCO to manufacture and sell Sterile Orthopedic Implants with approved In-House Sterile Facility.")}
            </p>
          </div>

          {/* Company Presence */}
          <div className="group text-center md:text-left bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center">
              <img
                src="https://www.uteshiyamedicare.com/wp-content/uploads/2023/04/Presence_11zon-1.webp"
                alt={getTranslatedText("Company Presence")}
                className="h-12 w-12 mb-4 transition duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 transition duration-500 ease-in-out group-hover:text-indigo-600">
              {getTranslatedText("COMPANY PRESENCE")}
            </h3>
            <p className="text-gray-600 transition duration-500 ease-in-out group-hover:text-gray-800">
              {getTranslatedText("NexGen Ortho is now available in more than 30 countries across the globe, and in almost all continents of the world.")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
