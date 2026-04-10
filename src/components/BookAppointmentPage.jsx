import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function BookAppointmentPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitTimerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      if (submitTimerRef.current) clearTimeout(submitTimerRef.current);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (submitTimerRef.current) clearTimeout(submitTimerRef.current);
    submitTimerRef.current = setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-[#f8fffa] pt-24 pb-12 font-sans px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(26,98,127,0.12)] overflow-hidden flex flex-col lg:flex-row border border-[#e8f1f5] w-full"
        >
          {/* Form Section */}
          <div className="w-full lg:w-[55%] p-8 md:p-12 relative flex flex-col justify-center">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-mono font-bold text-[#03966a] mb-4 tracking-tight">
                Book Appointment
              </h1>
              <div className="w-16 h-1.5 bg-[#03966a] rounded-full mb-6"></div>
              <p className="text-[#3a555f] leading-relaxed text-lg">
                Schedule your visit with us. Fill out the form below and our
                team will get back to you to confirm your appointment.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold font-mono text-[#022431] uppercase tracking-wider"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-[#f8fbfa] border border-[#d1e0e5] rounded-2xl px-5 py-3.5 text-[#03966a] focus:outline-none focus:ring-2 focus:ring-[#03966a] focus:border-transparent transition-all shadow-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold font-mono text-[#022431] uppercase tracking-wider"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full bg-[#f8fbfa] border border-[#d1e0e5] rounded-2xl px-5 py-3.5 text-[#03966a] focus:outline-none focus:ring-2 focus:ring-[#03966a] focus:border-transparent transition-all shadow-sm"
                    placeholder="+91 9938942846"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="block text-sm font-bold font-mono text-[#022431] uppercase tracking-wider"
                  >
                    Service Required
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      className="w-full bg-[#f8fbfa] border border-[#d1e0e5] rounded-2xl px-5 py-3.5 text-[#03966a] focus:outline-none focus:ring-2 focus:ring-[#03966a] focus:border-transparent transition-all appearance-none shadow-sm"
                    >
                      <option value="">Select a service</option>
                      <option value="consultation">General Consultation</option>
                      <option value="teeth-scaling">
                        Teeth Scaling & Polishing
                      </option>
                      <option value="orthodontics">
                        Orthodontic Treatment
                      </option>
                      <option value="implants">Tooth Implant</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-[#03966a]">
                      <svg
                        className="h-4 w-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="date"
                    className="block text-sm font-bold font-mono text-[#022431] uppercase tracking-wider"
                  >
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full bg-[#f8fbfa] border border-[#d1e0e5] rounded-2xl px-5 py-3.5 text-[#03966a] focus:outline-none focus:ring-2 focus:ring-[#03966a] focus:border-transparent transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-bold font-mono text-[#022431] uppercase tracking-wider"
                >
                  Additional Message
                </label>
                <textarea
                  id="message"
                  rows="2"
                  className="w-full bg-[#f8fbfa] border border-[#d1e0e5] rounded-2xl px-5 py-3.5 text-[#03966a] focus:outline-none focus:ring-2 focus:ring-[#03966a] focus:border-transparent transition-all resize-none shadow-sm"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="group relative overflow-hidden w-full bg-[#022431] text-white font-bold font-mono py-4 rounded-2xl shadow-[0_10px_20px_rgba(26,98,127,0.2)] mt-4 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="absolute -inset-4 bg-[#00ebb0] translate-x-[-120%] skew-x-12 group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0"></div>
                <span className="relative z-10 group-hover:text-[#022431] transition-colors duration-500">
                  SUBMIT REQUEST
                </span>
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
                  <span className="font-semibold font-mono text-sm">
                    Request submitted successfully!
                  </span>
                  <button onClick={() => setIsSubmitted(false)}>
                    <svg
                      className="w-5 h-5 text-[#415843]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-[45%] relative bg-[#03966a] min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#03966a] via-[#03966a]/40 to-transparent z-10"></div>
            <img
              src="/assets/appointemnt-side.jpg"
              alt="Book Appointment at Sarangi Dentistry"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 z-20">
              <div className="bg-[#022431]/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                <h3 className="text-3xl font-mono font-bold text-white mb-6">
                  Working Hours
                </h3>
                <div className="space-y-4 font-sans">
                  <div className="flex justify-between text-[#ebf4d7] items-center border-b border-white/10 pb-4">
                    <span className="font-medium text-lg">Mon - Sat</span>
                    <span className="font-mono bg-white/10 px-3 py-1 rounded-lg">
                      10:00 AM - 01:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between text-[#ebf4d7] items-center border-b border-white/10 pb-4">
                    <span className="font-medium text-lg">Evening</span>
                    <span className="font-mono bg-white/10 px-3 py-1 rounded-lg">
                      06:00 PM - 07:30 PM
                    </span>
                  </div>
                  <div className="flex justify-between text-red-300 font-medium items-center pt-2">
                    <span className="text-lg text-red-400">Sunday</span>
                    <span className="font-mono bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 rounded-lg">
                      Closed
                    </span>
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
