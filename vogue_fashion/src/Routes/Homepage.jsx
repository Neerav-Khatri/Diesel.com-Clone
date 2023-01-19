import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Box, Button, Flex, Image, Stack, Grid, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Homepage() {
    const imageUrl = [
        { "url": "https://diesel.gumlet.io/banner/1674122705Topwear_1336x591.webp?compress=true&q=70" },
        { "url": "https://diesel.gumlet.io/banner/1674121536EOSS%20Website%20Banners-01.gif?compress=true&q=70"},
        { "url": "https://diesel.gumlet.io/banner/1674122683Denims_1336x591.webp?compress=true&q=70"},
    ]

    return (
        <div>
            <Navbar />

            {/* Offer Advertise */}

            <Carousel showArrows={false} infiniteLoop autoPlay interval="2000">
                {imageUrl.map((e) => 
                    <Box pos="relative" display="flex" justifyContent="center" mb="30px"> 
                        <Image src={e.url} alt="Advertise" w="full" />
                        <Flex gap="20px" pos="absolute" bottom="20%">
                            <Button bg="#ff0000" color="white" _hover={{border: "1px solid #ff0000", bg: "transparent", color: "#ff0000"}} px="30px">DISCOVER MAN</Button>
                            <Button bg="#ff0000" color="white" _hover={{border: "1px solid #ff0000", bg: "transparent", color: "#ff0000"}} px="30px">DISCOVER WOMAN</Button> 
                        </Flex>
                    </Box>
                )}
            </Carousel>

            {/* Offer Carousel */}

            

            {/* Category */}

            <Grid templateColumns="repeat(2,40%)" templateRows="2" justifyContent="center" gap="20px 30px" mb="20px">
                <Box pos="relative" display="flex" justifyContent="center" alignItems="center">
                    <Image w="full" h="full" src="https://diesel.gumlet.io/cms_images/1673434124FW22%20DROP1-2-3%20+%20HIGH%20SUMMER%20OPC_EXTRA_SUPER%20LOGO%20WINTER%20PUFFER_16_9_JPEG_72&300dpi_sRGB_D1_19_DROP2%20THE%20SUPER%20LOGO_M_026_sRGB.webp?compress=true&q=70" alt="LOGOMANIA" />
                    <Text fontSize="xl" fontWeight="bold" color="white" pos="absolute">LOGOMANIA</Text>
                </Box>
                <Box pos="relative" display="flex" justifyContent="center" alignItems="center">
                    <Image w="full" src="https://diesel.gumlet.io/cms_images/1666868060Untitled-2-03.webp?compress=true&q=70" alt="WINTER EDIT" />
                    <Text fontSize="xl" fontWeight="bold" color="white" pos="absolute">WINTER EDIT</Text>
                </Box>
                <Box pos="relative" display="flex" justifyContent="center" alignItems="center">
                    <Image w="full" src="https://diesel.gumlet.io/cms_images/1673435887FW22%20DROP1-2-3%20+%20HIGH%20SUMMER%20OPC_HIGH%20SUMMER_16_9_JPEG_300dpi_D2_48_HIGHSUMMER_M_001_B_16_9_sRGB.webp?compress=true&q=70" alt="ALL THINGS GRAPHIC" />
                    <Text fontSize="xl" fontWeight="bold" color="white" pos="absolute">ALL THINGS GRAPHIC</Text>
                </Box>
                <Box pos="relative" display="flex" justifyContent="center" alignItems="center">
                    <Image w="full" src="https://diesel.gumlet.io/cms_images/1673434905FW22%20DROP1-2-3%20+%20HIGH%20SUMMER%20OPC_DROP%203_WATCHES_16_9_JPEG_72&300dpi_sRGB_img22430347%20LANDSCAPE%20.webp?compress=true&q=70" alt="WATCHES" />
                    <Text fontSize="xl" fontWeight="bold" color="white" pos="absolute">WATCHES</Text>
                </Box>
            </Grid>

            {/* Services */}

            <Stack  mb="40px" gap="10px">
                <Grid  templateColumns="repeat(5,15%)" justifyContent="space-around">
                    <Flex direction="column" justifyContent="center" alignItems="center" gap="10px" >
                        <Image src="https://diesel.gumlet.io/cms_images/1671614479icons-01.webp" alt="PERSONALISED STYLING" w="50%" />
                        <Text fontSize="lg" fontWeight="semibold">PERSONALISED STYLING</Text>
                    </Flex>
                    <Flex direction="column" justifyContent="center" alignItems="center" gap="10px" >
                        <Image src="https://diesel.gumlet.io/cms_images/1671614498icons-02.webp" alt="30 DAY FREE RETURN" w="50%" />
                        <Text fontSize="lg" fontWeight="semibold">30 DAY FREE RETURN</Text>
                    </Flex>
                    <Flex direction="column" justifyContent="center" alignItems="center" gap="10px" >
                        <Image src="https://diesel.gumlet.io/cms_images/1671614517icons-03.webp" alt="AUTHENTIC PRODUCTS" w="50%" />
                        <Text fontSize="lg" fontWeight="semibold">AUTHENTIC PRODUCTS</Text>
                    </Flex>
                    <Flex direction="column" justifyContent="center" alignItems="center" gap="10px" >
                        <Image src="https://diesel.gumlet.io/cms_images/1671614563icons-04.webp" alt="FLEXIBLE & SECURE PAYMENTS" w="50%" />
                        <Text fontSize="lg" fontWeight="semibold">FLEXIBLE & SECURE PAYMENTS</Text>
                    </Flex>
                    <Flex direction="column" justifyContent="center" alignItems="center" gap="10px" >
                        <Image src="https://diesel.gumlet.io/cms_images/1671614575icons-05.webp" alt="LIFETIME SUPPORT" w="50%" />
                        <Text fontSize="lg" fontWeight="semibold">LIFETIME SUPPORT</Text>
                    </Flex>
                </Grid>
                <Grid templateColumns="repeat(3,15%)" justifyContent="space-around">
                    <Flex direction="column" justifyContent="center" alignItems="center" gap="10px" >
                        <Image src="https://diesel.gumlet.io/cms_images/1671614585icons-06.webp" alt="PRE - ORDER" w="50%" />
                        <Text fontSize="lg" fontWeight="semibold">PRE - ORDER</Text>
                    </Flex>
                    <Flex direction="column" justifyContent="center" alignItems="center" gap="10px" >
                        <Image src="https://diesel.gumlet.io/cms_images/1671614595icons-07.webp" alt="EXCLUSIVE OFFERS" w="50%" />
                        <Text fontSize="lg" fontWeight="semibold">EXCLUSIVE OFFERS</Text>
                    </Flex>
                    <Flex direction="column" justifyContent="center" alignItems="center" gap="10px" >
                        <Image src="https://diesel.gumlet.io/cms_images/1671614606icons-08.webp" alt="FREE SHIPPING" w="50%" />
                        <Text fontSize="lg" fontWeight="semibold">FREE SHIPPING</Text>
                    </Flex>
                </Grid>
            </Stack>
            
            {/* Shoping Option */}

            <Box pos="relative" display="flex" justifyContent="center" alignItems="center" mb="30px"> 
                <Image src="https://diesel.gumlet.io/cms_images/1671005754Artboard%203@3x.webp" alt="Advertise" w="full" />
                <Flex gap="20px" pos="absolute">
                    <Button bg="#ffffff" color="black" _hover={{border: "1px solid #ffffff", bg: "transparent", color: "#ffffff"}} px="40px">SHOP MAN</Button>
                    <Button bg="#ffffff" color="black" _hover={{border: "1px solid #ffffff", bg: "transparent", color: "#ffffff"}} px="40px">SHOP WOMAN</Button> 
                </Flex>
            </Box>

            <Footer />
        </div>
    )
}