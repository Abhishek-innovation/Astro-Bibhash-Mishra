import React from 'react';
import { SERVICES } from '../constants';
import { Clock, IndianRupee, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-3">Holistic Guidance</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            Select the perfect consultation for your needs. We offer precise, time-bound voice recordings and interactive live sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl hover:shadow-stone-200/50 transition-all duration-300 border border-stone-100 flex flex-col h-full hover:-translate-y-1">
              
              <div className="flex justify-between items-start mb-6">
                 <div className="bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                    {service.duration}
                 </div>
              </div>

              <h4 className="font-serif text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                {service.title}
              </h4>
              
              <p className="text-slate-600 mb-8 leading-relaxed flex-1 text-base">
                {service.description}
              </p>
              
              <div className="mt-auto pt-6 border-t border-stone-100 flex items-center justify-between">
                <div className="flex flex-col">
                   <span className="text-xs text-slate-500 font-semibold uppercase mb-1">Investment</span>
                   <div className="flex items-center text-slate-900 font-bold text-xl">
                      <IndianRupee size={18} strokeWidth={2.5} className="mr-0.5" />
                      {service.price.toLocaleString('en-IN')}
                   </div>
                </div>

                <a 
                  href="#booking" 
                  onClick={(e) => handleScroll(e, '#booking')} 
                  className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white transform group-hover:scale-110 group-hover:bg-amber-500 transition-all duration-300 shadow-lg"
                  aria-label={`Book ${service.title}`}
                >
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;