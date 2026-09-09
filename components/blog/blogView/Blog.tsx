"use client";
//@ts-nocheck
import { Center, Heading, Text, Box, Flex, IconButton } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import React from "react";
import { motion } from "framer-motion";

import { useRouter } from "next/router";
import Image from "next/image";
import List from "../List";
import { PortableText } from "@portabletext/react";
import moment from "moment";
import SocialShare from "../../common/SocialShare";

const MotionBox: any = motion(Box as any);
const MotionHeading: any = motion(Heading as any);
const MotionText: any = motion(Text as any);
const MotionFlex: any = motion(Flex as any);

const glowPulse = keyframes`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
`;

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const BlogView = ({ data, blogs }) => {
  const router = useRouter();

  const [related, setRelated] = React.useState<any[]>([]);

  React.useEffect(() => {
    if (typeof window !== "undefined" && Array.isArray(blogs)) {
      const filtered = blogs.filter((b) => b?.slug?.current !== data?.slug?.current);
      const shuffled = [...(filtered.length ? filtered : blogs)]
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      setRelated(shuffled);
    }
  }, [blogs, data?.slug?.current]);

  // Estimate reading time
  const readingTime = Math.max(
    3,
    Math.ceil(
      (data?.body?.reduce((acc, block) => {
        if (block?.children) {
          return (
            acc +
            block.children.reduce(
              (a, c) => a + (c?.text?.split(" ")?.length || 0),
              0,
            )
          );
        }
        return acc;
      }, 0) || 300) / 200,
    ),
  );

  const imageUrl = data?.mainImage?.asset?.url;
  const videoUrl = data?.mainVideo?.asset?.url || data?.videoUrl;

  return (
    <Box bg="black" minHeight="100svh" width="100vw" overflowX="hidden">
      {/* Ambient background glows */}
      <Box
        position="fixed"
        top="-30%"
        right="-20%"
        width="60vw"
        height="60vw"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)"
        filter="blur(100px)"
        animation={`${glowPulse} 10s ease-in-out infinite`}
        pointerEvents="none"
        zIndex={0}
      />
      <Box
        position="fixed"
        bottom="-20%"
        left="-20%"
        width="50vw"
        height="50vw"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)"
        filter="blur(100px)"
        animation={`${glowPulse} 12s ease-in-out infinite 3s`}
        pointerEvents="none"
        zIndex={0}
      />


      {/* Featured Media Section in Container */}
      <Box
        pt={["5.5rem", "6.5rem", "7.5rem"]}
        px={["1rem", "1.5rem", "2.5rem"]}
        maxW="1150px"
        mx="auto"
        position="relative"
        zIndex={1}
      >
        <Box
          position="relative"
          width="100%"
          height={["380px", "450px", "520px", "580px"]}
          borderRadius={["1.2rem", "1.5rem", "2rem"]}
          overflow="hidden"
          border="1px solid"
          borderColor="whiteAlpha.150"
          boxShadow="0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(139,92,246,0.12)"
        >
          {imageUrl ? (
            <Image
              alt={data?.title || "Blog post"}
              src={imageUrl}
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          ) : videoUrl ? (
            <video
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <Box
              position="absolute"
              inset={0}
              bgGradient="linear(to-br, #1e1b4b, #000000)"
            />
          )}

          {/* Dark overlay gradients */}
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-b, rgba(0,0,0,0.4), rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.85) 85%, rgba(0,0,0,0.95))"
            zIndex={1}
          />
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-r, rgba(0,0,0,0.4), transparent)"
            zIndex={1}
          />

          {/* Back Button */}
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            position="absolute"
            top={["1.2rem", "1.5rem", "2rem"]}
            left={["1.2rem", "1.5rem", "2rem"]}
            zIndex={3}
          >
            <Flex
              as="button"
              onClick={() => router.push("/blog")}
              alignItems="center"
              gap="0.6rem"
              bg="blackAlpha.600"
              backdropFilter="blur(12px)"
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="full"
              px="1.2rem"
              py="0.6rem"
              cursor="pointer"
              transition="all 0.3s ease"
              _hover={{
                bg: "whiteAlpha.300",
                transform: "translateX(-3px)",
              }}
            >
              <Text color="white" fontSize="0.9rem">
                ←
              </Text>
              <Text
                color="whiteAlpha.900"
                fontSize="0.8rem"
                fontWeight={500}
                letterSpacing="0.03em"
              >
                Back to Blog
              </Text>
            </Flex>
          </MotionBox>

          {/* Title overlay on hero */}
          <Center
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            zIndex={2}
            flexDirection="column"
            pb={["1.8rem", "2.5rem", "3rem"]}
            px={["1.2rem", "2rem", "3rem"]}
          >
            {/* Category & Date */}
            <MotionFlex
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              gap="1rem"
              alignItems="center"
              mb="1.2rem"
              flexWrap="wrap"
              justifyContent="center"
            >
              {data?.categories?.[0]?.title && (
                <Box
                  bg="rgba(139,92,246,0.3)"
                  backdropFilter="blur(12px)"
                  color="#c4b5fd"
                  fontSize="0.72rem"
                  fontWeight={600}
                  textTransform="uppercase"
                  letterSpacing="0.1em"
                  px="0.85rem"
                  py="0.35rem"
                  borderRadius="full"
                  border="1px solid rgba(139,92,246,0.4)"
                >
                  {data.categories[0].title}
                </Box>
              )}
              <Text color="whiteAlpha.500" fontSize="0.8rem">
                •
              </Text>
              <Text color="whiteAlpha.600" fontSize="0.8rem" fontWeight={400}>
                {moment(data?.publishedAt).format("MMMM D, YYYY")}
              </Text>
              <Text color="whiteAlpha.500" fontSize="0.8rem">
                •
              </Text>
              <Text color="whiteAlpha.500" fontSize="0.8rem" fontWeight={400}>
                {readingTime} min read
              </Text>
            </MotionFlex>

            <MotionHeading
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              fontSize={["1.5rem", "2rem", "2.6rem", "3.2rem"]}
              fontWeight={800}
              color="white"
              textAlign="center"
              lineHeight={1.15}
              maxW="900px"
              textTransform="uppercase"
            >
              {data?.title}
            </MotionHeading>
          </Center>
        </Box>
      </Box>

      {/* Article Content */}
      <Center
        position="relative"
        zIndex={1}
        flexDirection="column"
        pt="4rem"
        pb="6rem"
      >
        {/* Content container */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          width={["90%", "90%", "700px", "750px"]}
        >
          {/* Decorative top line */}
          <Center mb="3rem">
            <Box
              w="60px"
              h="3px"
              borderRadius="full"
              bgGradient="linear(to-r, purple.400, blue.400)"
            />
          </Center>

          {/* Blog content */}
          <Box
            className="blog-content-enhanced"
            sx={{
              "& p": {
                color: "whiteAlpha.800",
                fontSize: ["1rem", "1.05rem"],
                lineHeight: 1.85,
                mb: "1.5rem",
                fontWeight: 400,
              },
              "& h1": {
                color: "white",
                fontSize: ["1.8rem", "2.2rem"],
                fontWeight: 700,
                mt: "2.5rem",
                mb: "1rem",
                lineHeight: 1.3,
              },
              "& h2": {
                color: "white",
                fontSize: ["1.5rem", "1.8rem"],
                fontWeight: 700,
                mt: "2.5rem",
                mb: "1rem",
                lineHeight: 1.3,
                bgGradient: "linear(to-r, white, whiteAlpha.700)",
                bgClip: "text",
              },
              "& h3": {
                color: "white",
                fontSize: ["1.25rem", "1.4rem"],
                fontWeight: 600,
                mt: "2rem",
                mb: "0.8rem",
                lineHeight: 1.4,
              },
              "& h4, & h5, & h6": {
                color: "whiteAlpha.900",
                fontWeight: 600,
                mt: "1.5rem",
                mb: "0.8rem",
              },
              "& a": {
                color: "purple.300",
                textDecoration: "underline",
                textDecorationColor: "purple.300",
                textUnderlineOffset: "3px",
                transition: "color 0.3s ease",
                _hover: {
                  color: "purple.200",
                },
              },
              "& blockquote": {
                borderLeft: "3px solid",
                borderColor: "purple.400",
                pl: "1.5rem",
                my: "2rem",
                py: "0.5rem",
                bg: "whiteAlpha.50",
                borderRadius: "0 0.5rem 0.5rem 0",
                "& p": {
                  color: "whiteAlpha.700",
                  fontStyle: "italic",
                  fontSize: "1.05rem",
                  mb: 0,
                },
              },
              "& ul, & ol": {
                color: "whiteAlpha.800",
                pl: "1.5rem",
                mb: "1.5rem",
                "& li": {
                  mb: "0.5rem",
                  lineHeight: 1.8,
                },
              },
              "& pre": {
                bg: "whiteAlpha.50",
                border: "1px solid",
                borderColor: "whiteAlpha.100",
                borderRadius: "0.75rem",
                p: "1.5rem",
                my: "2rem",
                overflowX: "auto",
                "& code": {
                  fontSize: "0.9rem",
                  color: "#e2e8f0",
                },
              },
              "& code": {
                bg: "whiteAlpha.100",
                color: "purple.200",
                px: "0.4rem",
                py: "0.1rem",
                borderRadius: "4px",
                fontSize: "0.9em",
              },
              "& img": {
                borderRadius: "1rem",
                my: "2rem",
                maxW: "100%",
              },
              "& hr": {
                borderColor: "whiteAlpha.100",
                my: "3rem",
              },
            }}
          >
            <PortableText value={data?.body} />
          </Box>

          {/* Social Share Bar (End of paragraph / article) */}
          <SocialShare
            title={data?.title}
            accentColor="#a78bfa"
            hoverBg="rgba(139,92,246,0.15)"
          />
        </MotionBox>

        {/* Bottom decorative divider */}
        <Center mt="4rem" mb="2rem">
          <Flex alignItems="center" gap="1rem">
            <Box
              w="40px"
              h="1px"
              bgGradient="linear(to-r, transparent, whiteAlpha.300)"
            />
            <Box w="6px" h="6px" borderRadius="full" bg="purple.400" />
            <Box
              w="40px"
              h="1px"
              bgGradient="linear(to-l, transparent, whiteAlpha.300)"
            />
          </Flex>
        </Center>
      </Center>

      {/* Related Articles Section */}
      <Box position="relative" zIndex={1}>
        <Center flexDirection="column" pt="4rem" pb="2rem">
          <MotionText
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeInUp}
            fontSize="0.8rem"
            textTransform="uppercase"
            letterSpacing="0.3em"
            color="whiteAlpha.400"
            fontWeight={500}
            mb="0.8rem"
          >
            Continue Reading
          </MotionText>
          <MotionHeading
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeInUp}
            fontSize={["2rem", "2.5rem", "3rem"]}
            fontWeight={800}
            textTransform="uppercase"
            bgGradient="linear(to-r, #fff, #a78bfa, #60a5fa)"
            bgClip="text"
            textAlign="center"
            mb="1rem"
          >
            Keep Learning
          </MotionHeading>
          <Box
            w="60px"
            h="3px"
            borderRadius="full"
            bgGradient="linear(to-r, purple.400, blue.400)"
          />
        </Center>

        <Center
          flexWrap="wrap"
          w="100%"
          maxW="1300px"
          mx="auto"
          px={["1rem", "2rem", "3rem"]}
          pt="2rem"
          pb="7rem"
          justifyContent="center"
          gap={["1.5rem", "1.5rem", "2rem"]}
        >
          {(related.length ? related : blogs?.slice(0, 3))
            ?.map((t, index) => (
              <MotionBox
                key={t?._id || index}
                custom={index + 2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                w={["100%", "calc(50% - 1.5rem)", "calc(33.333% - 1.5rem)"]}
                maxW="380px"
                display="flex"
                justifyContent="center"
              >
                <List data={t} index={index} width="100%" />
              </MotionBox>
            ))}
        </Center>
      </Box>
    </Box>
  );
};

export default BlogView;
