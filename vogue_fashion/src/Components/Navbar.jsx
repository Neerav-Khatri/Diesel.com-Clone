import { Box, Flex, HStack, Image } from "@chakra-ui/react";
import logo from "../Vogue_logo.png";
import { BiUser } from "react-icons/bi"
import { FiSearch } from "react-icons/fi"
import { GrFavorite } from "react-icons/gr"
import { HiOutlineShoppingBag } from "react-icons/hi"

export default function Navbar() {
    return (
        <div>
            <Flex bg="white" p="10px 20px" alignItems="center" justifyContent="space-between" pos="fixed" w="100%">
                <HStack gap="20px" fontWeight="bold" ml="20px">
                    <Box>MAN</Box>
                    <Box>WOMAN</Box>
                    <Box>KID</Box>
                    <Box>SPORTS</Box>
                    <Box border="2px solid red" p="5px 15px" color="red" >SALE</Box>
                </HStack>
                <HStack>
                    <Image src={logo} alt="Vogue_Fashion" w="40%"/>
                </HStack>
                <HStack gap="20px" mr="20px" >
                    <BiUser size="30px"/>
                    <FiSearch size="30px"/>           
                    <GrFavorite size="30px" />   
                    <HiOutlineShoppingBag size="30px" />      
                </HStack>
            </Flex>
            <Box h="90px"/>
        </div>
    )
}