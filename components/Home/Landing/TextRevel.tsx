//@ts-nocheck

import { useEffect } from "react";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChakraBox, ChakraHeading } from "../../../lib/Chakra";
import { Heading } from "@chakra-ui/react";

export default function TextRevel() {
  const text = "futurism decoded"; // This would normally be passed into this component as a prop!

  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,

        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
  return (
    <Heading
      justifyContent={"center"}
      display={"flex"}
      width={"100%"}
      aria-label={text}
      role="heading"
    >
      {text.split(" ").map((word, index) => {
        return (
          <ChakraBox
            ml="2"
            display={"flex"}
            justifyContent="center"
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
          >
            {word.split("").map((character, index) => {
              return (
                <ChakraHeading
                  fontSize={["2rem", "2rem", "8vh", "8vh"]}
                  display={"inline-block"}
                  color="white"
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                  textTransform="uppercase"
                >
                  {character}
                </ChakraHeading>
              );
            })}
          </ChakraBox>
        );
      })}
    </Heading>
  );
}
