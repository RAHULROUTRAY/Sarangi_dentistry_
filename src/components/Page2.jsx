import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
const ParallaxCard = ({ card }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Replaces locomotive 'data-scroll-speed="-1"' to make the image slide smoothly upwards on scroll
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  // A subtle scaling makes it look beautifully large and immersive while scrolling
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <div
      ref={ref}
      className="group relative h-screen w-full lg:w-[31%] overflow-hidden rounded-2xl"
    >
      {/* Background Image with Parallax & Hover Scaling */}
      <motion.img
        style={{ y, scale }}
        src={card.img}
        alt={card.title}
        className="absolute inset-0 h-[130%] -top-[15%] w-full object-cover object-[-1140px_center] group-hover:scale-110 transition-transform duration-[1.5s] ease-out will-change-transform"
      />

      {/* Overlay card  */}
      <div
        className={`
          absolute z-10
          top-[45%] lg:top-[50%]           /
          left-1/2 -translate-x-1/2
          w-[75%] max-w-md
          bg-[#eff4f5] rounded-[40px]
          px-5 py-3.5
          shadow-[0_10px_30px_rgba(0,0,0,0.15)]
          transition-all duration-400 ease-out
          h-[50px] overflow-hidden
          group-hover:h-[250px] group-hover:rounded-xl
        `}
      >
        <h4
          className="
            text-[14px] tracking-[2px] text-[#1a627f] font-semibold
            text-center lg:text-left
          "
        >
          DENTAL CARE
        </h4>

        {/* on hover */}
        <div
          className="
            mt-2.5 opacity-0 transition-opacity duration-300 ease-in-out
            group-hover:opacity-100
          "
        >
          <h3 className="text-[20px] leading-tight font-semibold mb-2 text-[#131c20] text-center lg:text-left">
            {card.title}
          </h3>
          <p className="text-[14px] leading-[1.5] text-[#3a555f] mb-3 text-center lg:text-left">
            {card.desc}
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link
              to="/book-appointment"
              className="
                px-[18px] py-[10px] bg-[#1a627f] text-[#f5f9eb]
                text-[12px] tracking-[1px] uppercase rounded-[20px]
                hover:bg-[#114255] transition-colors inline-block text-center
              "
            >
              BOOK APPOINTMENT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Page2 = () => {
  const cards = [
    {
      img: "https://sarangidentistry.in/wp-content/uploads/2024/03/Slider.png",
      title: "Radiant Smiles are Our Specialty",
      desc: "Sophisticated dental procedures and treatments tailored to enhance your smile with natural-looking results.",
    },
    {
      img: "https://sarangidentistry.in/wp-content/uploads/2024/01/Slider-2.png",
      title: "Artistic Smile Rejuvenation",
      desc: "Specializing in aesthetic and functional smile restorations using advanced dental implant methods, ranging from minimally invasive to ultra-modern laser surgeries.",
    },
    {
      img: "https://sarangidentistry.in/wp-content/uploads/2024/01/Slider-3.png",
      title: "Confidence in Every Smile",
      desc: "Customized porcelain & ceramic crowns crafted with perfection showcasing quality craftsmanship and advanced technology to beautifully restore form, function, and vitality of your teeth.",
    },
  ];

  return (
    <div className="min-h-screen w-full py-12 px-4 lg:px-[1vw] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
      {cards.map((card, i) => (
        <ParallaxCard key={i} card={card} />
      ))}
    </div>
  );
};

export default Page2;



