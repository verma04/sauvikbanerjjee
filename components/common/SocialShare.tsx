import React, { useState, useEffect } from "react";
import { Box, Flex, Text, IconButton, Tooltip } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const MotionFlex: any = motion(Flex as any);

interface SocialShareProps {
  title?: string;
  url?: string;
  accentColor?: string;
  hoverBg?: string;
}

export const SocialShare: React.FC<SocialShareProps> = ({
  title = "",
  url = "",
  accentColor = "#fde68a",
  hoverBg = "rgba(251,191,36,0.15)",
}) => {
  const [shareUrl, setShareUrl] = useState<string>(url);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(url || window.location.href);
    }
  }, [url]);

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title || "Check out this article");

  const handleShare = (shareLink: string, platformName: string) => {
    if (typeof window !== "undefined") {
      window.open(
        shareLink,
        `share-${platformName}`,
        "width=600,height=600,scrollbars=yes,resizable=yes"
      );
    }
  };

  const handleCopyLink = async () => {
    if (typeof window !== "undefined" && navigator?.clipboard) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        toast.success("Link copied to clipboard!", {
          position: "bottom-center",
          autoClose: 2500,
          hideProgressBar: true,
        });
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        toast.error("Failed to copy link.");
      }
    }
  };

  const platforms = [
    {
      name: "LinkedIn",
      color: "#0a66c2",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      ),
      action: () =>
        handleShare(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
          "linkedin"
        ),
    },
    {
      name: "X (Twitter)",
      color: "#1da1f2",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      action: () =>
        handleShare(
          `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
          "twitter"
        ),
    },
    {
      name: "Facebook",
      color: "#1877f2",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.65 13.75 5.65c1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.62.77-1.62 1.56V12h2.77l-.44 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z"/>
        </svg>
      ),
      action: () =>
        handleShare(
          `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
          "facebook"
        ),
    },
    {
      name: "WhatsApp",
      color: "#25d366",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 16.59c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.32a8.192 8.192 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.67 8.24-8.22 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.8-.23-.09-.39-.12-.56.12-.17.25-.66.8-.81.97-.15.17-.31.19-.56.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.1-.5.11-.11.25-.29.37-.43.12-.14.16-.24.25-.4.09-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.53.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z"/>
        </svg>
      ),
      action: () =>
        handleShare(
          `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
          "whatsapp"
        ),
    },
    {
      name: copied ? "Copied!" : "Copy Link",
      color: accentColor,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      ),
      action: handleCopyLink,
    },
  ];

  return (
    <MotionFlex
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      gap={{ base: "0.8rem", sm: "1.2rem" }}
      py="1rem"
      px="1.5rem"
      bg="rgba(255, 255, 255, 0.03)"
      backdropFilter="blur(12px)"
      borderRadius="1.2rem"
      border="1px solid"
      borderColor="whiteAlpha.150"
      boxShadow="0 4px 20px rgba(0, 0, 0, 0.3)"
      my="2.5rem"
      w="100%"
    >
      <Text
        color="whiteAlpha.700"
        fontSize="0.8rem"
        fontWeight={600}
        textTransform="uppercase"
        letterSpacing="0.12em"
        mr="0.5rem"
      >
        Share
      </Text>
      <Flex flexDirection="row" gap="0.75rem" alignItems="center">
        {platforms.map((platform, idx) => (
          <Tooltip key={idx} label={platform.name} placement="top" hasArrow>
            <IconButton
              aria-label={platform.name}
              icon={platform.icon}
              onClick={platform.action}
              size="md"
              isRound
              bg="whiteAlpha.100"
              color="whiteAlpha.900"
              transition="all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
              _hover={{
                bg: hoverBg,
                color: platform.color,
                transform: "translateY(-3px) scale(1.08)",
                boxShadow: `0 8px 20px rgba(0,0,0,0.4), 0 0 12px ${platform.color}50`,
              }}
            />
          </Tooltip>
        ))}
      </Flex>
    </MotionFlex>
  );
};

export default SocialShare;
