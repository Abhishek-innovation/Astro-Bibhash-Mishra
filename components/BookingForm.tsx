import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { BookingStatus, BookingFormState } from '../types';
import { CheckCircle, Send, Check, ArrowRight, ArrowLeft, Sparkles, AlertCircle } from 'lucide-react';

const steps = [
  { id: 1, title: 'Choose Service', icon: Sparkles },
  { id: 2, title: 'Your Details', icon: CheckCircle },
  { id: 3, title: 'Review & Submit', icon: Send },
];

const BookingForm: React.FC = () => {
  const [status, setStatus] = useState<BookingStatus>(BookingStatus.IDLE);
  const [currentStep, setCurrentStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Initialize form state
  const [formData, setFormData] = useState<BookingFormState>({
    fullName: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    whatsappNumber: '',
    serviceId: SERVICES[0].id,
    questions: '',
  });

  const selectedService = SERVICES.find(s => s.id === formData.serviceId) || SERVICES[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (id: string) => {
    setFormData(prev => ({ ...prev, serviceId: id }));
    // Auto advance on mobile for better flow
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
       setTimeout(() => nextStep(), 300);
    }
  };

  const nextStep = () => {
    // Validation for Step 2
    if (currentStep === 2) {
      if (!formData.fullName || !formData.dateOfBirth || !formData.timeOfBirth || !formData.placeOfBirth || !formData.whatsappNumber) {
        alert("Please fill in all required fields, including WhatsApp number.");
        return;
      }
    }
    setCurrentStep(prev => Math.min(prev + 1, steps.length));
    
    // Smooth scroll to top of booking section
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      const headerOffset = 100;
      const elementPosition = bookingSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    setStatus(BookingStatus.SUBMITTING);
    setErrorMessage("");
    
    // Use native FormData here. We renamed our interface to BookingFormState to avoid collision.
    const submissionData = new FormData();
    submissionData.append('Name', formData.fullName);
    submissionData.append('Date of Birth', formData.dateOfBirth);
    submissionData.append('Time of Birth', formData.timeOfBirth);
    submissionData.append('Place of Birth', formData.placeOfBirth);
    submissionData.append('WhatsApp Number', formData.whatsappNumber);
    
    // Add Service Details
    const service = SERVICES.find(s => s.id === formData.serviceId);
    submissionData.append('Selected Service', service ? service.title : formData.serviceId);
    submissionData.append('Price', service ? `₹${service.price}` : '');
    
    submissionData.append('Specific Questions', formData.questions || 'None');

    try {
      // Create a timeout promise to prevent hanging
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), 30000)
      );

      const fetchPromise = fetch("https://formspree.io/f/xreaqarn", {
        method: "POST",
        body: submissionData,
        headers: {
            'Accept': 'application/json'
        }
      });

      // Race against the timeout
      const response = await Promise.race([fetchPromise, timeoutPromise]) as Response;

      if (response.ok) {
        setStatus(BookingStatus.SUCCESS);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Form submission error:", errorData);
        if (errorData.errors && Array.isArray(errorData.errors)) {
            setErrorMessage(errorData.errors.map((e: any) => e.message).join(", "));
        } else {
            setErrorMessage("There was a problem submitting your form. Please try again.");
        }
        setStatus(BookingStatus.ERROR);
      }
    } catch (error) {
      console.error("Network error:", error);
      setErrorMessage("Network error. Please check your internet connection and try again.");
      setStatus(BookingStatus.ERROR);
    }
  };

  // Success State
  if (status === BookingStatus.SUCCESS) {
    return (
      <section id="booking" className="py-20 bg-white min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-lg mx-auto px-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8 shadow-xl shadow-green-100">
            <CheckCircle size={48} />
          </div>
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Submission Successful!</h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Thank you, <strong>{formData.fullName}</strong>. <br/>
            We have securely received your details.
          </p>
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 mb-8">
             <p className="text-sm text-slate-500">
               Astro Bibhash Mishra will personally review your chart and contact you via WhatsApp within 24-48 hours.
             </p>
          </div>
          <button 
            onClick={() => {
              setStatus(BookingStatus.IDLE);
              setCurrentStep(1);
              setFormData({
                fullName: '',
                dateOfBirth: '',
                timeOfBirth: '',
                placeOfBirth: '',
                whatsappNumber: '',
                serviceId: SERVICES[0].id,
                questions: '',
              });
            }}
            className="inline-flex items-center text-amber-700 font-bold hover:text-amber-800 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" /> Book Another Consultation
          </button>
        </div>
      </section>
    );
  }

  // Error State
  if (status === BookingStatus.ERROR) {
    return (
      <section id="booking" className="py-20 bg-white min-h-[50vh] flex items-center justify-center">
        <div className="text-center max-w-lg mx-auto px-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center text-red-600 mx-auto mb-8 shadow-xl shadow-red-100">
            <AlertCircle size={48} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Submission Failed</h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            {errorMessage || "Something went wrong while submitting your form. Please try again."}
          </p>
          <button 
            onClick={() => setStatus(BookingStatus.IDLE)}
            className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-slate-800 transition-all"
          >
            Try Again <ArrowRight size={18} />
          </button>
        </div>
      </section>
    );
  }

  // Loading / Processing State
  if (status === BookingStatus.SUBMITTING) {
     return (
        <section id="booking" className="py-32 bg-white flex items-center justify-center min-h-[500px]">
           <div className="text-center">
              <div className="relative w-20 h-20 mx-auto mb-8">
                 <div className="absolute inset-0 border-4 border-stone-100 rounded-full"></div>
                 <div className="absolute inset-0 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                 <Send className="absolute inset-0 m-auto text-amber-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Processing Form Submission</h3>
              <p className="text-slate-500">Please do not close this window...</p>
           </div>
        </section>
     )
  }

  // Calculate Progress Percentage
  const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <section id="booking" className="py-20 bg-stone-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-amber-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-3">Begin Your Consultation</h2>
          <h3 className="font-serif text-3xl md:text-5xl font-bold text-slate-900">Book Your Session</h3>
        </div>

        {/* Improved Progress Bar System */}
        <div className="max-w-2xl mx-auto mb-12 px-4 relative">
          {/* Background Line */}
          <div className="absolute top-5 md:top-6 left-4 right-4 h-1 bg-stone-200 rounded-full -z-10"></div>
          
          {/* Active Progress Line */}
          <div 
             className="absolute top-5 md:top-6 left-4 h-1 bg-green-500 rounded-full -z-10 transition-all duration-500"
             style={{ width: `calc(${progressPercentage}% - 2rem)` }}
          ></div>

          <div className="flex justify-between items-center">
            {steps.map((step) => {
               const isActive = currentStep === step.id;
               const isCompleted = currentStep > step.id;
               
               return (
                 <div key={step.id} className="flex flex-col items-center z-10">
                   <div 
                     className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 border-4 ${
                       isActive ? 'bg-amber-600 border-stone-50 text-white shadow-xl scale-110' : 
                       isCompleted ? 'bg-green-500 border-stone-50 text-white' : 'bg-white border-stone-50 text-slate-300'
                     }`}
                   >
                     {isCompleted ? <Check size={20} /> : <step.icon size={18} />}
                   </div>
                   <span className={`text-[10px] md:text-xs font-bold mt-2 uppercase tracking-wide transition-colors duration-300 ${
                     isActive ? 'text-amber-700' : isCompleted ? 'text-green-600' : 'text-slate-400'
                   }`}>
                     {step.title}
                   </span>
                 </div>
               )
            })}
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-xl shadow-stone-200/50 overflow-hidden border border-stone-100 min-h-[400px] transition-all duration-500">
           <div className="p-6 md:p-10">
              
              {/* Step 1: Service Selection */}
              {currentStep === 1 && (
                <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                  <h4 className="text-2xl font-serif font-bold text-slate-900 mb-6 text-center">Select a Service</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {SERVICES.map((service) => (
                      <div 
                        key={service.id}
                        onClick={() => handleServiceSelect(service.id)}
                        className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 flex flex-col hover:shadow-lg ${
                          formData.serviceId === service.id 
                            ? 'border-amber-500 bg-amber-50/30 shadow-md ring-1 ring-amber-500/20' 
                            : 'border-stone-100 hover:border-amber-200 bg-stone-50 hover:bg-white'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-3">
                           <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mt-1 ${
                             formData.serviceId === service.id ? 'border-amber-500' : 'border-stone-300'
                           }`}>
                             {formData.serviceId === service.id && <div className="w-2 h-2 rounded-full bg-amber-500"></div>}
                           </div>
                           <span className="font-bold text-lg text-slate-900">₹{service.price.toLocaleString('en-IN')}</span>
                        </div>
                        <h5 className="font-bold text-slate-800 mb-2">{service.title}</h5>
                        <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Personal Details */}
              {currentStep === 2 && (
                <div className="animate-in fade-in slide-in-from-right-8 duration-500 max-w-3xl mx-auto">
                   <h4 className="text-2xl font-serif font-bold text-slate-900 mb-6 text-center">Your Details</h4>
                   <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Official Name <span className="text-red-500">*</span></label>
                        <input 
                          type="text" 
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full p-4 bg-stone-50 border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500/50 outline-none transition-all placeholder:text-stone-400 font-medium text-base text-slate-800"
                          placeholder="e.g. Rahul Kumar"
                          autoFocus
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Date of Birth <span className="text-red-500">*</span></label>
                            <input 
                              type="date" 
                              name="dateOfBirth"
                              value={formData.dateOfBirth}
                              onChange={handleInputChange}
                              className="w-full p-4 bg-stone-50 border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500/50 outline-none transition-all font-medium text-base text-slate-800"
                            />
                         </div>
                         <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Time of Birth <span className="text-red-500">*</span></label>
                            <input 
                              type="time" 
                              name="timeOfBirth"
                              value={formData.timeOfBirth}
                              onChange={handleInputChange}
                              className="w-full p-4 bg-stone-50 border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500/50 outline-none transition-all font-medium text-base text-slate-800"
                            />
                         </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Place of Birth <span className="text-red-500">*</span></label>
                            <input 
                            type="text" 
                            name="placeOfBirth"
                            value={formData.placeOfBirth}
                            onChange={handleInputChange}
                            className="w-full p-4 bg-stone-50 border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500/50 outline-none transition-all placeholder:text-stone-400 font-medium text-base text-slate-800"
                            placeholder="City, State, Country"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">WhatsApp Number <span className="text-red-500">*</span></label>
                            <input 
                            type="tel" 
                            name="whatsappNumber"
                            value={formData.whatsappNumber}
                            onChange={handleInputChange}
                            className="w-full p-4 bg-stone-50 border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500/50 outline-none transition-all placeholder:text-stone-400 font-medium text-base text-slate-800"
                            placeholder="e.g. +91 98765 43210"
                            />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Specific Questions (Optional)</label>
                        <textarea 
                            name="questions"
                            value={formData.questions}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full p-4 bg-stone-50 border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500/50 outline-none transition-all placeholder:text-stone-400 resize-none text-base text-slate-800"
                            placeholder="What specific areas should Astro Bibhash focus on?"
                        ></textarea>
                      </div>
                   </div>
                </div>
              )}

              {/* Step 3: Review */}
              {currentStep === 3 && (
                <div className="animate-in fade-in slide-in-from-right-8 duration-500 max-w-2xl mx-auto">
                   <h4 className="text-2xl font-serif font-bold text-slate-900 mb-6 text-center">Review & Confirm</h4>
                   
                   <div className="bg-stone-50 p-6 rounded-2xl space-y-4 mb-8 border border-stone-200">
                      <div className="flex justify-between items-center pb-4 border-b border-stone-200">
                         <span className="text-slate-600">Service</span>
                         <div className="text-right">
                            <span className="block font-bold text-slate-900">{selectedService.title}</span>
                         </div>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-stone-200">
                         <span className="text-slate-600">Client Name</span>
                         <span className="font-bold text-slate-900">{formData.fullName}</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-stone-200">
                         <span className="text-slate-600">Birth Details</span>
                         <div className="text-right">
                           <span className="block font-bold text-slate-900">{formData.dateOfBirth}, {formData.timeOfBirth}</span>
                           <span className="text-xs text-slate-600">{formData.placeOfBirth}</span>
                         </div>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-stone-200">
                         <span className="text-slate-600">WhatsApp</span>
                         <span className="font-bold text-slate-900">{formData.whatsappNumber}</span>
                      </div>
                      <div className="flex justify-between items-center pt-2">
                         <span className="text-xl font-serif font-bold text-slate-900">Total Amount</span>
                         <span className="text-2xl font-bold text-amber-600">₹{selectedService.price.toLocaleString('en-IN')}</span>
                      </div>
                   </div>
                </div>
              )}

           </div>

           {/* Navigation Buttons */}
           <div className="p-6 md:p-10 bg-stone-50 border-t border-stone-100 flex flex-col-reverse md:flex-row justify-between items-center gap-4">
              <button 
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`w-full md:w-auto flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-xl transition-all ${
                  currentStep === 1 
                    ? 'opacity-0 pointer-events-none hidden md:flex' 
                    : 'text-slate-600 hover:bg-stone-200 bg-white border border-stone-200 md:border-none md:bg-transparent'
                }`}
              >
                <ArrowLeft size={20} /> Back
              </button>

              {currentStep < 3 ? (
                <button 
                  onClick={nextStep}
                  className="w-full md:w-auto flex items-center justify-center gap-2 bg-slate-900 text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-slate-900/20 hover:bg-slate-800 hover:scale-105 transition-all"
                >
                  Next Step <ArrowRight size={20} />
                </button>
              ) : (
                <button 
                  onClick={handleSubmit}
                  className="w-full md:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-amber-600/30 hover:shadow-xl hover:scale-105 transition-all"
                >
                  Submit Form <Send size={18} />
                </button>
              )}
           </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;