"use client";

import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import DadaAvatar from "../avatar/DadaAvatar";

const MyBook = () => {
  return (
    <Center
      backgroundRepeat={"repeat"}
      backgroundPosition="center"
      backgroundSize={"cover"}
      bgImage={"/mybookBackground.png"}
      minHeight={"100svh"}
      width="100vw"
      bgColor={"black"}
      alignItems="center"
      flexDirection={"column"}
    >


      <Center mt="12vh" flexDirection={["column", "column", 'row-reverse', "row-reverse"]} width={"90%"} height="80%">

        <Center
          mt="2rem"
          position={"relative"}
          w={'100%'}
          height={["20rem", "20rem", "30rem", "30rem"]}

          alignItems={"center"}

        >

          {/* <App /> */}
          <Image
            alt="My Book"
            priority
            src={"/book.png"}
            fill
            style={{ objectFit: "contain", paddingBottom: "2rem" }}
          />
        </Center>

        <Center alignItems={['center', "center", "flex-start", "flex-start"]} flexDirection={"column"} width="100%" >
          <Heading mb={["1rem", "1rem", "2rem", "2rem"]} className="webkit-bg-2" textTransform={"uppercase"}>
            my book coming soon
          </Heading>

          <Text textAlign={["center", "center", "left", "left"]} color="white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </Text>

          <Button w={"10rem"} mb="2rem" mt="2rem" variant={"white"}>
            pre-order your copy
          </Button>
        </Center>

      </Center>




    </Center >
  );
};

export default MyBook;
