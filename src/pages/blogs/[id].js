import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useTranslation } from "../../context/TranslationContext";

const BlogPost = () => {
  const { getTranslatedText } = useTranslation();
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id } = router.query; // Get the blog ID from the URL

  useEffect(() => {
    // Only fetch if ID exists (i.e., when the component is rendered)
    if (!id) return;

    const fetchBlogs = async () => {
      try {
        const token = process.env.NEXT_PUBLIC_BLOG_TOKEN; // Ensure your token is correctly set
        const response = await axios.get(
          "https://nexgenbackend.onrender.com/api/blogs",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data && Array.isArray(response.data)) {
          setBlogs(response.data);
        } else {
          throw new Error("Failed to fetch blogs.");
        }
      } catch (error) {
        setError("Unable to load blogs. Please try again later.");
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [id]);

  useEffect(() => {
    // When blogs are fetched, find the blog with the corresponding ID
    if (blogs.length > 0 && id) {
      const selectedBlog = blogs.find((blog) => blog._id === id);
      if (selectedBlog) {
        setBlog({
          ...selectedBlog,
          name: getTranslatedText(selectedBlog.name),
          text: getTranslatedText(selectedBlog.text),
          category: getTranslatedText(selectedBlog.category),
        });
      }
    }
  }, [blogs, id, getTranslatedText]);

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  const { name, text, image, date, category } = blog;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Blog Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">{name}</h1>
        <div className="text-sm text-gray-500 mb-4">
          <span>{new Date(date).toLocaleDateString()}</span>
          <span className="mx-2">|</span>
          <span>{category}</span>
        </div>
      </div>

      {/* Blog Image */}
      {image && (
        <div className="w-full h-96 flex justify-center items-center mb-8">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Blog Content */}
      <div className="prose prose-lg text-gray-700 mx-auto">
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
};

export default BlogPost;
