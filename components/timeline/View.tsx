import React from "react";
import { animate, motion } from "framer-motion";
import Image from "next/image";

import { Box, Heading, Text } from "@chakra-ui/react";
import { ChakraBox } from "../../lib/Chakra";
import faker from "@faker-js/faker";

import { isTablet } from "react-device-detect";
const TeamMemberView = ({
  data,
  active,
  variants,
  variantsImg,
  visible,
  revserse,
}: any) => {
  const transition = { duration: 4, ease: "easeInOut" };
  const colors = [
    "red",
    "green",
    "yellow",
    "#ffffff",
    "#001E4F",
    "#ED297B",
    "#00A551",
    "#8556a0",
  ];
  const path = `https://assets.pulseplaydigital.com/assert${data[active]?.sliderImage}`;
  return (
    <>
      <ChakraBox
        variants={variants}
        initial={"visible"}
        animate={"animation"}
        position={"relative"}
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        width={"100%"}
        height="100%"
      >
        <Box
          bg="rgba(255, 255, 255, 0.03)"
          backdropFilter="blur(16px)"
          borderRadius="2xl"
          border="1px solid rgba(255, 255, 255, 0.08)"
          p={["1.5rem", "2rem", "3rem", "4rem"]}
          boxShadow="0 8px 32px 0 rgba(0, 0, 0, 0.37)"
          width={["90%", "90%", "80%", "50%"]}
          zIndex={2}
          display="flex"
          justifyContent="center"
        >
          {/* @ts-ignore */}
          <Text
            style={{ width: isTablet ? "90%" : "100%" }}
            textAlign="center"
            color="rgba(255, 255, 255, 0.9)"
            fontSize={"2vh"}
            lineHeight="1.8"
            letterSpacing="wide"
          >
            <Heading
              as="h2"
              textTransform={"uppercase"}
              mb="2rem"
              width={"100%"}
              fontSize={"5vh"}
              color="white"
              letterSpacing="widest"
              textShadow="0 4px 20px rgba(255,255,255,0.4)"
            >
              {data[active].title}
            </Heading>
            {data[active].para}
          </Text>
        </Box>

        <ChakraBox
          variants={variantsImg}
          initial={"visible"}
          animate={"animation"}
          whileHover={{
            scale: 1.08,
            zIndex: 10,
            boxShadow: "0 15px 50px rgba(249, 110, 66, 0.3)",
          }}
          zIndex={1}
          className="image"
          position="absolute"
          top={["10%", "10%", "0"]}
          right="10%"
          borderRadius={"50%"}
          border={"1px solid rgba(255, 255, 255, 0.15)"}
          boxShadow="0 8px 32px 0 rgba(0, 0, 0, 0.4)"
          bg="rgba(255, 255, 255, 0.05)"
          backdropFilter="blur(10px)"
          justifyContent={"center"}
          width={["5.5rem", "5.5rem", "10rem", "12rem"]}
          height={["5.5rem", "5.5rem", "10rem", "12rem"]}
          display="flex"
          alignItems={"center"}
        >
          <Box
            padding={"2rem"}
            width={["5rem", "5rem", "9rem", "11rem"]}
            height={["5rem", "5rem", "9rem", "11rem"]}
            position={"relative"}
            borderRadius={"50%"}
            display="flex"
            justifyContent={"center"}
            alignItems="center"
          >
            <Image
              alt="timeline image 1"
              src={data[active].img1}
              fill
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          </Box>
        </ChakraBox>

        <ChakraBox
          variants={variantsImg}
          initial={"visible"}
          animate={"animation"}
          whileHover={{
            scale: 1.08,
            zIndex: 10,
            boxShadow: "0 15px 50px rgba(249, 110, 66, 0.3)",
          }}
          zIndex={1}
          className="image"
          position="absolute"
          bottom={["10%", "10%", "0"]}
          right="10%"
          borderRadius={"50%"}
          border={"1px solid rgba(255, 255, 255, 0.15)"}
          boxShadow="0 8px 32px 0 rgba(0, 0, 0, 0.4)"
          bg="rgba(255, 255, 255, 0.05)"
          backdropFilter="blur(10px)"
          justifyContent={"center"}
          width={["5.5rem", "5.5rem", "10rem", "12rem"]}
          height={["5.5rem", "5.5rem", "10rem", "12rem"]}
          display="flex"
          alignItems={"center"}
        >
          <Box
            padding={"2rem"}
            width={["5rem", "5rem", "9rem", "11rem"]}
            height={["5rem", "5rem", "9rem", "11rem"]}
            position={"relative"}
            borderRadius={"50%"}
            display="flex"
            justifyContent={"center"}
            alignItems="center"
          >
            <Image
              alt="timeline image 4"
              src={data[active].img4}
              fill
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          </Box>
        </ChakraBox>

        <ChakraBox
          variants={variantsImg}
          initial={"visible"}
          animate={"animation"}
          whileHover={{
            scale: 1.08,
            zIndex: 10,
            boxShadow: "0 15px 50px rgba(249, 110, 66, 0.3)",
          }}
          zIndex={1}
          className="image"
          position="absolute"
          top={["10%", "10%", "0", "0"]}
          left="10%"
          borderRadius={"50%"}
          border={"1px solid rgba(255, 255, 255, 0.15)"}
          boxShadow="0 8px 32px 0 rgba(0, 0, 0, 0.4)"
          bg="rgba(255, 255, 255, 0.05)"
          backdropFilter="blur(10px)"
          justifyContent={"center"}
          width={["5.5rem", "5.5rem", "10rem", "12rem"]}
          height={["5.5rem", "5.5rem", "10rem", "12rem"]}
          display="flex"
          alignItems={"center"}
        >
          <Box
            padding={"2rem"}
            width={["5rem", "5rem", "9rem", "11rem"]}
            height={["5rem", "5rem", "9rem", "11rem"]}
            position={"relative"}
            borderRadius={"50%"}
            display="flex"
            justifyContent={"center"}
            alignItems="center"
          >
            <Image
              alt="timeline image 2"
              src={data[active].img2}
              fill
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          </Box>
        </ChakraBox>

        <ChakraBox
          variants={variantsImg}
          initial={"visible"}
          animate={"animation"}
          whileHover={{
            scale: 1.08,
            zIndex: 10,
            boxShadow: "0 15px 50px rgba(249, 110, 66, 0.3)",
          }}
          zIndex={1}
          className="image"
          position="absolute"
          bottom={["10%", "10%", "0%", "0%"]}
          left="10%"
          borderRadius={"50%"}
          border={"1px solid rgba(255, 255, 255, 0.15)"}
          boxShadow="0 8px 32px 0 rgba(0, 0, 0, 0.4)"
          bg="rgba(255, 255, 255, 0.05)"
          backdropFilter="blur(10px)"
          justifyContent={"center"}
          width={["5.5rem", "5.5rem", "10rem", "12rem"]}
          height={["5.5rem", "5.5rem", "10rem", "12rem"]}
          display="flex"
          alignItems={"center"}
        >
          <Box
            padding={"2rem"}
            width={["5rem", "5rem", "9rem", "11rem"]}
            height={["5rem", "5rem", "9rem", "11rem"]}
            position={"relative"}
            borderRadius={"50%"}
            display="flex"
            justifyContent={"center"}
            alignItems="center"
          >
            <Image
              alt="timeline image 3"
              src={data[active].img3}
              fill
              style={{ objectFit: "cover", borderRadius: "50%" }}
            />
          </Box>
        </ChakraBox>
      </ChakraBox>
    </>
  );
};

export default TeamMemberView;
