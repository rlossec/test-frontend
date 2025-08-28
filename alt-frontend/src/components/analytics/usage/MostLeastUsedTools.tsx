import { useTools } from "../../../hooks/useTools";
import { Paper } from "../../common/base/Paper";

export const MostLeastUsedTools = () => {
  const { mostUsedTools, leastUsedTools } = useTools();
  return (
    <Paper>
      <h3 className="text-md font-semibold">Most/Least Used Tools</h3>
      <div className="grid grid-cols-2 gap-4">
        <Paper className="bg-background-alt">
          <h4 className="text-sm font-semibold">Most Used Tools</h4>
          <ul>
            {mostUsedTools.map((tool) => (
              <li key={tool.id}>
                {tool.name} - {tool.active_users_count}
              </li>
            ))}
          </ul>
        </Paper>
        <Paper className="bg-background-alt">
          <h4 className="text-sm font-semibold">Least Used Tools</h4>
          <ul>
            {leastUsedTools.map((tool) => (
              <li key={tool.id}>
                {tool.name} - {tool.active_users_count}
              </li>
            ))}
          </ul>
        </Paper>
      </div>
    </Paper>
  );
};
