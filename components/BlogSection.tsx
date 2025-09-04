
import React from 'react';

const BlogPostCard: React.FC<{ imgSrc: string; title: string; snippet: string }> = ({ imgSrc, title, snippet }) => (
  <div className="bg-blue-900/20 rounded-lg overflow-hidden group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#0077ff]/20">
    <img src={imgSrc} alt={title} className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity" loading="lazy" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{snippet}</p>
      <a href="#" className="font-semibold text-[#0077ff] hover:text-blue-400 transition-colors">
        Read More &rarr;
      </a>
    </div>
  </div>
);

const BlogSection: React.FC = () => {
  const posts = [
    {
      imgSrc: "https://picsum.photos/400/300?random=3",
      title: "The Future of AI in Business",
      snippet: "Discover how artificial intelligence is reshaping industries and what it means for your business.",
    },
    {
      imgSrc: "https://picsum.photos/400/300?random=4",
      title: "Migrating to the Cloud: A 5-Step Guide",
      snippet: "A practical guide to ensure a smooth and successful transition to cloud infrastructure.",
    },
    {
      imgSrc: "https://picsum.photos/400/300?random=5",
      title: "Cybersecurity Trends to Watch in 2025",
      snippet: "Stay ahead of threats with our overview of the most important cybersecurity trends.",
    },
  ];

  return (
    <section id="blog" className="bg-[#081c30] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Latest Updates</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Insights, news, and updates from the world of technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {posts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
