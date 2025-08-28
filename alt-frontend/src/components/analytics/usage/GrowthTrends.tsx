import { useTools } from "../../../hooks/useTools";

export const GrowthTrends = () => {
  const { lastMonthTools } = useTools();

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-md font-semibold">Growth Trends</h3>
      <ul>
        {lastMonthTools.map((tool) => (
          <li key={tool.id}>{tool.name}</li>
        ))}
      </ul>
    </div>
  );
};
