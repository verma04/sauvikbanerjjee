"use client";
//@ts-nocheck
import { Center, Heading, Text, Box, Button, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";

import { useRouter } from "next/router";
import Image from "next/image";
import List from "../List";
import { blogData } from "../blogData";
import { PortableText } from "@portabletext/react";

const BlogView = ({ data, blogs }) => {
  const router = useRouter();

  return (
    <>
      <Center
        minHeight={"100svh"}
        width="100vw"
        bgColor={"black"}
        alignItems="center"
        flexDirection={"column"}
      >
        <Center
          mt="7rem"
          flexDirection={"column"}
          width={["90%", "90%", "60rem", "60rem"]}
        >
          <Box
            width={"100%"}
            mt="2rem"
            height={"28rem"}
            position={"relative"}
            cursor="pointer"
            onClick={() => router.push(`/blog/${data?.slug}`)}
          >
            <Image
              alt="sdds"
              src={data?.mainImage?.asset?.url}
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Heading
            mt="2rem"
            fontSize={["2rem", "2rem", "8vh", "8vh"]}
            className="webkit-bg"
            textTransform={"uppercase"}
            textAlign="center"
          >
            {data?.title}
          </Heading>

          <Flex
            className="blog-content"
            mt="2rem"
            mb="5rem"
            flexDirection={"column"}
          >
            <PortableText value={data?.body} />
          </Flex>
        </Center>
        <style jsx>{`
          .container {
            margin: 50px;
          }
          p {
            color: white;
          }
          div {
            color: white;
          }
          span {
            color: white;
          }
        `}</style>
      </Center>

      <Center
        bgColor={"black"}
        flexDirection={"column"}
        pt="12vh"
        width={"100%"}
        height="80%"
      >
        <Heading
          fontSize={["2rem", "2rem", "8vh", "8vh"]}
          className="webkit-bg"
          textTransform={"uppercase"}
        >
          Keep Learning
        </Heading>
      </Center>

      <Center bgColor="black" flexWrap={"wrap"} w="100%" pt="3rem" pb="7rem">
        {blogs
          ?.sort(() => 0.5 - Math.random())
          ?.slice(0, 3)
          ?.map((t, index) => (
            <List key={index} data={t} index={index} />
          ))}
      </Center>
    </>
  );
};

export default BlogView;
