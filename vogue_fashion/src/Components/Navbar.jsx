import { Box, Button, Flex, HStack, Image, Input, Text } from "@chakra-ui/react";
import logo from "../Vogue_logo.png";
import { BiUser } from "react-icons/bi"
import { FiSearch } from "react-icons/fi"
import { GrFavorite } from "react-icons/gr"
import { RxCross2 } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginAuth } from "../Authenticate/AuthLogin";

export default function Navbar({handleSearch}) {
    const [search, setSearch] = useState(false);
    const {auth, name, handleLogout} = useContext(LoginAuth);

    return (
        <div>
            <Flex bg="white" p="10px 20px" alignItems="center" justifyContent="space-between" pos="fixed" zIndex="1" w="100%">
                <HStack gap="20px" fontWeight="bold" ml="20px">
                    <Link to="/products">
                        <Box>MAN</Box>
                    </Link>
                    <Box>WOMAN</Box>
                    <Box>KID</Box>
                    <Box>SPORTS</Box>
                    <Box border="2px solid red" p="5px 15px" color="red" >SALE</Box>
                </HStack>
                <HStack>
                    <Link to="/">
                        <Image src={logo} alt="Vogue_Fashion" w="40%"/>
                    </Link>
                </HStack>
                <HStack gap="20px" mr="20px">
                    {!auth ? 
                    <Link to="/signup">
                        <BiUser size="30px"/>
                    </Link> : null}
                    {auth ? <Text fontSize="lg" fontWeight="bold" textDecorationLine="underline">Welcome {name}</Text> : null}
                    <FiSearch size="30px" onClick={() => setSearch(true)}/>           
                    <Link to="/wishlist">
                        <GrFavorite size="30px" />
                    </Link>   
                    <HiOutlineShoppingBag size="30px" />  
                    {auth ? <Button colorScheme="red" onClick={handleLogout}>Logout</Button> : null}    
                </HStack>
            </Flex>
            <Box h="80px"/>
            {search ? 
            <Flex alignItems="center" p="10px 20px" gap="20px" pos="fixed" zIndex="2" w="full" bg="white">
                <FiSearch size="20px" />
                <Input placeholder="What are you looking for?" onInput={(e) => handleSearch(e.target.value)} border="none" />
                <RxCross2 size="20px" onClick={() => setSearch(false)}/>
            </Flex> : null }
        </div>
    )
}