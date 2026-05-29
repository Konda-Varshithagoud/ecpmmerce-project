import { useEffect, useState } from "react";
import API from "../services/api";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await API.get("/products");
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>

      {products?.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <img src={product.image} loading="lazy" />
        </div>
      ))}
    </div>
  );
}

export default Home;