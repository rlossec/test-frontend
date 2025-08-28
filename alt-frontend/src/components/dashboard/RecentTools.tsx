import { TOOLS_PER_PAGE } from "../../config/tool";
import { PencilIcon } from "../../icons/actions/PencilIcon";
import { TrashIcon } from "../../icons/actions/TrashIcon";
import { EyeIcon } from "../../icons/media-player/EyeIcon";
import { CalendarIcon } from "../../icons/user-interface/CalendarIcon";
import type { Tool } from "../../types/tool";
import { Paper } from "../common/base/Paper";

import { DataTable, type Column } from "../common/data/DataTable";

export const RecentTools = ({
  tools,
  loading,
  error,
}: {
  tools: Tool[];
  loading: boolean;
  error: string | null;
}) => {
  const columns: Column<Tool>[] = [
    { key: "name", header: "Tool", sortable: true },
    { key: "owner_department", header: "Department", sortable: true },
    { key: "active_users_count", header: "User", sortable: true },
    { key: "monthly_cost", header: "Monthly Cost", sortable: true },
  ];
  const toolActions = [
    {
      label: "View",
      icon: <EyeIcon />,
      onClick: (tool: Tool) => {
        console.log("View tool infos", tool);
      },
    },
    {
      label: "Edit",
      icon: <PencilIcon />,
      onClick: (tool: Tool) => {
        console.log("Edit tool", tool);
      },
    },
    {
      label: "Delete",
      icon: <TrashIcon />,
      onClick: (tool: Tool) => {
        console.log("Delete tool", tool);
      },
    },
  ];
  return (
    <Paper>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {/* Title */}
      <div className="flex items-center justify-between p-4 mb-4">
        <h2 className="text-lg font-bold">Recent Tools</h2>
        <p className="flex items-center gap-2">
          Active month <CalendarIcon />
        </p>
      </div>
      {/* Content : Table */}
      <DataTable
        columns={columns}
        data={tools}
        keyExtractor={(tool) => tool.id}
        actions={toolActions}
        pagination={{ pageSize: TOOLS_PER_PAGE }}
      />
    </Paper>
  );
};
