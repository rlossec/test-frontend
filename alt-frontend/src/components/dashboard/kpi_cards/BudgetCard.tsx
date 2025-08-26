import type { BudgetOverview } from "../../../types/analytics/budget";

export const BudgetCard = ({
  budgetAnalytics,
  budgetChange,
}: {
  budgetAnalytics: BudgetOverview;
  budgetChange: string;
}) => {
  return (
    <div>
      <h3>Monthly Budget</h3>
      <p>
        €{budgetAnalytics.current_month_total} / €
        {budgetAnalytics.monthly_limit}
      </p>
      <p>{budgetChange}</p>
    </div>
  );
};
