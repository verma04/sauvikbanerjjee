//@ts-nocheck
import React, { useState } from "react";
import { Center, Text, Box, Flex } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import Image from "next/image";
import { useRouter } from "next/router";
import moment from "moment";

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const ReflectionList = ({ data, index, width }: any) => {
  const router = useRouter();
  const [imageLoaded, setImageLoaded] = useState(false);

  const categoryColor = getCategoryColor(data?.categories?.[0]?.title || "");

  const imageUrl = data?.mainImage?.asset?.url;
  const videoUrl = data?.mainVideo?.asset?.url || data?.videoUrl;

  return (
    <Box
      width={width || ["100%", "calc(50% - 1.5rem)", "calc(33.333% - 1.5rem)", "calc(25% - 1.5rem)"]}
      maxW="360px"
      cursor="pointer"
      onClick={() => router.push(`/reflections/${data?.slug?.current}`)}
      role="group"
    >
      <Box
        bg="whiteAlpha.50"
        borderRadius="1.2rem"
        overflow="hidden"
        border="1px solid"
        borderColor="whiteAlpha.50"
        boxShadow="0 4px 20px rgba(0,0,0,0.2)"
        transition="all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
        willChange="transform"
        _hover={{
          transform: "translateY(-6px)",
          borderColor: "whiteAlpha.200",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(251,191,36,0.12)",
        }}
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "1.2rem",
          bg: "linear-gradient(135deg, rgba(251,191,36,0.08) 0%, transparent 50%, rgba(245,158,11,0.08) 100%)",
          opacity: 0,
          transition: "opacity 0.4s ease",
          zIndex: 0,
          pointerEvents: "none",
        }}
        _groupHover={{
          _before: {
            opacity: 1,
          },
        }}
      >
        {/* Media Container (Image or Video) */}
        <Box
          position="relative"
          width="100%"
          height="200px"
          overflow="hidden"
          sx={{
            "& img, & video": {
              transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              willChange: "transform",
            },
            "[role='group']:hover & img, [role='group']:hover & video": {
              transform: "scale(1.06)",
            },
          }}
        >
          {/* Shimmer loading placeholder */}
          {!imageLoaded && (
            <Box
              position="absolute"
              inset={0}
              bg="whiteAlpha.100"
              bgGradient="linear(to-r, whiteAlpha.50, whiteAlpha.100, whiteAlpha.50)"
              backgroundSize="200% 100%"
              animation={`${shimmer} 1.5s ease-in-out infinite`}
              zIndex={1}
            />
          )}

          {imageUrl ? (
            <Image
              alt={data?.title || "Reflection"}
              src={imageUrl}
              fill
              style={{ objectFit: "cover" }}
              onLoadingComplete={() => setImageLoaded(true)}
            />
          ) : videoUrl ? (
            <video
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setImageLoaded(true)}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <Box
              w="100%"
              h="100%"
              bgGradient="linear(to-br, #2a1b08, #110d05)"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="yellow.400" fontSize="2rem">
                ✨
              </Text>
            </Box>
          )}

          {/* Media overlay gradient */}
          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            height="60%"
            bgGradient="linear(to-t, rgba(0,0,0,0.7), transparent)"
            zIndex={2}
            pointerEvents="none"
          />

          {/* Video indicator badge if video is rendered */}
          {!imageUrl && videoUrl && (
            <Box
              position="absolute"
              top="1rem"
              right="1rem"
              zIndex={3}
              bg="blackAlpha.700"
              backdropFilter="blur(8px)"
              color="yellow.300"
              px="0.6rem"
              py="0.2rem"
              borderRadius="full"
              fontSize="0.65rem"
              fontWeight={600}
              letterSpacing="0.05em"
              border="1px solid"
              borderColor="yellow.400"
              display="flex"
              alignItems="center"
              gap="0.3rem"
            >
              <span>▶</span> VIDEO
            </Box>
          )}

          {/* Category badge on image */}
          {data?.categories?.[0]?.title && (
            <Box position="absolute" top="1rem" left="1rem" zIndex={3}>
              <Box
                bg={categoryColor.bg}
                color={categoryColor.text}
                fontSize="0.7rem"
                fontWeight={600}
                textTransform="uppercase"
                letterSpacing="0.08em"
                px="0.75rem"
                py="0.3rem"
                borderRadius="full"
                backdropFilter="blur(12px)"
                border="1px solid"
                borderColor={categoryColor.border}
              >
                {data.categories[0].title}
              </Box>
            </Box>
          )}
        </Box>

        {/* Content */}
        <Box px="1.4rem" py="1.3rem" position="relative" zIndex={1}>
          {/* Title */}
          <Text
            as="h3"
            color="white"
            fontSize="1.05rem"
            fontWeight={600}
            lineHeight={1.45}
            noOfLines={2}
            transition="color 0.3s ease"
            _groupHover={{ color: "#fde68a" }}
            mb="1rem"
          >
            {data?.title}
          </Text>

          {/* Divider */}
          <Box
            w="100%"
            h="1px"
            bgGradient="linear(to-r, whiteAlpha.100, whiteAlpha.200, whiteAlpha.100)"
            mb="0.9rem"
          />

          {/* Meta info */}
          <Flex justifyContent="space-between" alignItems="center">
            <Text
              fontSize="0.72rem"
              color="whiteAlpha.400"
              fontWeight={500}
              letterSpacing="0.03em"
            >
              {data?.publishedAt ? moment(data.publishedAt).format("MMM D, YYYY") : ""}
            </Text>

            {/* Read arrow */}
            <Flex
              alignItems="center"
              gap="0.4rem"
              transition="all 0.3s ease"
              opacity={0.6}
              transform="translateX(-4px)"
              _groupHover={{
                opacity: 1,
                transform: "translateX(0)",
              }}
            >
              <Text
                fontSize="0.72rem"
                color="yellow.300"
                fontWeight={600}
                letterSpacing="0.05em"
                textTransform="uppercase"
              >
                Read
              </Text>
              <Text
                color="yellow.300"
                fontSize="0.85rem"
                transition="transform 0.3s ease"
                _groupHover={{
                  transform: "translateX(3px)",
                }}
              >
                →
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

// Helper: assign color based on category
function getCategoryColor(category: string) {
  const colors = {
    Technology: {
      bg: "rgba(59,130,246,0.2)",
      text: "#93c5fd",
      border: "rgba(59,130,246,0.3)",
    },
    AI: {
      bg: "rgba(251,191,36,0.2)",
      text: "#fde68a",
      border: "rgba(251,191,36,0.3)",
    },
    Futurism: {
      bg: "rgba(236,72,153,0.2)",
      text: "#f9a8d4",
      border: "rgba(236,72,153,0.3)",
    },
    Science: {
      bg: "rgba(16,185,129,0.2)",
      text: "#6ee7b7",
      border: "rgba(16,185,129,0.3)",
    },
    Default: {
      bg: "rgba(255,255,255,0.08)",
      text: "whiteAlpha.700",
      border: "rgba(255,255,255,0.12)",
    },
  };

  return colors[category] || colors.Default;
}

export default ReflectionList;
