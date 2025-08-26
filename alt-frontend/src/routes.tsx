import { DashboardPage } from "./pages/DashboardPage";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { ToolsPage } from "./pages/ToolsPage";

export const routes = [
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/analytics",
    element: <AnalyticsPage />,
  },
  {
    path: "/tools",
    element: <ToolsPage />,
  },
];
