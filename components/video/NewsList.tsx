import React from "react";
import { Center, Heading, Text, Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import { Player } from "video-react";
import { NextLink } from "../../NextLink/NextLink";
import { isTablet } from 'react-device-detect';
const NewsList = ({ data, index }) => {
  return (
    //@ts-ignore
    <Center style={{ width: isTablet && "50%" }} mb="2em" width={["100%", "100%", "50%", "30%"]}>
      <Box
        width={"90%"}

        display={"flex"}
        justifyContent="flex-start"
        alignItems={"center"}
        flexDirection={"column"}
        minHeight={"30rem"}
        backgroundRepeat={"repeat"}
        backgroundPosition="center"
        backgroundSize={"cover"}
        bgGradient="linear(to-r, #0069f7, pink.500)"

      >
        <Center
          mt="1rem"
          justifyContent={"space-between"}
          flexDirection={"column"}
          width={"100%"}
          height="100%"
          backgroundRepeat={"repeat"}
          backgroundPosition="center"
          backgroundSize={"cover"}
        >
          <Box mt="1rem" width={"90%"} height="12rem" position={"relative"}>
            <Image
              alt="sdds"
              src={data.img}
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Box width={"90%"} mt="1rem" mb="2rem">
            <Heading as="h4" fontSize={"1.2rem"} color="white">
              {data.text}
            </Heading>

            <Text color="white" fontSize={"0.8rem"}>
              {data.description}
            </Text>

            <Center mt="1rem" justifyContent={"flex-start"}>
              <NextLink href={data.url}>
                <Center width={"100%"} >

                  <Text mr="0.5rem" fontSize={"0.9rem"} color={"white"}>
                    Read more
                  </Text>
                  <svg
                    width="9"
                    height="14"
                    viewBox="0 0 9 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.07016 1.22881L7.89389 6.7697C7.96302 6.83567 8.01186 6.90713 8.04044 6.98408C8.06947 7.06104 8.08398 7.14349 8.08398 7.23145C8.08398 7.3194 8.06947 7.40185 8.04044 7.47881C8.01186 7.55576 7.96302 7.62722 7.89389 7.69319L2.07016 13.2506C1.90887 13.4045 1.70726 13.4814 1.46532 13.4814C1.22338 13.4814 1.01601 13.399 0.843201 13.2341C0.67039 13.0692 0.583984 12.8768 0.583984 12.6569C0.583984 12.437 0.67039 12.2446 0.843201 12.0797L5.92385 7.23145L0.843201 2.38316C0.681911 2.22925 0.601265 2.03971 0.601265 1.81456C0.601265 1.58897 0.68767 1.39371 0.860482 1.22881C1.03329 1.0639 1.23491 0.981445 1.46532 0.981445C1.69573 0.981445 1.89735 1.0639 2.07016 1.22881Z"
                      fill="white"
                    />
                  </svg>

                </Center>
              </NextLink>
              <Center ml="10%">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1723_3683)">
                    <path
                      d="M23 3.06211L16.9948 3.06213V1.56738C16.9948 1.15301 16.6591 0.817383 16.2448 0.817383C15.8304 0.817383 15.4948 1.15301 15.4948 1.56738V3.06176H9.49475V1.56738C9.49475 1.15301 9.15913 0.817383 8.74475 0.817383C8.33038 0.817383 7.99475 1.15301 7.99475 1.56738V3.06176H2C1.17162 3.06176 0.5 3.73338 0.5 4.56176V23.3118C0.5 24.1401 1.17162 24.8118 2 24.8118H23C23.8284 24.8118 24.5 24.1401 24.5 23.3118V4.56176C24.5 3.73373 23.8284 3.06211 23 3.06211ZM23 23.3118H2V4.56176H7.99475V5.31738C7.99475 5.73173 8.33038 6.06738 8.74475 6.06738C9.15913 6.06738 9.49475 5.73173 9.49475 5.31738V4.56213H15.4948V5.31776C15.4948 5.73213 15.8304 6.06776 16.2448 6.06776C16.6591 6.06776 16.9948 5.73213 16.9948 5.31776V4.56213H23V23.3118ZM17.75 12.8121H19.25C19.664 12.8121 20 12.4761 20 12.0621V10.5621C20 10.1481 19.664 9.81211 19.25 9.81211H17.75C17.336 9.81211 17 10.1481 17 10.5621V12.0621C17 12.4761 17.336 12.8121 17.75 12.8121ZM17.75 18.8117H19.25C19.664 18.8117 20 18.4761 20 18.0617V16.5617C20 16.1477 19.664 15.8117 19.25 15.8117H17.75C17.336 15.8117 17 16.1477 17 16.5617V18.0617C17 18.4765 17.336 18.8117 17.75 18.8117ZM13.25 15.8117H11.75C11.336 15.8117 11 16.1477 11 16.5617V18.0617C11 18.4761 11.336 18.8117 11.75 18.8117H13.25C13.664 18.8117 14 18.4761 14 18.0617V16.5617C14 16.1481 13.664 15.8117 13.25 15.8117ZM13.25 9.81211H11.75C11.336 9.81211 11 10.1481 11 10.5621V12.0621C11 12.4761 11.336 12.8121 11.75 12.8121H13.25C13.664 12.8121 14 12.4761 14 12.0621V10.5621C14 10.1477 13.664 9.81211 13.25 9.81211ZM7.25 9.81211H5.75C5.336 9.81211 5 10.1481 5 10.5621V12.0621C5 12.4761 5.336 12.8121 5.75 12.8121H7.25C7.664 12.8121 8 12.4761 8 12.0621V10.5621C8 10.1477 7.664 9.81211 7.25 9.81211ZM7.25 15.8117H5.75C5.336 15.8117 5 16.1477 5 16.5617V18.0617C5 18.4761 5.336 18.8117 5.75 18.8117H7.25C7.664 18.8117 8 18.4761 8 18.0617V16.5617C8 16.1481 7.664 15.8117 7.25 15.8117Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1723_3683">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.5 0.814697)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <Text fontSize={"0.9rem"} color="white" ml="0.5rem">
                  {data.date}
                </Text>
              </Center>

            </Center>
          </Box>
        </Center>
      </Box>
    </Center>
  );
};

export default NewsList;
