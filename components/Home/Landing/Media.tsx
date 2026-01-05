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
  Button,
} from "@chakra-ui/react";
import Image from "next/image";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap, Power0 } from "gsap";

import dynamic from "next/dynamic";

//@ts-ignore
import ReactPlayer from "react-player";
import Monitor from "./Monitor";
import { NextLink } from "../../../NextLink/NextLink";
import EventSlider from "./EventSlider";

const Media = () => {
  const ve = [
    {
      title: "iit Kharagpur",
      link: "https://www.youtube.com/watch?v=EhI6wb5nEEs",
    },
    {
      title: "naval warfare school",
      link: "https://www.youtube.com/watch?v=U3SPkP4y-rY",
    },
    {
      title: "cii",
      link: "https://www.youtube.com/watch?v=1PTakTXVJRM",
    },
    {
      title: "Adobe Leadership Series",
      link: "https://www.youtube.com/watch?v=jXZAbnn1kTU",
    },
  ];
  const scrollHeader = useRef<null | HTMLParagraphElement>(null);
  const imgScroll = useRef<null | HTMLParagraphElement>(null);
  const text = useRef<null | HTMLParagraphElement>(null);

  const [play, setPlay] = React.useState(ve[0].link);
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    // @ts-ignore

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollHeader?.current,
        start: "bottom 80%",
        end: "bottom ",
        scrub: true,
      },
    });

    tl.to(
      scrollHeader.current,

      {
        scale: 5,

        opacity: 0,
      }
    ).to(scrollHeader.current, {
      visibility: "hidden",
    });
    //     imgScroll?.current,

    //     {
    //         y: -500

    //     }
    // )

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: imgScroll?.current,
        start: "top 1%",
        end: "top 1%",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <Box
        width={"100vw"}
        display="flex"
        justifyContent={"space-between"}
        flexDirection="column"
        overflowX="hidden"
        className="snap-scroll"
      >
        <Box
          width="100vw"
          height={"100svh"}
          top="0px"
          zIndex="1"
          display="flex"
          justifyItems={"center"}
          justifyContent={"center"}
          alignItems="center"
          bgColor="black"
          flexDirection={"column"}
        >
          <Box
            width={"100%"}
            height={"100%"}
            position={"relative"}
            backgroundRepeat={"repeat"}
            backgroundPosition="center"
            backgroundSize={"cover"}
            bgImage={[
              "/media.png",
              "/media.png",
              "/eventPoster.png",
              "/eventPoster.png",
            ]}
          >
            <Box
              mt={["30%", "30%", "5%", "5%"]}

              width={"100%"}
              display="flex"
              justifyContent={"center"}
              alignItems="center"
            >
              <Heading fontSize={["2rem", "2rem", "8vh", "8vh"]} color="white">
                events from the past
              </Heading>
            </Box>
            {/* <Box
              top={["50%", "50%", "50%", "50%"]}
              left="50%"
              height={"90%"}
              w={["90%", "90%", "25%", "25%"]}
              transform=" translate(-50%, -50%)"
              position={"absolute"}
            >
              <Image
                alt="sdds"
                src={"/eventFrame.png"}
                fill
                style={{ objectFit: "contain" }}
              />


            </Box> */}

            <EventSlider />

            <Box
              bottom={["5%", "5%", "1%", "1%"]}
              left="50%"
              transform=" translate(-50%, -50%)"
              position={"absolute"}
            >
              <NextLink href="/media">
                <Button variant={"white"}>View All Events</Button>
              </NextLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Media;
