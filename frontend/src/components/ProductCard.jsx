import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
      <div className="h-64 overflow-hidden bg-[#f5f2ed]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-6">
        <p className="text-sm text-[#777]">{product.category}</p>

        <h2 className="mt-2 text-xl font-semibold text-[#303030]">
          {product.name}
        </h2>

        <p className="mt-3 text-lg font-medium text-[#303030]">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        <p
          className={`mt-2 text-sm ${
            product.stock > 0 ? "text-green-700" : "text-red-600"
          }`}
        >
          {product.stock > 0
            ? `${product.stock} units left`
            : "Out of stock"}
        </p>

        <button
          type="button"
          onClick={() => navigate(`/products/${product._id}`)}
          className="mt-5 w-full rounded-full bg-[#303030] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#ff9918]"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;