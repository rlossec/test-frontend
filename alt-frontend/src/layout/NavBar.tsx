import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="p-4">
      <div className="flex items-center gap-4">
        <Link to="/">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <img
                src={"/src/assets/react.svg"}
                alt="logo TechCorp"
                className="w-5 h-5"
              />
            </div>
            <h1 className="text-2xl font-bold">TechCorp</h1>
          </div>
        </Link>
        <div className="flex items-center gap-4 ml-10">
          <Link to="/">Dashboard</Link>
          <Link to="/analytics">Analytics</Link>
          <Link to="/tools">Tools</Link>
          <Link to="/settings">Settings</Link>
        </div>
      </div>
    </nav>
  );
};
