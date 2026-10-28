import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "../../lib/utils";

const defaultVariants = {
  hidden: {
    opacity: 0,
    y: 16,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const InView = ({
  children,
  variants = defaultVariants,
  transition,
  className,
  as: Component = "div",
  viewOptions = { once: true, margin: "-40px" },
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);

  const MotionComponent = motion[Component] || motion.div;

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      className={cn(className)}
    >
      {children}
    </MotionComponent>
  );
};

export default InView;

