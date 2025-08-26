import type { Analytics } from "../../types/analytics/analytics";
import { ActiveToolsCard } from "./kpi_cards/ActiveToolsCard";
import { CostUserCard } from "./kpi_cards/CostUserCard";
import { DepartmentsCard } from "./kpi_cards/DepartmentsCard";
import { BudgetCard } from "./kpi_cards/BudgetCard";

export const KpiCards = ({
  analytics,
  loading,
  error,
}: {
  analytics: Analytics | null;
  loading: boolean;
  error: string | null;
}) => {
  /* Temporary data */
  const departmentsCount = 8;
  const activeToolsCount = 147;

  return (
    <div>
      <h2 className="text-lg font-bold">KPI Cards</h2>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {/* responsive Card : 1 Card on a row mobile, 2 Cards on a row tablet, 3 Cards on a row desktop */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Budget Card */}
        {analytics?.budget_overview ? (
          <BudgetCard
            budgetAnalytics={analytics?.budget_overview}
            budgetChange={analytics?.kpi_trends.budget_change}
          />
        ) : null}

        {/* Active Tools Card */}
        {analytics?.kpi_trends.tools_change ? (
          <ActiveToolsCard
            activeToolsCount={activeToolsCount}
            activeToolsCountChange={analytics?.kpi_trends.tools_change}
          />
        ) : null}
        {/* Departments Card */}
        {analytics?.kpi_trends.departments_change ? (
          <DepartmentsCard
            departmentsCount={departmentsCount}
            departmentsCountChange={analytics?.kpi_trends.departments_change}
          />
        ) : null}
        {/* Cost User Card */}
        {analytics?.cost_analytics &&
        analytics?.kpi_trends.cost_per_user_change ? (
          <CostUserCard
            costPerUser={analytics?.cost_analytics.cost_per_user}
            costPerUserChange={analytics?.kpi_trends.cost_per_user_change}
          />
        ) : null}
      </div>
    </div>
  );
};
