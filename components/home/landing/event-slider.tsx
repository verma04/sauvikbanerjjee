const data = [
    {
        img: "/event-image-3.jpg",
    },
    {
        img: "/event-image-4.jpg",
    },
    {
        img: "/event-image.jpg",
    },
    {
        img: "/event-image-2.jpg",
    },


];

import React from "react";
import {
    Box,
    Button,
    Center,
    Heading,
    IconButton,
    useBreakpointValue,
} from "@chakra-ui/react";

import Slider from "react-slick";
import Image from "next/image";
import { NextLink } from "../../../next-link/next-link";
import futurismData from "../../json/futurism";
import { isIOS } from "react-device-detect";

// Settings for the slider
const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function EventSlider() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = React.useState<Slider | null>(null);

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: "90%", md: "50%" });
    const side = useBreakpointValue({ base: "30%", md: "10px" });

    // These are the images used in the slide

    return (
        <Box

            mt={["0rem", "0rem", "0rem", "0rem"]}

            width={"full"}
            overflow={"hidden"}

        >


            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {data.map((t, index) => (
                    <Center

                        width={"100%"}
                        height="50vh"
                        position={"relative"}
                    >
                        <Center height={"100%"} width={"100%"} zIndex={10} position={"absolute"} >
                            <Box

                                width={["90%", "90%", "100%", "100%"]} zIndex="10"
                                height={"30vh"}
                                position={"relative"}>
                                <Image alt="sdds" src={t.img} fill style={{ objectFit: "contain" }} />

                            </Box>
                        </Center>
                        <Center height={"100%"} width={"100%"} >
                            <Box
                                width={"100%"}
                                height={"35vh"} position={"relative"}>
                                <Image alt="sdds" src={"/event-frame.png"} fill style={{ objectFit: "contain" }} />

                            </Box>
                        </Center>

                    </Center>
                ))}
            </Slider>
        </Box >
    );
}
