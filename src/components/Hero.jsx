import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { TextAnimate } from "./TextAnimate";

gsap.registerPlugin(ScrollTrigger);

const HERO_PAIRS = [
  {
    head: "Radiant Smiles are Our Specialty",
    subhead: "Sophisticated dental procedures and advanced treatments carefully tailored to enhance your smile, delivering natural-looking, long-lasting results that boost both confidence and overall oral health.",
    image: "/assets/seat_1.jpg",
  },
  {
    head: "Artistic Smile Rejuvenation",
    subhead: "Specializing in aesthetic and functional smile restorations, we utilize advanced dental implant techniques and cutting-edge procedures—ranging from minimally invasive solutions to ultra-modern laser surgeries—to deliver precise, comfortable, and long-lasting results tailored to each patient.",
    image: "/assets/seat_2.jpg",
  },
  {
    head: "Confidence in Every Smile",
    subhead: "Experience customized porcelain and ceramic crowns meticulously designed and crafted to perfection, combining superior craftsmanship with cutting-edge technology to restore the natural beauty, strength, and vitality of your teeth, delivering long-lasting results with a flawless, lifelike appearance.",
    image: "/assets/seat_3.jpg",
  }
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_PAIRS.length);
    }, 7000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-40 flex items-center px-4 sm:px-10 lg:px-20 pointer-events-none">
      <div className="w-full h-full max-w-7xl mx-auto flex items-center relative">
        
        {/* RIGHT SIDE IMAGE CAROUSEL */}
        <div className="absolute right-0 top-[5%] md:top-1/2 md:-translate-y-1/2 w-[90%] md:w-[50%] h-[45vh] md:h-[75vh] flex items-center justify-end z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ filter: "blur(20px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              exit={{ filter: "blur(20px)", opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-full h-full rounded-[32px] overflow-hidden shadow-2xl relative"
            >
              <img 
                src={HERO_PAIRS[index].image} 
                className="w-full h-full object-cover" 
                alt="Clinic Setup" 
              />
              {/* Optional overlay to ensure text contrast if it goes over */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent mix-blend-overlay" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* LEFT SIDE TEXT CAROUSEL */}
        <div className="relative z-10 w-full md:w-[60%] flex flex-col items-end text-right mt-[40vh] sm:mt-[45vh] md:mt-0 mb-[5%] md:mb-[8%]">
          <AnimatePresence mode="wait">
            <div key={index} className="flex flex-col items-end gap-4 md:gap-6 w-full pointer-events-auto cursor-heading" data-cursor="invert">
              <TextAnimate 
                text={HERO_PAIRS[index].head} 
                by="word"
                className="block font-black font-['Futura','Helvetica_Neue','Arial',sans-serif] leading-[1.05] tracking-[-0.04em] text-[clamp(2rem,7vw,5rem)] text-[#1e342b] drop-shadow-md pb-2"
              />
              <TextAnimate 
                text={HERO_PAIRS[index].subhead} 
                by="word"
                delay={0.25}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#1e342b] leading-relaxed max-w-[95%] md:max-w-[90%] font-semibold drop-shadow-sm"
              />
            </div>
          </AnimatePresence>
        </div>
        
      </div>
    </div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const videoAnchorRef = useRef(null);
  const videoOverlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(videoOverlayRef.current, { opacity: 0, y: 60 });

      const introTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      introTl.to(
        [videoOverlayRef.current],
        { opacity: 1, y: 0, duration: 0.9 },
        0.2,
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!containerRef.current || !videoAnchorRef.current || !videoOverlayRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const anchor = videoAnchorRef.current;
      const overlay = videoOverlayRef.current;
      const content = contentRef.current;

      const placeOverlayOnAnchor = () => {
        const containerRect = container.getBoundingClientRect();
        const anchorRect = anchor.getBoundingClientRect();

        gsap.set(overlay, {
          position: "absolute",
          left: anchorRect.left - containerRect.left,
          top: anchorRect.top - containerRect.top,
          width: anchorRect.width,
          height: anchorRect.height,
          borderRadius: "32px",
          zIndex: 25,
          x: 0,
          y: 0,
          rotate: 0,
          force3D: true,
          transformOrigin: "center center",
          autoAlpha: 1,
        });
      };

      placeOverlayOnAnchor();

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=180%",
          pin: true,
          scrub: 0.9,
          invalidateOnRefresh: true,
          onRefresh: placeOverlayOnAnchor,
        },
      });

      tl.to(overlay, { left: 0, top: 0, width: "100%", height: "100%", borderRadius: 0, rotate: 0, ease: "none", duration: 1 }, 0);
      tl.to(content, { autoAlpha: 0, scale: 0.99, ease: "none", duration: 0.7 }, 0.05);
      tl.to({}, { duration: 0.25 });

      const handleResize = () => {
        placeOverlayOnAnchor();
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative z-40 h-screen w-full overflow-hidden isolate">
      <div ref={contentRef} className="relative z-30 flex h-full w-full items-center justify-center">
        
        <HeroCarousel />

        <div
          ref={videoAnchorRef}
          className="
            absolute z-0 opacity-0 pointer-events-none
            left-[4%] bottom-[2%] w-[35vw] h-[25vw]
            sm:left-[5%] sm:bottom-[5%] sm:w-[30vw] sm:h-[20vw]
            md:left-[6%] md:bottom-[6%] md:w-[22vw] md:h-[14vw]
            lg:left-[8%] lg:bottom-[8%] lg:w-[18vw] lg:h-[11vw]
          "
        />
      </div>

      <div
        ref={videoOverlayRef}
        className="pointer-events-none absolute z-[25] overflow-hidden bg-black will-change-[width,height,left,top,border-radius,transform]"
        style={{ width: 0, height: 0 }}
      >
        <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
          <source src="/assets/Dental-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute left-3 bottom-3 z-30 text-left text-white md:left-4 md:bottom-4">
          <p className="text-[9px] font-medium uppercase tracking-[0.18em] sm:text-[10px]">Clinic Tour</p>
          <p className="mt-1 text-[11px] leading-tight sm:text-xs md:text-sm">Scroll to enter</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
