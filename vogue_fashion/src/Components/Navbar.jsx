import { Box, Flex, HStack, Image, Input } from "@chakra-ui/react";
import logo from "../Vogue_logo.png";
import { BiUser } from "react-icons/bi"
import { FiSearch } from "react-icons/fi"
import { GrFavorite } from "react-icons/gr"
import { RxCross2 } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi"
import { useState } from "react";

export default function Navbar() {
    const [search, setSearch] = useState(false);
    console.log(search);

    return (
        <div>
            <Flex bg="white" p="10px 20px" alignItems="center" justifyContent="space-between" pos="fixed" zIndex="1" w="100%">
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
                    <FiSearch size="30px" onClick={() => setSearch(true)}/>           
                    <GrFavorite size="30px" />   
                    <HiOutlineShoppingBag size="30px" />      
                </HStack>
            </Flex>
            <Box h="80px"/>
            {search ? 
            <Flex alignItems="center" p="10px 20px" gap="20px" pos="fixed" zIndex="2" w="full" bg="white">
                <FiSearch size="20px" />
                <Input placeholder="What are you looking for?" border="none" />
                <RxCross2 size="20px" onClick={() => setSearch(false)}/>
            </Flex> : null }
        </div>
    )
}