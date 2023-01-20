import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Container, Flex, Heading, Input, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";

export default function Footer() {
    return (
        <div>
            {/* Upper section */}

            <Flex>
                <Box bg="#000000" w="50%" color="white" display="flex" justifyContent="center" alignItems="center">
                    <Container mt="10px" w="65%">
                        <Heading size="lg" >Sign up to never miss an update.</Heading>
                        <Input placeholder="Enter your Email address*" color="black" w="90%" size="md" bg="white" my="20px" />
                        <RadioGroup>
                            <Stack direction="row" gap="20px" justifyContent="center">
                                <Radio value="men">Men</Radio>
                                <Radio value="women">Women</Radio>
                            </Stack>
                        </RadioGroup>
                        <Text fontSize="xs" my="20px">By clicking Sign up you have read and agreed to our privacy policy</Text>
                        <Button color="black" w="90%" fontSize="lg">Sign Up</Button>
                    </Container>
                </Box>
                <Box bg="#eeeeee" w="50%" display="flex" justifyContent="center" alignItems="center">
                    <Container my="7rem">
                        <Text fontSize="2xl" fontWeight="semibold" mb="15px">Connect with us on social media</Text>
                        <Box display="flex" w="40%" justifyContent="space-around" m="auto">
                            <BsInstagram size="30px"/>
                            <FaFacebookF size="30px"/>
                            <IoLogoYoutube size="30px"/>
                        </Box>
                    </Container>
                </Box>
            </Flex>

            {/* Lower section */}

            <Flex mt="10px" fontSize="lg" p="10px" justifyContent="space-around">
                <Box>
                <Accordion defaultIndex={[1]} allowMultiple w="200px">
                    <AccordionItem>
                        <AccordionButton>
                            <Box as="span" textAlign='left'>
                            HELP
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel textAlign="left" lineHeight="50px">
                            <Text>Order Status</Text>
                            <Text>Delivery</Text>
                            <Text>Returns</Text>
                            <Text>Contact Us</Text>
                            <Text>View All</Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                </Box>

                <Box>
                <Accordion defaultIndex={[1]} allowMultiple w="250px">
                    <AccordionItem>
                        <AccordionButton>
                            <Box as="span" textAlign='left'>
                            COOKIE POLICY & TERMS
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel textAlign="left" lineHeight="50px">
                            <Text>Privacy Policy</Text>
                            <Text>Shipping & Delivery Policy</Text>
                            <Text>Terms & Conditions</Text>
                            <Text>Returns & Refund Policy</Text>
                            <Text>Fees & Payment Policy</Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                </Box>

                <Box>
                <Accordion defaultIndex={[1]} allowMultiple w="250px">
                    <AccordionItem>
                        <AccordionButton>
                            <Box as="span" textAlign='left'>
                            WORLD OF VOGUE 
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel textAlign="left" lineHeight="50px">
                            <Text>About Vogue</Text>
                            <Text>For Responsible Living</Text>
                            <Text>Only the Brave Foundation</Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
                </Box>

                <Box>STORE LOCATOR</Box>
            </Flex>

        </div>
    )
}