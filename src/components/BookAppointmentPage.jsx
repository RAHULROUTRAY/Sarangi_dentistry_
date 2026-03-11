import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BookAppointmentPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-[#f5f9eb] pt-24 pb-12 font-sans px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(26,98,127,0.12)] overflow-hidden flex flex-col lg:flex-row border border-[#e8f1f5] lg:max-h-[85vh]"
        >
          {/* Form Section */}
          <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-10 relative flex flex-col justify-center overflow-y-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-[#011923] mb-2 tracking-tight">
              Book Appointment
            </h1>
            <div className="w-12 h-1 bg-[#1a627f] mb-4 rounded-full"></div>
            <p className="text-[#022431]/80 mb-6 leading-relaxed text-sm md:text-base">
              Schedule your visit with us. Fill out the form below and our team will get back to you to confirm your appointment.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#011923] mb-1.5">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-[#f5f9eb]/50 border border-[#c0d2d8] rounded-xl px-4 py-2.5 text-[#011923] focus:outline-none focus:ring-2 focus:ring-[#1a627f]/50 focus:border-[#1a627f] transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#011923] mb-1.5">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="w-full bg-[#f5f9eb]/50 border border-[#c0d2d8] rounded-xl px-4 py-2.5 text-[#011923] focus:outline-none focus:ring-2 focus:ring-[#1a627f]/50 focus:border-[#1a627f] transition-all"
                    placeholder="+91 9938942846"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-[#011923] mb-1.5">Service Required</label>
                <select 
                  id="service" 
                  className="w-full bg-[#f5f9eb]/50 border border-[#c0d2d8] rounded-xl px-4 py-2.5 text-[#011923] focus:outline-none focus:ring-2 focus:ring-[#1a627f]/50 focus:border-[#1a627f] transition-all appearance-none"
                >
                  <option value="">Select a service</option>
                  <option value="consultation">General Consultation</option>
                  <option value="teeth-scaling">Teeth Scaling & Polishing</option>
                  <option value="orthodontics">Orthodontic Treatment</option>
                  <option value="implants">Tooth Implant</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-semibold text-[#011923] mb-1.5">Preferred Date</label>
                <input 
                  type="date" 
                  id="date" 
                  className="w-full bg-[#f5f9eb]/50 border border-[#c0d2d8] rounded-xl px-4 py-2.5 text-[#011923] focus:outline-none focus:ring-2 focus:ring-[#1a627f]/50 focus:border-[#1a627f] transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#011923] mb-1.5">Additional Message</label>
                <textarea 
                  id="message" 
                  rows="3" 
                  className="w-full bg-[#f5f9eb]/50 border border-[#c0d2d8] rounded-xl px-4 py-2.5 text-[#011923] focus:outline-none focus:ring-2 focus:ring-[#1a627f]/50 focus:border-[#1a627f] transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#1a627f] text-white font-bold font-mono py-3 rounded-xl hover:bg-[#011923] transition-colors duration-300 shadow-lg shadow-[#1a627f]/20 hover:-translate-y-0.5"
              >
                SUBMIT REQUEST
              </button>
            </form>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-4 left-4 right-4 bg-[#f5f9eb] border border-[#415843]/30 text-[#415843] px-4 py-3 rounded-xl flex items-center justify-between shadow-lg z-20"
                >
                  <span className="font-semibold font-mono text-sm">Request submitted successfully!</span>
                  <button onClick={() => setIsSubmitted(false)}>
                    <svg className="w-5 h-5 text-[#415843]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 relative bg-[#1a627f] min-h-[300px] lg:min-h-full">
            <div className="absolute inset-0 bg-gradient-to-t from-[#011923]/80 via-[#011923]/20 to-transparent z-10"></div>
            <img src="/assets/appointemnt-side.jpg"
              alt="Book Appointment at Sarangi Dentistry" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-2">Working Hours</h3>
                <div className="space-y-2 mt-4">
                  <div className="flex justify-between text-[#ebf4d7]">
                    <span className="font-medium">Monday - Saturday</span>
                    <span>10:00 AM - 01:00 PM</span>
                  </div>
                  <div className="flex justify-between text-[#ebf4d7]">
                    <span className="font-medium">Evening</span>
                    <span>06:00 PM - 07:30 PM</span>
                  </div>
                  <div className="flex justify-between text-red-300 font-medium mt-2 pt-2 border-t border-white/10">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
