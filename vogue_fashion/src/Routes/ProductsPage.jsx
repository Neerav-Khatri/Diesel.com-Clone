import { Box, Flex, Grid, Heading, Select, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import axios from "axios";
import ProductCard from "../Components/ProductCard";

export default function ProductsPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    },[]);

    const getData = () => {
        axios.get(`http://localhost:8080/man?_limit=20`)
        .then((res) => setData(res.data))
        .catch((error) => console.log(error))
    };
    
    return (
        <div>
            <Navbar />

            {/* Heading & Sort */}

            <Box bg="#f9f9f9" p="20px" mb="20px">
                <Heading size="2xl" mb="40px">Content</Heading>
                <Flex justifyContent="end" pr="20px">
                    <Select placeholder="SORT BY" w="20%" bg="white">
                        <option>Price Low to High</option>
                        <option>Price High to Low</option>
                        <option>Discount High to Low</option>
                    </Select>
                </Flex>
            </Box>

            {/* Product display */}

            <Grid templateColumns="repeat(4,22%)" gap="40px 30px" justifyContent="center" mb="40px" >
                {data.map((e) => <ProductCard key={Date.now()+Math.random()} src={e.src} tag={e.tag} price={e.price} original={e.original} discount={e.discount} color={e.color} title={e.title} />)}
            </Grid>

            <Footer />
        </div>
    )
}