import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { proceduresData } from "../data/proceduresData";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Procedures() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fffa] pt-28 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#011923] mb-6 tracking-tight">
            Our Dental Procedures
          </h1>
          <div className="w-24 h-1 bg-[#03966a] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-[#022431]/80 max-w-3xl mx-auto leading-relaxed">
            We provide a wide range of world-class dental treatments tailored to
            your needs. Explore our specialized procedures ensuring a perfect,
            healthy smile.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {proceduresData.map((procedure) => (
            <motion.div
              key={procedure.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(26,98,127,0.06)] hover:shadow-[0_12px_40px_rgba(26,98,127,0.15)] transition-all duration-300 flex flex-col group border border-[#e8f1f5]"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={procedure.image}
                  alt={procedure.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011923]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#011923] mb-3 group-hover:text-[#03966a] transition-colors">
                  {procedure.title}
                </h3>
                <p className="text-[#022431]/70 mb-6 flex-grow leading-relaxed text-sm">
                  {procedure.shortText}
                </p>
                <Link
                  to={procedure.path}
                  className="inline-flex items-center text-[#03966a] font-mono font-bold group/link self-start"
                >
                  <span className="relative overflow-hidden">
                    <span>Know More</span>
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#03966a] transform -translate-x-[101%] group-hover/link:translate-x-0 transition-transform duration-300"></span>
                  </span>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
