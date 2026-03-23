import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fffa] pt-28 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#03966a] mb-6 tracking-tight">
            Contact Us
          </h1>
          <div className="w-20 h-1 bg-[#03966a] mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-[#022431]/80 max-w-2xl mx-auto leading-relaxed">
            Get in touch with us for any inquiries or to schedule a visit. We
            are here to help you achieve your best smile.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgba(26,98,127,0.08)] border border-[#e8f1f5]"
          >
            <div className="space-y-10">
              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-[#03966a]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-[#03966a]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#03966a] mb-2">
                    Address
                  </h3>
                  <p className="text-[#022431]/80 leading-relaxed">
                    7RGM+H8G Stalwart complex, Unit 4,
                    <br />
                    Bhouma Nagar, Bhubaneswar,
                    <br />
                    Odisha 751001
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-[#03966a]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-[#03966a]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#03966a] mb-2">
                    Phone
                  </h3>
                  <p className="text-[#022431]/80 leading-relaxed">
                    <a
                      href="tel:9938942846"
                      className="hover:text-[#03966a] transition-colors"
                    >
                      9938942846
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-[#03966a]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-6 h-6 text-[#03966a]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#03966a] mb-2">
                    Email
                  </h3>
                  <p className="text-[#022431]/80 leading-relaxed">
                    <a
                      href="mailto:info@sarangidentistry.com"
                      className="hover:text-[#03966a] transition-colors"
                    >
                      info@sarangidentistry.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="bg-white p-2 rounded-2xl shadow-[0_8px_30px_rgba(26,98,127,0.08)] border border-[#e8f1f5] h-full min-h-[400px] flex flex-col"
          >
            <div className="p-6 pb-4">
              <h3 className="text-2xl font-bold text-[#03966a]">
                How To Reach Us
              </h3>
              <p className="text-[#022431]/70 mt-2">Working location map</p>
            </div>
            <div className="flex-grow w-full rounded-xl overflow-hidden bg-gray-100 mt-2 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.6620585141246!2d85.8341604!3d20.2728441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a779165bc6f1%3A0xe5eb6c5a363d6b04!2sSarangi%20Dentistry!5e0!3m2!1sen!2sin!4v1709489620000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sarangi Dentistry Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
