"use client";

import React from "react";

import { Center } from "@chakra-ui/react";
import { ChakraBox } from "../../lib/Chakra";
import Lottie, { useLottie } from "lottie-react";
import animation from "./animation.json";
function PreLoader() {
  const options = {
    animationData: animation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <Center zIndex={"1000"} position={"fixed"} width={"100%"} height="100svh">
      <ChakraBox
        animate={{
          y: "-100vh",
          transition: { type: "spring", duration: 1.5, delay: 1.5 },
        }}
        className="wave-set"
      >
        {View}
      </ChakraBox>
    </Center>
  );
}
export default PreLoader;
