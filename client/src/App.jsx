import { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  const fetchProducts = async () => {
    const { data } = await axios.get(
      "https://ecommerce-project-wj6g.onrender.com/api/products"
    );

    setProducts(data);
  };

  fetchProducts();
}, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        E-Commerce Store
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;