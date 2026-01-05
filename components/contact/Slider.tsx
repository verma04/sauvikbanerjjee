const data = [
  "SaDada.jpg",
  "For_India_Story.jpg",
  "For_India_Story_2.jpg",
  "IMG-20230410-WA00102.png",
  "IMG-20230410-WA00103.png",
  "IMG-20230410-WA00104.png",

  "SauvikBanerjjee_Dharamshala.jpg",
  "Screenshot_2023-04-20-23-14-11-942-edit_com.instagram.android.jpg",
  "Screenshot_2023-04-20-23-17-17-798-edit_com.instagram.android.jpg",
];

const data1 = [
  "GalleryImage1.png",
  "GalleryImage2.png",
  "GalleryImage3.png",
  "GalleryImage4.png",
];

import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons

// And react-slick as our Carousel Lib
import Slider from "react-slick";
import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { isDesktop, isMobile } from "react-device-detect";
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

export default function SliderContact() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

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

  return (
    <Box
      display={isMobile ? "none" : "flex"}
      backgroundRepeat={"repeat"}
      backgroundPosition="center"
      backgroundSize={"cover"}
      position={"relative"}
      ref={slider}
      className="container"
      w={"100%"}
      height={"200svh"}
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
          color="white"
          as="h2"
          mt={["30%", "30%", "5%", "5%"]}
          textAlign={"left"}
          className="webkit-bg"
        >
          master class gallery
        </Heading>
      </Center>

      <Box
        position={"relative"}
        height={"80vh"}
        width={"full"}
        overflow={"hidden"}
      >
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          keyBoardControl={true}
          customTransition="all 2"
          transitionDuration={2000}
        >
          {data.map((t, index) => (
            <>
              <Center key={index} width={"100vw"} height="70vh">
                <Center
                  width={"100%"}
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Center
                    justifyContent={"flex-start"}
                    flexDirection={"column"}
                    width={"90%"}
                    height="90%"
                    backgroundRepeat={"repeat"}
                    backgroundPosition="center"
                    backgroundSize={"cover"}
                  >
                    <Box
                      mt="2rem"
                      width={["90%", "90%", "20%", "30%"]}
                      height="50vh"
                      position={"relative"}
                    >
                      <Image
                        alt={t}
                        src={`/contact-us/${t}`}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                  </Center>
                </Center>
              </Center>
            </>
          ))}
        </Carousel>
      </Box>

      <Box
        position={"relative"}
        height={"80vh"}
        width={"full"}
        marginTop="-30vh"
        overflow={"hidden"}
        display="flex"
        flexDirection={"column"}
        justifyContent="flex-start"
      >
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          keyBoardControl={true}
          customTransition="all 2"
          transitionDuration={2000}
        >
          {data1.map((t, index) => (
            <>
              <Center key={index} width={"100vw"} height="70vh">
                <Center
                  width={"100%"}
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Center
                    justifyContent={"flex-start"}
                    flexDirection={"column"}
                    width={"90%"}
                    height="90%"
                    backgroundRepeat={"repeat"}
                    backgroundPosition="center"
                    backgroundSize={"cover"}
                  >
                    <Box
                      mt="2rem"
                      width={["90%", "90%", "20%", "30%"]}
                      height="50vh"
                      position={"relative"}
                    >
                      <Image
                        alt={t}
                        src={`/gallery/${t}`}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                  </Center>
                </Center>
              </Center>
            </>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
}
