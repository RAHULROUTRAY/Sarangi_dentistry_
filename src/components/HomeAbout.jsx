import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomeAbout() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l  to-transparent opacity-50 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96  rounded-full mix-blend-multiply filter blur-[100px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Side: Image Composition */}
          <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-[4/2] lg:aspect-[3/3] w-[85%] sm:w-[90%] md:w-full max-w-[500px] mx-auto lg:mr-auto"
            >
              <img
                src="/assets/about-img.png"
                alt="Dr. Soumendra Sarangi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03966a]/60 via-transparent to-transparent"></div>
            </motion.div>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: "easeOut",
                y: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.0,
                },
              }}
              className="absolute -bottom-6 md:-bottom-8 lg:bottom-12 -right-0 md:-right-4 lg:-right-12 bg-white p-4 md:p-6 rounded-2xl shadow-[0_20px_40px_rgba(26,98,127,0.15)] max-w-[170px] md:max-w-[220px] border border-[#e8f1f5] z-20"
            >
              <div className="text-4xl md:text-5xl font-mono font-bold text-[#03966a] mb-1 md:mb-2">
                36<span className="text-[#c0d2d8]">+</span>
              </div>
              <p className="font-mono text-xs md:text-sm font-bold text-[#022431] uppercase tracking-widest leading-snug md:leading-relaxed">
                Years Experience Overall
              </p>
            </motion.div>

            {/* Small floating secondary image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{ y: [0, -15, 0] }}
              transition={{
                delay: 0.6,
                duration: 0.6,
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -top-6 md:top-12 -left-2 md:-left-16 w-28 h-28 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-xl border-[3px] md:border-4 border-white z-20"
            >
              <img
                src="/assets/DSC_0005-Copy-scaled.jpg"
                alt="Dental Care"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-[#03966a] font-mono font-bold tracking-widest uppercase mb-3 flex items-center gap-4">
                <span className="w-12 h-px bg-[#03966a]"></span> About
              </h4>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-[#03966a] mb-8 leading-[1.1] tracking-tight">
                Dr. Soumendra Sarangi
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-lg text-[#3a555f] leading-relaxed relative"
            >
              <p>
                After his graduation from Dental Wing of S.C.B Medical College,
                Cuttack in year 1988, Dr. Sarangi completed his internship from
                the same institute. He got selected in OPSC (Orissa Public
                Service Commission) and Served Govt. of Odisha, the Chief
                Minister and Governor of Odisha.
              </p>
              <p>
                Besides his unique talent as a specialist in Root Canal
                Treatment(RCT), Crown Bridge, Implantology and Cosmetic
                Dentistry. Dr. Sarangi has been pioneering member in national
                and international dental societies. He is known in community for
                his enriching participation and deliberation in conferences and
                symposia.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <Link
                to="/about"
                className="group relative overflow-hidden inline-flex items-center gap-3 px-8 py-4 bg-[#03966a] text-[#FFFFFF] font-mono font-bold rounded-xl uppercase tracking-widest text-sm transition-all duration-300"
              >
                <div className="absolute -inset-6 bg-[#00ebb0] translate-x-[-120%] skew-x-12 group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0"></div>
                <span className="relative z-10 flex items-center gap-3 group-hover:text-[#000000] transition-colors duration-500">
                  Know More
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
