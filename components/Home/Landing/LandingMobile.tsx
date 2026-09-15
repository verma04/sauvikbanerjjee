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
          backgroundRepeat={"no-repeat"}
          backgroundPosition="center"
          backgroundSize={"cover"}
          bgImage={[
            "/banner/mobile-splash-screen.png",
            "/banner/mobile-splash-screen.png",
            "/banner/splash-screen.png",
            "/banner/splash-screen.png",
          ]}
          position="relative"
        >
          <HStack
            height={"100svh"}
            width={"100%"}
            alignItems={["flex-start", "flex-start", "flex-start", "flex-start"]}
            justifyContent={["flex-start", "flex-start", "flex-start", "flex-start"]}
            pt={{ base: "13vh", sm: "13vh", md: "14vh", lg: "16vh", xl: "19vh" }}
            pl={{ base: "6.5vw", sm: "6.5vw", md: "4vw", lg: "5vw", xl: "8vw" }}
          >
            <Box width={"100%"}>
              <Heading
                zIndex={2}
                overflow={"hidden"}
                color={"white"}
                fontSize={{
                  base: "21vw",
                  sm: "20vw",
                  md: "min(14vh, 11.5vw)",
                  lg: "min(18vh, 12vw)",
                  xl: "min(25vh, 15vw)",
                  "2xl": "28vh",
                }}
                as="h1"
                letterSpacing={{
                  base: "0.2vh",
                  sm: "0.2vh",
                  md: "0.3vh",
                  lg: "0.4vh",
                  xl: "0.5vh",
                }}
                lineHeight={{
                  base: "18vw",
                  sm: "17vw",
                  md: "min(12.5vh, 10vw)",
                  lg: "min(16vh, 10.5vw)",
                  xl: "min(22vh, 13.5vw)",
                  "2xl": "25vh",
                }}
                textAlign={["left", "left", "left", "left"]}
                display={"flex"}
                justifyContent="flex-start"
                flexDirection={"column"}
                alignItems={["flex-start", "flex-start", "flex-start", "flex-start"]}
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
            </Box>
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
            opacity: 0,
          }}
          variants={variants}
          animate={ani ? "rotate" : "stop"}
          height={!ani ? { base: "22vh", sm: "24vh", md: "34vh", lg: "35vh" } : "100svh"}
          width={!ani ? { base: "28vw", sm: "28vw", md: "25vh", lg: "25.6vh" } : "100%"}
          maxW={!ani ? { base: "130px", sm: "140px", md: "22vw", lg: "20vw" } : "100%"}
          style={{ aspectRatio: !ani ? "246 / 336" : "unset" }}
          bottom={!ani ? { base: "3%", sm: "3%", md: "4%", lg: "4%" } : "0%"}
          right={!ani ? { base: "5%", sm: "5%", md: "1%", lg: "1%" } : "0%"}
          zIndex={5}
          position={"absolute"}
          backgroundRepeat={"no-repeat"}
          backgroundPosition={!ani ? "center" : "bottom center"}
          backgroundImage={
            !ani
              ? [
                  "/banner/bottom-right-image.png",
                  "/banner/bottom-right-image.png",
                  "/banner/bottom-right-image.png",
                  "/banner/bottom-right-image.png",
                ]
              : [
                  "/banner/sauvik-main-home-mobile-banner.png",
                  "/banner/sauvik-main-home-mobile-banner.png",
                  "/banner/sauvik-main-home-banner.png",
                  "/banner/sauvik-main-home-banner.png",
                ]
          }
          backgroundSize={!ani ? "cover" : "cover"}
          bgColor={!ani ? "transparent" : "black"}
          cursor={"pointer"}
        ></ChakraBox>

        <ChakraBox
          color="white"
          bottom={{ base: "4.5%", sm: "4.5%", md: "6%", lg: "6.5%" }}
          right={{
            base: "calc(5% + min(28vw, 130px) + 10px)",
            sm: "calc(5% + min(28vw, 140px) + 12px)",
            md: "calc(1% + min(25vh, 22vw) + 16px)",
            lg: "calc(1% + min(25.6vh, 20vw) + 18px)",
          }}
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
            fontSize={{ base: "0.85rem", sm: "0.95rem", md: "1.15rem", lg: "1.25rem" }}
            whiteSpace="nowrap"
            fontWeight="400"
          >
            Click Here
          </Text>

          <ChakraSvg
            width={{ base: "13px", sm: "14px", md: "16px", lg: "18px" }}
            height={{ base: "9px", sm: "10px", md: "11px", lg: "12px" }}
            style={{ marginLeft: "0.4rem" }}
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{
              x: [0, 4, 4, 0, 0],
              transition: {
                duration: 1.8,
                ease: "easeInOut",
                repeat: Infinity,
              },
            }}
          >
            <path
              d="M1 5H14M10 1.5L14 5L10 8.5"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </ChakraSvg>
        </ChakraBox>

        <ChakraBox
          position={"absolute"}
          top={{ base: "21%", sm: "21%", md: "8.5%", lg: "8.5%" }}
          left={0}
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
