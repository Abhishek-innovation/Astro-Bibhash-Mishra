import React from 'react';
import { User, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Image */}
          <div className="w-full lg:w-5/12 relative">
             <div className="absolute top-4 -left-4 w-full h-full border-2 border-amber-500 rounded-lg hidden md:block"></div>
             <img 
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop" 
              alt="Astro Bibhash Mishra Working" 
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-2xl relative z-10 hover:sepia-[.2] transition-all duration-700"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2">About The Consultant</h2>
            <h3 className="font-serif text-4xl font-bold text-slate-900 mb-6">Guiding Lives Through Vedic Wisdom</h3>
            
            <p className="text-slate-700 mb-6 leading-relaxed text-lg font-medium">
              Namaste! I am <strong>Astro Bibhash Mishra</strong>, a dedicated practitioner of Vedic Astrology and Vastu Shastra. 
              My mission is to help individuals navigate life's uncertainties with clarity and confidence.
            </p>

            <p className="text-slate-600 mb-8 leading-relaxed text-base">
              With years of experience analyzing horoscopes and Vastu energies, I provide practical, logical, and 
              remedy-based consultations. I believe astrology is not about fear, but about understanding the cosmic 
              rhythms that influence our journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-stone-200">
                <div className="bg-amber-100 p-2 rounded-full text-amber-600 shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Expertise</h4>
                  <p className="text-sm text-slate-600 mt-1">Vedic Astrology & Vastu Shastra Specialist</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-stone-200">
                <div className="bg-amber-100 p-2 rounded-full text-amber-600 shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Approach</h4>
                  <p className="text-sm text-slate-600 mt-1">Logical, Remedy-based, and Empowering</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;