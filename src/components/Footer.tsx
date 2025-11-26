import React from 'react';
import { Anchor, Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import Floatyicon from '../assets/floatyicon.png';

interface FooterProps {
  onNavigate: (view: 'home' | 'privacy', targetSection?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => onNavigate('home')}>
                <div className="drop-shadow-lg">
                  <img 
                    src={Floatyicon} 
                    alt="logo" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <span className="text-xl font-bold text-slate-800">StayAfloat</span>
             </div>
             <p className="text-slate-500 max-w-sm mb-6">
                Your daily wellness companion. Making mindfulness accessible, engaging, and part of your lifestyle.
             </p>
             {/* Social Links with actual URLs */}
             <div className="flex gap-4">
                <a 
                  href="https://instagram.com/stayAfloat.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-primary-500 hover:shadow-md transition-all"
                >
                    <Instagram className="w-5 h-5" />
                </a>

                <a 
                  href="" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-primary-500 hover:shadow-md transition-all"
                >
                    <Twitter className="w-5 h-5" />
                </a>

                <a 
                  href="mailto:adsharma122@gmail.com"
                  className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-primary-500 hover:shadow-md transition-all"
                >
                    <Mail className="w-5 h-5" />
                </a>
             </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-slate-500">
                <li><button onClick={() => onNavigate('home', '#about')} className="hover:text-primary-600 transition-colors text-left">About Us</button></li>
                <li><button className="hover:text-primary-600 transition-colors text-left">Careers</button></li>
                <li><button className="hover:text-primary-600 transition-colors text-left">Press Kit</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Support</h4>
            <ul className="space-y-4 text-slate-500">
                <li><button className="hover:text-primary-600 transition-colors text-left">Help Center</button></li>
                <li><button onClick={() => onNavigate('privacy')} className="hover:text-primary-600 transition-colors text-left">Privacy Policy</button></li>
                <li><button className="hover:text-primary-600 transition-colors text-left">Terms of Service</button></li>
                <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4" /> contact@stayafloat.app
                </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} StayAfloat Wellness Inc. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <button onClick={() => onNavigate('privacy')} className="hover:text-primary-500">Privacy</button>
                <button className="hover:text-primary-500">Terms</button>
                <button className="hover:text-primary-500">Cookies</button>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;