import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../services/api";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await axiosInstance.get(`/products/${id}`);

        setProduct(response.data.product);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <h2>Loading product...</h2>;
  }

  if (error) {
    return <h2>Something went wrong while loading the product.</h2>;
  }

  if (!product) {
    return <h2>Product not found.</h2>;
  }

  return (
    <div>
      <img src={product.image} alt={product.name} />

      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      <p>{product.category}</p>
      <p>{product.stock} units left</p>

      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
