import { useEffect } from "react";
import { CostAnalytics } from "../components/analytics/CostAnalytics";
import { InsightsDashboard } from "../components/analytics/InsightsDashboard";
import { UsageAnalytics } from "../components/analytics/UsageAnalytics";
import { useAnalytics } from "../hooks/useAnalytics";
import { useDepartments } from "../hooks/useDepartments";
import { useTools } from "../hooks/useTools";
import { useUsers } from "../hooks/useUsers";
import { useUserTools } from "../hooks/useUserTools";

export const AnalyticsPage = () => {
  const { analytics, listAnalytics } = useAnalytics();
  const { tools, listTools } = useTools();
  const { users, listUsers } = useUsers();
  const { userTools } = useUserTools();
  const { departments } = useDepartments();

  useEffect(() => {
    listUsers();
    listTools();
    listAnalytics();
  }, [listUsers, listTools, listAnalytics]);

  const activeUsers = users.filter((user) => user.active);

  console.log("departments", departments);

  return (
    <div className="p-6 grid gap-8">
      {analytics && tools ? (
        <CostAnalytics analytics={analytics} tools={tools} />
      ) : (
        <div>Loading...</div>
      )}

      <UsageAnalytics
        tools={tools}
        activeUsers={activeUsers}
        userTools={userTools}
        departments={departments}
      />
      <InsightsDashboard />
    </div>
  );
};
