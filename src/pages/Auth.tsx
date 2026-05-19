import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, User, Github, Chrome, ArrowRight, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 relative">
      <div className="max-w-md w-full relative z-10">
        <motion.div
          layout
          className="glass p-10 rounded-3xl border border-white/10 shadow-2xl shadow-blue-500/5"
        >
          <div className="text-center mb-10">
            <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center transition-transform group-hover:scale-110">
                <Cpu className="text-white w-7 h-7" />
              </div>
            </Link>
            <h2 className="text-3xl font-display font-bold mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-gray-500 text-sm">
              {isLogin ? 'Enter your credentials to access your account' : 'Join our community of AI enthusiasts today'}
            </p>
          </div>

          <form className="space-y-4 mb-8">
            <AnimatePresence mode="popLayout">
              {!isLogin && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="space-y-2 overflow-hidden"
                >
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full h-14 bg-white/5 border border-white/10 rounded-xl pl-12 pr-6 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={18} />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full h-14 bg-white/5 border border-white/10 rounded-xl pl-12 pr-6 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm"
              />
            </div>
            
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={18} />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full h-14 bg-white/5 border border-white/10 rounded-xl pl-12 pr-6 outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-sm"
              />
            </div>

            {isLogin && (
              <div className="text-right">
                <button type="button" className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors">
                  Forgot Password?
                </button>
              </div>
            )}

            <button className="w-full h-14 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-600/20 active:scale-95">
              {isLogin ? 'Sign In' : 'Create Account'} <ArrowRight size={18} />
            </button>
          </form>

          <div className="relative mb-8 text-center">
            <div className="absolute inset-y-1/2 left-0 right-0 h-px bg-white/5" />
            <span className="relative z-10 px-4 bg-[#111827] text-[10px] font-black uppercase tracking-widest text-gray-600">
              Or continue with
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="h-12 glass border border-white/10 rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
              <Chrome size={18} /> <span className="text-sm font-medium">Google</span>
            </button>
            <button className="h-12 glass border border-white/10 rounded-xl flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
              <Github size={18} /> <span className="text-sm font-medium">GitHub</span>
            </button>
          </div>

          <div className="text-center">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <span className="text-blue-400 font-bold">{isLogin ? 'Sign Up' : 'Sign In'}</span>
            </button>
          </div>
        </motion.div>
      </div>

      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/5 via-transparent to-transparent -z-10" />
    </div>
  );
}
