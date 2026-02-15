import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Aditya Singh",
    text: "I was skeptical about astrology, but Bibhash Sir's logical explanation of my career chart was eye-opening. The timeline he gave for my promotion was accurate to the week.",
    initial: "A"
  },
  {
    id: 2,
    name: "Meera Kapoor",
    text: "His Vastu advice changed the energy of our home completely. We were facing health issues for months, but after applying his simple remedies, the environment feels so much lighter.",
    initial: "M"
  },
  {
    id: 3,
    name: "Suresh Menon",
    text: "Professional, punctual, and precise. Unlike others who instill fear, Bibhash ji gives you confidence and clarity. His analysis of my business partnership was spot on.",
    initial: "S"
  },
  {
    id: 4,
    name: "Priya Sharma",
    text: "The 30-minute session was life-changing. He pinpointed the exact reason for my relationship struggles and provided very doable remedies. Truly a modern Vedic expert.",
    initial: "P"
  },
  {
    id: 5,
    name: "Vikram Das",
    text: "I consulted him for my startup's name and launch date. Since then, we've seen consistent growth. His mix of astrology and practical business sense is rare to find.",
    initial: "V"
  },
  {
    id: 6,
    name: "Anjali Gupta",
    text: "Deeply insightful reading. He doesn't sugarcoat things but tells you exactly what you need to hear to improve your life path. The recording quality was excellent too.",
    initial: "A"
  },
  {
    id: 7,
    name: "Rajesh Verma",
    text: "Vastu consultation for my factory was detailed and logical. No unnecessary demolitions, just energy balancing. Productivity has definitely gone up.",
    initial: "R"
  },
  {
    id: 8,
    name: "Sneha Reddy",
    text: "A truly empowering session. I felt heard and understood. The remedies suggested were simple, satvik, and effective.",
    initial: "S"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-slate-50 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-3">Success Stories</h2>
           <h3 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">Trusted by Thousands</h3>
           <p className="text-slate-600 text-lg">Real experiences from individuals who found clarity, direction, and peace through our consultations.</p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
            {/* Gradient Masks for smooth fade out at edges */}
            <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

            <div className="flex w-max animate-marquee gap-8 hover:[animation-play-state:paused]">
                {/* Original List */}
                {testimonials.map((t) => (
                    <div key={`orig-${t.id}`} className="w-[300px] md:w-[400px] bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 relative group flex-shrink-0">
                        <Quote className="absolute top-6 right-6 text-stone-200 group-hover:text-amber-200 transition-colors" size={48} />
                        
                        <div className="flex gap-1 mb-6">
                            {[1,2,3,4,5].map(s => (
                                <Star key={s} size={16} className="fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        
                        <p className="text-slate-700 italic mb-8 leading-relaxed relative z-10 font-medium text-sm md:text-base">
                            "{t.text}"
                        </p>
                        
                        <div className="flex items-center gap-4 border-t border-stone-200 pt-6 mt-auto">
                            <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-base shadow-md">
                                {t.initial}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Duplicate List for Seamless Loop */}
                {testimonials.map((t) => (
                    <div key={`dup-${t.id}`} className="w-[300px] md:w-[400px] bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 relative group flex-shrink-0">
                        <Quote className="absolute top-6 right-6 text-stone-200 group-hover:text-amber-200 transition-colors" size={48} />
                        
                        <div className="flex gap-1 mb-6">
                            {[1,2,3,4,5].map(s => (
                                <Star key={s} size={16} className="fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        
                        <p className="text-slate-700 italic mb-8 leading-relaxed relative z-10 font-medium text-sm md:text-base">
                            "{t.text}"
                        </p>
                        
                        <div className="flex items-center gap-4 border-t border-stone-200 pt-6 mt-auto">
                            <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-base shadow-md">
                                {t.initial}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;