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

const Poster = () => {
    const scrollHeader = useRef<null | HTMLParagraphElement>(null);
    const imgScroll = useRef<null | HTMLParagraphElement>(null);
    const text = useRef<null | HTMLParagraphElement>(null);

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
                display={"flex"}
                height={"100svh"}
                justifyContent="flex-end"
                alignItems={"flex-end"}
                position={"relative"}
                width="100%"
                className="snap-scroll"
            >
                <Box
                    position={"absolute"}
                    height="100%"
                    backgroundImage={[
                        "/mediaCover.png",
                        "/mediaCover.png",
                        "SauvikBanerjjee.png",
                        "SauvikBanerjjee.png",
                    ]}
                    backgroundPosition={"center 30px"}
                    backgroundSize="cover"
                    backgroundRepeat={"repeat"}
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                    width="100%"
                >
                    <Box className="jump" position={"absolute"}>
                        {/* 
              <Jump /> */}
                    </Box>
                    <Box
                        position={"absolute"}
                        flexDirection="column"
                        width="100%"
                        top={"0%"}
                        display="flex"
                        justifyContent={"center"}
                        alignItems="center"
                        background="linear-gradient(to top, transparent 0%, black 100%)"
                    >
                        <Text
                            color={"white"}
                            fontSize={["2.2vh", "2.2vh", "4vh", "4vh"]}
                            textAlign={"center"}
                            width="90%"
                            pt={["30%", "30%", "8%", "8%"]}
                            fontStyle="italic"
                        >
                            The only limit to what we can achieve with technology  is the limit of our imagination
                        </Text>
                    </Box>

                    <Center
                        position={"absolute"}
                        flexDirection={"column"}
                        bottom={"0%"}
                        background="linear-gradient(to bottom, transparent 0%, black 100%)"
                        paddingTop="10rem"
                        width={"100%"}
                    >
                        <Heading
                            width={"90%"}
                            textAlign="center"
                            mt="4vh"
                            color="white"
                            fontSize="1.7rem"
                        >
                            “Technology is junk if it doesn’t impact human lives”
                        </Heading>

                        <NextLink href="/timeline">
                            <Button mb="2rem" mt="1rem" variant={"white"}>
                                My Story
                            </Button>
                        </NextLink>
                    </Center>
                </Box>
            </Box>
        </>
    );
};

export default Poster;
