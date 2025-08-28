import type { Tool } from "../../../types/tool";

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
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-md font-semibold">Department Cost Breakdown</h3>
      <ul>
        {Object.entries(departmentCosts).map(([department, cost]) => (
          <li key={department}>
            {department}: {cost}
          </li>
        ))}
      </ul>
    </div>
  );
};
