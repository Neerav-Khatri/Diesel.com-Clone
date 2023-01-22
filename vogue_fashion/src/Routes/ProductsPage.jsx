import { Box, Flex, Grid, Heading, Select, Image, Text, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import axios from "axios";
import ProductCard from "../Components/ProductCard";

export default function ProductsPage() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState(""); 

    useEffect(() => {
        getData(page, search, order);
    },[page, search, order]);

    const getData = (page, search, order) => {
        axios.get(`https://verecel-database-api.vercel.app/nproducts?_sort=price&_order=${order}&q=${search}&_page=${page}&_limit=20`)
        .then((res) => {
            setData(res.data);
            setLoading(false);
        })
        .catch((error) => console.log(error))
    };

    const handleSearch = (value) => {
        setSearch(value);
    };

    if (loading) {
        return <Heading size="lg" mt="200px" >"Fashions fade, style is eternal."</Heading>
    }
    
    return (
        <div>
            <Navbar handleSearch={handleSearch}/>

            {/* Heading & Sort */}

            <Box bg="#f9f9f9" p="20px" mb="20px">
                <Heading size="2xl" mb="40px">Products</Heading>
                <Flex justifyContent="end" pr="20px">
                    <Select placeholder="SORT BY" w="20%" bg="white" onChange={(e) => setOrder(e.target.value)}>
                        <option value="asc">Price Low to High</option>
                        <option value="desc">Price High to Low</option>
                    </Select>
                </Flex>
            </Box>

            {/* Product display */}

            <Grid templateColumns="repeat(4,22%)" gap="40px 30px" justifyContent="center" mb="40px" >
                {data.map((e) => <ProductCard key={e.id} id={e.id} src={e.src} tag={e.tag} price={e.price} original={e.original} discount={e.discount} color={e.color} title={e.title} />)}
            </Grid>

            {/* Pagination */}

            <Flex justifyContent="center" alignItems="center" gap="20px" mb="30px">
                <Button colorScheme="blue" isDisabled={page===1} onClick={() => setPage(page-1)}>Previous</Button>
                <Text fontWeight="bold" fontSize="lg">{page}</Text>
                <Button colorScheme="blue" isDisabled={data.length<20} onClick={() => setPage(page+1)}>Next</Button>
            </Flex>

            <Footer />
        </div>
    )
}