interface DropdownMenuItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const DropdownMenuItem = ({
  children,
  onClick,
}: DropdownMenuItemProps) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-2 cursor-pointer hover:bg-background-alt text-text transition"
    >
      {children}
    </div>
  );
};
