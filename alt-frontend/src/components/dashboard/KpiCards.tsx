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
  return (
    <div>
      <h2 className="text-lg font-bold">KPI Cards</h2>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {/* responsive Card : 1 Card on a row mobile, 2 Cards on a row tablet, 3 Cards on a row desktop */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Budget Card */}
        <BudgetCard />
        {/* Active Tools Card */}
        <ActiveToolsCard />
        {/* Departments Card */}
        <DepartmentsCard />
        {/* Cost User Card */}
        <CostUserCard />
      </div>
    </div>
  );
};
