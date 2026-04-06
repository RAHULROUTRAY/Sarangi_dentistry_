import React from "react";
import { motion } from "framer-motion";
import { SpinningTextBasic } from "./SpinningText";

const features = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#03966a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
    ),
    title: "Personalized Care",
    desc: "Every patient gets individual attention tailored exactly to their unique dental health goals and needs."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#03966a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
    title: "Expert Team",
    desc: "Highly experienced professionals dedicated to ensuring a completely comfortable and stress-free visit."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#03966a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    title: "Advanced Setup",
    desc: "Utilizing the latest technologies to offer precise, minimally invasive, and effective procedures."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#03966a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: "Lasting Results",
    desc: "Focused on providing durable, natural-looking restorations that boost both your smile and confidence."
  }
];

const Page2 = () => {
  return (
    <section className="w-full py-[10%] lg:py-[6%] px-[6%] lg:px-[8%] bg-[#f8fffa] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-[8%] lg:gap-[6%]">
        
        {/* Left Column: Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-[#03966a] font-semibold tracking-wide uppercase text-sm sm:text-base"
          >
            <span>&rarr;</span>
            <span>Why Choose Us</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] leading-tight cursor-heading"
            data-cursor="invert"
          >
            A Dental Care, Designed <span className="text-[#03966a]">Around Your Needs</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-gray-600 leading-relaxed max-w-[95%]"
          >
            Picking the right dentist can feel like a big decision, but we’re here to make it simple. We mix years of experience with a gentle touch so your visits are always comfortable and stress-free.
          </motion.p>

          <div className="flex flex-col gap-6 mt-4">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#03966a]/10 group-hover:text-[#03966a] transition-colors duration-300">
                  {feature.icon}
                </div>
                <div className="flex flex-col pt-1">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Staggered Image Grid */}
        <div className="w-full lg:w-1/2 mt-[15%] lg:mt-0 relative">
          <div className="grid grid-cols-2 gap-[4%] sm:gap-[6%]">
            
            {/* Left Grid Column (Offset Down) */}
            <div className="flex flex-col gap-[8%] pt-[15%]">
              
              <div className="relative w-full">
                {/* 
                  SPINNING TEXT BEHIND IMAGE 
                  Positioned precisely at the top-left corner.
                  Using z-0 for text and z-10 for the image ensures the image overlaps.
                */}
                <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-0 hidden sm:block">
                  <SpinningTextBasic />
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-xl relative z-10"
                >
                  <img src="/assets/Slider.png" alt="Dental Clinic" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="w-full aspect-[1/1] rounded-[24px] overflow-hidden shadow-xl"
              >
                <img src="/assets/Slider-3.png" alt="Happy Patient" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
            </div>

            {/* Right Grid Column (Offset Up) */}
            <div className="flex flex-col gap-[8%] pb-[15%]">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="w-full aspect-[3/4] rounded-[24px] overflow-hidden shadow-xl"
              >
                <img src="/assets/Slider-2.png" alt="Dental Care" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-xl"
              >
                <img src="/assets/customer-Page2-4th-img.jpg" alt="Dental Specialist" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </motion.div>
            </div>

          </div>
          
          {/* Optional Background blob for aesthetic */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square bg-[#03966a]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
};

export default Page2;