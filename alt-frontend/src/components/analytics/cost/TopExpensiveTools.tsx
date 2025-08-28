import type { Tool } from "../../../types/tool";

const TOP_EXPENSIVE_TOOLS_LIMIT = 10;

export const TopExpensiveTools = ({ tools }: { tools: Tool[] }) => {
  console.log("tools", tools);

  const topExpensiveTools = tools
    .sort((a, b) => b.monthly_cost - a.monthly_cost)
    .slice(0, TOP_EXPENSIVE_TOOLS_LIMIT);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-md font-semibold">Top Expensive Tools</h3>
      <ul>
        {topExpensiveTools.map((tool) => (
          <li key={tool.id}>
            {tool.name} - {tool.monthly_cost}
          </li>
        ))}
      </ul>
    </div>
  );
};
