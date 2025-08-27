import { NavBar } from "./NavBar";
import { SearchBar } from "./SearchBar";
import { NotificationsCounter } from "./NotificationsCounter";
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
        <NotificationsCounter />
        {/* User avatar + dropdown menu */}
        <UserDropdown />
      </div>
    </header>
  );
};
