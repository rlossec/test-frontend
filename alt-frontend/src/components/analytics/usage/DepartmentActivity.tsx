import type { Department } from "../../../types/department";
import type { Tool } from "../../../types/tool";
import type { UserTool } from "../../../types/usertool";

export const DepartmentActivity = ({
  tools,
  userTools,
}: {
  tools: Tool[];
  userTools: UserTool[];
  departments: Department[];
}) => {
  console.log(tools, userTools);
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-md font-semibold">Department Activity</h3>
    </div>
  );
};
