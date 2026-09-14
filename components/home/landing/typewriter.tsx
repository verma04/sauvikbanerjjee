import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

interface TypewriterProps {
  text: string;
  startDelay?: number;
  typeSpeed?: number;
  hideCursorAfterText?: boolean;
  cursorColor?: string;
  scrollArea?: any;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  startDelay = 0,
  typeSpeed = 150,
  hideCursorAfterText = true,
  cursorColor = "white",
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    // When mounted on client, start the typing animation
    setDisplayText("");
    setShowCursor(true);

    let currentIndex = 0;
    let typeInterval: NodeJS.Timeout | null = null;

    const startTimer = setTimeout(() => {
      typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          if (typeInterval) clearInterval(typeInterval);
          if (hideCursorAfterText) {
            setTimeout(() => setShowCursor(false), 500);
          }
        }
      }, typeSpeed);
    }, startDelay);

    return () => {
      clearTimeout(startTimer);
      if (typeInterval) clearInterval(typeInterval);
    };
  }, [text, startDelay, typeSpeed, hideCursorAfterText]);

  return (
    <Box as="span" display="inline-block" suppressHydrationWarning>
      {displayText}
      {showCursor && (
        <Box
          as="span"
          display="inline-block"
          w="3px"
          h="0.85em"
          bg={cursorColor}
          ml="3px"
          verticalAlign="baseline"
          animation="blink 1s step-end infinite"
        />
      )}
    </Box>
  );
};

export default Typewriter;
