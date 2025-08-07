import { SearchIcon } from "@heroicons/react/solid";

const Searchbar = () => {
  return (
    <div className="hidden md:block relative w-64">
      <input
        type="text"
        placeholder="Search..."
        className="w-full rounded-full border border-gray-400 bg-gray-200 px-4 py-2 pr-10 text-sm text-gray-800 placeholder-gray-500 shadow-sm focus:border-gray-500 focus:outline-none"
      />
      <SearchIcon className="absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-600 cursor-pointer hover:text-gray-800 transition" />
    </div>
  );
};

export default Searchbar;
