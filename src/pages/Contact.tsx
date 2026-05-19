import { motion } from 'motion/react';
import { Mail, MessageSquare, MapPin, Send, Cpu } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-20">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">Get in Touch</h1>
        <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
          Have questions about a tool or want to list your product? Our team of 
          AI experts is here to help you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="glass p-10 rounded-3xl border border-white/10"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Topic</label>
              <select className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-6 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all appearance-none text-gray-400">
                <option>General Inquiry</option>
                <option>Tool Submission</option>
                <option>Partnership</option>
                <option>Technical Support</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-1">Message</label>
              <textarea 
                rows={6}
                placeholder="How can we help you today?" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
              />
            </div>
            <button className="w-full h-16 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-600/30 group">
              Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>

        {/* Info & Map */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="space-y-12"
        >
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="text-gray-400 leading-relaxed">
              We aim to respond to all inquiries within 24 hours during business days. 
              Our global team is distributed across multiple time zones to provide support.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              {[
                { icon: Mail, label: 'Email Us', value: 'hello@nexusai.com' },
                { icon: MessageSquare, label: 'Live Chat', value: 'Available 24/7' },
                { icon: MapPin, label: 'Visit HQ', value: 'San Francisco, CA' },
              ].map((info) => (
                <div key={info.label} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center text-blue-400 shrink-0">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-white mb-1">{info.label}</h5>
                    <p className="text-gray-500 text-sm">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Abstract Map UI */}
          <div className="relative aspect-video glass rounded-3xl border border-white/10 p-2 overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
            <div className="w-full h-full bg-blue-600/5 rounded-2xl relative flex items-center justify-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full animate-ping absolute" />
              <div className="w-4 h-4 bg-blue-600 rounded-full absolute shadow-2xl shadow-blue-600" />
              <div className="text-xs font-mono text-blue-500/50 absolute top-4 left-4">37.7749° N, 122.4194° W</div>
              <Cpu className="w-32 h-32 text-blue-500/10" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
