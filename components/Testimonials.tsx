import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Aditya Singh",
    role: "Software Engineer",
    location: "Pune, India",
    text: "I was skeptical about astrology, but Bibhash Sir's logical explanation of my career chart was eye-opening. The timeline he gave for my promotion was accurate to the week. Highly recommended for career guidance.",
    initial: "A"
  },
  {
    id: 2,
    name: "Meera Kapoor",
    role: "Homemaker",
    location: "Delhi, India",
    text: "His Vastu advice changed the energy of our home completely. We were facing health issues for months, but after applying his simple remedies without demolition, the environment feels so much lighter and positive.",
    initial: "M"
  },
  {
    id: 3,
    name: "Suresh Menon",
    role: "Entrepreneur",
    location: "Bangalore, India",
    text: "Professional, punctual, and precise. Unlike others who instill fear, Bibhash ji gives you confidence and clarity. His analysis of my business partnership was spot on and saved me from a bad deal.",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
                <div key={t.id} className="bg-stone-50 p-8 rounded-2xl border border-stone-100 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 relative group hover:-translate-y-1">
                    <Quote className="absolute top-6 right-6 text-stone-200 group-hover:text-amber-200 transition-colors" size={48} />
                    
                    <div className="flex gap-1 mb-6">
                        {[1,2,3,4,5].map(s => (
                            <Star key={s} size={16} className="fill-amber-400 text-amber-400" />
                        ))}
                    </div>
                    
                    <p className="text-slate-700 italic mb-8 leading-relaxed relative z-10 font-medium">
                        "{t.text}"
                    </p>
                    
                    <div className="flex items-center gap-4 border-t border-stone-200 pt-6">
                        <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                            {t.initial}
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                            <div className="flex flex-col text-xs text-slate-500 mt-0.5">
                                <span className="font-medium text-amber-600">{t.role}</span>
                                <span>{t.location}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials;