import React from 'react';

interface BlogPost {
  title: string;
  excerpt: string;
  imageUrl: string;
  link: string;
  category: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    title: '5 Signs Your Laptop Needs a Professional Check-Up',
    excerpt: 'Is your computer slowing down? Before you consider buying a new one, read about these common warning signs that a simple service can fix.',
    imageUrl: 'https://images.unsplash.com/photo-1588373111535-2a07f1a3a42c?q=80&w=2070&auto=format&fit=crop',
    link: '#',
    category: 'Maintenance',
    date: 'July 15, 2025',
  },
  {
    title: 'SSD vs. HDD: Is the Upgrade Worth It for You?',
    excerpt: 'We break down the differences in speed, price, and durability to help you decide if upgrading to a Solid State Drive is the right move.',
    imageUrl: 'https://images.unsplash.com/photo-1624705001865-680f9345d3e2?q=80&w=2070&auto=format&fit=crop',
    link: '#',
    category: 'Hardware',
    date: 'July 10, 2025',
  },
  {
    title: 'How to Protect Your PC from Viruses and Malware in 2025',
    excerpt: 'Cybersecurity threats are always evolving. Learn about the latest best practices to keep your data safe and your system secure.',
    imageUrl: 'https://images.unsplash.com/photo-1562813532-3352f7f9482a?q=80&w=2070&auto=format&fit=crop',
    link: '#',
    category: 'Security',
    date: 'July 05, 2025',
  },
];

const BlogPostCard: React.FC<BlogPost> = ({ title, excerpt, imageUrl, link, category, date }) => (
    <a 
        href={link} 
        className="glass-card block overflow-hidden group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--accent-violet)]/30 flex flex-col h-full"
    >
        <div className="h-48 overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" loading="lazy" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <div className="flex-grow">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold bg-[var(--accent-violet)]/30 text-[var(--accent-violet)] px-2 py-1 rounded-full">{category}</span>
                    <span className="text-xs text-gray-400">{date}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 mt-3 group-hover:text-[var(--accent-cyan)] transition-colors">{title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{excerpt}</p>
            </div>
            <div className="mt-auto pt-4">
                <span className="font-semibold text-[var(--accent-cyan)] group-hover:text-white transition-colors inline-flex items-center">
                    Read More 
                    <span className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
                </span>
            </div>
        </div>
    </a>
);


const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="bg-[var(--bg-dark-navy)]/70 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">From Our Blog</h2>
          <p className="text-lg text-gray-400">
            Stay updated with the latest tech tips, news, and guides from our experts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;