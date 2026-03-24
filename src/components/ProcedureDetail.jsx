import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { proceduresData } from "../data/proceduresData";

export default function ProcedureDetail() {
  const { id } = useParams();
  const [procedure, setProcedure] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const item = proceduresData.find((p) => p.id === id);
    setProcedure(item);
  }, [id]);

  if (!procedure) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fffa]">
        <p className="text-2xl text-[#03966a] font-mono">
          Procedure not found.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fffa] pt-28 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Breadcrumb nav */}
        <nav className="flex mb-8 text-sm font-medium text-[#03966a]">
          <Link to="/" className="hover:text-[#03966a] transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            to="/procedures"
            className="hover:text-[#03966a] transition-colors"
          >
            Procedures
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#03966a]">{procedure.title}</span>
        </nav>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col lg:flex-row gap-12 items-center mb-20"
        >
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#03966a]/20 to-transparent rounded-2xl transform translate-x-3 translate-y-3"></div>
            <img
              src={procedure.image}
              alt={procedure.title}
              className="w-full h-auto aspect-[4/3] object-cover rounded-2xl shadow-xl relative z-10"
            />
          </div>
          <div className="w-full lg:w-1/2 z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-[#03966a] mb-6 tracking-tight leading-tight">
              {procedure.title}
            </h1>
            <div className="w-20 h-1 bg-[#03966a] mb-8 rounded-full"></div>
            <p className="text-lg text-[#022431]/80 leading-relaxed mb-8">
              {procedure.longDescription}
            </p>
            <Link
              to="/book-appointment"
              className="group relative overflow-hidden inline-block px-8 py-4 bg-[#03966a] text-white font-mono font-bold rounded-lg shadow-lg shadow-[#03966a]/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -inset-4 bg-[#e4d5b7] translate-x-[-120%] skew-x-12 group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0"></div>
              <span className="relative z-10 group-hover:text-[#022431] transition-colors duration-500">BOOK APPOINTMENT</span>
            </Link>
          </div>
        </motion.div>

        {/* Process Steps */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#03966a] mb-4">
              Procedures
            </h2>
            <div className="w-16 h-1 bg-[#415843] mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {procedure.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(26,98,127,0.06)] hover:shadow-[0_8px_30px_rgba(26,98,127,0.12)] transition-shadow duration-300 border border-[#e8f1f5]"
              >
                <div className="text-5xl font-bold text-[#f5f9eb] [-webkit-text-stroke:1px_#03966a] mb-6">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-[#03966a] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#022431]/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#03966a] mb-4">
              FAQs
            </h2>
            <div className="w-16 h-1 bg-[#03966a] mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-4">
            {procedure.faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border border-[#e8f1f5] shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-[#f5f9eb]/50 transition-colors focus:outline-none"
                >
                  <span className="text-lg font-semibold text-[#03966a] text-left pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#e8f1f5] flex items-center justify-center text-[#03966a] transition-transform duration-300 ${openFaq === index ? "rotate-180 bg-[#03966a] text-white" : ""}`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-6 bg-[#f5f9eb]/30"
                    >
                      <p className="py-4 text-[#022431]/80 leading-relaxed border-t border-[#e8f1f5]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          id="book"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#03966a] rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#f5f9eb] opacity-10 rounded-full blur-3xl"></div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10 tracking-tight">
            Ready for a Healthy Smile?
          </h2>
          <p className="text-lg text-[#e8f1f5] mb-10 max-w-2xl mx-auto relative z-10">
            Schedule your appointment today and experience personalized,
            high-quality dental care from our expert team.
          </p>
          <Link
            to="/book-appointment"
            className="group relative z-10 overflow-hidden inline-block bg-white text-[#03966a] font-bold font-mono px-10 py-4 rounded-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute -inset-4 bg-[#e4d5b7] translate-x-[-120%] skew-x-12 group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0"></div>
            <span className="relative z-10 transition-colors duration-500">BOOK APPOINTMENT NOW</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
