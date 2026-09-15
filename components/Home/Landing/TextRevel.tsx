//@ts-nocheck

import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChakraBox } from "../../../lib/Chakra";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function TextRevel() {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    } else {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: "0.25em",
    },
    visible: {
      opacity: 1,
      y: "0em",
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const subtitleVariants = {
    hidden: {
      opacity: 0,
      y: "0.35em",
    },
    visible: {
      opacity: 1,
      y: "0em",
      transition: {
        duration: 1,
        delay: 0.35,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const titleWords = [
    { text: "Human", isTM: false },
    { text: "OS", isTM: true },
  ];

  return (
    <Box
      ref={ref}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      width="100%"
      pr={["1rem", "2rem", "4rem", "4rem"]}
      pl={["1rem", "2rem", "7rem", "11rem"]}
    >
      <ChakraBox
        as={motion.div}
        initial="hidden"
        animate={ctrls}
        variants={containerVariants}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          as="h2"
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          fontFamily="'Open Sans', sans-serif"
          fontWeight="700"
          fontSize={["2.6rem", "3.8rem", "5.4rem", "6.8rem"]}
          lineHeight="1"
          color="white"
          letterSpacing="-0.01em"
        >
          {titleWords.map((wordObj, wIdx) => (
            <Box
              key={wIdx}
              display="inline-flex"
              alignItems="flex-start"
              mr={wIdx < titleWords.length - 1 ? "0.22em" : "0"}
            >
              {wordObj.text.split("").map((char, cIdx) => (
                <ChakraBox
                  as={motion.span}
                  key={cIdx}
                  variants={letterVariants}
                  display="inline-block"
                  lineHeight="1"
                >
                  {char}
                </ChakraBox>
              ))}
              {wordObj.isTM && (
                <ChakraBox
                  as={motion.span}
                  variants={letterVariants}
                  display="inline-block"
                  fontSize={["0.22em", "0.22em", "0.24em", "0.24em"]}
                  fontWeight="400"
                  fontFamily="'Open Sans', sans-serif"
                  ml="0.18em"
                  lineHeight="1"
                  alignSelf="flex-start"
                  style={{ position: "relative", top: "0.05em" }}
                >
                  TM
                </ChakraBox>
              )}
            </Box>
          ))}
        </Heading>
      </ChakraBox>

      <ChakraBox
        as={motion.div}
        initial="hidden"
        animate={ctrls}
        variants={subtitleVariants}
        mt={["0.45rem", "0.55rem", "0.8rem", "1rem"]}
      >
        <Text
          fontFamily="'Open Sans', sans-serif"
          fontWeight="300"
          fontSize={["0.85rem", "1.1rem", "1.55rem", "1.9rem"]}
          letterSpacing={["0.28em", "0.36em", "0.46em", "0.52em"]}
          textTransform="uppercase"
          color="rgba(255, 255, 255, 0.95)"
          lineHeight="1.2"
          pl={["0.28em", "0.36em", "0.46em", "0.52em"]}
        >
          IN THE AGE OF AI
        </Text>
      </ChakraBox>
    </Box>
  );
}

