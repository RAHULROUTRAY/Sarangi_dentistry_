import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const titlesRef = useRef([]);
  const containerRef = useRef(null);
  const videoWrapperRef = useRef(null);

  useEffect(() => {
    // 1. Initial Hero Text Animation (from original Hero.jsx)
    gsap.set(titlesRef.current, { opacity: 0, y: 120 });
    const tlText = gsap.timeline({ defaults: { ease: "power3.out" } });

    tlText.to(titlesRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      delay: 0.4,
    });
  }, []);

  useEffect(() => {
    // 3. ScrollTrigger Animation for the Video
    if (videoWrapperRef.current && containerRef.current) {
      // Create the scroll animation timeline
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top", // Pin starts when container hits top of viewport
          end: "+=200%",    // Increased scroll duration for animation to account for the pause
          pin: true,        // Pin the container
          scrub: 1,         // Smooth scrubbing
        }
      });

      // Animate the video wrapper to take up the full screen
      scrollTl.to(videoWrapperRef.current, {
        width: "100vw",
        height: "100vh",
        borderRadius: "0px",
        ease: "none",
        duration: 1
      });
      
      // Hold the full screen video for a moment while scrolling
      scrollTl.to({}, { duration: 0.5 });
    }

    // Cleanup scroll triggers
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#f5f9eb]">

      {/* Centered Text Group */}
      <div className="relative z-10 flex flex-col items-center">
        <h1
          ref={(el) => (titlesRef.current[0] = el)}
          className="
            block text-[8.5vw] leading-[9vw] tracking-[-6px]
            uppercase font-black font-['Futura','Helvetica_Neue','Arial',sans-serif]
            text-[var(--color-ink-black-950)]
            will-change-transform backface-hidden translate-z-0 antialiased
          "
        >
          Radiant Smiles
        </h1>
        

        <h1
            ref={(el) => (titlesRef.current[1] = el)}
            className="
                block text-[8.5vw] leading-[9vw] tracking-[-6px]
                uppercase font-black font-['Futura','Helvetica_Neue','Arial',sans-serif]
                text-[#606c38]
                will-change-transform backface-hidden translate-z-0 antialiased
            "
          >
            are
          </h1> 

        

        {/* Inline wrapper for "are" and the video pill */}
        <div className="flex items-center justify-left gap-2 w-full">

          
          

          {/* The Video Pill (animates to fullscreen via GSAP) */}
          <div
            ref={videoWrapperRef}
            className="relative flex items-center justify-center overflow-hidden rounded-full will-change-transform "
           style={{ width: "15vw", height: "7vw" }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
            >
              <source src="/assets/Dental-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <h1
          ref={(el) => (titlesRef.current[2] = el)}
          className="
            block text-[8.5vw] leading-[9vw] tracking-[-6px]
            uppercase font-black font-['Futura','Helvetica_Neue','Arial',sans-serif]
            text-[var(--color-ink-black-950)]
            will-change-transform backface-hidden translate-z-0 antialiased
          "
        >
         Our Specialty
        </h1>
      </div>
    </div>
  );
};

export default Hero;
