export interface BudgetOverview {
  monthly_limit: number;
  current_month_total: number;
  previous_month_total: number;
  budget_utilization: string;
  trend_percentage: string;
}
