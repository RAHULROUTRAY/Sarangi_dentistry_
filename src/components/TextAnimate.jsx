import { motion } from "framer-motion";

export const TextAnimate = ({ text, className, delay = 0, by = "word" }) => {
  const elements = by === "word" ? text.split(" ") : text.split("");
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { 
        staggerChildren: by === "word" ? 0.08 : 0.03, 
        delayChildren: delay 
      }
    },
    exit: {
      opacity: 0,
      transition: { 
        staggerChildren: by === "word" ? 0.04 : 0.01, 
        staggerDirection: -1 
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)", 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      filter: "blur(4px)", 
      transition: { duration: 0.3, ease: "easeIn" } 
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className={className}
    >
      {elements.map((el, i) => (
        <motion.span 
          key={i} 
          variants={item} 
          className={`inline-block ${by === 'word' ? 'mr-[0.25em]' : ''}`} 
          style={{ whiteSpace: "pre" }}
        >
          {by === "word" ? el : (el === " " ? "\u00A0" : el)}
        </motion.span>
      ))}
    </motion.div>
  );
};
