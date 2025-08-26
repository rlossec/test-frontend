import type { Tool } from "../../types/tool";
import { SortableTable } from "../common/SortableTable";

export const RecentTools = ({
  tools,
  loading,
  error,
}: {
  tools: Tool[];
  loading: boolean;
  error: string | null;
}) => {
  const columns = [
    { id: "tool", Header: "Tool", accessor: "name" },
    { id: "department", Header: "Department", accessor: "owner_department" },
    { id: "user", Header: "User", accessor: "active_users_count" },
    { id: "monthly_cost", Header: "Monthly Cost", accessor: "monthly_cost" },
    { id: "status", Header: "Status", accessor: "status" },
  ];

  return (
    <div>
      {/* Title */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Recent Tools</h2>
        <p> Last 30 days</p>
      </div>
      {/* Content : Table */}
      <SortableTable
        columns={columns}
        data={tools}
        loading={loading}
        error={error}
      />
    </div>
  );
};
