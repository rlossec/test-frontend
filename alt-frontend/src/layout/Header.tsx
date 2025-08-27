import { NavBar } from "./NavBar";
import { SearchBar } from "./SearchBar";
import { NotificationsCounter } from "./NotificationsCounter";
import { UserDropdown } from "./UserDropdown";
import { ThemeToggle } from "./ThemeToggle";
import { SettingsIcon } from "../icons/user-interface/SettingsIcon";
import { MenuIcon } from "../icons/navigation/MenuIcon";
import { XIcon } from "../icons/navigation/XIcon";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex md:flex-row flex-col justify-between items-center p-4 border-b-2 border-border">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src={"/src/assets/react.svg"}
                  alt="logo TechCorp"
                  className="w-5 h-5"
                />
              </div>
              <h1 className="text-2xl font-bold">TechCorp</h1>
            </div>
          </Link>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* NavBar */}
      <div className="flex flex-grow items-center justify-start ml-10">
        <NavBar />
      </div>

      {/* Actions (desktop only) */}
      <div className="hidden md:flex items-center gap-6 mr-10">
        <SearchBar />
        <ThemeToggle />
        <NotificationsCounter />
        <SettingsIcon size={24} className="text-text-light" />
        <UserDropdown />
      </div>
    </header>
  );
};
