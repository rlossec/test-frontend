import { useState } from "react";
import { useNavigate } from "react-router-dom";

import type { Tool } from "../../types/tool";

import { formatDate } from "../../utils/format";

import { Badge } from "../common/base/Badge";
import { IconButton } from "../common/base/buttons/IconButton";
import { Toggle } from "../common/forms/simple/Toggle";

import { ToolIcon } from "../../icons/others/ToolIcon";
import { PencilIcon } from "../../icons/actions/PencilIcon";
import { EyeIcon } from "../../icons/media-player/EyeIcon";
import { ExternalLinkIcon } from "../../icons/navigation/ExternalLinkIcon";

// TODO:
// - Add Tool icon, name, description complète
// - Category, Status (mêmes badges), User count
// - Monthly cost, Last update, Department
// - Quick actions (Edit, View details, Disable/Enable)

export const ToolCard = ({ tool }: { tool: Tool }) => {
  const navigate = useNavigate();

  // TODO: Add modal for view details and edit
  const handleViewDetails = () => {
    navigate(`/tools/${tool.id}`);
  };
  const handleEdit = () => {
    navigate(`/tools/${tool.id}/edit`);
  };

  // TODO: Add API call to toggle tool status
  const handleToggle = () => {
    console.log("toggle", tool.id);
  };

  return (
    <div className="bg-background  rounded-lg shadow-md p-4 ">
      {/* Tool Title section */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-4">
          <ToolIconProtected src={tool.icon_url} alt={tool.name} />
          <div>
            <h2 className="text-lg font-semibold">{tool.name}</h2>
            <Badge>{tool.category}</Badge>
          </div>
        </div>
        {/* Quick actions */}
        <div className="flex gap-2">
          <IconButton
            icon={<EyeIcon />}
            ariaLabel="View details"
            onClick={handleViewDetails}
          />
          <IconButton
            icon={<PencilIcon />}
            ariaLabel="Edit"
            onClick={handleEdit}
          />
          {tool.website_url ? (
            <IconButton
              variant="ghost"
              icon={<ExternalLinkIcon />}
              ariaLabel="Open website"
              onClick={() => {
                window.open(tool.website_url, "_blank");
              }}
            />
          ) : null}
        </div>
      </div>

      {/* Tool Info section */}
      <div className="flex items-center gap-2 p-4">
        {/* Tool description */}
        <p className="text-sm text-gray-500">{tool.description}</p>
      </div>

      {/* Badges section */}
      <div className="flex gap-2">
        {/* 2 rows of 3 badges */}
        <div className="grid grid-cols-2 gap-2">
          <Badge>{tool.active_users_count} users</Badge>

          <Badge>{tool.monthly_cost}€/month</Badge>
          <Badge>Updated: {formatDate(tool.updated_at)}</Badge>
          <Badge>Dpt: {tool.owner_department}</Badge>
        </div>
        <div className="flex gap-2">
          <Toggle
            label={tool.status === "active" ? "Active" : "Inactive"}
            value={tool.status === "active"}
            onChange={handleToggle}
          />
        </div>
      </div>
    </div>
  );
};

interface ToolIconProtectedProps {
  src?: string;
  alt: string;
  size?: number;
  fallback?: React.ReactNode;
  className?: string;
}

const ToolIconProtected: React.FC<ToolIconProtectedProps> = ({
  src,
  alt,
  size = 40,
  fallback,
  className = "",
}) => {
  const [error, setError] = useState(false);

  if (!src || error) {
    // Si pas d’URL ou erreur → fallback
    return (
      <div
        className={`flex items-center justify-center rounded bg-gray-200 text-gray-600 ${className}`}
        style={{ width: size, height: size }}
      >
        {fallback ?? <ToolIcon size={size * 0.6} />}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`rounded object-contain ${className}`}
      onError={() => setError(true)}
    />
  );
};
