import React from "react";
import { Center, Heading, Text, Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { NextLink } from "../../NextLink/NextLink";
import { isTablet } from "react-device-detect";

const NewsList = ({ data, index }) => {
  return (
    <Box
      //@ts-ignore
      style={{ width: isTablet ? "50%" : undefined }}
      mb="3rem"
      p="1rem"
      width={["100%", "100%", "50%", "33.333%"]}
    >
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        minHeight={"28rem"}
        bg="rgba(25, 25, 30, 0.6)"
        backdropFilter="blur(20px)"
        border="1px solid rgba(255, 255, 255, 0.08)"
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="0 10px 40px -10px rgba(0,0,0,0.5)"
        transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
        _hover={{
          transform: "translateY(-10px)",
          boxShadow:
            "0 20px 40px -10px rgba(0,0,0,0.7), 0 0 20px rgba(255,255,255,0.05)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          bg: "rgba(35, 35, 45, 0.7)",
        }}
        position="relative"
        role="group"
      >
        <Box
          width={"100%"}
          height="14rem"
          position={"relative"}
          overflow="hidden"
          bg="whiteAlpha.200"
          borderBottom="1px solid rgba(255,255,255,0.05)"
        >
          <Image
            alt={data.text || "News Image"}
            src={data.img || "/default.png"}
            fill
            style={{
              objectFit: "contain",
              padding: "1.5rem",
              transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
            className="card-image"
          />
          <style jsx global>{`
            div[role="group"]:hover .card-image {
              transform: scale(1.1);
            }
          `}</style>
        </Box>

        <Flex direction="column" flex="1" p="1.8rem" justify="space-between">
          <Box>
            <Flex align="center" mb="1.2rem" opacity="0.7">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <Text
                fontSize={"0.85rem"}
                color="white"
                ml="0.5rem"
                fontWeight="500"
                letterSpacing="widest"
                textTransform="uppercase"
              >
                {data.date}
              </Text>
            </Flex>

            <Heading
              as="h4"
              fontSize={"1.3rem"}
              color="white"
              mb="1rem"
              lineHeight="1.5"
              fontWeight="600"
              noOfLines={3}
            >
              {data.text}
            </Heading>
          </Box>

          <Box mt="1.5rem">
            <NextLink href={data.url}>
              <Flex
                align="center"
                w="max-content"
                color="cyan.400"
                transition="all 0.3s ease"
              >
                <Text
                  mr="0.5rem"
                  fontSize={"0.95rem"}
                  fontWeight="bold"
                  textTransform="uppercase"
                  letterSpacing="wider"
                >
                  Read Article
                </Text>
                <Box
                  transition="transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                  _groupHover={{
                    transform: "translateX(6px)",
                    color: "cyan.300",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Box>
              </Flex>
            </NextLink>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default NewsList;
