import React from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { Tweet } from "react-twitter-widgets";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import Insta from "./Insta";
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

import { LinkedInEmbed } from "react-social-media-embed";
import Twitter from "./Twitter";
import Instragram from "./InstraGram";
import { NextLink } from "../../../NextLink/NextLink";
export default function SocialMedia() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide

  // These are the images used in the slide
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  return (
    <Box
      backgroundRepeat={"repeat"}
      backgroundPosition="center"
      backgroundSize={"cover"}
      backgroundImage={"/footerBackground.png"}
      position={"relative"}
      ref={slider}
      className="container"
      w={"100%"}
    >
      <Center
        justifyContent={"center"}
        width={"100vw"}
        zIndex={"100svh"}
        top="0%"
        left={"0%"}
        display={"flex"}
      >
        <Heading
          textTransform={"uppercase"}
          fontSize={["2rem", "2rem", "8vh", "8vh"]}
          mt={["30%", "30%", "5%", "5%"]}
          color="white"
          as="h2"
          textAlign={"left"}
          className="webkit-bg"
        >
          social media
        </Heading>
      </Center>

      <Box
        position={"relative"}
        height={"60vh"}
        width={"full"}
        overflow={"hidden"}
      >
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          keyBoardControl={true}
          customTransition="all 2"
          transitionDuration={2000}
        >
          <Box className="panel" width={"100vw"} height="80vh">
            <Box
              width={["100%", "100%", "30%", "30%"]}
              height="60vh"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              position="relative"
            >
              <Center
                justifyContent={"space-between"}
                flexDirection={"column"}
                width={"100%"}
                height="100%"
                backgroundRepeat={"repeat"}
                backgroundPosition="center"
                backgroundSize={"cover"}
                backgroundImage={"/gradiendFrame.png"}
                className="set"
              >
                <Instragram />

                <Button
                  position={"absolute"}
                  bottom="15%"
                  paddingTop={"2rem"}
                  paddingBottom={"2rem"}
                  w="4rem"
                  background={
                    "linear-gradient(286.49deg, #FFFFFF 0.32%, #0069F7 78.5%)"
                  }
                >
                  <NextLink href="https://www.instagram.com/sauvikbanerjjeeofficial">
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 13.75C20.3683 13.75 18.7733 14.2339 17.4165 15.1404C16.0598 16.0469 15.0024 17.3354 14.378 18.8429C13.7536 20.3504 13.5902 22.0092 13.9085 23.6095C14.2269 25.2098 15.0126 26.6798 16.1664 27.8336C17.3202 28.9874 18.7902 29.7732 20.3905 30.0915C21.9908 30.4098 23.6496 30.2464 25.1571 29.622C26.6646 28.9976 27.9531 27.9402 28.8596 26.5835C29.7661 25.2267 30.25 23.6317 30.25 22C30.2477 19.8127 29.3778 17.7156 27.8311 16.1689C26.2844 14.6222 24.1873 13.7523 22 13.75ZM22 27.5C20.9122 27.5 19.8488 27.1774 18.9444 26.5731C18.0399 25.9687 17.3349 25.1098 16.9187 24.1048C16.5024 23.0998 16.3935 21.9939 16.6057 20.927C16.8179 19.8601 17.3417 18.8801 18.1109 18.1109C18.8801 17.3417 19.8601 16.8179 20.927 16.6057C21.9939 16.3935 23.0998 16.5024 24.1048 16.9187C25.1098 17.3349 25.9687 18.0399 26.5731 18.9444C27.1774 19.8488 27.5 20.9122 27.5 22C27.5 23.4587 26.9205 24.8576 25.8891 25.8891C24.8576 26.9205 23.4587 27.5 22 27.5ZM30.25 4.125H13.75C11.1981 4.12773 8.75156 5.14267 6.94711 6.94711C5.14267 8.75156 4.12773 11.1981 4.125 13.75V30.25C4.12773 32.8019 5.14267 35.2484 6.94711 37.0529C8.75156 38.8573 11.1981 39.8723 13.75 39.875H30.25C32.8019 39.8723 35.2484 38.8573 37.0529 37.0529C38.8573 35.2484 39.8723 32.8019 39.875 30.25V13.75C39.8723 11.1981 38.8573 8.75156 37.0529 6.94711C35.2484 5.14267 32.8019 4.12773 30.25 4.125ZM37.125 30.25C37.125 32.0734 36.4007 33.822 35.1114 35.1114C33.822 36.4007 32.0734 37.125 30.25 37.125H13.75C11.9266 37.125 10.178 36.4007 8.88864 35.1114C7.59933 33.822 6.875 32.0734 6.875 30.25V13.75C6.875 11.9266 7.59933 10.178 8.88864 8.88864C10.178 7.59933 11.9266 6.875 13.75 6.875H30.25C32.0734 6.875 33.822 7.59933 35.1114 8.88864C36.4007 10.178 37.125 11.9266 37.125 13.75V30.25ZM33 13.0625C33 13.4704 32.879 13.8692 32.6524 14.2084C32.4258 14.5475 32.1037 14.8119 31.7268 14.968C31.3499 15.1241 30.9352 15.165 30.5351 15.0854C30.135 15.0058 29.7675 14.8094 29.4791 14.5209C29.1906 14.2325 28.9942 13.865 28.9146 13.4649C28.835 13.0648 28.8759 12.6501 29.032 12.2732C29.1881 11.8963 29.4525 11.5742 29.7916 11.3476C30.1308 11.121 30.5296 11 30.9375 11C31.4845 11 32.0091 11.2173 32.3959 11.6041C32.7827 11.9909 33 12.5155 33 13.0625Z"
                        fill="white"
                      />
                    </svg>
                  </NextLink>
                </Button>

                <Center width={"100%"}>
                  <NextLink href="https://www.instagram.com/sauvikbanerjjeeofficial">
                    <Button marginBottom={"1rem"} w="6rem" variant={"white"}>
                      vist Now
                    </Button>
                  </NextLink>
                </Center>
              </Center>
            </Box>
          </Box>
          <Box className="panel" width={"100vw"} height="80vh">
            <Box
              width={["100%", "100%", "30%", "30%"]}
              height="60vh"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              position="relative"
            >
              <Center
                justifyContent={"space-between"}
                flexDirection={"column"}
                width={"100%"}
                height="100%"
                backgroundRepeat={"repeat"}
                backgroundPosition="center"
                backgroundSize={"cover"}
                backgroundImage={"/gradiendFrame.png"}
                className="set"
              >
                <Insta />

                <Button
                  position={"absolute"}
                  bottom="15%"
                  paddingTop={"2rem"}
                  paddingBottom={"2rem"}
                  w="4rem"
                  background={
                    "linear-gradient(286.49deg, #FFFFFF 0.32%, #0069F7 78.5%)"
                  }
                >
                  <NextLink href="https://www.linkedin.com/in/sauvik-banerjjee-492b65a">
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M29.8333 0.5C30.8058 0.5 31.7384 0.886308 32.4261 1.57394C33.1137 2.26157 33.5 3.19421 33.5 4.16667V29.8333C33.5 30.8058 33.1137 31.7384 32.4261 32.4261C31.7384 33.1137 30.8058 33.5 29.8333 33.5H4.16667C3.19421 33.5 2.26157 33.1137 1.57394 32.4261C0.886308 31.7384 0.5 30.8058 0.5 29.8333V4.16667C0.5 3.19421 0.886308 2.26157 1.57394 1.57394C2.26157 0.886308 3.19421 0.5 4.16667 0.5H29.8333ZM28.9167 28.9167V19.2C28.9167 17.6149 28.287 16.0947 27.1661 14.9739C26.0453 13.853 24.5251 13.2233 22.94 13.2233C21.3817 13.2233 19.5667 14.1767 18.6867 15.6067V13.5717H13.5717V28.9167H18.6867V19.8783C18.6867 18.4667 19.8233 17.3117 21.235 17.3117C21.9157 17.3117 22.5686 17.5821 23.0499 18.0634C23.5313 18.5448 23.8017 19.1976 23.8017 19.8783V28.9167H28.9167ZM7.61333 10.6933C8.4302 10.6933 9.21361 10.3688 9.79122 9.79122C10.3688 9.21361 10.6933 8.4302 10.6933 7.61333C10.6933 5.90833 9.31833 4.515 7.61333 4.515C6.7916 4.515 6.00353 4.84143 5.42248 5.42248C4.84143 6.00353 4.515 6.7916 4.515 7.61333C4.515 9.31833 5.90833 10.6933 7.61333 10.6933ZM10.1617 28.9167V13.5717H5.08333V28.9167H10.1617Z"
                        fill="white"
                      />
                    </svg>
                  </NextLink>
                </Button>

                <Center width={"100%"}>
                  <NextLink href="https://www.linkedin.com/in/sauvik-banerjjee-492b65a">
                    <Button marginBottom={"1rem"} w="6rem" variant={"white"}>
                      vist Now
                    </Button>
                  </NextLink>
                </Center>
              </Center>
            </Box>
          </Box>

          <Box className="panel" width={"100vw"} height="80vh">
            <Box
              width={["100%", "100%", "30%", "30%"]}
              height="60vh"
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
              position="relative"
            >
              <Center
                justifyContent={"space-between"}
                flexDirection={"column"}
                width={"100%"}
                height="100%"
                backgroundRepeat={"repeat"}
                backgroundPosition="center"
                backgroundSize={"cover"}
                backgroundImage={"/gradiendFrame.png"}
                className="set"
              >
                <Twitter />

                <Button
                  position={"absolute"}
                  bottom="15%"
                  paddingTop={"2rem"}
                  paddingBottom={"2rem"}
                  w="4rem"
                  background={
                    "linear-gradient(286.49deg, #FFFFFF 0.32%, #0069F7 78.5%)"
                  }
                >
                  <NextLink href="https://twitter.com/sauvikbanerjjee">
                    <svg
                      version="1.1"
                      id="svg5"
                      width="44"
                      height="44"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 1668.56 1221.19"
                    >
                      <g
                        id="layer1"
                        transform="translate(52.390088,-25.058597)"
                      >
                        <path
                          id="path1009"
                          d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99
		h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </NextLink>
                </Button>

                <Center width={"100%"}>
                  <NextLink href="https://twitter.com/sauvikbanerjjee">
                    <Button marginBottom={"1rem"} w="6rem" variant={"white"}>
                      vist Now
                    </Button>
                  </NextLink>
                </Center>
              </Center>
            </Box>
          </Box>
        </Carousel>
      </Box>
    </Box>
  );
}
