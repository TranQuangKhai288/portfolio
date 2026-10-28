import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion, useSpring, useTransform } from "motion/react";
import { cn } from "../../lib/utils";

export const Spotlight = ({
  className,
  size = 400,
  springOptions = { bounce: 0 },
}) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useSpring(0, springOptions);
  const mouseY = useSpring(0, springOptions);

  const handleMouseMove = useCallback(
    (event) => {
      if (!containerRef.current) return;
      const { left, top } = containerRef.current.getBoundingClientRect();
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    const parent = containerRef.current?.parentElement;
    if (!parent) return;

    const onEnter = () => setIsHovered(true);
    const onLeave = () => setIsHovered(false);

    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseenter", onEnter);
    parent.addEventListener("mouseleave", onLeave);

    return () => {
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseenter", onEnter);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, [handleMouseMove]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <motion.div
        className="absolute rounded-full bg-radial from-zinc-200/20 via-zinc-400/5 to-transparent dark:from-white/[0.08] dark:via-white/[0.02] dark:to-transparent blur-xl"
        style={{
          width: size,
          height: size,
          x: useTransform(mouseX, (x) => x - size / 2),
          y: useTransform(mouseY, (y) => y - size / 2),
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
};

export default Spotlight;

