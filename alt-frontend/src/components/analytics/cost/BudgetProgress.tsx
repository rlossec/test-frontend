import type { Analytics } from "../../../types/analytics/analytics";

export const BudgetProgress = ({ analytics }: { analytics: Analytics }) => {
  console.log("analytics", analytics);
  const currentMonthTotal = analytics.budget_overview.current_month_total;
  const previousMonthTotal = analytics.budget_overview.previous_month_total;
  const budgetLimit = analytics.budget_overview.monthly_limit;
  const budgetProgress =
    ((currentMonthTotal - previousMonthTotal) / previousMonthTotal) * 100;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-md font-semibold">Budget Progress</h3>
      <p>
        €{currentMonthTotal} / €{budgetLimit}
      </p>
      <p>{budgetProgress.toFixed(2)}%</p>
    </div>
  );
};
