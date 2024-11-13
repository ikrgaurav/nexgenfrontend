import { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "../../components/BlogCard";
import { useTranslation } from '../../context/TranslationContext';

const BlogPage = () => {
  const [originalBlogs, setOriginalBlogs] = useState([]); // Store original data fetched from backend
  const [translatedBlogs, setTranslatedBlogs] = useState([]); // Store translated data for rendering
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;
  const { getTranslatedText, language } = useTranslation(); // Destructure getTranslatedText and language

  // Fetch blogs from backend on initial render
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const token = process.env.NEXT_PUBLIC_BLOG_TOKEN; // Replace with actual token

        const response = await axios.get("https://nexgenbackend.onrender.com/api/blogs", {
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!Array.isArray(response.data)) {
          throw new Error("Data is not in the expected format");
        }

        const sortedBlogs = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setOriginalBlogs(sortedBlogs); // Store original data
      } catch (error) {
        setError("Unable to load blogs. Please try again later.");
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Translate blogs whenever language changes
  useEffect(() => {
    const translateBlogs = async () => {
      const translated = await Promise.all(
        originalBlogs.map(async (blog) => {
          const translatedTitle = await getTranslatedText(blog.title);
          const translatedContent = await getTranslatedText(blog.content);

          return {
            ...blog,
            title: translatedTitle,    // Replace title with translated title
            content: translatedContent, // Replace content with translated content
          };
        })
      );
      setTranslatedBlogs(translated);
    };

    translateBlogs();
  }, [originalBlogs, language, getTranslatedText]); // Run this effect whenever language or originalBlogs changes

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = translatedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(translatedBlogs.length / blogsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Blogs</h1>
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentBlogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      )}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
