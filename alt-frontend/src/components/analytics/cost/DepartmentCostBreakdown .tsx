import type { Tool } from "../../../types/tool";
import { Paper } from "../../common/base/Paper";

export const DepartmentCostBreakdown = ({ tools }: { tools: Tool[] }) => {
  console.log("tools", tools);

  const departmentCosts = tools.reduce((acc, tool) => {
    const department = tool.owner_department;
    if (!acc[department]) {
      acc[department] = 0;
    }
    acc[department] += tool.monthly_cost;
    return acc;
  }, {} as Record<string, number>);

  return (
    <Paper>
      <h3 className="text-md font-semibold">Department Cost Breakdown</h3>
      <ul>
        {Object.entries(departmentCosts).map(([department, cost]) => (
          <li key={department}>
            {department}: {cost}
          </li>
        ))}
      </ul>
    </Paper>
  );
};
