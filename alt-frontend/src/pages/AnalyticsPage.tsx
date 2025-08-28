import { CostAnalytics } from "../components/analytics/CostAnalytics";
import { InsightsDashboard } from "../components/analytics/InsightsDashboard";
import { UsageAnalytics } from "../components/analytics/UsageAnalytics";
import { useAnalytics } from "../hooks/useAnalytics";
import { useDepartments } from "../hooks/useDepartments";
import { useTools } from "../hooks/useTools";
import { useUsers } from "../hooks/useUsers";
import { useUserTools } from "../hooks/useUserTools";

export const AnalyticsPage = () => {
  const {
    analytics,
    loading: analyticsLoading,
    error: analyticsError,
    listAnalytics,
  } = useAnalytics();
  const { tools, recentTools, loading, error, listTools, listRecentTools } =
    useTools();
  // const {
  //   users,
  //   loading: usersLoading,
  //   error: usersError,
  //   listUsers,
  // } = useUsers();
  // const {
  //   userTools,
  //   loading: userToolsLoading,
  //   error: userToolsError,
  //   listUserTools,
  // } = useUserTools();
  // const {
  //   departments,
  //   loading: departmentsLoading,
  //   error: departmentsError,
  //   listDepartments,
  // } = useDepartments();

  return (
    <div className="p-6 grid gap-8">
      {analytics && tools ? (
        <CostAnalytics analytics={analytics} tools={tools} />
      ) : (
        <div>Loading...</div>
      )}

      <UsageAnalytics />
      <InsightsDashboard />
    </div>
  );
};
