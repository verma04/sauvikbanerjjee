"use client";

import React, { useRef } from "react";

import {
  Center,
  Container,
  Box,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

import dynamic from "next/dynamic";
//@ts-ignore

const Home = () => {
  const scroll = useRef<null | HTMLParagraphElement>(null);
  const text = useRef<null | HTMLParagraphElement>(null);
  const mainHeading = useRef<null | HTMLParagraphElement>(null);
  const scrollSection = useRef<null | HTMLParagraphElement>(null);
  const text1 = useRef<null | HTMLParagraphElement>(null);
  const text2 = useRef<null | HTMLParagraphElement>(null);
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // @ts-ignore

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: scroll?.current,
        start: "bottom 80%",
        end: "bottom 1%",
        scrub: true,
      },
    });
    tl.to(
      scroll.current,

      {
        position: "absolute",
        height: "200vh",
        width: "100vw",
      }
    )
      .duration(10)
      .to(scroll.current, {
        top: "-160vh",
      });
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: text?.current,
        start: "bottom 100%",
        end: "bottom 50%",
        scrub: true,
      },
    });
    tl2.fromTo(
      text.current,
      {
        display: "none",
      },
      {
        display: "block",
      }
    );

    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: mainHeading?.current,
        start: "top 10%",
        end: "top",
        scrub: true,
      },
    });

    tl3
      .to(
        mainHeading.current,

        {
          y: -130,
        }
      )
      .duration(10);
    tl3
      .to(
        mainHeading.current,

        {
          y: -130,
        }
      )
      .duration(10);

    const tls = gsap.timeline();
    tls
      .fromTo(
        text1.current,
        {
          y: 300,
          ease: "power4.out",
        },
        {
          y: 0,
          ease: "power4.out",

          delay: 3,
        }
      )
      .fromTo(
        text2.current,
        {
          y: 300,
          ease: "power4.out",
        },
        {
          y: 0,
          ease: "power4.out",
        }
      );
  }, []);

  return (
    <>
      <VStack bgImage={"/skyBackground.jpg"} height="200vh" width="100%">
        <Box
          width={"100%"}
          height="100svh"
          backgroundRepeat={"repeat"}
          backgroundPosition="center"
          backgroundSize={"cover"}
          bgImage={"/landingBackground.png"}
        >
          <HStack
            height={"87vh"}
            width={"85%"}
            alignItems="flex-start"
            marginTop={"10vh"}
          >
            <Box ref={mainHeading}>
              <Heading
                overflow={"hidden"}
                color={"white"}
                fontSize={"30vh"}
                as="h1"
              >
                <Box ref={text1}> Sauvik </Box>
              </Heading>
              <Heading
                mt="-10vh"
                overflow={"hidden"}
                color={"white"}
                fontSize={"30vh"}
                as="h1"
              >
                <Box ref={text2}> Banerjee </Box>
              </Heading>
            </Box>
          </HStack>
        </Box>

        <Box
          ref={scrollSection}
          display="flex"
          justifyItems={"flex-end"}
          top={"0px"}
          position="sticky"
          width={"100%"}
          justifyContent={"flex-end"}
        >
          <Box
            position={"relative"}
            ref={scroll}
            width={"30vh"}
            height={"30vh"}
            marginTop={"-40vh"}
          >
            <Image
              alt="sdds"
              src={"/Sauvik_Dada_Web_Banner2.jpg"}
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Box>

        <Center marginTop={"50vh"} width={"85%"} flexDirection="column">
          <Text
            zIndex={"1"}
            className="reveal-text"
            marginTop={"20vh"}
            ref={text}
            color="white"
            fontSize="4vh"
          >
            One of top 6 technologists globally with over 150 implementations
            running across the globe, Sauvik Banerjjee is a technologist and
            Global CEO, Products, Technology and Digital Services at Rezolve
            Limited, by profession. Sauvik has been responsible for disruptive
            innovation ideas in technology and omni-channel commerce that have
            earned him the distinction and title of being one of the only 6
            people (the only person of Indian origin) in the world to have
            worked on all global Omni channel platforms.
          </Text>
        </Center>
      </VStack>
    </>
  );
};

export default Home;
