import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { cn } from "../../lib/utils";

export const MagicCard = ({
  children,
  className,
  gradientSize = 240,
  gradientColor = "rgba(255, 255, 255, 0.08)",
  gradientOpacity = 0.8,
  borderGradientColor = "rgba(255, 255, 255, 0.25)",
}) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e) => {
      if (!cardRef.current) return;
      const { left, top } = cardRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    },
    [mouseX, mouseY]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [mouseX, mouseY, gradientSize]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative rounded-xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-zinc-900/50 p-6 overflow-hidden transition-colors duration-200",
        className
      )}
    >
      {/* Background Interactive Radial Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 80%)
          `,
          opacity: isHovered ? gradientOpacity : 0,
        }}
      />

      {/* 1px Hairline Border Beam / Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize * 0.75}px circle at ${mouseX}px ${mouseY}px, ${borderGradientColor}, transparent 80%)
          `,
          maskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default MagicCard;

