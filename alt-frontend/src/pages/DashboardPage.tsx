import { KpiCards } from "../components/KpiCards";
import { RecentTools } from "../components/RecentTools";

export const DashboardPage = () => {
  return (
    <div>
      {/* Title & Description */}
      <div className="flex flex-col gap-2 mb-6">
        <h1 className="text-2xl font-bold">Internal Tools Dashboard</h1>
        <p className="text-gray-500">
          Monitor and manage your organization's software tools and expenses
        </p>
      </div>
      {/* KPI Cards */}
      <KpiCards />
      {/* Recent tools list */}
      <RecentTools />
    </div>
  );
};
