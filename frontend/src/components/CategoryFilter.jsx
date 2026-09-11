const CategoryFilter = ({ category, setCategory }) => {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="rounded-full border border-gray-300 bg-white px-5 py-3 text-sm outline-none transition focus:border-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35]/10"
    >
      <option value="">All Categories</option>
      <option value="Electronics">Electronics</option>
      <option value="Fashion">Fashion</option>
      <option value="Books">Books</option>
      <option value="Home">Home</option>
    </select>
  );
};

export default CategoryFilter;