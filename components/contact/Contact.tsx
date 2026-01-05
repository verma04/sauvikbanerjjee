import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";
import ArrowSvg from "../../svg/Arrow";
import Avatar from "./Avatar";
import MentorshipCategories from "./Table";
import { category } from "./Categories";
import Slider from "./Slider";
import { isMobile, isTablet } from "react-device-detect";
import { NextLink } from "../../NextLink/NextLink";
import { ChakraBox, ChakraHeading } from "../../lib/Chakra";

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
          "/contactBackgroundMobile.png",
          "/contactBackgroundMobile.png",
          "/contactDesktop.jpg",
          "/contactDesktop.jpg",
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
