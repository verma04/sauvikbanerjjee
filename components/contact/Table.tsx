import { Table, TableCaption, TableContainer, Th, Thead, Tr, Tbody, Td, Box, Heading, Center, ListItem, UnorderedList, Flex } from '@chakra-ui/react'
import React from 'react'
import { isDesktop, isMobile } from 'react-device-detect'

const MentorshipCategories = ({ data }) => {
    const [active, setActive] = React.useState('professional')
    return (
        <>
            {
                isDesktop &&
                <Box mt="5rem" width={["100%", "100%", "100%", "100%"]} >
                    <Flex width={"100%"} justifyContent="space-between" >


                        <Flex flexDirection={"column"} width={"48%"} border="1px solid white" >
                            <Center backgroundColor="white" width={"100%"} alignItems="center" display={"flex"} height="4rem" >
                                <Heading alignItems={"center"} ml="1rem"  >
                                    Professional
                                </Heading>



                            </Center>
                            <Box ml="1rem" mt="1rem" mb="1rem">
                                <UnorderedList>
                                    {data.professional.map(t =>
                                        <ListItem pt="1rem" color="white" >{t}</ListItem>
                                    )

                                    }


                                </UnorderedList>
                            </Box>
                        </Flex>

                        <Flex flexDirection={"column"} width={"48%"} border="1px solid white" >
                            <Center backgroundColor="white" width={"100%"} alignItems="center" display={"flex"} height="4rem" >
                                <Heading alignItems={"center"} ml="1rem"  >
                                    personal
                                </Heading>



                            </Center>
                            <Box ml="1rem" mt="1rem" mb="1rem">
                                <UnorderedList>
                                    {data.personal.map(t =>
                                        <ListItem pt="1rem" color="white" >{t}</ListItem>
                                    )

                                    }


                                </UnorderedList>
                            </Box>
                        </Flex>


                    </Flex>
                </Box >
            }


            {isMobile && <Box mt="5rem" width={["100%", "100%", "100%", "100%"]} >
                <Flex width={"100%"}  >


                    <Flex flexDirection={"column"} width={"100%"} border="1px solid white" >
                        <Center backgroundColor="white" width={"100%"} alignItems="center" justifyContent={"space-evenly"} display={"flex"} height="4rem" >
                            <Heading paddingRight={"1px"} onClick={() => setActive('professional')} color={active === "professional" ? '#2981E2' : ""} alignItems={"center"} ml="1rem"  >
                                Professional
                            </Heading>


                            <Heading onClick={() => setActive('personal')} color={active === "personal" ? '#2981E2' : ''} alignItems={"center"} ml="1rem"  >
                                personal
                            </Heading>
                        </Center>
                        <Box ml="1rem" mt="1rem" mb="1rem">

                            {active === "professional" ?
                                <UnorderedList>
                                    {data.professional.map(t =>
                                        <ListItem pt="1rem" color="white" >{t}</ListItem>
                                    )

                                    }


                                </UnorderedList>
                                :
                                <UnorderedList>
                                    {data.personal.map(t =>
                                        <ListItem pt="1rem" color="white" >{t}</ListItem>
                                    )

                                    }


                                </UnorderedList>

                            }

                        </Box>
                    </Flex>



                </Flex>
            </Box >

            }

        </>
    )
}

export default MentorshipCategories