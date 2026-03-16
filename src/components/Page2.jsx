import { Link } from "react-router-dom";

const ParallaxCard = ({ card }) => {
  return (
    <div
      className="
      group relative
      h-[350px] sm:h-[500px] md:h-[520px] lg:h-[400px]
      w-full lg:w-[31%]
      overflow-hidden rounded-2xl
      bg-cover bg-center
      flex items-end
      "
          style={{ backgroundImage: `url(${card.img})` }}
    >
      {/* Overlay card */}
      <div
        className="
        relative z-10
        bottom-[10%]
        left-1/2 -translate-x-1/2
        w-[85%] sm:w-[80%] lg:w-[75%]
        max-w-[420px]
        bg-[#eff4f5]
        rounded-[40px]
        px-[20px] py-[14px]
        shadow-[0_10px_30px_rgba(0,0,0,0.15)]
        transition-all duration-500 ease-out
        h-[50px]
        overflow-hidden
        group-hover:h-[250px]
        group-hover:rounded-xl
        "
      >
        <h4
          className="
          text-[14px]
          tracking-[2px]
          text-[#03966a]
          font-semibold
          text-center lg:text-left
          "
        >
          DENTAL CARE
        </h4>

        {/* Hover content */}
        <div
          className="
          mt-[10px]
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
          "
        >
          <h3
            className="
            text-[20px]
            leading-tight
            font-semibold
            mb-[8px]
            text-[#131c20]
            text-center lg:text-left
            "
          >
            {card.title}
          </h3>

          <p
            className="
            text-[14px]
            leading-[1.5]
            text-[#3a555f]
            mb-[12px]
            text-center lg:text-left
            "
          >
            {card.desc}
          </p>

          <div className="flex justify-center lg:justify-start">
            <Link
              to="/book-appointment"
              className="
              px-[18px]
              py-[10px]
              bg-[#03966a]
              text-[#f5f9eb]
              text-[12px]
              tracking-[1px]
              uppercase
              rounded-[20px]
              hover:bg-[#114255]
              transition-colors
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
      img: "/assets/Slider.png",
      title: "Radiant Smiles are Our Specialty",
      desc: "Sophisticated dental procedures and treatments tailored to enhance your smile with natural-looking results.",
    },
    {
      img: "/assets/Slider-2.png",
      title: "Artistic Smile Rejuvenation",
      desc: "Specializing in aesthetic and functional smile restorations using advanced dental implant methods, ranging from minimally invasive to ultra-modern laser surgeries.",
    },
    {
      img: "/assets/Slider-3.png",
      title: "Confidence in Every Smile",
      desc: "Customized porcelain & ceramic crowns crafted with perfection showcasing quality craftsmanship and advanced technology to beautifully restore form, function, and vitality of your teeth.",
    },
  ];

  return (
    <div
      className="
      w-full
      py-[40px]
      px-[20px] lg:px-[2%]
      flex flex-col lg:flex-row
      items-center
      justify-center
      gap-[30px]
      "
    >
      {cards.map((card, i) => (
        <ParallaxCard key={i} card={card} />
      ))}
    </div>
  );
};

export default Page2;