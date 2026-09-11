const CategoryFilter = ({ category, setCategory }) => {
  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="rounded-full border border-gray-300 px-5 py-3 outline-none focus:border-[#ff9918]"
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