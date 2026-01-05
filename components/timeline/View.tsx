import React from "react";
import { animate, motion } from "framer-motion";
import Image from "next/image";

import { Box, Heading, Text } from "@chakra-ui/react";
import { ChakraBox } from "../../lib/Chakra";
import faker from '@faker-js/faker';

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
        {/* @ts-ignore */}
        <Text style={{ width: isTablet && "90%" }} textAlign="center" color="white" width={["85%", "85%", "80%", "40%"]} fontSize={"1.9vh"}>
          <Heading
            as="h2"
            textTransform={"uppercase"}
            mb="1rem"
            width={"100%"}
            fontSize={"5vh"}
            color="white"
          >
            {data[active].title}
          </Heading>
          {data[active].para}
        </Text>

        <ChakraBox
          variants={variantsImg}
          initial={"visible"}
          animate={"animation"}
          zIndex={1}
          className="image"
          position="absolute"
          top={["10%", '10%', "0"]}
          right="10%"
          borderRadius={"50%"}
          border={"1px solid white"}
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
              alt="sdds"
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
          zIndex={1}
          className="image"
          position="absolute"
          bottom={["10%", '10%', "0"]}
          right="10%"
          borderRadius={"50%"}
          border={"1px solid white"}
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
              alt="sdds"
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
          zIndex={1}
          className="image"
          position="absolute"
          top={["10%", '10%', "0", "0"]}
          left="10%"
          borderRadius={"50%"}
          border={"1px solid white"}
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
              alt="sdds"
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
          zIndex={1}
          className="image"
          position="absolute"
          bottom={["10%", "10%", "0%", '0%']}
          left="10%"
          borderRadius={"50%"}
          border={"1px solid white"}
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
              alt="sdds"
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
