import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Account for header
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-28 pb-32 md:pt-32 md:pb-40">
      {/* Background Image & Effects */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?q=80&w=2071&auto=format&fit=crop" 
          alt="Cosmic Spiritual Background with Zodiac Elements" 
          className="w-full h-full object-cover object-center opacity-60"
        />
        
        {/* Modern Gradient Overlays for Readability & Aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-slate-900/80 to-slate-950/95"></div>
        
        {/* Ambient Gradient Orbs for Cosmic Feel */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-pulse duration-[4000ms]"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
        
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        
        {/* Trust/Badge Element - Glassmorphism with Gradient Border */}
        <div className="inline-flex items-center gap-2 bg-white/5 text-amber-200 px-6 py-2 rounded-full mb-8 border border-white/10 backdrop-blur-md animate-in fade-in zoom-in duration-1000 shadow-[0_0_15px_rgba(251,191,36,0.1)] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <Sparkles size={14} className="text-amber-400 fill-amber-400" />
          <span className="text-xs md:text-sm font-bold tracking-widest uppercase">Vedic Wisdom for Modern Life</span>
        </div>

        {/* Main Heading - Gradient Text */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-300 drop-shadow-2xl tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 pb-2">
          Astro Bibhash Mishra
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-200 font-medium max-w-4xl mx-auto mb-12 leading-relaxed opacity-90 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          Professional Consultant guiding you towards <span className="text-amber-400 font-bold">Clarity</span>, <span className="text-amber-400 font-bold">Prosperity</span>, and <span className="text-amber-400 font-bold">Peace</span>.
        </p>

        {/* CTA Buttons - Medium Minimalist Size */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 w-full sm:w-auto">
          <a 
            href="#booking"
            onClick={(e) => handleScroll(e, '#booking')}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 font-bold py-3.5 px-8 rounded-full shadow-[0_0_25px_-5px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-0.5 hover:shadow-[0_0_35px_-5px_rgba(245,158,11,0.5)] text-base min-w-[180px]"
          >
            <span className="relative z-10">Book Consultation</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            
            {/* Inner Glow */}
            <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          
          <a 
            href="#services"
            onClick={(e) => handleScroll(e, '#services')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/20 hover:border-white/40 font-medium py-3.5 px-8 rounded-full transition-all backdrop-blur-sm text-base min-w-[180px]"
          >
            Explore Services
          </a>
        </div>

        {/* Stats / Social Proof - Minimalist */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 text-white/60 animate-in fade-in duration-1000 delay-500">
          <div className="text-center min-w-[80px]">
             <div className="text-2xl md:text-3xl font-bold text-white mb-1">75k+</div>
             <div className="text-xs uppercase tracking-wider font-medium">Charts Analyzed</div>
          </div>
          <div className="text-center min-w-[80px]">
             <div className="text-2xl md:text-3xl font-bold text-white mb-1">98%</div>
             <div className="text-xs uppercase tracking-wider font-medium">Satisfaction</div>
          </div>
          <div className="text-center min-w-[80px]">
             <div className="text-2xl md:text-3xl font-bold text-white mb-1">24+</div>
             <div className="text-xs uppercase tracking-wider font-medium">Years Exp.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;