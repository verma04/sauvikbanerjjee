import React from "react";
import { motion, Transition, SVGMotionProps } from "framer-motion";
import { Box } from "@chakra-ui/react";

const MenuToggle = ({
  isOpen = false,
  width = 24,
  height = 23,
  strokeWidth = 2,

  lineProps = null,
  onClick,
  ...props
}) => {
  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: -2,
    },
  };
  lineProps = {
    stroke: "#ffffff",
    strokeWidth: 3,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,

    ...lineProps,
  };

  return (
    <Box zIndex={1000} onClick={onClick} className="svg-btn">
      {isOpen && (
        <svg
          width="40"
          height="40"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="24.5" stroke="white" />
          <rect
            x="17.8508"
            y="16.8498"
            width="22.5614"
            height="1.6921"
            rx="0.846052"
            transform="rotate(45 17.8508 16.8498)"
            fill="#D9D9D9"
          />
          <rect
            x="16.7228"
            y="32.6428"
            width="22.5614"
            height="1.6921"
            rx="0.846052"
            transform="rotate(-45 16.7228 32.6428)"
            fill="#D9D9D9"
          />
        </svg>
      )}
      {!isOpen && (
        <svg
          width="35"
          height="29"
          viewBox="0 0 40 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="3" rx="1.5" fill="white" />
          <rect x="20" y="13" width="20" height="3" rx="1.5" fill="white" />
          <rect x="10" y="26" width="30" height="3" rx="1.5" fill="white" />
        </svg>
      )}
    </Box>
  );
};

export default MenuToggle;
