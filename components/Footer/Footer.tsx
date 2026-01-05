"use client";

import React, { useRef } from "react";
import { Button, useMediaQuery } from "@chakra-ui/react";
import {
  Center,
  Container,
  Box,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ChakraSvg } from "../../lib/Chakra";
import { NextLink } from "../../NextLink/NextLink";

const Footer = () => {
  const button = useRef<null | HTMLParagraphElement>(null);
  const state = useRef<null | HTMLParagraphElement>(null);
  const state2 = useRef<null | HTMLParagraphElement>(null);
  const state3 = useRef<null | HTMLParagraphElement>(null);
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  return (
    <>
      <VStack
        backgroundRepeat={"repeat"}
        backgroundPosition="center"
        backgroundSize={"cover"}
        bgImage={[
          "/footerBackground.png",
          "/footerBackground.png",
          "/footerBackgroundDesktop.png",
          "/footerBackgroundDesktop.png",
        ]}
        height={["100svh", "100svh", "100vh", "100vh"]}
        width="100%"
      >
        <Center
          mt={["20%", "20%", "10%", "0%"]}
          width={"100%"}
          height={["70%", "70%", "60%", "60%"]}
          flexDirection={"column"}
          flexWrap={"wrap"}
        >
          <Center
            borderBottom={"1px solid white"}
            width={["100%", "100%", "100%", "100%"]}
            height={["100%", "100%", "100%", "100%"]}
            flexDirection="column"
            justifyContent={"center"}
          >
            <Heading
              className="webkit-bg"
              textTransform={"uppercase"}
              textAlign={"center"}
              fontSize={["2rem", "2rem", "7vh", "7vh"]}
              zIndex={"1"}
            >
              Collaborate with Sauvik <br />
              for a master class
            </Heading>
            <NextLink href="/contact-us">
              <Button mt="30%" variant={"white"}>
                Explore
              </Button>
            </NextLink>
          </Center>
        </Center>

        <Center
          borderBottom={"1px solid white"}
          width={"100%"}
          height={["20%", "20%", "30%", "30%"]}
          flexDirection={"column"}
        >
          <Center width={"100%"} height={["60%", "60%", "80%", "80%"]}>
            <Center
              backgroundRepeat={"repeat"}
              backgroundPosition="center"
              backgroundSize={"cover"}
              backgroundImage={"/gradiendFrame.png"}
              width={"25%"}
              height="100%"
            >
              <a
                target="_blank"
                href="https://www.linkedin.com/in/sauvik-banerjjee-492b65a"
              >
                <ChakraSvg
                  id="hover"
                  width={["38", "38", "38", "76"]}
                  height={["39", "39", "39", "78"]}
                  viewBox="0 0 38 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.5833 0.996094C34.6884 0.996094 35.7482 1.43508 36.5296 2.21648C37.311 2.99788 37.75 4.05769 37.75 5.16276V34.3294C37.75 35.4345 37.311 36.4943 36.5296 37.2757C35.7482 38.0571 34.6884 38.4961 33.5833 38.4961H4.41667C3.3116 38.4961 2.25179 38.0571 1.47039 37.2757C0.688987 36.4943 0.25 35.4345 0.25 34.3294V5.16276C0.25 4.05769 0.688987 2.99788 1.47039 2.21648C2.25179 1.43508 3.3116 0.996094 4.41667 0.996094H33.5833ZM32.5417 33.2878V22.2461C32.5417 20.4448 31.8261 18.7173 30.5524 17.4437C29.2787 16.17 27.5513 15.4544 25.75 15.4544C23.9792 15.4544 21.9167 16.5378 20.9167 18.1628V15.8503H15.1042V33.2878H20.9167V23.0169C20.9167 21.4128 22.2083 20.1003 23.8125 20.1003C24.586 20.1003 25.3279 20.4076 25.8749 20.9545C26.4219 21.5015 26.7292 22.2434 26.7292 23.0169V33.2878H32.5417ZM8.33333 12.5794C9.26159 12.5794 10.1518 12.2107 10.8082 11.5543C11.4646 10.8979 11.8333 10.0077 11.8333 9.07943C11.8333 7.14193 10.2708 5.55859 8.33333 5.55859C7.39955 5.55859 6.50401 5.92954 5.84373 6.58982C5.18344 7.25011 4.8125 8.14564 4.8125 9.07943C4.8125 11.0169 6.39583 12.5794 8.33333 12.5794ZM11.2292 33.2878V15.8503H5.45833V33.2878H11.2292Z"
                    fill="white"
                  />
                </ChakraSvg>
              </a>
            </Center>

            <Center
              backgroundRepeat={"repeat"}
              backgroundPosition="center"
              backgroundSize={"cover"}
              backgroundImage={"/gradiendFrame.png"}
              width={"25%"}
              height="100%"
            >
              <a
                target="_blank"
                href="https://www.instagram.com/sauvikbanerjjeeofficial"
              >
                <ChakraSvg
                  id="hover"
                  width={["38", "38", "38", "76"]}
                  height={["39", "39", "39", "78"]}
                  viewBox="0 0 38 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M29.8082 11.6403C30.8264 11.6403 31.6518 10.8149 31.6518 9.79671C31.6518 8.77853 30.8264 7.95312 29.8082 7.95312C28.79 7.95312 27.9646 8.77853 27.9646 9.79671C27.9646 10.8149 28.79 11.6403 29.8082 11.6403Z"
                      fill="white"
                    />
                    <path
                      d="M30.0994 0.873535H8.07057C3.80421 0.873535 0.170044 4.39579 0.170044 8.66412V30.6929C0.170044 34.9593 3.80421 38.3755 8.07057 38.3755H30.0994C34.3677 38.3755 37.67 34.9613 37.67 30.6929V8.66412C37.67 4.39579 34.3677 0.873535 30.0994 0.873535ZM34.136 29.6209C34.146 30.3347 34.0129 31.0431 33.7445 31.7045C33.476 32.3659 33.0777 32.9667 32.5731 33.4715C32.0685 33.9764 31.4678 34.3749 30.8065 34.6436C30.1452 34.9123 29.4368 35.0457 28.7231 35.0359H9.44884C6.39976 35.0359 3.90041 32.6681 3.90041 29.6209V10.3447C3.9061 8.87533 4.49262 7.46777 5.53204 6.42909C6.57145 5.39042 7.97941 4.80489 9.44884 4.80024H28.7211C31.78 4.80024 34.136 7.29763 34.136 10.3447V29.619V29.6209Z"
                      fill="white"
                    />
                    <path
                      d="M18.92 8.81689C16.7668 8.81689 14.6619 9.45539 12.8716 10.6516C11.0813 11.8479 9.68591 13.5482 8.86191 15.5375C8.03792 17.5268 7.82233 19.7158 8.2424 21.8276C8.66246 23.9394 9.69933 25.8793 11.2219 27.4018C12.7444 28.9243 14.6843 29.9612 16.7961 30.3813C18.9079 30.8013 21.0969 30.5858 23.0862 29.7618C25.0755 28.9378 26.7758 27.5424 27.972 25.7521C29.1683 23.9617 29.8068 21.8569 29.8068 19.7037C29.8068 16.8163 28.6598 14.0472 26.6181 12.0056C24.5764 9.96389 21.8073 8.81689 18.92 8.81689ZM18.92 26.7894C17.5186 26.7894 16.1486 26.3738 14.9834 25.5952C13.8181 24.8167 12.9099 23.71 12.3736 22.4153C11.8373 21.1205 11.697 19.6958 11.9704 18.3213C12.2438 16.9468 12.9187 15.6843 13.9096 14.6933C14.9006 13.7023 16.1631 13.0275 17.5376 12.7541C18.9121 12.4807 20.3368 12.621 21.6316 13.1573C22.9263 13.6936 24.033 14.6018 24.8116 15.7671C25.5902 16.9323 26.0057 18.3023 26.0057 19.7037C26.0052 21.5828 25.2585 23.3848 23.9298 24.7135C22.6011 26.0422 20.7991 26.7889 18.92 26.7894Z"
                      fill="white"
                    />
                  </g>
                </ChakraSvg>
              </a>
            </Center>
            <Center
              backgroundRepeat={"repeat"}
              backgroundPosition="center"
              backgroundSize={"cover"}
              backgroundImage={"/gradiendFrame.png"}
              width={"25%"}
              height="100%"
            >
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCnoxf9FBPTlYdeEznXrsXLQ"
              >
                <ChakraSvg
                  id="hover"
                  width={["46", "46", "46", "94"]}
                  height={["33", "33", "33", "66"]}
                  viewBox="0 0 46 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M45.9167 11.9754C46.0197 8.99338 45.3676 6.03372 44.0208 3.37118C43.1071 2.27868 41.839 1.54141 40.4375 1.28785C34.6407 0.76186 28.8199 0.546275 23 0.642016C17.2013 0.541929 11.4015 0.750558 5.62498 1.26702C4.48294 1.47476 3.42606 2.01044 2.58331 2.80868C0.708308 4.53785 0.499975 7.49618 0.291641 9.99618C-0.0106253 14.4911 -0.0106253 19.0013 0.291641 23.4962C0.351913 24.9033 0.56142 26.3 0.916642 27.6628C1.16784 28.7151 1.67606 29.6886 2.39581 30.4962C3.24428 31.3367 4.32578 31.9029 5.49998 32.1212C9.99147 32.6756 14.5171 32.9054 19.0417 32.8087C26.3333 32.9128 32.7292 32.8087 40.2917 32.2254C41.4947 32.0204 42.6067 31.4536 43.4792 30.6003C44.0624 30.0168 44.4981 29.3026 44.75 28.517C45.4951 26.2308 45.861 23.8381 45.8333 21.4337C45.9167 20.267 45.9167 13.2254 45.9167 11.9754ZM18.2917 22.6837V9.78785L30.625 16.267C27.1667 18.1837 22.6042 20.3504 18.2917 22.6837Z"
                    fill="white"
                  />
                </ChakraSvg>
              </a>
            </Center>

            <Center
              backgroundRepeat={"repeat"}
              backgroundPosition="center"
              backgroundSize={"cover"}
              backgroundImage={"/gradiendFrame.png"}
              width={"25%"}
              height="100%"
            >
              <a target="_blank" href="https://twitter.com/sauvikbanerjjee">
                <ChakraSvg
                  width={["50", "50", "50", "100"]}
                  height={["51", "51", "51", "102"]}
                  id="hover"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1668.56 1221.19"
                >
                  <g id="layer1" transform="translate(52.390088,-25.058597)">
                    <path
                      id="path1009"
                      d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99
		h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
                      fill="white"
                    />
                  </g>
                </ChakraSvg>
              </a>
            </Center>
          </Center>
        </Center>

        <Center width={"100%"} height="15%" flexDirection={"column"}>
          <Text
            fontSize={"0.9rem"}
            width={"99%"}
            textAlign={"center"}
            mt="2%"
            color="white"
          >
            © {new Date().getFullYear()} sauvikbanerjjee.com | All Rights
            Reserved.
          </Text>

          <Text
            fontSize={"0.9rem"}
            width={"99%"}
            textAlign={"center"}
            color="white"
            mt={"1rem"}
            display="flex"
            justifyContent={"center"}
          >
            Powered by
            <a target="_blank" href="https://pulseplaydigital.com/">
              <Text
                ml="0.3rem"
                _hover={{ color: "#2981E2" }}
                textDecorationLine={"underline"}
              >
                {" "}
                PulsePlay Digital
              </Text>
            </a>
          </Text>
        </Center>
      </VStack>
    </>
  );
};

export default Footer;
