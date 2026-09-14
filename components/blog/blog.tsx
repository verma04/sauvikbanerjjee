"use client";
//@ts-nocheck
import { Center, Heading, Text, Box, Button } from "@chakra-ui/react";
import React, { useEffect } from "react";

import List from "./list";

import { useRouter } from "next/router";

const Blog = ({ blogs }) => {
  const router = useRouter();

  return (
    <Center
      bgImage={"url('/mybook-background.png')"}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgAttachment="fixed"
      minHeight={"100svh"}
      width="100vw"
      bgColor={"black"}
      alignItems="center"
      flexDirection={"column"}
    >
      <Box w="100%" maxW="1550px" mx="auto" mt={["6rem", "7rem"]} px={["1rem", "1.5rem", "2rem"]} py={6}>
        <Center flexWrap={"wrap"} w="100%" gap={6} justifyContent="center">
          {blogs?.map((t, index) => (
            <List key={index} data={t} index={index} />
          ))}
        </Center>
      </Box>
    </Center>
  );
};

export default Blog;
