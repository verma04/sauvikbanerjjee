

import React from 'react'
import { Center, Heading, Text, Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import { NextLink } from '../../NextLink/NextLink';
import { isTablet } from 'react-device-detect';
const FuturismList = ({ data, index }) => {
  return (
    //@ts-ignore
    <Box style={{ width: isTablet && "50%" }} mb="4em" width={["100%", "100%", "50%", "30%"]}>
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
                  <Text fontSize={["0.8rem", "1rem", "1rem", "1rem"]} width={"90%"} zIndex={1} >{data.description}</Text>

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
    </Box >
  )
}

export default FuturismList