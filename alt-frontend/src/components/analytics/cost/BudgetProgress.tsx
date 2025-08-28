import type { Analytics } from "../../../types/analytics/analytics";

export const BudgetProgress = ({ analytics }: { analytics: Analytics[] }) => {
  console.log("analytics", analytics);

  return <div>BudgetProgress</div>;
};
