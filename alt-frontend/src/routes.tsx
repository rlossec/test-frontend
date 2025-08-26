import { DashboardPage } from "./pages/DashboardPage";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { ToolsPage } from "./pages/ToolsPage";
import { NotFoundPage } from "./pages/common/NotFoundPage";

export const routes = [
  {
    path: "*",
    element: <NotFoundPage />,
  },
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
