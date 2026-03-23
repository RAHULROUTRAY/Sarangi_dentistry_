import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificationsData } from "../data/certificationData";

const CertificationPage = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="bg-[#f8fffa] min-h-screen pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#03966a] mb-4">
            Our <span className="text-[#03966a]">Certifications</span>
          </h1>
          <p className="text-[#022431] text-lg max-w-2xl mx-auto">
            A testament to our mastery and continuous learning in the field of
            modern dentistry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: (index % 10) * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setSelectedCert(cert)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-[#c0d2d8]/30 group"
            >
              <div className="aspect-[4/3] overflow-hidden relative bg-[#e8f1f5]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03966a]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium flex items-center gap-2">
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                    View Full
                  </span>
                </div>
              </div>
              <div className="p-4 border-t border-[#c0d2d8]/30">
                <h3 className="text-[#03966a] font-semibold text-sm line-clamp-2">
                  {cert.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#03966a]/80 backdrop-blur-sm p-4"
          >
            <button
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-[#03966a] transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
              onClick={() => setSelectedCert(null)}
            >
              <svg
                className="w-8 h-8"
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
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, transition: { duration: 0.2 } }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] w-full rounded-xl overflow-hidden shadow-2xl bg-white flex flex-col"
            >
              <div className="flex-1 overflow-auto bg-[#f5f9eb] flex items-center justify-center min-h-0">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full max-h-[85vh] object-contain"
                />
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 text-white text-center">
                <h3 className="text-xl md:text-2xl font-bold">
                  {selectedCert.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CertificationPage;
