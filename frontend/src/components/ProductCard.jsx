import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-[#f5f2ed]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-gray-700 backdrop-blur">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="line-clamp-2 min-h-[3.5rem] text-lg font-semibold text-[#303030]">
          {product.name}
        </h2>

        <p className="mt-3 text-xl font-bold text-[#303030]">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <p
            className={`text-sm font-medium ${
              product.stock > 0
                ? "text-green-700"
                : "text-red-600"
            }`}
          >
            {product.stock > 0
              ? `${product.stock} units left`
              : "Out of stock"}
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate(`/products/${product._id}`)}
          className="mt-5 w-full rounded-full bg-[#303030] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ff6b35]"
        >
          View Details →
        </button>
      </div>
    </div>
  );
};

export default ProductCard;