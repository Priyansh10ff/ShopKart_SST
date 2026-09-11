const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="relative w-full sm:min-w-[260px]">
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        🔍
      </span>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-full border border-gray-300 bg-white py-3 pl-11 pr-5 text-sm outline-none transition focus:border-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35]/10"
      />
    </div>
  );
};

export default SearchBar;