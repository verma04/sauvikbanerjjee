// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { gsap } from "gsap";
// import { useLayoutEffect, useRef } from "react";
// import { Box, Button, Center, Heading, HStack, Text } from "@chakra-ui/react";
// import Image from "next/image";
// import { NextLink } from "../../../NextLink/NextLink";

// gsap.registerPlugin(ScrollTrigger);

// export default function Futurism() {
//   const component = useRef<null | HTMLParagraphElement>(null);
//   const slider = useRef<null | HTMLParagraphElement>(null);

//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
//       let panels = gsap.utils.toArray(".panel");
//       gsap.to(panels, {
//         xPercent: -100 * (panels.length - 1),
//         ease: "none",
//         scrollTrigger: {
//           trigger: slider.current,
//           pin: true,
//           scrub: 1,
//           snap: 1 / (panels.length - 1),
//           end: () => "+=" + slider?.current?.offsetWidth,
//         },
//       });
//     }, component);
//     return () => ctx.revert();
//   });

const data = [{
  text: "nanobots will plug our brains straight into the cloud",
  img: '/futurism.png'
}
  ,
{
  text: "People reincarnation through ai",

  img: '/robotic.png'

},
{
  text: "space tourism: a week in orbit",

  img: '/space.png'
}
]

//   return (
//     <Box overflowX={"hidden"} ref={component}>
//       <Box
//         backgroundRepeat={"repeat"}
//         backgroundPosition="center"
//         backgroundSize={"cover"}
//         backgroundImage={"/futurismBg.png"}
//         position={"relative"}
//         ref={slider}
//         className="container"
//       >
//         <Center
//           justifyContent={"center"}
//           width={"100vw"}
//           height="15vh"
//           zIndex={"100svh"}
//           position={"absolute"}
//           top="0%"
//           left={"0%"}
//           display={"flex"}
//         >
//           <Heading
//             textTransform={"uppercase"}
//             fontSize={"2rem"}
//             color="white"
//             as="h2"
//             textAlign={"left"}
//             className="webkit-bg"
//           >
//             futurism 2050
//           </Heading>
//         </Center>

//         <Center
//           justifyContent={"center"}
//           width={"100vw"}
//           height="15vh"
//           zIndex={"100svh"}
//           position={"absolute"}
//           bottom="0%"
//           left={"0%"}
//           display={"flex"}
//         >
//           <NextLink href="/futurism" ><Button   variant={"white"}>View All</Button></NextLink>
//         </Center>
//         {data.map((t, index) => (
//           <Box key={index} className="panel" width={"100vw"} height="70vh">
//             <Box
//               width={"100%"}
//               height="70vh"
//               mt="15vh"
//               display={"flex"}
//               justifyContent="center"
//               alignItems={"center"}
//             >
//               <Center
//                 justifyContent={"flex-start"}
//                 flexDirection={"column"}
//                 width={"100%"}
//                 height="100%"
//                 backgroundRepeat={"repeat"}
//                 backgroundPosition="center"
//                 backgroundSize={"cover"}
//               >
//                 <Box width={"90%"} height="20rem" position={"relative"}>
//                   <Image
//                     alt="sdds"
//                     src={t.img}
//                     fill
//                     style={{ objectFit: "cover" }}
//                   />
//                 </Box>

//                 <Box mt="2rem" display={"flex"} alignItems="flex-start" width={"90%"} mb="10%">
//                   <Heading
//                     as="h3"
//                     fontSize={"1.5rem"}
//                     className={index / 2 === 0 ? "webkit-bg" : "webkit-bg-2"}
//                   >
//                     {t.text}
//                   </Heading>
//                 </Box>
//               </Center>
//             </Box>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// }









import React from 'react';
import { Box, Button, Center, Flex, Heading, IconButton, Text, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons

// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import Image from 'next/image';
import { NextLink } from '../../../NextLink/NextLink';
import futurismData from '../../json/futurism';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { isDesktop } from 'react-device-detect';
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

export default function SocialMedia() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1
    }
  };


  return (
    <Box
      backgroundRepeat={"repeat"}
      backgroundPosition="center"
      backgroundSize={"cover"}
      backgroundImage={["/homeFuturismMobile.png", "/homeFuturismMobile.png", "/homeFuturismDesktop.png", "/homeFuturismDesktop.png"]}
      position={"relative"}
      ref={slider}
      className="container"
      w={"100%"}
      height={"100svh"}



    >

      <Center
        justifyContent={"center"}
        width={"100vw"}
        height={["10vh", "10vh", "5vh", "5vh"]}

        position={"absolute"}
        bottom={["3%", "3%", "3%", "3%"]}
        left={"0%"}
        display={"flex"}
        zIndex={1}
      >
        <NextLink href="/futurism-2050" ><Button variant={"white"}>View All</Button></NextLink>
      </Center>
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
          futurism 2050
        </Heading>
      </Center>


      <Box
        position={'relative'}
        height={'70vh'}
        width={'full'}
        overflow={'hidden'}>




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



          {futurismData.map((data, index) => (
            <>

              <Center key={index} width={"100%"} height={["60vh", "60vh", "70vh", "70vh"]}>
                <Box
                  width={"100%"}
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Center
                    justifyContent={"space-between"}
                    flexDirection={"column"}
                    width={"100%"}

                    backgroundRepeat={"repeat"}
                    backgroundPosition="center"
                    backgroundSize={"cover"}

                    height="25rem"

                  >
                    <Box border="1px solid white" className="flip-card">
                      <div className="flip-card-inner">
                        <Center
                          backgroundRepeat={"repeat"}
                          backgroundPosition="center"
                          backgroundSize={"cover"}

                          className="flip-card-front"
                          width={"100%"}
                          height="20rem"


                        >
                          <Center width="90%" height="90%" position="relative" >
                            <Image
                              alt="sdds"
                              src={data.img}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                          </Center>
                        </Center>
                        <Center

                          w='100%'
                          height="100%"

                          className="flip-card-back">
                          <Center
                            backgroundRepeat={"repeat"}
                            backgroundPosition="center"
                            backgroundSize={"cover"}
                            backgroundImage={data.img}
                            w="90%"
                            h="90%"
                            position="relative"
                            flexDirection="column"
                          >

                            <Box className="box-gradient" position="absolute" bgColor="red" height="100%" w="100%" >

                            </Box>
                            <Text width={"90%"} zIndex={1} >{data.description}</Text>

                            <NextLink href="/contact-us">
                              <Button mt="1rem" variant={"white"} >enquire now</Button>
                            </NextLink>
                          </Center>
                        </Center>

                      </div>
                    </Box>

                    <Box width={"90%"} mt="1rem">
                      <Heading
                        as="h3"
                        fontSize={"1.5rem"}
                        className={index / 2 === 0 ? "webkit-bg" : "webkit-bg-2"}
                      >
                        {data.text}
                      </Heading>
                    </Box>
                  </Center>
                </Box >
              </Center>



            </>
          ))}
        </Carousel>
      </Box>
    </Box >
  );
}