import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Star, ArrowRight, ExternalLink } from 'lucide-react';
import { AI_TOOLS } from '../constants';

export default function Tools() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Writing', 'Image', 'Video', 'Code', 'Productivity', 'Marketing'];

  const filteredTools = AI_TOOLS.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase()) || 
                          tool.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">AI Tools Directory</h1>
        <p className="text-gray-400">Discover and compare over 500+ AI tools across multiple categories.</p>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col lg:flex-row gap-6 mb-12">
        <div className="relative flex-grow group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="Search by name, feature or category..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 glass transition-all"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-2xl whitespace-nowrap text-sm font-bold transition-all border ${
                activeCategory === cat 
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/20" 
                  : "glass text-gray-400 border-white/10 hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredTools.map((tool) => (
            <motion.div
              layout
              key={tool.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              whileHover={{ y: -5 }}
              className="glass rounded-3xl p-6 border border-white/10 hover:border-blue-500/50 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="text-gray-500 hover:text-white cursor-pointer" size={18} />
              </div>
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl glass p-2 flex items-center justify-center overflow-hidden">
                  <img src={tool.imageUrl} alt={tool.name} className="w-full h-full object-contain" />
                </div>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] font-black text-blue-400 uppercase tracking-widest">
                  {tool.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-black text-gray-400 uppercase tracking-widest">
                  {tool.pricing}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{tool.name}</h3>
              <p className="text-gray-400 text-sm mb-8 leading-relaxed line-clamp-3">
                {tool.description}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-auto">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-bold text-white">{tool.rating}</span>
                </div>
                <button className="px-4 py-2 rounded-xl bg-white/5 group-hover:bg-blue-600 text-white text-xs font-bold transition-all">
                  Visit Site
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredTools.length === 0 && (
        <div className="text-center py-32 glass rounded-3xl border border-white/10">
          <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
            <Filter className="text-gray-600" size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-2">No tools found</h3>
          <p className="text-gray-500">Try adjusting your filters or search terms.</p>
        </div>
      )}
    </div>
  );
}
