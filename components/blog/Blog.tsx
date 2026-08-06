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
      <Box w="100%" maxW="1250px" mx="auto" mt={["6rem", "7rem"]} px={["1rem", "2rem", "3rem"]} py={6}>
        <Center flexWrap={"wrap"} w="100%" gap={8} justifyContent="center">
          {blogs?.map((t, index) => (
            <List key={index} data={t} index={index} />
          ))}
        </Center>
      </Box>
    </Center>
  );
};

export default Blog;
