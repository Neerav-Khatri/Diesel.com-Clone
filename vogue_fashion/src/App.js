import './App.css';
import AllRoutes from "./Routes/AllRoutes";
import ProductsPage from './Routes/ProductsPage';

function App() {
  document.title="Vogue Fashion";

  return (
    <div className="App">
        {/* <AllRoutes /> */}
        <ProductsPage />
    </div>
  );
}

export default App;
