import React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

const defaultContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const defaultItemVariants = {
  hidden: {
    opacity: 0,
    y: 8,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const TextEffect = ({
  children,
  per = "word",
  as: Component = "span",
  className,
  delay = 0,
  variants,
}) => {
  if (typeof children !== "string") {
    return <Component className={className}>{children}</Component>;
  }

  const items = per === "char" ? Array.from(children) : children.split(" ");
  const MotionComponent = motion[Component] || motion.span;

  const container = {
    ...defaultContainerVariants,
    visible: {
      ...defaultContainerVariants.visible,
      transition: {
        ...defaultContainerVariants.visible.transition,
        delayChildren: delay,
      },
    },
  };

  return (
    <MotionComponent
      variants={variants?.container || container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn("inline-block", className)}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={variants?.item || defaultItemVariants}
          className="inline-block whitespace-pre"
        >
          {item}
          {per === "word" && index < items.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </MotionComponent>
  );
};

export default TextEffect;

