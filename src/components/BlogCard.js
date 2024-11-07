import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ blog }) => {
  return (
    <Link href={`/blogs/${blog._id}`} className="block rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl">
      <div className="w-full h-48 relative">
        <Image src={blog.image} alt={blog.name} layout="fill" objectFit="cover" className="w-full h-full" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{blog.name}</h2>
        <p className="text-gray-500">{new Date(blog.date).toLocaleDateString()}</p>
        <p className="text-gray-700 mt-2 line-clamp-3">{blog.text}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
