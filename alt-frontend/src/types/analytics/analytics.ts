import type { BudgetOverview } from "./budget";
import type { CostAnalytics } from "./cost";
import type { KpiTrends } from "./kpitrends";

export interface Analytics {
  budget_overview: BudgetOverview;
  kpi_trends: KpiTrends;
  cost_analytics: CostAnalytics;
}
