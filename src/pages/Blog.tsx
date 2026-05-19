import { motion } from 'motion/react';
import { Clock, ArrowRight, User } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-20">
      <div className="flex flex-col md:row items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">AI Insights</h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Latest news, guides, and strategic insights from the world of Artificial Intelligence. 
            Stay ahead of the curve.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 rounded-xl glass border border-white/10 text-sm font-bold hover:bg-white/5 transition-all">Latest</button>
          <button className="px-6 py-3 rounded-xl glass border border-white/10 text-sm font-bold hover:bg-white/5 transition-all">Popular</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {BLOG_POSTS.map((post, idx) => (
          <motion.div
            key={post.id}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-6 glass border border-white/10 shadow-2xl">
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600/90 backdrop-blur-md rounded-lg text-[10px] font-bold uppercase tracking-widest text-white">
                {post.category}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-6 text-xs text-gray-500 font-medium">
                <span className="flex items-center gap-1.5"><Clock size={14} /> {post.date}</span>
                <span className="flex items-center gap-1.5"><User size={14} /> AI Editorial</span>
              </div>
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                {post.excerpt}
              </p>
              <button className="flex items-center gap-2 text-sm font-bold text-blue-400 group-hover:gap-3 transition-all pt-4">
                Read Article <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Newsletter */}
      <section className="glass p-12 md:p-20 rounded-3xl border border-white/5 relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-purple-600/10 -z-10" />
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Stay informed.</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Get the most important AI tool updates and strategic insights 
          delivered to your inbox once a week.
        </p>
        <div className="flex flex-col md:row items-center justify-center gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
          />
          <button className="w-full md:w-auto h-14 px-8 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-600/30">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}
