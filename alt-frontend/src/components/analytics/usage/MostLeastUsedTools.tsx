import { useTools } from "../../../hooks/useTools";

export const MostLeastUsedTools = () => {
  const { mostUsedTools, leastUsedTools } = useTools();
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-md font-semibold">Most/Least Used Tools</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h4 className="text-sm font-semibold">Most Used Tools</h4>
          <ul>
            {mostUsedTools.map((tool) => (
              <li key={tool.id}>
                {tool.name} - {tool.active_users_count}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h4 className="text-sm font-semibold">Least Used Tools</h4>
          <ul>
            {leastUsedTools.map((tool) => (
              <li key={tool.id}>
                {tool.name} - {tool.active_users_count}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
