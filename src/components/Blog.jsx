import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { blogsData } from "../data/blogsData";

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerRef = useRef(null);

  // We track the scroll progress within this 300vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
    layoutEffect: false,
  });

  // 1. Central Image Scale: Starts large (3x to cover screen), shrinks to 1x
  const centerScale = useTransform(scrollYProgress, [0, 0.9], [3, 1]);
  // 2. Central Image Opacity (optional subtle fade-in of the image itself, but usually starts at 1)

  // 3. Central Title Opacity: Fades out as we start scrolling
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // 4. Surrounding Images Transform:
  // They start spread out far beyond the viewport and move into their grid positions
  // Values are defined as [start position, end position (0 means resting in their grid cell)]

  // Top row
  const tlX = useTransform(scrollYProgress, [0.1, 0.9], ["-100vw", "0vw"]);
  const tlY = useTransform(scrollYProgress, [0.1, 0.9], ["-100vh", "0vh"]);

  const tcY = useTransform(scrollYProgress, [0.1, 0.9], ["-100vh", "0vh"]);

  const trX = useTransform(scrollYProgress, [0.1, 0.9], ["100vw", "0vw"]);
  const trY = useTransform(scrollYProgress, [0.1, 0.9], ["-100vh", "0vh"]);

  // Middle row (sides)
  const mlX = useTransform(scrollYProgress, [0.1, 0.9], ["-100vw", "0vw"]);
  const mrX = useTransform(scrollYProgress, [0.1, 0.9], ["100vw", "0vw"]);

  // Bottom row
  const blX = useTransform(scrollYProgress, [0.1, 0.9], ["-100vw", "0vw"]);
  const blY = useTransform(scrollYProgress, [0.1, 0.9], ["100vh", "0vh"]);

  const bcY = useTransform(scrollYProgress, [0.1, 0.9], ["100vh", "0vh"]);

  const brX = useTransform(scrollYProgress, [0.1, 0.9], ["100vw", "0vw"]);
  const brY = useTransform(scrollYProgress, [0.1, 0.9], ["100vh", "0vh"]);

  // Fade
  const surroundOpacity = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <div>
      {/* //This container is 300vh tall to give scrolling distance on desktop, adjustable for mobile. */}
      <div ref={containerRef} className="h-[200vh] relative pt-10 md:pt-20">
        {/* sticky shell  holds the visual elements on screen */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#f8fffa]">
          {/* Central Title */}
          <motion.div
            style={{ opacity: titleOpacity, y: titleY }}
            className="absolute z-20 pointer-events-none text-center px-4"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase mb-4 text-white drop-shadow-2xl">
              Capturing <br /> The Pulse
            </h1>
            <p className="text-xl md:text-2xl font-light text-white">
              Scroll down to know more.
            </p>
          </motion.div>

          {/* 
            THE 3x3 GRID 
             scale the central image dynamically but position the others relative to a grid
          */}
          <div className="relative w-full max-w-6xl mx-auto aspect-[3/4] md:aspect-[21/9] lg:aspect-video px-4 md:p-10 mt-20 md:mt-0">
            <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-4 lg:grid-rows-3 gap-3 md:gap-4 w-full h-full relative z-10">
              {/* Top Left */}
              <motion.div
                style={{ x: tlX, y: tlY, opacity: surroundOpacity }}
                className="hidden lg:block w-full h-full rounded-lg md:rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/assets/3-Qualities-To-Look-For.jpg"
                  alt="Portfolio 1"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Top Center */}
              <motion.div
                style={{ y: tcY, opacity: surroundOpacity }}
                className="w-full h-full rounded-lg md:rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/assets/Dental-Health-Checkup.jpg"
                  alt="Portfolio 2"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
                />
              </motion.div>

              {/* Top Right */}
              <motion.div
                style={{ x: trX, y: trY, opacity: surroundOpacity }}
                className="w-full h-full rounded-lg md:rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/assets/dental-check-up-fleet-hampshire.jpg"
                  alt="Portfolio 3"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Middle Left */}
              <motion.div
                style={{ x: mlX, opacity: surroundOpacity }}
                className="w-full h-full rounded-lg md:rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/assets/dental-staff.webp"
                  alt="Portfolio 4"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Middle Center (Hero on Mobile is explicitly larger) */}
              <motion.div
                style={{ scale: centerScale }}
                className="col-span-2 lg:col-span-1 row-span-2 lg:row-span-1 w-full h-full rounded-xl md:rounded-2xl overflow-hidden shadow-2xl z-0 relative isolate"
              >
                {/* A subtle overlay */}
                <motion.div
                  style={{ opacity: titleOpacity }}
                  className="absolute inset-0 bg-transparent z-10"
                ></motion.div>
                <img
                  src="/assets/dental-care-professional-stockcake.webp"
                  alt="Hero"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Middle Right */}
              <motion.div
                style={{ x: mrX, opacity: surroundOpacity }}
                className="w-full h-full rounded-lg md:rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/assets/Medline.jpg"
                  alt="Portfolio 6"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Bottom Left */}
              <motion.div
                style={{ x: blX, y: blY, opacity: surroundOpacity }}
                className="w-full h-full rounded-lg md:rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/assets/teeth.png"
                  alt="Portfolio 7"
                  className="w-full h-full object-cover bg-[#dfe8ec] p-4"
                />
              </motion.div>

              {/* Bottom Center */}
              <motion.div
                style={{ y: bcY, opacity: surroundOpacity }}
                className="w-full h-full rounded-lg md:rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/assets/3-Qualities-To-Look-For.jpg"
                  alt="Portfolio 8"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
                />
              </motion.div>

              {/* Bottom Right */}
              <motion.div
                style={{ x: brX, y: brY, opacity: surroundOpacity }}
                className="w-full h-full rounded-lg md:rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/assets/Dental-Health-Checkup.jpg"
                  alt="Portfolio 9"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        BLOG section
   
      */}
      <div className="relative z-10 bg-[#f8fffa] pt-20 md:pt-32 pb-32 md:pb-40 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#03966a]">
              Latest Insights
            </h2>
            <p className="text-xl leading-relaxed text-[#27393f] max-w-2xl mx-auto font-light">
              Explore our recent articles and guides to help you maintain a
              beautiful, healthy, and confident smile for life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {blogsData.map((blog) => (
              <Link
                to={`/blog/${blog.id}`}
                key={blog.id}
                className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-[#c0d2d8] hover:border-[#03966a] transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-[rgba(26,98,127,0.2)] hover:-translate-y-2"
              >
                {/* Image Wrapper */}
                <div className="w-full aspect-video overflow-hidden bg-[#eff4f5] relative">
                  <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#c0d2d8]">
                    <span className="text-[#03966a] text-xs font-bold tracking-widest uppercase">
                      {blog.category}
                    </span>
                  </div>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                {/* Content Body */}
                <div className="p-8 md:p-10 flex flex-col grow">
                  <h3 className="text-2xl font-bold mb-4 text-[#03966a] group-hover:text-[#03966a] transition-colors leading-snug line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-[#3a555f] leading-relaxed mb-8 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-between text-sm border-t border-[#c0d2d8] pt-6">
                    <span className="text-[#27393f] tracking-wider uppercase font-medium">
                      By {blog.author}
                    </span>
                    <div className="flex items-center text-[#03966a] font-bold group-hover:translate-x-2 transition-transform">
                      <span>Read Article</span>
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
