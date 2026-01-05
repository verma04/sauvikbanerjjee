import React, { useState } from "react";

import { motion } from "framer-motion";
import { Box, Button } from "@chakra-ui/react";
import { ChakraBox } from "../../lib/Chakra";


const BackToButton = ({ }) => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document && document?.documentElement?.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    window?.addEventListener("scroll", toggleVisible);

    return (
        <>

            <>
                {visible && (
                    <Box
                        position={"fixed"}

                        zIndex={9999}
                        right="5%"
                        bottom={"12%"}

                        onClick={scrollToTop}>

                        <ChakraBox
                            drag
                            boxShadow='2xl'
                            cursor={"pointer"}
                            rounded='md'
                            borderRadius="10px"
                            width={"3rem"}
                            height="3rem"
                            backgroundColor="black"
                            zIndex={10}
                            display="flex"
                            justifyContent={"center"}

                        >
                            <motion.svg
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
                                exit={{ y: 100, opacity: 0, transition: { duration: 0.6 } }}
                                xmlns="http://www.w3.org/2000/svg"
                                width={"30%"}
                                viewBox="0 0 384 512"
                                style={{ opacity: 0.7 }}
                            >
                                <path
                                    fill={"white"}
                                    strokeWidth={1}
                                    d="M54.63 246.6L192 109.3l137.4 137.4C335.6 252.9 343.8 256 352 256s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25l-160-160c-12.5-12.5-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25S42.13 259.1 54.63 246.6zM214.6 233.4c-12.5-12.5-32.75-12.5-45.25 0l-160 160c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0L192 301.3l137.4 137.4C335.6 444.9 343.8 448 352 448s16.38-3.125 22.62-9.375c12.5-12.5 12.5-32.75 0-45.25L214.6 233.4z"
                                />
                            </motion.svg>
                        </ChakraBox>
                    </Box>
                )}

            </>
        </>
    );
};

export default BackToButton;
