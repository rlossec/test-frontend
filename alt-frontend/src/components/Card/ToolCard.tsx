import { PencilIcon } from "../../icons/actions/PencilIcon";
import { EyeIcon } from "../../icons/media-player/EyeIcon";
import type { Tool } from "../../types/tool";

// TODO:
// - Add Tool icon, name, description complète
// - Category, Status (mêmes badges), User count
// - Monthly cost, Last update, Department
// - Quick actions (Edit, View details, Disable/Enable)

export const ToolCard = ({ tool }: { tool: Tool }) => {
  return (
    // tailwind card
    <div className="bg-background  rounded-lg shadow-md p-4 ">
      {/* Tool Title section */}
      <div className="flex items-center gap-6 p-4">
        <div className="float-left">
          <img src={tool.icon_url} alt={tool.name} className="w-10 h-10" />
        </div>
        <h2 className="text-lg font-bold">{tool.name}</h2>
      </div>

      {/* Tool Info section */}
      <div className="flex items-center gap-2 p-4">
        {/* Tool description */}
        <p className="text-sm text-gray-500">{tool.description}</p>

        {/* Tool website */}
        <p className="text-sm text-gray-500">
          {tool.website_url ? (
            <a
              href={tool.website_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {tool.website_url}
            </a>
          ) : (
            "No url provided"
          )}
        </p>
      </div>

      {/* Badges section */}
      <div className="flex flex-col justify-start gap-2">
        <p>Category: {tool.category}</p>
        <p>Status: {tool.status}</p>
        <p>Active users: {tool.active_users_count}</p>
      </div>
      {/* Quick actions section on the top right with Icons button*/}
      <div className="flex items-center gap-2">
        <PencilIcon className="w-4 h-4" />
        <EyeIcon className="w-4 h-4" />
        {/* Toggle button to disable/enable the tool */}
      </div>
    </div>
  );
};
