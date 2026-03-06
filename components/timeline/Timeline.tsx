import React, { useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import View from "./View";
import View2 from "./View2";
import { gsap } from "gsap";

import { Box, Center, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Laern from "../contact/Laern";
import { isDesktop, isIOS, isMobile } from "react-device-detect";
import { ChakraBox, ChakraSvg } from "../../lib/Chakra";

const data = [
  {
    title: "Growing up",
    img1: "/GrowingUp_3.jpg",
    img2: "/timelineGrowing.png",
    img3: "/GrowingUp_1.jpg",
    img4: "/GrowingUp_2.jpg",
    para: "During my childhood, I experienced a blend of academic and athletic pursuits, stemming from my academic father and my entrepreneurial mother. My father specialized in applied physics and quantum mechanics, while my mother was both an entrepreneur and a professional athlete. As a student, I participated in a variety of extracurricular activities.",
  },
  {
    title: "Family",
    img1: "/family1.jpg",
    img2: "/family2.jpg",
    img3: "/family3.jpg",
    img4: "/family4.jpg",
    para: "As a tech futurist, I often thought about how technology is changing the world around us, but when it comes to what really matters in life, family always comes first. I am fortunate to have a wonderful family, including my wife, who is an accomplished actor, and our two lovely sons. Despite the demands of our busy lives, we always make time for each other and prioritize our family bond. In a world where technology can sometimes make us feel disconnected, I believe that the love and support of family are more important than ever.",
  },
  {
    title: "Cricket",
    img1: "/cricket2.jpg",
    img2: "/cricketTimeline.jpg",
    img3: "/cricket1.jpg",
    img4: "/cricket3.jpg",
    para: "I've had the honor of playing professional cricket with some of the game's elite players, including Sourav Ganguly, Arun Lal, and Syed Saba Karim. My cricketing career includes representing Bengal in the Wills Trophy and the Ranji team, as well as various clubs in Kolkata, England, and Scotland. I owe Saurav Ganguly a debt of gratitude for teaching me the significance of individual success within a team. I've realized that personal accomplishments achieved as part of a team endeavor can play a crucial role in molding an individual's future success.",
  },
  {
    title: "Transition",
    img1: "/trasn1.jpg",
    img2: "/trasn2.jpg",
    img3: "/trasn3.jpg",
    img4: "/Transtion4.jpg",
    para: "I was a professional cricketer in India before I migrated to the UK and stayed back. Today, I combine my unique skillset and love for sports to invent and innovate across the technology ecosystems. My sports background has given me a fresh dimension on problem-solving, allowing me to approach challenges from a fresh angle. I am grateful for the twists and turns that brought me to where I am today, and I am excited to break newer barriers and boundaries of what technology can do in the coming decades.",
  },
  {
    title: "India Story",
    img1: "/Sauvik_Dada.jpg",
    img2: "/story2.jpg",
    img3: "/story3.jpg",
    img4: "/IndiaStory4.jpg",
    para: "My passion for e-commerce, app economy, neural networks, BCI, and technology envangelization led me to build from scratch India's three most beloved digital ecosystems - Reliance JIO, TataCLIQ along with Tata Digital and Tata Neu, all homegrown in India. I'm obsessed with behavioral data and the futurism of technology, with a focus on the newest tech verticals, like the Metaverse. Proud to be part of India's homegrown tech community",
  },
];
const Timeline = () => {
  const variants = {
    visible: {
      scale: 0,
    },
    animation: {
      scale: 1,

      transition: {
        type: "tween",

        stiffness: 2000,

        duration: 0.5,
      },
    },
  };
  const revserse = {
    visible: {
      opacity: 1,
    },
    animation: {
      opacity: 0,

      transition: {
        type: "tween",

        stiffness: 2000,

        duration: 0.5,
      },
    },
  };

  const variantsImg = {
    visible: {
      y: 10,
      opacity: 0,
    },
    animation: {
      y: 0,
      opacity: 1,

      transition: { duration: 2, delay: 1 },
    },
  };

  const [active, setasctive] = useState(false);

  const [active2, setasctive2] = useState(data[0]);
  const [check, setCheck] = useState(true);

  const [count, setcount] = useState(0);
  const [pre, setPre] = useState(0);
  const [isShown, setIsShown] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const up = async () => {
    try {
      if (count === 0) {
      } else {
        await setPre(count);
        await setcount(count - 1);
        await setVisible(true);
        await setTimeout(() => {
          setVisible(false);
        }, 1000);
      }
    } catch (error) {}
  };
  const down = async () => {
    if (count === data.length - 1) {
    } else {
      await setPre(count);
      await setcount(count + 1);
      await setVisible(true);
      await setTimeout(() => {
        setVisible(false);
      }, 1000);
    }
  };

  return (
    <ReactScrollWheelHandler
      rightHandler={up}
      upHandler={up}
      leftHandler={down}
      downHandler={down}
    >
      <Center
        overflowX="hidden"
        width={"100%"}
        height={"100svh"}
        zIndex={"1"}
        backgroundRepeat={"repeat"}
        backgroundPosition="center"
        backgroundSize={"cover"}
        backgroundImage={[
          "/timelineBackground.png",
          "/timelineBackground.png",
          "/timelineBackgroundImage.png",
          "/timelineBackgroundImage.png",
        ]}
      >
        <Box
          position={"relative"}
          overflowX="hidden"
          width={["100%", "100%", "80%", "75%"]}
          mt="8vh"
          ml={["0%", "0%", "10%", "10%"]}
          height={"80vh"}
          zIndex={5}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
        >
          <ChakraBox
            animate={{
              rotate: 360,
              transition: { ease: "linear", duration: 60, repeat: Infinity },
            }}
            border="1px solid rgba(255, 255, 255, 0.1)"
            boxShadow="0 0 40px rgba(255, 255, 255, 0.05)"
            transform="translate(-50%, -50%)"
            display={"flex"}
            justifyContent="center"
            borderRadius={"50%"}
            width={"85vh"}
            alignItems={"center"}
            height={"85vh"}
            position={"fixed"}
          ></ChakraBox>

          <ChakraBox
            animate={{
              rotate: -360,
              transition: { ease: "linear", duration: 75, repeat: Infinity },
            }}
            border="2px dashed rgba(255, 255, 255, 0.15)"
            transform="translate(-50%, -50%)"
            display={"flex"}
            justifyContent="center"
            borderRadius={"50%"}
            width={"75vh"}
            alignItems={"center"}
            height={"75vh"}
            position={"fixed"}
          ></ChakraBox>
          <ChakraBox
            animate={{
              rotate: 360,
              transition: { ease: "linear", duration: 90, repeat: Infinity },
            }}
            border="1px solid rgba(255, 255, 255, 0.08)"
            boxShadow="inset 0 0 30px rgba(255, 255, 255, 0.05)"
            transform="translate(-50%, -50%)"
            display={"flex"}
            justifyContent="center"
            borderRadius={"50%"}
            width={"65vh"}
            alignItems={"center"}
            height={"65vh"}
            position={"fixed"}
          ></ChakraBox>
          <Box
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            flexDirection="column"
            height={"100%"}
            width="7%"
            left="0%"
            zIndex={10}
            position={"fixed"}
          >
            {data.map((set, index) => (
              <Box
                opacity={"0.7"}
                zIndex={10}
                onClick={() => setcount(index)}
                key={index}
                position={"relative"}
                height={["4rem", "4rem", "10rem", "6rem"]}
              >
                <ChakraSvg
                  width={["26", "26", "50", "30"]}
                  height={["26", "26", "50", "30"]}
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.707107"
                    y="12.7279"
                    width="17"
                    height="17"
                    transform="rotate(-45 0.707107 12.7279)"
                    stroke={index === count ? "#F96E42" : "white"}
                  />
                  <rect
                    x="7"
                    y="13"
                    width="8"
                    height="8"
                    transform="rotate(-45 7 13)"
                    fill={index === count ? "#F96E42" : "white"}
                  />
                </ChakraSvg>
                {index !== data.length - 1 && (
                  <Box
                    bgColor={index === count ? "#F96E42" : "white"}
                    position="absolute"
                    height={["55%", "55%", "70%"]}
                    width="2%"
                    left={"50%"}
                  ></Box>
                )}

                <Heading
                  cursor={"pointer"}
                  display={["none", "none", "flex", "flex"]}
                  width={"10rem"}
                  fontSize={"1.5rem"}
                  color={index === count ? "#F96E42" : "white"}
                  left="4rem"
                  top="10%"
                  position={"absolute"}
                >
                  {set.title}
                </Heading>
              </Box>
            ))}
          </Box>

          {!visible ? (
            <View
              data={data}
              active={count}
              variants={variants}
              revserse={revserse}
              variantsImg={variantsImg}
              visible={visible}
            />
          ) : (
            <View2
              data={data}
              active={pre}
              variants={variants}
              revserse={revserse}
              variantsImg={variantsImg}
              visible={visible}
            />
          )}
        </Box>
      </Center>
    </ReactScrollWheelHandler>
  );
};

export default Timeline;
