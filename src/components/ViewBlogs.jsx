import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const Blogs = () => {
  const dropdownData = [
    
    { title: "Loans", link: "loan-section-home" },
    // { title: "MamaMart", link: "mart-home" },
    { title: "About Us", link: "/aboutus" },
    { title: "Contact Us", link: "contact-us" },
  ];
  const blogPosts = [
    {
      id: 1,
      title: "How to Improve Your Credit Score in 2023",
      excerpt: "Your credit score is a crucial factor in your financial health. Learn proven strategies to boost your score.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "May 15, 2023",
      author: "Priya Sharma",
      category: "Credit"
    },
    {
      id: 2,
      title: "5 Smart Ways to Use Your Personal Loan",
      excerpt: "Personal loans offer flexibility, but how you use them matters. Here are smart strategies to maximize benefits.",
      image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "April 28, 2023",
      author: "Rahul Kapoor",
      category: "Personal Finance"
    },
    {
      id: 3,
      title: "Understanding Home Loan Interest Rates",
      excerpt: "Home loan interest rates can significantly impact your finances. Learn how to navigate this complex landscape.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "April 15, 2023",
      author: "Ananya Singh",
      category: "Home Loans"
    },
    {
      id: 4,
      title: "Emergency Fund: Why You Need One and How to Build It",
      excerpt: "An emergency fund is your financial safety net. Discover how to build one that protects you from life's uncertainties.",
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "March 29, 2023",
      author: "Vikram Mehta",
      category: "Savings"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar
        dropdownData={dropdownData}
        COLOR="#fff"
        Hover="home"
        TXTCOLOR="#"
      />
      
      <div className="container mx-auto pt-26 pb-20 px-4 pt-[5rem]">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#163312] mb-4">FinsBee Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Expert insights on personal finance, loans, credit, and financial wellness to help you make informed decisions.</p>
        </div>
        
        <div className="flex flex-wrap mb-10">
          <button className="bg-[#ffc73c] text-white px-4 py-2 rounded-md mr-2 mb-2">All</button>
          <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md mr-2 mb-2">Personal Finance</button>
          <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md mr-2 mb-2">Credit</button>
          <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md mr-2 mb-2">Home Loans</button>
          <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md mr-2 mb-2">Business</button>
          <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md mr-2 mb-2">Savings</button>
          <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md mr-2 mb-2">Shoppings</button>

        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-[#f4f1c8] text-[#ffc73c] text-xs px-3 py-1 rounded-full">{post.category}</span>
                  <span className="text-gray-500 text-sm ml-auto">{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <button className="text-[#ffc73c] font-medium hover:underline">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <button className="bg-[#ffc73c] text-white px-8 py-3 rounded-md hover:bg-[#ffc73c] transition-colors">Load More Articles</button>
        </div>
      </div>
      
      <Footer COLOR="#ffc73c" />
    </div>
  );
};

export default Blogs;