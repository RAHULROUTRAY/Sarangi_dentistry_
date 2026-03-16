import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function AboutPage() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
    layoutEffect: false,
  });

  // Hero title fade + slight lift
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.25], [0, -80]);

  // Central hero image scale + subtle zoom out
  const heroScale = useTransform(scrollYProgress, [0, 0.35], [1.15, 1]);

  // Surrounding / accent elements fade in later
  const accentOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
  const accentY = useTransform(scrollYProgress, [0.1, 0.35], [60, 0]);

  return (
    <div className="bg-[#f5f9eb] text-[#03966a] min-h-screen">
      {/* Tall scroll container — gives breathing room for animations */}
      <div
        ref={containerRef}
        className="relative h-[220vh] md:h-[280vh] lg:h-[320vh]"
      >
        {/* Sticky hero section */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[linear-gradient(180deg,_#f5f9eb_0%,_#e7f0e8_28%,_#cedfd8_55%,_#9ab4ad_78%,_#5f7f7b_100%)]">
          {/* Background image with overlay */}
          <motion.div
            style={{ scale: heroScale }}
            className="absolute inset-0 z-0"
          >
            <img
              src="/assets/Dental-Health-Checkup.jpg"
              alt="Sarangi Dentistry Clinic"
              className="w-full h-full object-cover brightness-[0.65]"
            />
            <div className="absolute inset-0 bg-transparent" />
          </motion.div>

          {/* Main hero content */}
          <motion.div
            style={{ opacity: titleOpacity, y: titleY }}
            className="relative z-10 text-center px-6 max-w-5xl"
          >
            <h1 className="text-5xl text-[#fefae0] md:text-7xl lg:text-8xl font-black tracking-tighter uppercase mb-6 drop-shadow-2xl">
              Creating Beautiful <br className="hidden md:block" /> Smiles
            </h1>
            <p className="text-2xl md:text-4xl font-light text-[#ffffff] mb-8">
              at Sarangi Dentistry
            </p>
            <p className="text-lg md:text-xl text-[#fefae0] max-w-3xl mx-auto leading-relaxed">
              Leading multi-specialty dental clinic in Bhubaneswar delivering holistic, personalized care with cutting-edge technology and compassionate experts.
            </p>
          </motion.div>

          {/* Scroll prompt */}
          <motion.div
            style={{ opacity: accentOpacity }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#03966a] text-sm tracking-widest uppercase"
          >
            <span>Scroll to discover more</span>
            <div className="w-px h-16 bg-gradient-to-b from-[#03966a] via-[#c0d2d8] to-transparent mt-3" />
          </motion.div>
        </div>
      </div>

      {/* Main content sections – regular flow after sticky hero */}
      <div className="relative z-10 bg-[#f5f9eb] -mt-32 pt-40 pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto space-y-32">

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-10 text-[#03966a]">
              About Sarangi Dentistry
            </h2>
            <div className="max-w-4xl mx-auto text-lg md:text-xl text-[#27393f] leading-relaxed space-y-8">
              <p>
                Sarangi Dentistry is a leading multi-specialty dental clinic in Bhubaneswar. Our commitment is to deliver a holistic and personalized dental experience, guided by a team of experts, cutting-edge technology, and patient-centric treatment plans.
              </p>
              <p>
                At Sarangi Dentistry, we boast an exceptional team comprising experienced staff under the guidance of board-certified and award-winner <span className="text-[#03966a] font-semibold">Dr. Soumendra Sarangi</span>. Our clinic is equipped with state-of-the-art dental technology, including CAD/CAM and OPG, complemented by a sophisticated sterilization facility and laboratory. Each treatment chamber is designed to offer a serene ambiance, customizable to your preferences for temperature and entertainment, ensuring a comfortable and stress-free experience.
              </p>
            </div>
          </motion.section>

          {/* What Makes Us Perfect Partner */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
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
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="bg-white border border-[#c0d2d8] rounded-3xl p-8 hover:border-[#03966a] hover:shadow-xl hover:shadow-[#c0d2d8] transition-all duration-500"
                >
                  <h3 className="text-2xl font-semibold mb-5 text-[#03966a]">{item.title}</h3>
                  <p className="text-[#3a555f] leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Mission + Vision */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="grid md:grid-cols-2 gap-12"
          >
            <div className="bg-gradient-to-br from-white to-[#f5f9eb] p-10 md:p-12 rounded-3xl border border-[#c0d2d8] shadow-lg">
              <div className="text-[#03966a] uppercase tracking-widest text-sm font-medium mb-6">Our Mission</div>
              <h3 className="text-3xl font-bold mb-6 text-[#03966a]">Enhance the oral health and well-being of our patients</h3>
              <p className="text-[#3a555f] leading-relaxed text-lg">
                At Sarangi Dentistry, our mission is to enhance the oral health and well-being of our patients through personalized, comprehensive dental care. We believe in fostering long-lasting relationships built on trust, integrity, and respect.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-[#f5f9eb] p-10 md:p-12 rounded-3xl border border-[#c0d2d8] shadow-lg">
              <div className="text-[#03966a] uppercase tracking-widest text-sm font-medium mb-6">Our Vision</div>
              <h3 className="text-3xl font-bold mb-6 text-[#03966a]">Redefine the dental experience</h3>
              <p className="text-[#3a555f] leading-relaxed text-lg">
                At Sarangi Dentistry, our vision is to redefine the dental experience by setting new standards of excellence in patient care, innovation, and community engagement. We envision a future where every smile reflects not just health and beauty but also the warmth of compassionate care and the precision of cutting-edge technology.
              </p>
            </div>
          </motion.div>

          {/* Our Values */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#03966a]">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { num: "01", title: "Excellence", desc: "We uphold the highest standards of clinical excellence and continually invest in advanced technologies and techniques to deliver superior dental care." },
                { num: "02", title: "Compassion", desc: "Your comfort and satisfaction are our top priorities. We approach each patient with empathy, understanding, and a gentle touch." },
                { num: "03", title: "Integrity", desc: "We are dedicated to honesty, transparency, and ethical practices in all aspects of our work." },
                { num: "04", title: "Collaboration", desc: "We believe in teamwork and collaborate closely with our patients to develop personalized treatment plans that meet their needs and goals." },
                { num: "05", title: "Community", desc: "We are proud to serve the local community and actively participate in outreach programs and initiatives to promote oral health education and awareness." },
              ].map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-7 border border-[#c0d2d8] hover:border-[#03966a] shadow-sm hover:shadow-md transition-all"
                >
                  <div className="text-4xl font-black text-[#03966a] mb-4">{v.num}</div>
                  <h4 className="text-xl font-semibold mb-3 text-[#03966a]">{v.title}</h4>
                  <p className="text-[#3a555f] text-[15px] leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  );
}



