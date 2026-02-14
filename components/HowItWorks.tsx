import React from 'react';
import { MousePointerClick, FileText, Send, MessageCircle } from 'lucide-react';

const steps = [
  {
    icon: <MousePointerClick size={32} />,
    title: "1. Select Service",
    description: "Choose the consultation type that suits your requirements."
  },
  {
    icon: <FileText size={32} />,
    title: "2. Provide Details",
    description: "Fill in your birth details and upload palm/current photos."
  },
  {
    icon: <Send size={32} />,
    title: "3. Review & Submit",
    description: "Review your details and submit the form securely."
  },
  {
    icon: <MessageCircle size={32} />,
    title: "4. Get Consultation",
    description: "Receive your detailed analysis and remedies."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-2">Process</h2>
          <h3 className="font-serif text-4xl font-bold text-white mb-4">How It Works</h3>
          <p className="text-slate-400">A simple 4-step journey to your consultation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center p-6">
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-slate-700 -z-10 transform translate-x-1/2"></div>
              )}
              
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-amber-600/30 z-10 border-4 border-slate-900">
                {step.icon}
              </div>
              
              <h4 className="text-xl font-bold mb-3 font-serif">{step.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;