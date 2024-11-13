import React from "react";

const BrandPartnerBand = ({ logo1Src, logo2Src, alt1, alt2 }) => {
  return (
    <section className="bg-gradient-to-r from-white to-cyan-400 py-12 md:py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-center text-3xl font-semibold mb-8 text-gray-800">
          Our Brand Partners
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16">
          {/* Brand Partner 1 */}
          <div className="flex justify-center items-center transform transition duration-300 hover:scale-105">
            <img
              src={"n.png"} // Dynamically pass logo1Src
              alt={alt1}
              className="h-28 md:h-36 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>

          {/* Separator for spacing */}
          <div className="hidden md:block w-px h-36 bg-white opacity-40"></div>

          {/* Brand Partner 2 */}
          <div className="flex justify-center items-center transform transition duration-300 hover:scale-105">
            <img
              src={"v.png"} // Dynamically pass logo2Src
              alt={alt2}
              className="h-28 md:h-36 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPartnerBand;
