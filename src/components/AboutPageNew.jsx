import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutPage() {
  const sceneRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
    layoutEffect: false,
  });

  // Hero animation
  const heroScale = useTransform(scrollYProgress, [0, 0.55], [1.12, 1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.35, 0.55], [1, 1, 0]);
  const heroTextOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.35],
    [1, 1, 0],
  );
  const heroTextY = useTransform(scrollYProgress, [0, 0.35], [0, -60]);

  // About reveal panel
  const aboutY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.45, 0.65],
    ["100%", "85%", "25%", "0%"],
  );
  const aboutScale = useTransform(scrollYProgress, [0, 0, 1], [0.75, 0.85, 1]);
  const aboutRadius = useTransform(
    scrollYProgress,
    [0, 0.45, 0.65],
    [36, 36, 0],
  );
  const aboutOpacity = useTransform(scrollYProgress, [0.08, 0.2], [0.75, 1]);

  const scrollHintOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.2],
    [1, 1, 0],
  );

  return (
    <div className="bg-[#f8fffa] text-[#03966a] min-h-screen">
      {/* Sticky reveal scene */}
      <section ref={sceneRef} className="relative h-[220vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Hero image */}
          <motion.div
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="absolute inset-0 z-0"
          >
            <img
              src="/assets/Dental-Health-Checkup.jpg"
              alt="Sarangi Dentistry Clinic"
              className="w-full h-full object-cover brightness-[0.55]"
            />
          </motion.div>

          {/* Hero content */}
          <motion.div
            style={{ opacity: heroTextOpacity, y: heroTextY }}
            className="absolute inset-0 z-10 flex items-center justify-center"
          >
            <div className="text-center px-6 max-w-5xl">
              <h1 className="text-5xl text-white md:text-7xl lg:text-8xl font-black tracking-tighter uppercase mb-6 drop-shadow-2xl">
                Creating Beautiful <br className="hidden md:block" /> Smiles
              </h1>
              <p className="text-2xl md:text-4xl font-light text-white mb-8">
                at Sarangi Dentistry
              </p>
              <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
                Leading multi-specialty dental clinic in Bhubaneswar delivering
                holistic, personalized care with cutting-edge technology and
                compassionate experts.
              </p>
            </div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            style={{ opacity: scrollHintOpacity }}
            className="absolute w-full bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center text-[#f5f9eb] text-sm tracking-widest uppercase"
          >
            <span>Scroll to discover more</span>
            <div className="w-px h-16 bg-gradient-to-b from-[#f5f9eb] via-white/70 to-transparent mt-3" />
          </motion.div>

          {/* About intro panel */}
          <motion.div
            style={{
              y: aboutY,
              scale: aboutScale,
              opacity: aboutOpacity,
              borderTopLeftRadius: aboutRadius,
              borderTopRightRadius: aboutRadius,
            }}
            className="absolute inset-0 z-20 bg-[#f8fffa] origin-bottom"
          >
            <div className="h-screen flex items-center justify-center px-6 pt-10 md:pt-0 md:px-12 lg:px-20">
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-10 text-[#03966a]">
                  About Sarangi Dentistry
                </h2>

                <div className="max-w-4xl mx-auto text-lg md:text-xl text-[#27393f] leading-relaxed space-y-8">
                  <p>
                    Sarangi Dentistry is a leading multi-specialty dental clinic
                    in Bhubaneswar. Our commitment is to deliver a holistic and
                    personalized dental experience, guided by a team of experts,
                    cutting-edge technology, and patient-centric treatment
                    plans.
                  </p>

                  <p>
                    At Sarangi Dentistry, we boast an exceptional team
                    comprising experienced staff under the guidance of
                    board-certified and award-winner{" "}
                    <span className="text-[#03966a] font-semibold">
                      Dr. Soumendra Sarangi
                    </span>
                    . Our clinic is equipped with state-of-the-art dental
                    technology, including CAD/CAM and OPG, complemented by a
                    sophisticated sterilization facility and laboratory.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Normal page content — same single page scroll */}
      <section className="relative z-30 bg-[#f8fffa] px-6 md:px-12 lg:px-20 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto space-y-32">
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#03966a]">
              What Makes Us the Perfect Partner of Your Dental Health?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Our Commitment to Excellence",
                  text: "With a focus on preventive dentistry and patient education, we strive for excellence in every aspect of our practice. Our dedication to quality is evident in the materials and equipment we utilize, backed by warranties wherever applicable.",
                },
                {
                  title: "Patient-Centered Approach",
                  text: "Understanding that each individual has unique needs, we prioritize thorough discussions of treatment plans and payment options with our patients. We aim to empower you with personalized preventive and treatment strategies.",
                },
                {
                  title: "Unmatched Team of Specialists",
                  text: "Our team comprises highly trained and experienced dental specialist Dr. Soumendra Sarangi, a well-renowned professional in the dentistry field. We set and maintain stringent quality benchmarks.",
                },
                {
                  title: "Stringent Sterilization Protocols",
                  text: "At Sarangi Dentistry, we uphold the highest standards of hygiene and sterilization. Our dedicated sterilization room and meticulous instrument handling protocols guarantee a safe and sterile environment for our patients.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="bg-white border border-[#c0d2d8] rounded-3xl p-8 hover:border-[#03966a] hover:shadow-xl transition-all duration-500"
                >
                  <h3 className="text-2xl font-semibold mb-5 text-[#03966a]">
                    {item.title}
                  </h3>
                  <p className="text-[#3a555f] leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12"
          >
            <div className="bg-white p-10 md:p-12 rounded-3xl border border-[#c0d2d8] shadow-lg">
              <div className="text-[#03966a] uppercase tracking-widest text-sm font-medium mb-6">
                Our Mission
              </div>
              <h3 className="text-3xl font-bold mb-6 text-[#03966a]">
                Enhance the oral health and well-being of our patients
              </h3>
              <p className="text-[#3a555f] leading-relaxed text-lg">
                At Sarangi Dentistry, our mission is to enhance the oral health
                and well-being of our patients through personalized,
                comprehensive dental care. We believe in fostering long-lasting
                relationships built on trust, integrity, and respect.
              </p>
            </div>

            <div className="bg-white p-10 md:p-12 rounded-3xl border border-[#c0d2d8] shadow-lg">
              <div className="text-[#03966a] uppercase tracking-widest text-sm font-medium mb-6">
                Our Vision
              </div>
              <h3 className="text-3xl font-bold mb-6 text-[#03966a]">
                Redefine the dental experience
              </h3>
              <p className="text-[#3a555f] leading-relaxed text-lg">
                At Sarangi Dentistry, our vision is to redefine the dental
                experience by setting new standards of excellence in patient
                care, innovation, and community engagement. We envision a future
                where every smile reflects not just health and beauty but also
                the warmth of compassionate care and the precision of
                cutting-edge technology.
              </p>
            </div>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#03966a]">
              Our Values
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  num: "01",
                  title: "Excellence",
                  desc: "We uphold the highest standards of clinical excellence and continually invest in advanced technologies and techniques to deliver superior dental care.",
                },
                {
                  num: "02",
                  title: "Compassion",
                  desc: "Your comfort and satisfaction are our top priorities. We approach each patient with empathy, understanding, and a gentle touch.",
                },
                {
                  num: "03",
                  title: "Integrity",
                  desc: "We are dedicated to honesty, transparency, and ethical practices in all aspects of our work.",
                },
                {
                  num: "04",
                  title: "Collaboration",
                  desc: "We believe in teamwork and collaborate closely with our patients to develop personalized treatment plans that meet their needs and goals.",
                },
                {
                  num: "05",
                  title: "Community",
                  desc: "We are proud to serve the local community and actively participate in outreach programs and initiatives to promote oral health education and awareness.",
                },
              ].map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="bg-white rounded-2xl p-7 border border-[#c0d2d8] hover:border-[#03966a] shadow-sm hover:shadow-md transition-all"
                >
                  <div className="text-4xl font-black text-[#03966a] mb-4">
                    {v.num}
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-[#03966a]">
                    {v.title}
                  </h4>
                  <p className="text-[#3a555f] text-[15px] leading-relaxed">
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </section>
    </div>
  );
}
