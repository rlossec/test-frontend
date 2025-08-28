import { EuroIcon } from "../../../icons/others/EuroIcon";
import type { BudgetOverview } from "../../../types/analytics/budget";

import { KpiCard } from "./KpiCard";

export const BudgetCard = ({
  budgetAnalytics,
  budgetChange,
}: {
  budgetAnalytics: BudgetOverview;
  budgetChange: string;
}) => {
  return (
    <KpiCard
      title="Monthly Budget"
      content={
        <>
          <p className="text-text">€{budgetAnalytics.current_month_total}</p>
          <p className="text-text-light">/ €{budgetAnalytics.monthly_limit}</p>
        </>
      }
      className="bg-gradient-to-r from-green-400 to-cyan-500"
      trend={budgetChange}
      icon={
        <EuroIcon className="bg-gradient-to-r from-green-400 to-cyan-500" />
      }
    />
  );
};
