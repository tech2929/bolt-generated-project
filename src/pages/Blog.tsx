import React from 'react';

const blogPosts = [
  {
    title: 'How to Grow Your Field Service Business in 2025',
    excerpt: 'Learn the latest strategies and technologies that are helping service businesses scale efficiently.',
    author: 'Sarah Johnson',
    date: 'March 15, 2025',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Business Growth'
  },
  {
    title: 'The Ultimate Guide to Service Business Automation',
    excerpt: 'Discover how automation can streamline your operations and boost productivity.',
    author: 'Michael Chen',
    date: 'March 10, 2025',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Technology'
  },
  {
    title: 'Customer Experience Trends in Field Services',
    excerpt: 'Stay ahead of the curve with these customer experience trends shaping the industry.',
    author: 'Emily Rodriguez',
    date: 'March 5, 2025',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Customer Service'
  }
];

const Blog = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Latest Insights & Resources
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Expert advice and tips to help your service business thrive
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                className="w-full h-48 object-cover"
                src={post.image}
                alt={post.title}
              />
              <div className="p-6">
                <div className="text-sm font-medium text-blue-600 mb-1">
                  {post.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {post.author}
                    </p>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            View all articles
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
