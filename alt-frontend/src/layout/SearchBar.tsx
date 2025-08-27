import { SearchIcon } from "../icons/actions/SearchIcon";

export const SearchBar = () => {
  // TODO: Add logic custom to the page

  return (
    <div className="relative w-80">
      <SearchIcon
        size={24}
        className="absolute left-2 top-1/2 -translate-y-1/2 text-text-light"
      />
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-2 rounded-md border border-text-light focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
};
