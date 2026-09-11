import React, { useEffect, useState } from "react";
import axiosInstance from "../services/api";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

const Products = () => {
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

      <SearchBar search={search} setSearch={setSearch} />
      <CategoryFilter category={category} setCategory={setCategory} />

      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
