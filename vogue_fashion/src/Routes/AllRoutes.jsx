import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import ProductsPage from "./ProductsPage";

export default function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/products" element={<ProductsPage />}/>
            </Routes>
        </div>
    )
}