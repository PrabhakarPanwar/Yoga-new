
import { useParams, NavLink } from "react-router-dom";
import { blogs } from "../data/Blogs";

function BlogPost() {
  const { slug } = useParams();

  // Find the article from frontend data
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fdf8f2]">
        <p className="text-2xl text-[#3b2a1a] mb-4">
          Blog not found.
        </p>

        <NavLink to="/blog" className="text-[#c8763a] hover:underline">
          ← Back to Blogs
        </NavLink>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-[#fdf8f2] pt-24 pb-16 px-4"
      style={{ fontFamily: "'Georgia', serif" }}
    >
      <div className="max-w-3xl mx-auto">

        {/* Back to Blogs */}
        <NavLink
          to="/blog"
          className="text-[#c8763a] text-sm hover:underline mb-8 inline-block"
        >
          ← Back to Blogs
        </NavLink>

        {/* Cover Image */}
        {blog.coverImage && (
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="w-full h-64 md:h-80 object-cover rounded-2xl mb-8 shadow-lg"
          />
        )}

        {/* Tags */}
        {blog.tags?.length > 0 && (
          <div className="flex gap-2 flex-wrap mb-4">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="text-[10px] bg-[#f5e8d8] text-[#c8763a] px-3 py-1 rounded-full tracking-wide uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Blog Title */}
        <h1 className="text-3xl md:text-4xl font-light text-[#3b2a1a] leading-snug mb-4">
          {blog.title}
        </h1>

        {/* Blog Information */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-[#c8a882] mb-8 pb-8 border-b border-[#e8d5c0]">
          <span>By {blog.author}</span>
          <span>·</span>
          <span>
            {new Date(blog.createdAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <span>·</span>
          <span>{blog.readTime}</span>
        </div>

        {/* Article Content */}
        <div className="text-[#5a3e2b] leading-relaxed text-base space-y-5 font-sans">
          {blog.content.split("\n").map((para, index) => {
            const text = para.trim();

            if (!text) return null;

            // Display Introduction and Conclusion headings
            if (
              text === "Introduction" ||
              text === "Conclusion" ||
              text.startsWith("What ") ||
              text.startsWith("Why ") ||
              text.startsWith("How ") ||
              text.startsWith("Benefits ") ||
              text.startsWith("Popular ") ||
              text.startsWith("Choosing ") ||
              text.startsWith("Finding ") ||
              text.startsWith("Building ") ||
              text.startsWith("Creating ") ||
              text.startsWith("Mental ") ||
              text.startsWith("Physical ") ||
              text.startsWith("Professional ") ||
              text.startsWith("Clear ") ||
              text.startsWith("Personal ") ||
              text.startsWith("Tips ") ||
              /^\d+\.\s/.test(text)
            ) {
              return (
                <h2
                  key={index}
                  className="text-xl md:text-2xl font-semibold text-[#3b2a1a] pt-4"
                >
                  {text}
                </h2>
              );
            }

            return <p key={index}>{text}</p>;
          })}
        </div>

        {/* Author Section */}
        <div className="mt-16 pt-8 border-t border-[#e8d5c0] text-center">
          <p className="text-[#c8763a] text-xs tracking-[0.3em] uppercase mb-2">
            Written by
          </p>

          <p className="text-[#3b2a1a] font-semibold">
            {blog.author}
          </p>

          <p className="text-[#a89885] text-xs mt-1">
            Founder · ShubhYogShala · M.Sc. Yoga Science
          </p>

          <NavLink
            to="/blog"
            className="inline-block mt-6 border border-[#c8763a] text-[#c8763a] px-6 py-2 text-xs tracking-widest uppercase hover:bg-[#c8763a] hover:text-white transition"
          >
            ← All Blogs
          </NavLink>
        </div>

      </div>
    </div>
  );
}

export default BlogPost;
