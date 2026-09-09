"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Badge,
  Button,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { NextLink } from "../../../NextLink/NextLink";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

const podcastData = [
  {
    id: "XwawXRaNfzM",
    title:
      "Top CTO's Advice: The Real Reason You Are Not Growing | Sauvik Banerjjee | FO558 Raj Shamani",

    url: "https://www.youtube.com/watch?v=XwawXRaNfzM",
  },
  {
    id: "NOmvwHaD4ZI",
    title: "AI Expert WARNING : We Have 10 Years Left 🚨",

    url: "https://www.youtube.com/watch?v=NOmvwHaD4ZI",

  },
];

const Podcast = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Box
      width="100%"
      maxW="100vw"
      minH="100svh"
      height={{ base: "auto", md: "100svh" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgColor="black"
      position="relative"
      overflowX="hidden"
      overflowY={{ base: "auto", md: "hidden" }}
      className="snap-scroll"
    >
      <Box
        width="100%"
        minH="100svh"
        height="100%"
        position="relative"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
        bgImage={[
          "/media.png",
          "/media.png",
          "/eventPoster.png",
          "/eventPoster.png",
        ]}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent={{ base: "center", md: "space-between" }}
        pt={{ base: "5.5rem", sm: "6rem", md: "3vh" }}
        pb={{ base: "2.5rem", md: "3vh" }}
        px={{ base: "1rem", sm: "1.5rem", md: "3rem", lg: "5rem" }}
      >
        {/* Title Section */}
        <Box
          textAlign="center"
          mt={{ base: "0", md: "2vh" }}
          mb={{ base: "1.25rem", md: "0" }}
          zIndex={2}
        >
          <Heading
            fontSize={{ base: "2rem", sm: "2.5rem", md: "6.5vh", lg: "7.5vh" }}
            color="white"
            fontFamily="Bebas Neue"
            letterSpacing="wider"
            textTransform="uppercase"
          >
            PODCASTS
          </Heading>
          <Text
            color="gray.300"
            fontSize={{ base: "0.8rem", sm: "0.9rem", md: "1rem", lg: "1.1rem" }}
            fontWeight="300"
            mt="0.2rem"
            letterSpacing="wide"
          >
            Featured Conversations & Interviews
          </Text>
        </Box>

        {/* Podcast Cards Grid */}
        <Box
          width="100%"
          maxW="1100px"
          zIndex={2}
          my={{ base: "0.5rem", md: "auto" }}
          px={{ base: "0", md: "1rem" }}
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: "1.25rem", md: "2rem" }}>
            {podcastData.map((item, index) => (
              <Box
                key={index}
                bg="rgba(15, 20, 35, 0.85)"
                backdropFilter="blur(16px)"
                border="1px solid rgba(41, 129, 226, 0.4)"
                borderRadius="xl"
                overflow="hidden"
                boxShadow="0 10px 30px rgba(0, 0, 0, 0.7), 0 0 20px rgba(41, 129, 226, 0.2)"
                transition="all 0.4s ease"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow:
                    "0 18px 40px rgba(0, 0, 0, 0.85), 0 0 30px rgba(41, 129, 226, 0.4)",
                  border: "1px solid rgba(41, 129, 226, 0.8)",
                }}
                display="flex"
                flexDirection="column"
                w="100%"
              >
                {/* 16:9 Aspect Ratio Video Container */}
                <Box
                  width="100%"
                  position="relative"
                  pb="56.25%"
                  bg="black"
                  overflow="hidden"
                >
                  {isClient && (
                    <ReactPlayer
                      url={item.url}
                      width="100%"
                      height="100%"
                      controls={true}
                      light={false}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  )}
                </Box>

                {/* Card Information */}
                <Flex
                  direction="column"
                  p={{ base: "0.85rem", md: "1.25rem" }}
                  flex="1"
                  justifyContent="space-between"
                >
                  <Box>
                    <Flex
                      align="center"
                      justify="space-between"
                      mb="0.4rem"
                      flexWrap="wrap"
                      gap="0.4rem"
                    >


                    </Flex>
                    <Heading
                      as="h3"
                      fontSize={{ base: "0.85rem", sm: "0.95rem", md: "1.1rem" }}
                      color="white"
                      fontWeight="600"
                      lineHeight="1.4"
                      noOfLines={2}
                    >
                      {item.title}
                    </Heading>
                  </Box>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* View All Podcasts / Media Button */}

      </Box>
    </Box>
  );
};

export default Podcast;
