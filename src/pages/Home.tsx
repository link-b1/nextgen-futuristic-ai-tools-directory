import { motion } from 'motion/react';
import { Search, ArrowRight, Zap, TrendingUp, Star, Users, MessageSquare, Check, Sparkles, LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AI_TOOLS, TESTIMONIALS } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Home() {
  return (
    <div className="space-y-32 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-bold tracking-widest uppercase text-blue-400">Discover the Future</span>
          </motion.div>
          
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-display font-bold tracking-tight mb-8 leading-tight"
          >
            Discover The Best <br />
            <span className="gradient-text">AI Tools in 2026</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Navigate the rapidly evolving AI landscape with our premium directory. 
            Curated, tested, and updated daily for maximum productivity.
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:row items-center justify-center gap-4 max-w-2xl mx-auto"
          >
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-blue-500 transition-colors">
                <Search size={20} />
              </div>
              <input 
                type="text" 
                placeholder="Search for AI tools (e.g. video editor, coding assistant)..." 
                className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl pl-12 pr-6 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 glass transition-all"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12"
          >
            <Link to="/tools" className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-600/30">
              Explore Tools
            </Link>
            <Link to="/auth" className="px-8 py-4 rounded-xl glass hover:bg-white/5 text-white font-bold transition-all border border-white/10">
              Get Started
            </Link>
          </motion.div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-600/10 blur-[100px] animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
      </section>

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:row items-center justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Featured AI Tools</h2>
            <p className="text-gray-400">Our hand-picked selection of the most innovative AI platforms.</p>
          </div>
          <Link to="/tools" className="group flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors">
            View All Tools <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {AI_TOOLS.map((tool) => (
            <motion.div
              key={tool.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="glass rounded-3xl p-6 border border-white/10 hover:border-blue-500/50 transition-all group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl glass p-2 flex items-center justify-center overflow-hidden">
                  <img src={tool.imageUrl} alt={tool.name} className="w-full h-full object-contain" />
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                    {tool.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-bold text-purple-400 uppercase tracking-widest">
                    {tool.pricing}
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{tool.name}</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2">
                {tool.description}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-bold text-white">{tool.rating}</span>
                </div>
                <button className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="bg-white/5 py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Explore by Category</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Different industries, specialized AI solutions. Find exactly what you need.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Writing AI', icon: Zap, color: 'from-blue-500 to-cyan-400' },
              { name: 'Images', icon: Star, color: 'from-purple-500 to-pink-400' },
              { name: 'Video', icon: TrendingUp, color: 'from-orange-500 to-red-400' },
              { name: 'Coding', icon: Sparkles, color: 'from-green-500 to-emerald-400' },
              { name: 'Marketing', icon: Users, color: 'from-yellow-500 to-amber-400' },
              { name: 'Productivity', icon: MessageSquare, color: 'from-indigo-500 to-blue-400' },
            ].map((cat) => (
              <motion.div
                key={cat.name}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-3xl p-8 flex flex-col items-center justify-center text-center group cursor-pointer border border-white/10 hover:border-white/30 transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <cat.icon className="text-white w-7 h-7" />
                </div>
                <h4 className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors">{cat.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'AI Tools Listed', value: '500+', icon: LayoutGrid },
            { label: 'Active Users', value: '50k+', icon: Users },
            { label: 'Daily Updates', value: '24', icon: Zap },
            { label: 'Average Rating', value: '4.9/5', icon: Star },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 glass rounded-3xl border border-white/5"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center mx-auto mb-6 text-blue-400">
                <stat.icon size={24} />
              </div>
              <div className="text-3xl md:text-4xl font-display font-black text-white mb-2">{stat.value}</div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trending Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Trending Right Now</h2>
          <p className="text-gray-400 max-w-xl mx-auto">The tools gaining the most traction in the AI community this week.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {AI_TOOLS.filter(t => t.trendingRank).map((tool, idx) => (
            <motion.div
              key={tool.id}
              initial={{ x: idx % 2 === 0 ? -20 : 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 p-6 glass rounded-3xl border border-white/10 group hover:bg-white/5 transition-all"
            >
              <div className="text-4xl font-display font-black text-white/10 group-hover:text-blue-500/20 transition-colors w-12 text-center">
                0{tool.trendingRank}
              </div>
              <div className="w-20 h-20 rounded-2xl glass p-3 flex items-center justify-center shrink-0">
                <img src={tool.imageUrl} alt={tool.name} className="w-full h-full object-contain" />
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-bold mb-1">{tool.name}</h4>
                <p className="text-gray-500 text-sm mb-2">{tool.category} Assistant</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-xs text-green-400 font-bold">
                    <TrendingUp size={14} /> +42% growth
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Users size={14} /> 1.2M users
                  </div>
                </div>
              </div>
              <Link to="/tools" className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all group-hover:scale-110">
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-transparent to-blue-600/5 py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Loved by Innovators</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Join over 50,000 users who find their competitive edge with us.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t) => (
              <motion.div
                key={t.id}
                whileHover={{ y: -5 }}
                className="glass p-10 rounded-3xl border border-white/10 relative"
              >
                <MessageSquare className="absolute top-10 right-10 w-12 h-12 text-white/5" />
                <p className="text-xl text-gray-300 italic mb-8 relative z-10">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatarUrl} alt={t.author} className="w-14 h-14 rounded-2xl object-cover" />
                  <div>
                    <h5 className="font-bold text-white">{t.author}</h5>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center">Frequently Asked</h2>
        <div className="space-y-4">
          {[
            { q: 'How often is the directory updated?', a: 'We update our tool listings daily. Our team carefully reviews every submission to ensure quality and relevance.' },
            { q: 'Are the tools in this directory free?', a: 'The directory contains a mix of free, freemium, and paid tools. You can filter them by pricing in the directory section.' },
            { q: 'Can I submit my own AI tool?', a: 'Absolutely! Click on "Get Started" to create an account and submit your tool for review by our editorial team.' },
          ].map((faq, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl border border-white/5 hover:border-white/10 cursor-pointer group"
            >
              <h4 className="font-bold text-lg mb-2 flex items-center justify-between">
                {faq.q}
                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
              </h4>
              <p className="text-gray-500 text-sm">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative gradient-border rounded-3xl overflow-hidden p-12 md:p-24 text-center">
          <div className="absolute inset-0 bg-gray-950 -z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent -z-10" />
          
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to boost your workflow?</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Join thousands of creators, developers, and businesses using NexusAI 
            to find the perfect tools for the next generation of work.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/auth" className="px-10 py-5 rounded-xl bg-white text-gray-950 font-black hover:bg-gray-200 transition-all shadow-xl shadow-white/10">
              Get Started Now
            </Link>
            <Link to="/tools" className="px-10 py-5 rounded-xl glass hover:bg-white/5 text-white font-bold border border-white/10 transition-all">
              Browse Tools
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
