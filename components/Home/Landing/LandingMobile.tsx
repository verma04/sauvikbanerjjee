import React, { useRef, useState } from "react";
import { IOSView, isDesktop, isIOS } from "react-device-detect";
import {
  Center,
  Container,
  Box,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

import { ChakraBox, ChakraSvg } from "../../../lib/Chakra";
import TextRevel from "./TextRevel";
import Header from "../../Header/Header";
import TypeWriterEffect from "react-typewriter-effect";

const LandingMobile = ({ ani, setAni, executeScroll }) => {
  const myRef = document.querySelector(".scrollable-div");
  const [avatar, setAvatar] = useState(false);

  const onShow = async () => {
    await setAni(true);

    setTimeout(() => {
      setAvatar(true);
    }, 1000);
  };

  const mainHeading = useRef();

  const variants = {
    rotate: {
      opacity: 1,
      height: "100svh",
      width: "100%",
      transition: { type: "spring", duration: 1 },
    },
    // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
    stop: { opacity: 1, transition: { duration: 1, delay: 4 } },
  };
  const text1 = {
    hide: {
      display: "none",
    },
    // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
    show: {
      display: "flex",
      justifyContent: "center",
      transition: { type: "spring", duration: 1, delay: 1.5 },
    },
  };

  const text2 = {
    hide: {
      display: "none",
    },
    // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
    show: {
      display: "flex",
      justifyContent: "center",
      transition: { type: "spring", duration: 1, delay: 2 },
    },
  };

  return (
    <>
      <VStack
        overflowY={"hidden"}
        position={"relative"}
        height={"100svh"}
        width="100%"
        className="snap-scroll"
      >
        <Box
          width={"100%"}
          height={"100svh"}
          backgroundRepeat={"repeat"}
          backgroundPosition="center"
          backgroundSize={"cover"}
          bgImage={[
            "/landingBackgroundMobile.png",
            "/landingBackgroundMobile.png",
            "/landingBackgroundDesktop.png",
            "/landingBackgroundDesktop.png",
          ]}
          position="relative"
        >
          <HStack
            height={"100svh"}
            width={"100%"}
            alignItems="center"
            background="linear-gradient(to top, transparent 0%, black 100%)"
            justifyContent={"center"}
          >
            <Center height={"100%"} width={"100%"}>
              <Heading
                zIndex={2}
                mr={isDesktop ? "10%" : "0%"}
                overflow={"hidden"}
                color={"white"}
                fontSize={["9vh", "9vh", "9vh", "20vw"]}
                as="h1"
                letterSpacing={"0.8vh"}
                lineHeight={["10.5vh", "10.5vh", "10.5vh", "20vw"]}
                textAlign="center"
                display={"flex"}
                justifyContent="center"
                flexDirection={"column"}
                alignItems={["center", "center", "flex-start", "flex-start"]}
              >
                <TypeWriterEffect
                  startDelay={1600}
                  cursorColor="black"
                  text="Sauvik"
                  typeSpeed={150}
                  hideCursorAfterText
                  scrollArea={myRef}
                />

                <TypeWriterEffect
                  startDelay={3000}
                  cursorColor="black"
                  text="Banerjjee"
                  typeSpeed={150}
                  hideCursorAfterText
                  scrollArea={myRef}
                />
              </Heading>
            </Center>
          </HStack>
        </Box>

        <Box
          zIndex={1}
          position={"absolute"}
          height="100%"
          width={"100%"}
        ></Box>

        <ChakraBox
          onClick={() => onShow()}
          initial={{
            height: isDesktop ? "37%" : "9em",
            width: isDesktop ? "15%" : "6rem",
            opacity: 0,
          }}
          variants={variants}
          animate={ani ? "rotate" : "stop"}
          bottom={"0%"}
          right={"0%"}
          zIndex={5}
          position={"absolute"}
          backgroundRepeat={"repeat"}
          backgroundPosition={!ani ? "center" : "center 22px"}
          backgroundImage={[
            "/landingWalk.jpg",
            "/landingWalk.jpg",
            "Sauvik_Dada_Web_Banner.jpg",
            "Sauvik_Dada_Web_Banner.jpg",
          ]}
          backgroundSize={"cover"}
          bgColor="black"
          cursor={"pointer"}
        ></ChakraBox>

        <ChakraBox
          color="white"
          bottom={["5%", "5%", "8%", "8%"]}
          right={["40%", "40%", "10%", "20%"]}
          position={"absolute"}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
          zIndex={3}
          initial={{ opacity: 0 }}
          onClick={() => onShow()}
          cursor="pointer"
          animate={{
            opacity: 1,
            transition: { type: "spring", duration: 2, delay: 4 },
          }}
          className="click-here"
        >
          <Text
            _hover={{ color: "#2981E2" }}
            fontSize={["1.5rem", "1.5rem", "1.5rem", "1.5rem"]}
          >
            Click Here
          </Text>

          <ChakraSvg
            width={["26", "26", "30", "10"]}
            height={["26", "26", "30", "30"]}
            style={{ marginLeft: "0.5rem" }}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{
              x: [0, 20, 20, 0, 0],
              transition: {
                duration: 2,
                ease: "easeInOut",

                repeat: Infinity,
              },
            }}
          >
            <path
              d="M7.3 15.3C7.11667 15.1167 7.02067 14.8833 7.012 14.6C7.004 14.3167 7.09167 14.0833 7.275 13.9L12.175 8.99999H1C0.716667 8.99999 0.479 8.90399 0.287 8.71199C0.0956668 8.52065 0 8.28332 0 7.99999C0 7.71665 0.0956668 7.47899 0.287 7.28699C0.479 7.09565 0.716667 6.99999 1 6.99999H12.175L7.275 2.09999C7.09167 1.91665 7.004 1.68332 7.012 1.39999C7.02067 1.11665 7.11667 0.883321 7.3 0.699987C7.48333 0.516654 7.71667 0.424988 8 0.424988C8.28333 0.424988 8.51667 0.516654 8.7 0.699987L15.3 7.29999C15.4 7.38332 15.471 7.48732 15.513 7.61199C15.5543 7.73732 15.575 7.86665 15.575 7.99999C15.575 8.13332 15.5543 8.25832 15.513 8.37499C15.471 8.49165 15.4 8.59999 15.3 8.69999L8.7 15.3C8.51667 15.4833 8.28333 15.575 8 15.575C7.71667 15.575 7.48333 15.4833 7.3 15.3Z"
              fill="white"
            />
          </ChakraSvg>
        </ChakraBox>

        <ChakraBox
          position={"absolute"}
          top={["9%", "9%", "9%", "9%"]}
          width={"100%"}
          zIndex={5}
          variants={text1}
          animate={ani ? "show" : "hide"}
        >
          <TextRevel />
        </ChakraBox>

        <ChakraBox
          position={"absolute"}
          bottom={"3%"}
          width={"100%"}
          zIndex={5}
          color="white"
          display={"flex"}
          alignItems="center"
          flexDirection="column"
          variants={text2}
          animate={ani ? "show" : "hide"}
          onClick={executeScroll}
          cursor="pointer"
          fontSize={"3vh"}
        >
          <Box
            display={"flex"}
            alignItems="center"
            flexDirection="column"
            h={"100%"}
            marginBottom="1rem"
          >
            <ChakraSvg
              width={"5rem"}
              marginBottom="1rem"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 784.2 696.2"
              xmlSpace="preserve"
            >
              <g>
                <motion.path
                  fill={"white"}
                  className="st0"
                  d="M392.1,111.9c-92.1,0-167,74.9-167,167v138.5c0,92.1,74.9,167,167,167c92.1,0,167-74.9,167-167V278.8
                                    C559.1,186.8,484.2,111.9,392.1,111.9z M542.2,417.4c0,82.8-67.3,150.1-150.1,150.1c-82.8,0-150.1-67.3-150.1-150.1V278.8
                                    c0-82.8,67.3-150.1,150.1-150.1c82.8,0,150.1,67.3,150.1,150.1V417.4z"
                ></motion.path>
                <motion.path
                  fill="white"
                  d="M392.1,188.5c-17.8,0-32.3,14.5-32.3,32.3v36.7c0,17.8,14.5,32.3,32.3,32.3c17.8,0,32.3-14.5,32.3-32.3v-36.7
                                    C424.4,202.9,409.9,188.5,392.1,188.5z M407.5,257.5c0,8.5-6.9,15.4-15.4,15.4c-8.5,0-15.4-6.9-15.4-15.4v-36.7
                                    c0-8.5,6.9-15.4,15.4-15.4c8.5,0,15.4,6.9,15.4,15.4V257.5z"
                ></motion.path>
              </g>
            </ChakraSvg>
            <ChakraSvg
              bottom={"-50%"}
              position={"absolute"}
              width={"10rem"}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 784.2 696.2"
              xmlSpace="preserve"
              animate={{
                y: [0, 20, 20, 0, 0],
                transition: {
                  duration: 2,
                  ease: "easeInOut",

                  repeat: Infinity,
                },
              }}
            >
              <g>
                <motion.path
                  fill={"white"}
                  className="st0"
                  d="M438.1,291.4l-46,46l-46-46c-3-3-7.8-3-10.7,0c-3,3-3,7.8,0,10.7l51.3,51.3c1.5,1.5,3.4,2.2,5.4,2.2
                                        c1.9,0,3.9-0.7,5.4-2.2l51.3-51.3c3-3,3-7.8,0-10.7C445.8,288.5,441,288.5,438.1,291.4z"
                ></motion.path>
                <path
                  fill="white"
                  className="st0"
                  d="M438.1,342.7l-46,46l-46-46c-3-3-7.7-3-10.7,0c-3,3-3,7.8,0,10.7l51.3,51.3c1.4,1.4,3.3,2.2,5.4,2.2
                                        c2,0,3.9-0.8,5.4-2.2l51.3-51.3c3-3,3-7.8,0-10.7C445.8,339.8,441,339.8,438.1,342.7z"
                ></path>
              </g>
            </ChakraSvg>
          </Box>
        </ChakraBox>
      </VStack>
    </>
  );
};

export default LandingMobile;
