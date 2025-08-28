import type { Department } from "../../types/department";
import type { Tool } from "../../types/tool";
import type { User } from "../../types/user";
import type { UserTool } from "../../types/usertool";
import { DepartmentActivity } from "./usage/DepartmentActivity";
import { GrowthTrends } from "./usage/GrowthTrends";
import { MostLeastUsedTools } from "./usage/MostLeastUsedTools";
import { UserAdoptionRates } from "./usage/UserAdoptionRates";

export const UsageAnalytics = ({
  tools,
  activeUsers,
  userTools,
  departments,
}: {
  tools: Tool[];
  activeUsers: User[];
  userTools: UserTool[];
  departments: Department[];
}) => {
  // TODO :
  //   - User Adoption Rates: Par outil avec trends                   ✅ NB active_users_count / total users
  //       - Endpoint(s) : GET tools
  //   - Most/Least Used Tools: Ranking avec mini charts              ✅
  //       - Endpoint(s) : GET tools
  //   - Department Activity: Comparaisons visuelles                  ❌
  //       - Endpoint(s) : GET users?_embed=department ?              Pas de données pertinentes
  //   - Growth Trends: Timeline des nouveaux outils                  Timeline ?
  //       - Endpoint(s) : GET users/1/user_tools

  console.log("departments", departments);
  console.log("userTools", userTools);

  return (
    <section className="grid gap-6">
      <h2 className="text-xl font-semibold">📊 Usage Analytics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UserAdoptionRates tools={tools} activeUsers={activeUsers} />
        <MostLeastUsedTools />
        <DepartmentActivity />
        <GrowthTrends />
      </div>
    </section>
  );
};
