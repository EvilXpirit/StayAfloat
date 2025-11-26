import React, { useState, useEffect } from 'react';
import { Menu, X, Anchor } from 'lucide-react';
import { NAV_LINKS } from '../../constants';
import { motion, AnimatePresence } from 'framer-motion';
import Floatyicon from '../assets/floatyicon.png';

interface NavbarProps {
  currentView: 'home' | 'privacy';
  onNavigate: (view: 'home' | 'privacy', targetSection?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    onNavigate('home', href);
  };

  const navigateHome = () => {
    setIsOpen(false);
    onNavigate('home');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={navigateHome}
        >
          <div className="drop-shadow-lg">
            <img 
              src={Floatyicon} 
              alt="logo" 
              className="w-12 h-12 object-contain"
            />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-600">
            StayAfloat
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-slate-600 hover:text-primary-600 font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={(e) => handleLinkClick(e, '#download')}
            className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
          >
            Get App
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-700 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col p-6 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-lg font-medium text-slate-700 py-2 border-b border-slate-100"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#download"
                onClick={(e) => handleLinkClick(e, '#download')}
                className="bg-primary-600 text-white text-center py-3 rounded-xl font-bold shadow-lg shadow-primary-600/20 mt-2"
              >
                Download Free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;