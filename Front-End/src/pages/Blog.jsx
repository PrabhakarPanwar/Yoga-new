
import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/Blogs";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  BookOpen,
  Sparkles,
} from "lucide-react";

function Blog() {
  return (
    <div className="min-h-screen bg-[#fdf8f2]">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-5 bg-gradient-to-br from-[#3b2a1a] via-[#68442b] to-[#a76b40] text-white">
        <div className="max-w-5xl mx-auto text-center">

          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full text-sm mb-7">
            <Sparkles size={16} />
            ShubhYogShala Wellness Journal
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Discover the Art of
            <span className="block text-[#f3c89e] mt-2">
              Yoga & Mindfulness
            </span>
          </h1>

          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-8">
            Explore yoga knowledge, wellness inspiration and expert
            insights to help you create a healthier and more balanced life.
          </p>

          <div className="mt-9 flex justify-center">
            <a
              href="#all-blogs"
              className="bg-[#e5a36c] hover:bg-[#f0b985] text-[#3b2a1a] px-8 py-3 rounded-full font-semibold transition"
            >
              Explore Articles
            </a>
          </div>

        </div>
      </section>

      {/* Blog Listing */}
      <section
        id="all-blogs"
        className="max-w-7xl mx-auto px-5 md:px-8 py-20"
      >

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="text-[#c8763a] uppercase tracking-[0.25em] text-xs font-bold mb-3">
            Explore Our Knowledge
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#3b2a1a]">
            Yoga Articles & Insights
          </h2>

          <p className="text-[#8c7968] mt-4 max-w-xl mx-auto leading-7">
            Everything you need to know about yoga, healthy living,
            wellness and personal growth.
          </p>
        </div>

        {/* Article Count */}
        <div className="flex items-center justify-between mb-7">
          <h3 className="text-xl font-semibold text-[#3b2a1a]">
            Latest Articles
          </h3>

          <span className="text-sm text-[#a08061]">
            {blogs.length} Articles
          </span>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#eadccf] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >

              {/* Image */}
              <div className="relative h-56 overflow-hidden">

                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />

                <span className="absolute top-4 left-4 bg-[#fdf8f2] text-[#c8763a] px-4 py-2 rounded-full text-xs font-semibold shadow">
                  {blog.tags[0]}
                </span>

              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1">

                {/* Date and Reading Time */}
                <div className="flex items-center flex-wrap gap-4 text-xs text-[#a89885] mb-4">

                  <span className="flex items-center gap-1">
                    <CalendarDays size={14} />
                    {new Date(blog.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>

                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {blog.readTime}
                  </span>

                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#3b2a1a] leading-snug mb-3">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#806d5c] leading-7 mb-6 flex-1">
                  {blog.excerpt}
                </p>

                {/* Read More */}
                <Link
                  to={`/blog/${blog.slug}`}
                  className="flex items-center justify-between border-t border-[#eee3d8] pt-5 text-[#c8763a] font-semibold text-sm hover:text-[#3b2a1a] transition group"
                >
                  <span className="flex items-center gap-2">
                    Read Full Article
                    <BookOpen size={16} />
                  </span>

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>

              </div>
            </article>
          ))}

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#f1e5d8] py-16 px-5">
        <div className="max-w-4xl mx-auto text-center">

          <p className="text-[#c8763a] uppercase tracking-[0.25em] text-xs font-bold mb-4">
            Begin Your Wellness Journey
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#3b2a1a] mb-5">
            Make Yoga a Part of Your Life
          </h2>

          <p className="text-[#806d5c] leading-7 max-w-xl mx-auto mb-8">
            Discover the beauty of yoga, develop healthy habits and
            experience a more mindful way of living with ShubhYogShala.
          </p>

          <Link
            to="/about"
            className="inline-flex items-center gap-3 bg-[#c8763a] hover:bg-[#a95f2c] text-white px-8 py-3 rounded-full font-semibold transition"
          >
            Know More About Us
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </div>
  );
}

export default Blog;
