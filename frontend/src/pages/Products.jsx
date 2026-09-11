import React, { useEffect, useState } from "react";
import axiosInstance from "../services/api";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await axiosInstance.get("/products", {
          params: { search, category },
        });

        setProducts(response.data.products);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [search, category]);

  if (loading) {
    return <h2>Loading products...</h2>;
  }

  if (error) {
    return <h2>Something went wrong while loading products.</h2>;
  }

  if (products.length === 0) {
    return <h2>No products found.</h2>;
  }

  return (
    <div>
      <h1>Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
        <option value="Books">Books</option>
        <option value="Home">Home</option>
      </select>

      {products.map((product) => (
        <div key={product._id}>
          <img src={product.image} alt={product.name} />

          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <p>₹{product.price}</p>
          <p>{product.stock} units left</p>

          <button onClick={() => navigate(`/products/${product._id}`)}>
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
