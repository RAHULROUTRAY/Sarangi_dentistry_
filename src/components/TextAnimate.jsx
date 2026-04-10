import { motion } from "framer-motion";
import { useMemo } from "react";

const WORD_STAGGER = 0.08;
const CHAR_STAGGER = 0.03;
const WORD_EXIT_STAGGER = 0.04;
const CHAR_EXIT_STAGGER = 0.01;

const itemVariant = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    filter: "blur(4px)",
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const buildContainer = (by, delay) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: by === "word" ? WORD_STAGGER : CHAR_STAGGER,
      delayChildren: delay,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: by === "word" ? WORD_EXIT_STAGGER : CHAR_EXIT_STAGGER,
      staggerDirection: -1,
    },
  },
});

export const TextAnimate = ({ text, className, delay = 0, by = "word" }) => {
  const elements = by === "word" ? text.split(" ") : text.split("");
  const container = useMemo(() => buildContainer(by, delay), [by, delay]);

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
          variants={itemVariant}
          className={`inline-block ${by === "word" ? "mr-[0.25em]" : ""}`}
          style={{ whiteSpace: "pre" }}
        >
          {by === "word" ? el : el === " " ? "\u00A0" : el}
        </motion.span>
      ))}
    </motion.div>
  );
};
