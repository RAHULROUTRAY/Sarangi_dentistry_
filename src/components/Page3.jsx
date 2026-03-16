import CountUp from "react-countup";
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const servicesData = [
  {
    id: 1,
    title: "Oral Hygiene",
    desc: "Professional plaque and tartar removal promoting healthy gum and preventing long-term dental issues.",
    color: "#8aa88d",
    bgImage: "/assets/dental-check-up-fleet-hampshire.jpg"
  },
  {
    id: 2,
    title: "Aesthetic",
    desc: "Professional smile designing for a healthy and happy smile that boosts your everyday confidence.",
    color: "#618e9e",
    bgImage: "/assets/dental-care-professional-stockcake.webp"
  },
  {
    id: 3,
    title: "Extraction",
    desc: "Painless removal of problematic teeth for overall well-being, utilizing modern anesthetics.",
    color: "#3a555f",
    bgImage: "/assets/Dental-Health-Checkup.jpg"
  },
  {
    id: 4,
    title: "Filling",
    desc: "High-quality composite restoration of teeth for enhanced functionality and invisible aesthetics.",
    color: "#27393f",
    bgImage: "/assets/Medline.jpg"
  },
  {
    id: 5,
    title: "Root Canal",
    desc: "Expert preservation of teeth, offering immediate relief of pain and restoring full bite functionality.",
    color: "#131c20",
    bgImage: "/assets/dental-staff.webp"
  },
  {
    id: 6,
    title: "Crown & Bridge",
    desc: "Protection of teeth and appearance with customized, highly durable ceramic and porcelain crowns.",
    color: "#0e1416",
    bgImage: "/assets/3-Qualities-To-Look-For.jpg"
  },
  {
    id: 7,
    title: "Implant",
    desc: "Permanent replacement of missing teeth with natural-looking titanium implants.",
    color: "#3a555f",
    bgImage: "/assets/teeth.png"
  },
  {
    id: 8,
    title: "Orthodontic",
    desc: "Achieve a straighter, perfect smile through modern braces and clear Invisalign aligners.",
    color: "#618e9e",
    bgImage: "/assets/dental-check-up-fleet-hampshire.jpg"
  },
];

