import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FILL_STYLE = {
  color: "rgba(85, 138, 120, 0.9)",
};

const textBaseClass =
  "block uppercase font-black font-['Futura','Helvetica_Neue','Arial',sans-serif] leading-[0.95] tracking-[-0.04em] whitespace-nowrap";

const HeroText = ({ refs = {} }) => {
  return (
    <div className="inline-flex flex-col items-center text-center leading-none select-none">
      <h1
        ref={refs.title1Ref}
        data-cursor="invert"
        className={`${textBaseClass} cursor-heading text-[13vw] sm:text-[11vw] md:text-[8.4vw]`}
        style={FILL_STYLE}
      >
        Radiant Smiles
      </h1>

      <h1
        ref={refs.title2Ref}
        data-cursor="invert"
        className={`${textBaseClass} cursor-heading text-[12vw] sm:text-[10vw] md:text-[8.1vw]`}
        style={FILL_STYLE}
      >
        are
      </h1>

      <h1
        ref={refs.title3Ref}
        data-cursor="invert"
        className={`${textBaseClass} cursor-heading text-[11.5vw] sm:text-[9.8vw] md:text-[8.4vw]`}
        style={FILL_STYLE}
      >
        Our Specialty
      </h1>
    </div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const title3Ref = useRef(null);

  const imageCard1Ref = useRef(null);
  const imageCard2Ref = useRef(null);
  const imageCard3Ref = useRef(null);

  const mobileImageCard1Ref = useRef(null);
  const mobileImageCard2Ref = useRef(null);
  const mobileImageCard3Ref = useRef(null);

  const videoAnchorRef = useRef(null);
  const videoOverlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          title1Ref.current,
          title2Ref.current,
          title3Ref.current,
          imageCard1Ref.current,
          imageCard2Ref.current,
          imageCard3Ref.current,
          mobileImageCard1Ref.current,
          mobileImageCard2Ref.current,
          mobileImageCard3Ref.current,
        ],
        { opacity: 0, y: 80 },
      );

      gsap.set(videoOverlayRef.current, { opacity: 0, y: 60 });

      const introTl = gsap.timeline({ defaults: { ease: "power3.out" } });

      introTl.to(
        [title1Ref.current, title2Ref.current, title3Ref.current],
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.14,
        },
        0,
      );

      introTl.to(
        [
          imageCard1Ref.current,
          imageCard2Ref.current,
          imageCard3Ref.current,
          mobileImageCard1Ref.current,
          mobileImageCard2Ref.current,
          mobileImageCard3Ref.current,
          videoOverlayRef.current,
        ],
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.08,
        },
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
    ) {
      return;
    }

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
          rotate: -6,
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
        {
          opacity: 0.14,
          scale: 0.99,
          ease: "none",
          duration: 0.7,
        },
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
      className="relative z-40 h-screen w-full overflow-hidden isolate"
    >
      <div
        ref={contentRef}
        className="relative z-30 flex h-full w-full items-center justify-center px-4 sm:px-6 md:px-10"
      >
        <div
          ref={imageCard1Ref}
          className="absolute left-[4%] top-[12%] hidden md:block w-[14vw] max-w-[220px] min-w-[140px]"
        >
          <div className="rotate-[-6deg] origin-center">
            <div className="relative overflow-hidden rounded-[32px_32px_10px_32px] shadow-[0_22px_70px_rgba(0,0,0,0.10)]">
              <img
                src="/assets/seat_1.jpg"
                alt="Dental clinic chair"
                className="h-[18vw] max-h-[280px] min-h-[180px] w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div
          ref={imageCard2Ref}
          className="absolute right-[6%] top-[14%] hidden md:block w-[16vw] max-w-[250px] min-w-[150px]"
        >
          <div className="rotate-[5deg] origin-center">
            <div className="relative overflow-hidden rounded-[999px] shadow-[0_22px_70px_rgba(0,0,0,0.10)]">
              <img
                src="/assets/seat_2.jpg"
                alt="Dental clinic interior"
                className="h-[11vw] max-h-[180px] min-h-[120px] w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div
          ref={imageCard3Ref}
          className="absolute right-[10%] bottom-[12%] hidden md:block w-[15vw] max-w-[230px] min-w-[150px]"
        >
          <div className="rotate-[7deg] origin-center">
            <div className="relative overflow-hidden rounded-[22px_48px_22px_48px] shadow-[0_22px_70px_rgba(0,0,0,0.10)]">
              <img
                src="/assets/seat_3.jpg"
                alt="Dental setup"
                className="h-[17vw] max-h-[260px] min-h-[170px] w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div
          ref={mobileImageCard1Ref}
          className="absolute left-[6%] top-[18%] md:hidden w-[22vw] max-w-[110px]"
        >
          <div className="rotate-[-6deg] origin-center">
            <div className="relative overflow-hidden rounded-[24px_24px_8px_24px] shadow-[0_14px_34px_rgba(0,0,0,0.09)]">
              <img
                src="/assets/seat_1.jpg"
                alt="Dental clinic chair"
                className="h-[28vw] max-h-[130px] w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div
          ref={mobileImageCard2Ref}
          className="absolute right-[6%] top-[19%] md:hidden w-[24vw] max-w-[120px]"
        >
          <div className="rotate-[5deg] origin-center">
            <div className="relative overflow-hidden rounded-[999px] shadow-[0_14px_34px_rgba(0,0,0,0.09)]">
              <img
                src="/assets/seat_2.jpg"
                alt="Dental clinic interior"
                className="h-[18vw] max-h-[90px] w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div
          ref={mobileImageCard3Ref}
          className="absolute left-[8%] bottom-[18%] md:hidden w-[22vw] max-w-[110px]"
        >
          <div className="rotate-[6deg] origin-center">
            <div className="relative overflow-hidden rounded-[18px_34px_18px_34px] shadow-[0_14px_34px_rgba(0,0,0,0.09)]">
              <img
                src="/assets/seat_3.jpg"
                alt="Dental setup"
                className="h-[28vw] max-h-[130px] w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 z-40 flex items-center justify-center">
          <HeroText
            refs={{
              title1Ref,
              title2Ref,
              title3Ref,
            }}
          />
        </div>

        <div
          ref={videoAnchorRef}
          className="
            absolute z-0 opacity-0 pointer-events-none
            left-[56%] bottom-[8%] w-[28vw] h-[18vw]
            sm:left-[58%] sm:bottom-[8%] sm:w-[24vw] sm:h-[15vw]
            md:left-[12%] md:bottom-[6%] md:w-[18vw] md:h-[11vw]
            lg:left-[10%] lg:bottom-[12%] lg:w-[17vw] lg:h-[11vw]
          "
        />
      </div>

      <div
        ref={videoOverlayRef}
        className="pointer-events-none absolute z-[25] overflow-hidden bg-black will-change-[width,height,left,top,border-radius,transform]"
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

        <div className="absolute left-3 bottom-3 z-30 text-left text-white md:left-4 md:bottom-4">
          <p className="text-[9px] font-medium uppercase tracking-[0.18em] sm:text-[10px]">
            Clinic Tour
          </p>
          <p className="mt-1 text-[11px] leading-tight sm:text-xs md:text-sm">
            Scroll to enter
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
