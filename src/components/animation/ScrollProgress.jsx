import { motion, useSpring } from "framer-motion";
import { useScrollProgress } from "../../hooks/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();
  // const scaleX = useSpring(progress, { stiffness: 120, damping: 25, mass: 0.2 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[4px] z-[9999] origin-left pointer-events-none rounded-xl"
      style={{
        scaleX: progress,
        background: 
        "linear-gradient(90deg, #B90124 0%, #C09D59 50%, #60BAB1 100%)",
      }}
    />
  );
}
