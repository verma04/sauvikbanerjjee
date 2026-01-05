"use client";

import { Center, Heading, Text, Box, Button } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import FuturismList from "./InevitableList";
import futurismData from "../json/futurism";
import futurismData2030 from "../json/inevitable";
const Inevitable = () => {
  return (
    <Center

      bgImage={["/mybookBackground.png", '/FutuirismBackgroundDesktop.png', "/FutuirismBackgroundDesktop.png", "/FutuirismBackgroundDesktop.png"]}
      minHeight={"100svh"}
      width="100vw"
      bgColor={"black"}
      alignItems="center"
      flexDirection={"column"}
    >
      <Center flexDirection={"column"} mt="12vh" width={"90%"} height="80%">
        <Heading fontSize={["2rem", "2rem", "8vh", "8vh"]} className="webkit-bg" textTransform={"uppercase"}>
          Inevitable
        </Heading>
      </Center>

      <Center flexWrap={"wrap"} w="100%" mt="3rem">
        {futurismData2030.map((t, index) => (
          <FuturismList key={index} data={t} index={index} />
        ))}
      </Center>
    </Center>
  );
};

export default Inevitable;
