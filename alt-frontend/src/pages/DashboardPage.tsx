import { useEffect } from "react";

import { KpiCards } from "../components/dashboard/KpiCards";
import { RecentTools } from "../components/dashboard/RecentTools";
import { useAnalytics } from "../hooks/useAnalytics";
import { useTools } from "../hooks/useTools";

export const DashboardPage = () => {
  const {
    analytics,
    loading: analyticsLoading,
    error: analyticsError,
    listAnalytics,
  } = useAnalytics();

  const {
    tools,
    loading: toolsLoading,
    error: toolsError,
    listTools,
  } = useTools();

  useEffect(() => {
    listAnalytics();
    listTools();
  }, [listAnalytics, listTools]);

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
      <KpiCards
        analytics={analytics}
        loading={analyticsLoading}
        error={analyticsError}
      />
      {/* Recent tools list */}
      <RecentTools tools={tools} loading={toolsLoading} error={toolsError} />
    </div>
  );
};
