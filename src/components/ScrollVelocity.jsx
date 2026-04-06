import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

export const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function ScrollVelocityRow({ children, baseVelocity = 0, direction = 1, className = "" }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(direction);
  // Using 1 for time direction
  useAnimationFrame((t, delta) => {
    // to make scrolling slow by default
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000); 

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1 * direction;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1 * direction;
    }

    // When scrolling very fast
    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={`overflow-hidden flex whitespace-nowrap m-0 w-full ${className}`}>
      <motion.div className="flex whitespace-nowrap gap-12" style={{ x }}>
        {/* Render multiple children to ensure seamless wrapping */}
        <span className="block pr-12">{children}</span>
        <span className="block pr-12">{children}</span>
        <span className="block pr-12">{children}</span>
        <span className="block pr-12">{children}</span>
        <span className="block pr-12">{children}</span>
        <span className="block pr-12">{children}</span>
        <span className="block pr-12">{children}</span>
        <span className="block pr-12">{children}</span>
      </motion.div>
    </div>
  );
}

export function ScrollVelocityContainer({ children, className = "" }) {
  return <div className={`flex flex-col gap-4 w-full ${className}`}>{children}</div>;
}
