import type { Analytics } from "../../types/analytics/analytics";
import type { Tool } from "../../types/tool";
import { BudgetProgress } from "./cost/BudgetProgress";
import { DepartmentCostBreakdown } from "./cost/DepartmentCostBreakdown ";
import { MonthlySpendEvolution } from "./cost/MonthlySpendEvolution";
import { TopExpensiveTools } from "./cost/TopExpensiveTools";

export const CostAnalytics = ({
  analytics,
  tools,
}: {
  analytics: Analytics;
  tools: Tool[];
}) => {
  // TODO :
  //   - Monthly Spend Evolution: Line chart avec gradients
  //       - Endpoint(s) : GET analytics
  //       - Pb : Line Chart avec deux points ?
  //   - Department Cost Breakdown: Pie/donut avec vos couleur
  //       - Endpoint(s) : GET analytics/department-costs             ❌ Pb : Endpoint non disponible
  //       - Pb : user_tools : liste vide
  //   - Top Expensive Tools: Horizontal bars
  //       - Endpoint(s) : GET analytics/expensive-tools              ❌ Pb : Endpoint non disponible
  //       - Endpoint(s) : GET tools?_embed=user_tools                ❌ Pb : monthly_cost est un Cout partiel
  //   - Budget Progress: Même style que KPIs Dashboard               ✅
  //       - Endpoint(s) : GET analytics
  //   - Interactions avancées
  //     - Time range picker (30d, 90d, 1y)
  //     - Drill-down par département
  //     - Filters cohérents avec Tools page

  return (
    <section>
      <h2 className="text-xl font-semibold">💰 Cost Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MonthlySpendEvolution analytics={analytics} />
        <DepartmentCostBreakdown tools={tools} />
        <TopExpensiveTools tools={tools} />
        <BudgetProgress analytics={analytics} />
      </div>
    </section>
  );
};
