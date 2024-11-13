import React, { useState, useEffect } from "react";
import { useTranslation } from "../context/TranslationContext";

const paymentLogos = [
  { src: "https://cdn-icons-png.freepik.com/512/16183/16183667.png?ga=GA1.1.1686302359.1726215616", alt: "Visa", label: "Visa" },
  { src: "https://cdn-icons-png.freepik.com/512/888/888870.png?ga=GA1.1.1686302359.1726215616", alt: "PayPal", label: "PayPal" },
  { src: "https://www.logo.wine/a/logo/Stripe_(company)/Stripe_(company)-Logo.wine.svg", alt: "Stripe", label: "Stripe" },
  { src: "https://cdn-icons-png.freepik.com/512/15398/15398050.png?ga=GA1.1.1686302359.1726215616", alt: "MasterCard", label: "MasterCard" },
  { src: "https://png.pngtree.com/png-clipart/20210530/original/pngtree-online-shop-cash-on-delivery-icon-png-image_6364043.jpg", alt: "Cash on Delivery", label: "Cash on Delivery" }
];

const Footer = () => {
  const { getTranslatedText } = useTranslation();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://nexgenbackend.onrender.com/api/blogs', {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_BLOG_TOKEN}`,
          },
        });
        const data = await response.json();
        const sortedBlogs = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBlogs(sortedBlogs.slice(0, 3));
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <footer className="bg-gradient-to-br from-blue-600 to-cyan-400 text-white py-10 md:py-16 relative">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-4 px-6">
        {/* Contact Section */}
        <address className="not-italic space-y-2 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">{getTranslatedText("Contact Us")}</h3>
          <p>
            {getTranslatedText("Email")}:{" "}
            <a href="mailto:info@nexgenortho.com" className="underline hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white">
              info@nexgenortho.com
            </a>
          </p>
          <p>
            {getTranslatedText("Phone")}:{" "}
            <a href="tel:+919999999999" className="underline hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white">
              +91-9999999999
            </a>
          </p>
        </address>

        {/* Recent Posts Section */}
        <nav aria-label="Recent Posts" className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">{getTranslatedText("Recent Posts")}</h3>
          <ul className="space-y-2">
            {blogs.map(blog => (
              <li key={blog._id}>
                <p className="text-sm">
                  {new Date(blog.date).toLocaleDateString()} - <a href="#" className="underline hover:text-gray-300">{blog.name}</a>
                </p>
              </li>
            ))}
          </ul>
        </nav>

        {/* Product Categories Section */}
        <nav aria-label="Product Categories" className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">{getTranslatedText("Product Categories")}</h3>
          <ul className="space-y-2">
            {["Cmf", "External Fixator System", "General Instruments", "Joints Reconstruction", "Spinal Implants", "Sports Medicine", "Trauma"].map((category) => (
              <li key={category}>
                <a href="#" className="underline hover:text-gray-300">{getTranslatedText(category)}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Newsletter Section */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">{getTranslatedText("Newsletter")}</h3>
          <form className="flex flex-col items-center md:items-start space-y-2">
            <input
              type="email"
              placeholder={getTranslatedText("Your Email")}
              className="w-full px-4 py-2 text-gray-800 rounded-md mb-2 focus:ring-2 focus:ring-blue-300"
              aria-label="Email address for newsletter subscription"
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-4 py-2 rounded-md w-full hover:bg-blue-50 transition focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label={getTranslatedText("Subscribe to newsletter")}
            >
              {getTranslatedText("Subscribe")}
            </button>
          </form>
        </div>
      </div>

      {/* Payment logos in the corner */}
      <div className="flex justify-center md:justify-end mt-8 md:mt-0">
        <div className="flex space-x-3">
          {paymentLogos.map((logo, index) => (
            <a
              key={index}
              href="#"
              className="group focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={logo.label}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 w-auto grayscale group-hover:grayscale-0 group-hover:brightness-110 transition duration-300"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="container mx-auto text-center mt-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} NexGen Ortho. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
