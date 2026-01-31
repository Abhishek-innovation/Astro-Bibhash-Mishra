import React, { useState, useEffect } from 'react';
import { Menu, X, Star, ChevronRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScrollListener = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScrollListener);
    return () => window.removeEventListener('scroll', handleScrollListener);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
       return;
    }
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Account for header height + padding
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isMenuOpen 
          ? 'bg-white border-stone-200 shadow-sm py-3' // Solid white when menu is open
          : scrolled 
            ? 'bg-white/95 backdrop-blur-xl border-stone-200/50 py-3 shadow-sm' // High opacity on scroll
            : 'bg-transparent border-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center relative">
          
          {/* Logo Section - Minimalist Premium */}
          <a href="#" onClick={(e) => handleScroll(e, '#')} className="flex items-center gap-3 group relative z-50">
            <div className="relative w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-lg shadow-amber-900/10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105">
                <Star size={18} className="text-amber-400 fill-amber-400" />
            </div>
            
            <div className={`flex flex-col transition-colors duration-300`}>
              <span className={`font-serif text-lg md:text-xl font-bold leading-none tracking-tight ${scrolled || isMenuOpen ? 'text-slate-900' : 'text-slate-100'} drop-shadow-sm group-hover:text-amber-500 transition-colors`}>
                Astro Bibhash
              </span>
            </div>
          </a>

          {/* Desktop Nav - Clean & Interactive */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isCTA = link.label === 'Book Now';
              
              if (isCTA) {
                 return (
                  <a 
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="ml-4 px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-900 rounded-full font-bold text-sm transition-all shadow-lg shadow-amber-500/20 hover:shadow-xl hover:-translate-y-0.5 hover:shadow-amber-500/30 flex items-center gap-2 group"
                  >
                    {link.label}
                  </a>
                 )
              }
              
              return (
                <a 
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={`px-4 py-2 font-medium text-sm tracking-wide transition-all rounded-full hover:bg-white/10 ${
                    scrolled ? 'text-slate-600 hover:text-amber-600' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          {/* Mobile Menu Button - Accessible Target */}
          <button 
            className={`md:hidden p-2 -mr-2 rounded-full transition-colors relative z-50 ${isMenuOpen ? 'text-slate-800 bg-slate-100' : scrolled ? 'text-slate-800' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay - Clean & Minimal */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'
        }`}
        style={{ top: 0, paddingTop: '100px' }}
      >
        <div className="container mx-auto px-6 flex flex-col space-y-2">
           {NAV_LINKS.map((link, index) => {
            const isCTA = link.label === 'Book Now';
            return (
              <a 
                key={link.label}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`flex items-center justify-between p-4 rounded-2xl transition-all active:scale-95 ${
                  isCTA 
                    ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/10 mt-4' 
                    : 'text-slate-600 hover:bg-stone-50'
                }`}
              >
                <span className={`font-serif text-xl ${isCTA ? 'font-bold' : 'font-medium'}`}>{link.label}</span>
                {isCTA ? (
                  <div className="bg-amber-500 rounded-full p-1.5">
                    <ChevronRight size={16} className="text-slate-900" />
                  </div>
                ) : null}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;