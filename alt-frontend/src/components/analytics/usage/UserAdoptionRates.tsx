import type { Tool } from "../../../types/tool";
import type { User } from "../../../types/user";

export const UserAdoptionRates = ({
  tools,
  activeUsers,
}: {
  tools: Tool[];
  activeUsers: User[];
}) => {
  // TODO :
  //  Trends : missing previous month active users count

  const userAdoptionRates = tools.map((tool) => {
    return {
      tool: tool.name,
      activeUsersCount: tool.active_users_count,
      adoptionRate: (tool.active_users_count / activeUsers.length) * 100,
    };
  });

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-md font-semibold">User Adoption Rates</h3>
      <ul>
        {userAdoptionRates.map((rate) => (
          <li key={rate.tool}>
            {rate.tool} - {rate.adoptionRate.toFixed(2)}%
          </li>
        ))}
      </ul>
    </div>
  );
};
