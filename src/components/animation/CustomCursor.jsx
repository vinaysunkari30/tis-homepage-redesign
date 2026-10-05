import { motion, useSpring } from "framer-motion";
import { useMousePosition } from "../../hooks/useMousePosition";

export default function CustomCursor() {
  const { position, isHovering, isVisible, isTouch } = useMousePosition();

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const x = useSpring(position.x, springConfig);
  const y = useSpring(position.y, springConfig);

  // Update spring targets when position changes
  x.set(position.x);
  y.set(position.y);

  if (isTouch) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-difference"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 56 : 36,
          height: isHovering ? 56 : 36,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <div
          className="w-full h-full rounded-full border-2 transition-colors duration-200"
          style={{
            borderColor: isHovering ? "#C09D59" : "rgba(255,255,255,0.8)",
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-difference"
        style={{
          x: position.x,
          y: position.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 8 : 5,
          height: isHovering ? 8 : 5,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            backgroundColor: isHovering ? "#C09D59" : "white",
          }}
        />
      </motion.div>
    </>
  );
}
