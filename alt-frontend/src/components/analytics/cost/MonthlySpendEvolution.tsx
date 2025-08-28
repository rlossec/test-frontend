import type { Analytics } from "../../../types/analytics/analytics";
import { Paper } from "../../common/base/Paper";

export const MonthlySpendEvolution = ({
  analytics,
}: {
  analytics: Analytics;
}) => {
  const previousMonth = analytics.budget_overview.previous_month_total;
  const currentMonth = analytics.budget_overview.current_month_total;

  return (
    <Paper>
      <h3 className="text-md font-semibold">Monthly Spend Evolution</h3>
      <p>
        Previous Month: {previousMonth} - Current Month: {currentMonth}
      </p>
    </Paper>
  );
};
