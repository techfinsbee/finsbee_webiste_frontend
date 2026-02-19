"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const BASE_URL = "https://admin.finsbee.com";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/articles?populate=*`);
        const data = await res.json();
        setBlogs(data.data.slice(0, 9));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4">
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our Latest Insights
        </h1>
        <p className="text-gray-500 mt-4">
          Explore expert perspectives and strategies from our team.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px]">
          
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="w-[318px] h-[405px] bg-white rounded-3xl border border-gray-200 shadow-sm p-5 flex flex-col hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              
              {/* Image */}
              <img
                src={`${BASE_URL}${blog.cover}`}
                alt={blog.title}
                className="w-full h-[180px] object-cover rounded-2xl"
              />

              {/* Category */}
              <div className="mt-4">
                <span className="inline-block px-4 py-1 text-sm rounded-lg border border-[#A290F7] text-[#A290F7]">
                  {blog.category?.name}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-4 text-[18px] font-semibold text-gray-800 leading-snug">
                {blog.title}
              </h3>

              <div className="flex-grow"></div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <Link href={`/blog1/${blog.slug}`}>
                  <span className="text-[13px] font-medium hover:text-black transition">
                    Continue Reading →
                  </span>
                </Link>

                <div className="flex items-center gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#3866F6] flex items-center justify-center text-white font-semibold">
                    {blog.author?.name?.charAt(0)}
                  </div>

                  <div className="text-sm text-gray-500">
                    <p className="font-medium text-gray-700">
                      {blog.author?.name}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
