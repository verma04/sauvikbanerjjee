import { extendTheme } from "@chakra-ui/react";

import { defineStyleConfig } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"
const Container = defineStyleConfig({
  // The styles all button have in common

  // Two variants: outline and solidp
  sizes: {
    xl: {
      background: "red",
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, //
    },
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  variants: {
    container: {
      maxW: ["95%", "95%", "90%", "1230px", "1230px"],
    },
  },
  // The default size and variant values
});

const Button = defineStyleConfig({
  // The styles all button have in common

  // Two variants: outline and solid

  variants: {
    white: {
      pt: "0.2rem",
      fontWeight: 200,
      color: "#2981E2",
      background: "white",
      fontSize: "1.2rem",
      borderBlockColor: "white",
      textTransform: "uppercase",
      fontFamily: "Bebas Neue",
      _hover: { bg: '#2981E2', color: "white", borderBlockColor: '#2981E2', }

    },
  },
  // The default size and variant values
});

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  h2: {
    fontSize: "0.5rem",
  },
  p: {
    color: "white",
  },
};

const breakpoints = {
  sm: "480px",
  md: "768px",
  lg: "1140px",
  xl: "1280px",

};

export const theme = extendTheme({
  fonts: {
    text: "Open sans",
    heading: "Bebas Neue",
    button: "Bebas Neue",
    label: "Bebas Neue",
  },
  breakpoints,
  components: {
    Container,
    Button,
  },
  colors,
});
