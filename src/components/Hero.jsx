import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { TextAnimate } from "./TextAnimate";

const HERO_PAIRS = [
  {
    head: "Radiant Smiles are Our Specialty",
    subhead:
      "Sophisticated dental procedures and advanced treatments carefully tailored to enhance your smile, delivering natural-looking, long-lasting results that boost both confidence and overall oral health.",
    image: "/assets/seat_1.jpg",
  },
  {
    head: "Artistic Smile Rejuvenation",
    subhead:
      "Specializing in aesthetic and functional smile restorations, we utilize advanced dental implant techniques and cutting-edge procedures—ranging from minimally invasive solutions to ultra-modern laser surgeries—to deliver precise, comfortable.",
    image: "/assets/seat_2.jpg",
  },
  {
    head: "Confidence in Every Smile",
    subhead:
      "Experience customized porcelain and ceramic crowns meticulously designed and crafted to perfection, combining superior craftsmanship with cutting-edge technology to restore the natural beauty, strength, and vitality of your teeth.",
    image: "/assets/seat_3.jpg",
  },
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
    <div className="absolute inset-0 z-40 flex items-center px-4 mobile:px-10 desktop:px-20 pointer-events-none">
      <div className="w-full h-full max-w-7xl mx-auto flex items-center relative">
        {/* 
          RIGHT SIDE IMAGE CAROUSEL 
        */}
        <div
          className={`
            absolute flex items-center justify-end z-0
            
            left-[5%] top-[12%] w-[90%] mobile:w-[80%] h-[36%] mobile:h-[40%]
            
            /* --- DESKTOP CUSTOMIZATION --- */
            tablet:left-auto tablet:right-[4%] tablet:top-[16%] tablet:w-[26%] tablet:h-[68%]
          `}
        >
          <div className="relative w-full h-full rounded-[32px] overflow-hidden shadow-2xl">
            <AnimatePresence initial={false}>
              <motion.div
                key={index}
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
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
        </div>

        {/* 
          LEFT SIDE TEXT CAROUSEL 
        */}
        <div
          className={`
            relative z-10 flex flex-col items-end text-right mr-auto
            
            w-full mt-[85%] mobile:mt-[60%] pr-[5%]
            
            tablet:w-[60%] tablet:pr-[12%] desktop:pr-[8%]
            tablet:mt-[0%] tablet:mb-[5%]
          `}
        >
          <AnimatePresence mode="wait">
            <div
              key={index}
              className="flex flex-col items-end gap-4 tablet:gap-6 w-full pointer-events-auto cursor-heading"
              data-cursor="invert"
            >
              <TextAnimate
                text={HERO_PAIRS[index].head}
                by="word"
                className="block font-black font-['Futura','Helvetica_Neue','Arial',sans-serif] leading-[1.05] tracking-[-0.04em] text-[clamp(2rem,7vw,5rem)] text-[#1e342b] drop-shadow-md pb-2"
              />
              <TextAnimate
                text={HERO_PAIRS[index].subhead}
                by="word"
                delay={0.25}
                className="text-base mobile:text-lg tablet:text-xl desktop:text-2xl text-[#1e342b] leading-relaxed max-w-[95%] tablet:max-w-[90%] font-semibold drop-shadow-sm"
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
    if (
      !containerRef.current ||
      !videoAnchorRef.current ||
      !videoOverlayRef.current ||
      !contentRef.current
    )
      return;

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

      tl.to(
        overlay,
        {
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          borderRadius: 0,
          rotate: 0,
          ease: "none",
          duration: 1,
        },
        0,
      );
      tl.to(
        content,
        { autoAlpha: 0, scale: 0.99, ease: "none", duration: 0.7 },
        0.05,
      );
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
    <section
      ref={containerRef}
      className="relative z-40 h-screen w-full overflow-hidden isolate bg-fixed bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/assets/sketch%20it%20-sarangi.png')" }}
    >
      <div
        ref={contentRef}
        className="relative z-10 flex h-full w-full items-center justify-center"
      >
        <HeroCarousel />

        <div
          ref={videoAnchorRef}
          className="
            absolute z-0 opacity-0 pointer-events-none
            
            left-[2%] bottom-[48%] w-[42%] h-[16%]
            mobile:left-[5%] mobile:bottom-[45%] mobile:w-[35%] mobile:h-[15%]
            
            tablet:left-[6%] tablet:bottom-[6%] tablet:w-[22%] tablet:h-[14%]
            desktop:left-[8%] desktop:bottom-[8%] desktop:w-[18%] desktop:h-[11%]
          "
        />
      </div>

      <div
        ref={videoOverlayRef}
        className="pointer-events-none absolute z-[35] overflow-hidden bg-black will-change-[width,height,left,top,border-radius,transform]"
        style={{ width: 0, height: 0 }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/assets/Dental-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute left-3 bottom-3 z-30 text-left text-white tablet:left-4 tablet:bottom-4">
          <p className="text-[9px] font-medium uppercase tracking-[0.18em] mobile:text-[10px]">
            Clinic Tour
          </p>
          <p className="mt-1 text-[11px] leading-tight mobile:text-xs tablet:text-sm">
            Scroll to enter
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
