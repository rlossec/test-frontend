import { DashboardPage } from "./pages/DashboardPage";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { ToolsPage } from "./pages/tools/ToolsPage";
import { NotFoundPage } from "./pages/common/NotFoundPage";
import { ToolAddPage } from "./pages/tools/ToolAddPage";
import { ToolDetailsPage } from "./pages/tools/ToolDetailsPage";
import { ToolEditPage } from "./pages/tools/ToolEditPage";

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
  {
    path: "/tools/add",
    element: <ToolAddPage />,
  },
  {
    path: "/tools/:id",
    element: <ToolDetailsPage />,
  },
  {
    path: "/tools/:id/edit",
    element: <ToolEditPage />,
  },
];
