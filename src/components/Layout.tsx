import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu, Search, LayoutGrid, CreditCard, Newspaper, Phone, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', href: '/', icon: Cpu },
    { title: 'AI Tools', href: '/tools', icon: LayoutGrid },
    { title: 'Pricing', href: '/pricing', icon: CreditCard },
    { title: 'Blog', href: '/blog', icon: Newspaper },
    { title: 'Contact', href: '/contact', icon: Phone },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "glass py-3" : "bg-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            NexusAI
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-400",
                location.pathname === link.href ? "text-blue-400" : "text-gray-400"
              )}
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link 
            to="/auth" 
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <Link 
            to="/auth" 
            className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-darker border-t border-white/5 py-6 px-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-xl transition-colors",
                    location.pathname === link.href ? "bg-blue-600/10 text-blue-400" : "text-gray-400 hover:bg-white/5"
                  )}
                >
                  <link.icon size={20} />
                  <span className="font-medium">{link.title}</span>
                </Link>
              ))}
              <div className="h-px bg-white/5 my-2" />
              <Link 
                to="/auth"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 text-gray-400 hover:text-white"
              >
                <User size={20} />
                <span className="font-medium">Sign In</span>
              </Link>
              <Link 
                to="/auth"
                onClick={() => setIsOpen(false)}
                className="p-4 rounded-xl bg-blue-600 text-center font-bold"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Cpu className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-display font-bold text-white">NexusAI</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Empowering individuals and businesses with the most curated directory of AI tools 
              to boost productivity and creativity in the era of intelligence.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'YouTube', 'GitHub'].map(social => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-blue-400 hover:scale-110 transition-all"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 rounded-sm bg-current opacity-20" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Platform</h4>
            <ul className="space-y-4">
              {['Features', 'AI Tools', 'Pricing', 'API Docs'].map(item => (
                <li key={item}>
                  <Link to="#" className="text-gray-400 hover:text-white transition-colors text-sm">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Stay Updated</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-600/20">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 NexusAI Directory. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link to="#" className="text-gray-500 hover:text-white text-xs">Privacy Policy</Link>
            <Link to="#" className="text-gray-500 hover:text-white text-xs">Terms of Service</Link>
            <Link to="#" className="text-gray-500 hover:text-white text-xs">Cookie Policy</Link>
          </div>
        </div>
      </div>
      
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 blur-[80px] -z-10 rounded-full" />
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#030712] text-foreground flex flex-col">
      <div className="fixed inset-0 bg-grid -z-10 opacity-30 pointer-events-none" />
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
