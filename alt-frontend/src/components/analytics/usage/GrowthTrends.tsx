import { useTools } from "../../../hooks/useTools";
import { Paper } from "../../common/base/Paper";

export const GrowthTrends = () => {
  const { lastMonthTools } = useTools();

  return (
    <Paper>
      <h3 className="text-md font-semibold">Growth Trends</h3>
      <ul>
        {lastMonthTools.map((tool) => (
          <li key={tool.id}>{tool.name}</li>
        ))}
      </ul>
    </Paper>
  );
};