export default function Page3() {
  const [cards, setCards] = useState(servicesData);
  const sectionRef = useRef(null);

  // Trigger animation when the section comes into the viewport
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });


  const handleDragEnd = (event, info) => {
    // If the card is dragged left or right beyond 100px count it as a "swipe"
    const threshold = 100;
    if (Math.abs(info.offset.x) > threshold) {
      // Swipe detected. Move the top card to the back of the deck.
      setCards((prevCards) => {
        const newCards = [...prevCards];
        const topCard = newCards.shift();
        newCards.push(topCard);
        return newCards;
      });
    }
  };
  return (
    <motion.div
      ref={sectionRef}
      className="min-h-[120vh] pt-12 pb-24 px-6 md:px-12 lg:px-20 flex items-center justify-center overflow-hidden relative"
    >
      {/* Dynamic Background Element */}
      <motion.div
        className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#b7e4c7] opacity-10 mix-blend-overlay rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#022431] opacity-20 mix-blend-overlay rounded-full blur-[100px] pointer-events-none scale-y-50 rotate-45"
      />

      <div className="z-10 w-full max-w-7xl mx-auto">

        {/* Split Layout Container */}
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-16 xl:gap-8">

          {/* LEFT SIDE: Text Content & Supportive Imagery */}
          <div className="w-full xl:w-5/12 text-[#03966a] text-center xl:text-left pt-0 xl:pt-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-mono font-black mb-8 leading-[1.1] tracking-tighter"
            >
              Modern Dental <br className="hidden xl:block" />
              <span className="text-[#283618] italic font-mono">Therapy</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-[#373d20] leading-relaxed font-mono mb-10 max-w-2xl mx-auto xl:mx-0"
            >
              Experience a new era of proactive oral care. We blend state-of-the-art technology with compassionate expertise to deliver treatments that are as comfortable as they are effective.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg font-mono font-bold text-[#283618] mb-12 max-w-2xl mx-auto xl:mx-0"
            >
              Whether you need routine maintenance, a total smile makeover, or restorative interventions, our comprehensive service lineup ensures your dental health is in the hands of master clinicians.
            </motion.p>

            {/* Small badges */}
   <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1, delay: 0.8 }}
  className="flex items-left justify-center xl:justify-start gap-8 border-t border-[#f3eff5] pt-8 mt-12 pl-6"
>
  <div>
    <h4 className="text-5xl font-mono font-bold mb-1 border-b-2 border-[#f3eff5] pb-2 inline-block">
      
      <CountUp
        start={0}
        end={15000}
        duration={2}
        separator=","
        enableScrollSpy
        scrollSpyOnce
      />
      +

    </h4>

<p className="text-6xl font-mono font-bold text-[#283618] uppercase">  
      Happy Smiles
    </p>
  </div>
</motion.div>
          </div>

          {/* RIGHT SIDE: Interactive Visuals */}
          <div className="w-full xl:w-6/12 flex flex-col items-center relative min-h-[700px] xl:min-h-[650px] justify-center mt-10 xl:mt-0">

            {/* Superimposed Circular Image Backdrop */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-2xl border border-[#c0d2d8] pointer-events-none"
              animate={{
                y: ["-54%", "-46%", "-54%"], 
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img
                src="/assets/teeth.png"
                alt="Abstract Dental Services"
                className="w-full h-full object-cover bg-[#022431] mix-blend-luminosity opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#022431] to-transparent rounded-full" />
            </motion.div>

            {/* The Interactive Card Deck */}
            <div className=" relative w-full max-w-[320px] md:max-w-[380px] aspect-[3/4] z-20 top-8">
              <AnimatePresence>
                {cards.map((service, index) => {
                  const isTop = index === 0;

                  // Render top 4 cards
                  if (index > 3) return null;

                  return (
                    <motion.div
                      key={service.id}
                      className="absolute inset-0 w-full h-full rounded-[2rem] overflow-hidden flex flex-col shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-[#c0d2d8] cursor-grab active:cursor-grabbing transform-origin-bottom"

                      layout 

                      // START STATE: 
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                        y: 100
                      }}

                      animate={{
                        opacity: isInView ? 1 : 0,
                        scale: isInView ? (1 - index * 0.06) : 0.8,       
                        y: isInView ? (index * 26) : 100,            
                        x: 0,                       
                        rotateZ: 0, 
                        zIndex: cards.length - index,
                        backgroundColor: `hsl(0, 0%, ${100 - index * 8}%)` 
                      }}

                      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}

                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        mass: 0.8
                      }}

                      drag={isTop ? "x" : false}
                      dragSnapToOrigin={true}
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.8}
                      onDragEnd={isTop ? handleDragEnd : undefined}
                    >
                      {/* Card Rich Background Image overlay */}
                      <div className="absolute inset-0 z-0 opacity-20 transition-opacity duration-500 pointer-events-none group-hover:opacity-30">
                        <img src={service.bgImage} alt="background" className="w-full h-full object-cover grayscale mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#b7e4c7] via-[#74c69d] to-[#40916c]" />
                      </div>

                      {/* Card Content Envelope */}
                      <div className="relative z-10 w-full h-full p-8 md:p-10 flex flex-col">

                        {/* Header Area */}
                        <div className="flex justify-between items-start mb-auto">
                          <div className="w-14 h-14 font-mono bg-[#dfe8ec] rounded-2xl flex items-center justify-center border border-[#c0d2d8] backdrop-blur-md">
                            <span className="text-xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-br from-[#27393f] to-[#6c9370]">
                              {service.id < 10 ? `0${service.id}` : service.id}
                            </span>
                          </div>

                          {/* Decorative Icon inside Card */}
                          <div className="w-10 h-10 rounded-full border border-[#c0d2d8] flex items-center justify-center opacity-40">
                            <svg className="w-4 h-4 text-[#27393f]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          </div>
                        </div>

                        {/* Main Text Area */}
                        <div className="mt-8 mb-4">
                          <h3 className="text-3xl font-mono font-bold text-[#27393f] mb-4 tracking-tight leading-tight">
                            {service.title}
                          </h3>
                          <p className="text-[#3a555f] leading-relaxed text-lg pb-4 border-b border-[#dfe8ec]">
                            {service.desc}
                          </p>
                        </div>

                        {/* Footer Action Area */}
                        {isTop ? (
                          <div className="mt-auto pt-4 flex items-center justify-center space-x-3 text-[#6c9370] text-sm font-mono font-bold tracking-[0.2em] uppercase rounded-xl bg-[#e2e9e2] py-3 border border-[#c4d4c6] animate-pulse">
                            <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            <span>Swipe</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                          </div>
                        ) : (
                          <div className="mt-auto pt-4 flex items-center justify-center space-x-3 text-[#a0bbc5] text-sm font-mono font-bold tracking-[0.2em] uppercase py-3 opacity-0">
                            <span>Waiting</span>
                          </div>
                        )}

                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

        </div>

        

      </div>
    </motion.div>
  );
}





