import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useTranslation } from "../../context/TranslationContext";
import DOMPurify from "dompurify";
import Head from "next/head";

const BlogPost = () => {
  const { getTranslatedText } = useTranslation();
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;

    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const token = process.env.NEXT_PUBLIC_BLOG_TOKEN;
        const response = await axios.get(
          "https://nexgen-068ea958c43a.herokuapp.com/api/blogs",
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
          throw new Error("Invalid response format");
        }
      } catch (error) {
        setError(
          error.response?.data?.message || 
          "Unable to load blog post. Please try again later."
        );
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [id]);

  useEffect(() => {
    if (blogs.length > 0 && id) {
      const selectedBlog = blogs.find((blog) => blog._id === id);
      if (selectedBlog) {
        setBlog({
          ...selectedBlog,
          name: getTranslatedText(selectedBlog.name),
          text: getTranslatedText(selectedBlog.text),
          category: getTranslatedText(selectedBlog.category),
        });
      } else {
        setError("Blog post not found");
        router.push("/blog");
      }
    }
  }, [blogs, id, getTranslatedText, router]);

  const sanitizeHTML = (html) => {
    return {
      __html: DOMPurify.sanitize(html, {
        ALLOWED_TAGS: [
          'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'br', 'ul', 'ol', 
          'li', 'strong', 'em', 'a', 'img', 'blockquote', 'pre', 'code',
          'div', 'span', 'table', 'thead', 'tbody', 'tr', 'th', 'td'
        ],
        ALLOWED_ATTR: [
          'href', 'src', 'alt', 'class', 'target', 'style',
          'width', 'height', 'align', 'title', 'border'
        ],
      }),
    };
  };

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-32 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-24"></div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>

        <div className="flex flex-col justify-center items-center min-h-screen">
          <p className="text-xl text-red-500 mb-4">{error}</p>
          <button 
            onClick={() => router.push("/blog")}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Return to Blog List
          </button>
        </div>
      </>
    );
  }

  if (!blog) {
    return (
      <>
        <div className="flex justify-center items-center min-h-screen">
          <p className="text-xl">Blog post not found</p>
        </div>
      </>
    );
  }

  const { name, text, image, date, category } = blog;

  return (
    <>
      <Head>
        <title>{name} | Your Blog Name</title>
        <meta name="description" content={text.substring(0, 160)} />
        <style>{`
          .blog-content {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 14px;
            line-height: 1.6;
            color: #333;
          }
          .blog-content h1, .blog-content h2, .blog-content h3, 
          .blog-content h4, .blog-content h5, .blog-content h6 {
            margin: 1.5em 0 0.5em;
            font-weight: bold;
          }
          .blog-content h1 { font-size: 2em; }
          .blog-content h2 { font-size: 1.75em; }
          .blog-content h3 { font-size: 1.5em; }
          .blog-content p { margin: 1em 0; }
          .blog-content ul, .blog-content ol { 
            margin: 1em 0;
            padding-left: 2em;
          }
          .blog-content li { margin: 0.5em 0; }
          .blog-content blockquote {
            margin: 1em 0;
            padding: 0.5em 1em;
            border-left: 4px solid #e5e7eb;
            background-color: #f9fafb;
          }
          .blog-content img {
            max-width: 100%;
            height: auto;
            margin: 1em 0;
          }
          .blog-content table {
            border-collapse: collapse;
            width: 100%;
            margin: 1em 0;
          }
          .blog-content th, .blog-content td {
            border: 1px solid #e5e7eb;
            padding: 0.5em;
          }
          .blog-content pre {
            background-color: #f3f4f6;
            padding: 1em;
            border-radius: 0.375rem;
            overflow-x: auto;
          }
        `}</style>
      </Head>

      
      <article className="max-w-4xl mx-auto py-12 px-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{name}</h1>
          <div className="text-sm text-gray-500 mb-4">
            <time dateTime={new Date(date).toISOString()}>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span className="mx-2">•</span>
            <span>{category}</span>
          </div>
        </header>

        {image && (
          <figure className="w-full h-96 mb-8">
            <img
              src={image}
              alt={`Cover image for ${name}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
              loading="eager"
            />
          </figure>
        )}

        <div className="blog-content">
          <div dangerouslySetInnerHTML={sanitizeHTML(text)} />
        </div>

        <nav className="mt-12 flex justify-between">
          <button
            onClick={() => router.push("/blogs")}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to Blog
          </button>
        </nav>
      </article>
    </>
  );
};

export default BlogPost;
