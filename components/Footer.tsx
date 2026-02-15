import React from 'react';
import { Instagram, Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white">Astro Bibhash Mishra</h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Providing professional Vedic astrology and Vastu consultations to help you navigate life's journey with wisdom and clarity.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Contact Us</h4>
            <div className="flex flex-col space-y-3 text-sm">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors">
                <Phone size={18} className="text-amber-500" /> {CONTACT_INFO.displayPhone}
              </a>
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Hello`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors"
              >
                <MessageCircle size={18} className="text-amber-500" /> WhatsApp Support
              </a>
              <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors">
                <Instagram size={18} className="text-amber-500" /> {CONTACT_INFO.instagram}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <ul className="text-sm space-y-3">
              <li><a href="#about" onClick={(e) => handleScroll(e, '#about')} className="text-slate-400 hover:text-amber-400 transition-colors">About Me</a></li>
              <li><a href="#services" onClick={(e) => handleScroll(e, '#services')} className="text-slate-400 hover:text-amber-400 transition-colors">Services & Pricing</a></li>
              <li><a href="#booking" onClick={(e) => handleScroll(e, '#booking')} className="text-slate-400 hover:text-amber-400 transition-colors">Book Consultation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p className="mb-2">
            © 2026 Astro Bibhash Mishra. All rights reserved. | Developed by <a href="https://clickaarambh.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-amber-400 transition-colors">Click Aarambh</a>
          </p>
          <p>
            Disclaimer: Astrology is a guidance tool. Predictions are based on planetary positions and individual interpretation. Results may vary.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;