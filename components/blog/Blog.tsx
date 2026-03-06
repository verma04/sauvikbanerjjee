"use client";
//@ts-nocheck
import { Center, Heading, Text, Box, Button } from "@chakra-ui/react";
import React, { useEffect } from "react";

import List from "./List";

import { useRouter } from "next/router";

const Blog = ({ blogs }) => {
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
        {blogs?.map((t, index) => (
          <List key={index} data={t} index={index} />
        ))}
      </Center>
    </Center>
  );
};

export default Blog;
