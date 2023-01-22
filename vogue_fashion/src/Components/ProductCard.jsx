import { Box, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { GrFavorite } from "react-icons/gr";

export default function ProductCard({ id, tag, src, price, original, discount, color, title }) {
    const handleWishlist = () => {
        const data = {
            id,
            tag,
            src,
            price,
            original,
            discount,
            color,
            title,
        } 

        axios.post(`https://verecel-database-api.vercel.app/nwishlist`, data)
        .then((res) => console.log(res))
        .catch((error) => console.log(error))

        alert("Products is added to the Wishlist.")
    };

    return (
        <div>
            <Flex direction="column" boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
                <Box pos="relative">
                    <Image w="100%" src={src} alt="image" h="503px" />
                    {tag!==undefined ? <Image src={tag} alt="tag" w="30%" pos="absolute" top="0px"/> : null}
                    <Box pos="absolute" right="20px" bottom="20px" ><GrFavorite onClick={handleWishlist} size="20px"/></Box>
                </Box>   
                <Box textAlign="left" p="10px">
                    <Flex gap="15px" mb="10px" fontWeight="bold">
                        <Text>Rs. {price}</Text>
                        {original!==undefined ? <Text color="#686868" textDecorationLine="line-through">Rs. {original}</Text> : null}
                        {discount!==undefined ? <Text color="#808080">{discount}</Text> : null}
                    </Flex>
                    <Text>{color}</Text>
                    <Text noOfLines="1">{title}</Text>
                </Box>   
            </Flex>
        </div>
    )
}