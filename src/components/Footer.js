import React from "react";
import { useTranslation } from "../context/TranslationContext"; // Adjust based on your file structure
import Image from 'next/image';

// SVG logos for Visa, PayPal, Stripe, MasterCard, and Cash on Delivery
const paymentLogos = [
  { src: "https://cdn-icons-png.freepik.com/512/16183/16183667.png?ga=GA1.1.1686302359.1726215616", alt: "Visa", label: "Visa" },
  { src: "https://cdn-icons-png.freepik.com/512/888/888870.png?ga=GA1.1.1686302359.1726215616", alt: "PayPal", label: "PayPal" },
  { src: "https://www.logo.wine/a/logo/Stripe_(company)/Stripe_(company)-Logo.wine.svg", alt: "Stripe", label: "Stripe" },
  { src: "https://cdn-icons-png.freepik.com/512/15398/15398050.png?ga=GA1.1.1686302359.1726215616", alt: "MasterCard", label: "MasterCard" },
  { src: "https://png.pngtree.com/png-clipart/20210530/original/pngtree-online-shop-cash-on-delivery-icon-png-image_6364043.jpg", alt: "Cash on Delivery", label: "Cash on Delivery" }
];

const Footer = () => {
  const { language, setLanguage, getTranslatedText } = useTranslation();

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Section */}
        <address className="not-italic">
          <h3 className="text-lg font-semibold mb-4">{getTranslatedText("Contact Us")}</h3>
          <p>
            {getTranslatedText("Email")}:{" "}
            <a href="mailto:info@nexgenortho.com" className="underline focus:outline-none focus:ring-2 focus:ring-white">
              info@nexgenortho.com
            </a>
          </p>
          <p>
            {getTranslatedText("Phone")}:{" "}
            <a href="tel:+919999999999" className="underline focus:outline-none focus:ring-2 focus:ring-white">
              +91-9999999999
            </a>
          </p>
        </address>

        {/* Recent Posts Section */}
        <nav aria-label="Recent Posts">
          <h3 className="text-lg font-semibold mb-4">{getTranslatedText("Recent Posts")}</h3>
          <ul className="space-y-2">
            <li>
              <p>07 Oct - <a href="#" className="underline focus:outline-none focus:ring-2 focus:ring-white">{getTranslatedText("K-Nail for Femur Fractures: An Overview")}</a></p>
            </li>
            <li>
              <p>03 Oct - <a href="#" className="underline focus:outline-none focus:ring-2 focus:ring-white">{getTranslatedText("HA Coated Polyaxial Screws: Breakthrough")}</a></p>
            </li>
            <li>
              <p>09 Sep - <a href="#" className="underline focus:outline-none focus:ring-2 focus:ring-white">{getTranslatedText("Master Femur Nail: Step-by-Step Guide")}</a></p>
            </li>
          </ul>
        </nav>

        {/* Product Categories Section */}
        <nav aria-label="Product Categories">
          <h3 className="text-lg font-semibold mb-4">{getTranslatedText("Product Categories")}</h3>
          <ul className="space-y-2">
            {["Cmf", "External Fixator System", "General Instruments", "Joints Reconstruction", "Spinal Implants", "Sports Medicine", "Trauma"].map((category) => (
              <li key={category}>
                <a href="#" className="underline focus:outline-none focus:ring-2 focus:ring-white">{getTranslatedText(category)}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{getTranslatedText("Newsletter")}</h3>
          <form>
            <input
              type="email"
              placeholder={getTranslatedText("Your Email")}
              className="w-full px-3 py-2 text-gray-800 rounded mb-2"
              aria-label="Email address for newsletter subscription"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-4 py-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label={getTranslatedText("Subscribe to newsletter")}
            >
              {getTranslatedText("Subscribe")}
            </button>
          </form>
        </div>
      </div>



      {/* Payment logos */}
      <div className="border-t border-gray-300 mt-8 pt-4">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2024 Nexgen Ortho</p>
          <div className="flex space-x-4">
            {paymentLogos.map((logo) => (
              <a
                key={logo.alt}
                href="#"
                className="group focus:outline-none focus:ring-2 focus:ring-white"
                aria-label={logo.label}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 w-auto grayscale group-hover:grayscale-0 group-hover:brightness-110 transition duration-200"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
