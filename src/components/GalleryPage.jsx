import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { galleryImages } from "../data/galleryData";

const GalleryPage = () => {
  const images = useMemo(() => {
    let baseImages =
      galleryImages.length > 0
        ? galleryImages
        : [
            "https://sarangidentistry.in/wp-content/uploads/2024/01/clinic-1.jpg",
            "https://sarangidentistry.in/wp-content/uploads/2024/01/clinic-2.jpg",
          ];

    let filled = [...baseImages];
    while (filled.length < 15) {
      filled = [...filled, ...baseImages];
    }
    return filled;
  }, []);

  const MarqueeRow = ({ images, speed }) => {
    const duplicatedImages = [...images, ...images];

    return (
      <div className="flex w-[200%] items-center gap-6 py-8">
        <motion.div
          className="flex w-1/2 justify-around gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: speed,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {duplicatedImages.map((src, i) => (
            <div
              key={`${i}-${src}`}
              className="relative h-[45vh] lg:h-[55vh] w-[70vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(26,98,127,0.15)] group shrink-0 border-4 border-white transform transition-transform duration-500 hover:scale-[1.03] hover:z-20"
            >
              <img
                src={src}
                alt="Clinic Gallery"
                className="w-full h-full object-cover transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />
            </div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <div className="bg-[#f8fffa] min-h-screen w-full overflow-hidden flex flex-col relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#e8f1f5] to-transparent opacity-70 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#c0d2d8] rounded-full mix-blend-multiply filter blur-[100px] opacity-40 pointer-events-none" />

      <div className="pt-32 pb-4 px-8 relative z-20 flex-shrink-0 flex flex-col items-center">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#03966a] font-mono font-bold tracking-widest uppercase mb-3 flex items-center gap-4 text-sm md:text-base"
        >
          <span className="w-8 md:w-12 h-px bg-[#03966a]"></span>
          Tour Our Clinic
          <span className="w-8 md:w-12 h-px bg-[#03966a]"></span>
        </motion.h4>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#011923] text-center tracking-tight"
        >
          Clinic{" "}
          <span className="text-[#606c38] italic font-serif tracking-normal">
            Gallery
          </span>
        </motion.h1>
      </div>

      <div className="flex-1 flex flex-col justify-center overflow-hidden z-10 w-full relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#f5f9eb] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#f5f9eb] to-transparent z-20 pointer-events-none" />

        {/* Faster carousel speed */}
        <MarqueeRow images={images} speed={15} />
      </div>
    </div>
  );
};

export default GalleryPage;
