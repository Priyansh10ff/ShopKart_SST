const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full rounded-full border border-gray-300 px-5 py-3 outline-none focus:border-[#ff9918]"
    />
  );
};

export default SearchBar;