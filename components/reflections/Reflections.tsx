"use client";
//@ts-nocheck
import { Center } from "@chakra-ui/react";
import React from "react";

import ReflectionList from "./List";
import { useRouter } from "next/router";

const Reflections = ({ reflections }) => {
  const router = useRouter();

  return (
    <Center
      bgImage={"/mybookBackground.png"}
      minHeight={"100svh"}
      width="100vw"
      bgColor={"black"}
      alignItems="center"
      flexDirection={"column"}
    >
      <Center flexWrap={"wrap"} w="100%" mt="7rem" gap={10} p={10}>
        {reflections?.map((t, index) => (
          <ReflectionList key={index} data={t} index={index} />
        ))}
      </Center>
    </Center>
  );
};

export default Reflections;
