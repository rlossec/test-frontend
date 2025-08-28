import type { Analytics } from "../../../types/analytics/analytics";
import type { Tool } from "../../../types/tool";

export const MonthlySpendEvolution = ({
  analytics,
  tools,
}: {
  analytics: Analytics[];
  tools: Tool[];
}) => {
  console.log("analytics", analytics);
  console.log("tools", tools);

  return <div>MonthlySpendEvolution</div>;
};
