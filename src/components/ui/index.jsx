import { motion } from "framer-motion";

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 relative overflow-hidden group";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25 hover:shadow-primary/40",
    secondary:
      "bg-secondary text-white hover:bg-secondary-dark shadow-lg shadow-secondary/25 hover:shadow-secondary/40",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-dark hover:bg-dark/5",
    accent:
      "bg-accent text-white hover:bg-accent-light shadow-lg shadow-accent/25",
    white:
      "bg-white text-dark hover:bg-cream shadow-lg",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-9 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      className={classes}
      href={href}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      data-cursor-hover
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </MotionComponent>
  );
}

export function SectionLabel({ children, className = "" }) {
  return (
    <div className="text-center">
      <span
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.15em] bg-accent/10 text-accent border border-accent/20 ${className}`}
     >
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
        {children}
      </span>
    </div>
  );
}

export function SectionTitle({ children, className = "" }) {
  return (
    <h2
      className={`font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] tracking-tight text-dark ${className}`}
    >
      {children}
    </h2>
  );
}

export function Card({ children, className = "", hover = true, ...props }) {
  return (
    <motion.div
      className={`bg-white rounded-2xl overflow-hidden ${hover ? "hover:shadow-2xl hover:shadow-black/8" : ""} transition-shadow duration-500 ${className}`}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
