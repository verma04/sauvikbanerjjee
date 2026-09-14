import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import ContactForm from "./contact-form";
import ArrowSvg from "../../svg/arrow";
import Avatar from "./avatar";
import MentorshipCategories from "./table";
import { category } from "./categories";
import Slider from "./slider";
import { isMobile, isTablet } from "react-device-detect";
import { NextLink } from "../../next-link/next-link";
import { ChakraBox, ChakraHeading } from "../../lib/chakra";

const Contact = () => {
  const text1 = {
    // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
    show: {
      display: "flex",
      justifyContent: "center",
      transition: { type: "spring", duration: 1, delay: 3, opacity: 1 },
    },
  };
  const [active, setActive] = React.useState(0);
  return (
    <>
      <Center
        flexDirection="column"
        width="100vw"
        bgColor={"black"}
        alignItems="center"
        backgroundImage={[
          "/contact-background-mobile.png",
          "/contact-background-mobile.png",
          "/contact-desktop.jpg",
          "/contact-desktop.jpg",
        ]}
      >
        <Center
          alignItems={"flex-start"}
          mt="15vh"
          width={"90%"}
          height="80%"
          flexDirection={["column", "column", "row", "row"]}
        >
          <Center
            position={"relative"}
            w={["100%", "100%", "50%", "50%"]}
            height={"100vh"}
            alignItems={"center"}
          >
            {isMobile && (
              <NextLink href="/contact-us#contact">
                <ChakraHeading
                  top={"30%"}
                  zIndex={10}
                  left="0%"
                  fontSize={"2vh"}
                  position={"absolute"}
                  color="white"
                  fontFamily="Bebas Neue"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 2, delay: 3 },
                  }}
                >
                  Let's Get Started
                </ChakraHeading>
              </NextLink>
            )}

            <Avatar />
          </Center>
          <Center
            id="contact"
            height={"80vh"}
            flexDirection={"column"}
            w={["100%", "100%", "50%", "50%"]}
            alignItems={"flex-start"}
          >
            <Heading
              fontSize={["2rem", "2rem", "8vh", "8vh"]}
              className="webkit-bg"
              textTransform={"uppercase"}
            >
              let’s get started
            </Heading>

            <Flex width={"25%"} justifyContent="space-between">
              <ArrowSvg />
              <ArrowSvg />
            </Flex>
            <ContactForm />
          </Center>
        </Center>

        <Slider />
      </Center>
    </>
  );
};

export default Contact;
