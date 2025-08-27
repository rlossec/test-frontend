import { Link } from "react-router-dom";
import { Avatar } from "../components/common/base/Avatar";
import { DropdownMenu } from "../components/common/layout/DropdownMenu";
import { DropdownMenuItem } from "../components/common/layout/DropdownMenuItem";
import { ChevronDownIcon } from "../icons/navigation/ChevronDownIcon";

export const UserDropdown = () => {
  return (
    <div className="flex items-center gap-2">
      <Avatar
        src="https://avatar.iran.liara.run/public/12"
        alt="User avatar"
        size={36}
      />
      <DropdownMenu trigger={<ChevronDownIcon className="size-4" />}>
        <DropdownMenuItem>
          <Link to="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/user/settings">User Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/logout">Logout</Link>
        </DropdownMenuItem>
      </DropdownMenu>
    </div>
  );
};
