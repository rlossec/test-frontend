import { NavBar } from "./NavBar";
import { SearchBar } from "./SearchBar";
import { Notifications } from "./Notifications";
import { UserDropdown } from "./UserDropdown";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header className="flex justify-between items-center p-4">
      {/* NavBar */}
      <NavBar />
      <div className="flex items-center gap-4 p-2 ">
        {/* SearchBar */}
        <SearchBar />
        {/* ThemeToggle */}
        <ThemeToggle />
        {/* Notifications avec compteur */}
        <Notifications />
        {/* User avatar + dropdown menu */}
        <UserDropdown />
      </div>
    </header>
  );
};
