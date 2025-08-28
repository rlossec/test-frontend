import type { Tool } from "../../../types/tool";
import type { UserTool } from "../../../types/usertool";

export const GrowthTrends = ({
  tools,
  userTools,
}: {
  tools: Tool[];
  userTools: UserTool[];
}) => {
  console.log(tools, userTools);
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-md font-semibold">Growth Trends</h3>
    </div>
  );
};
