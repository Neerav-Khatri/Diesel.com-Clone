import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./Login";
import ProductsPage from "./ProductsPage";
import SignUp from "./SignUp";
import Wishlist from "./Wishlist";

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products" element={<ProductsPage />}/>
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </div>
    )
}