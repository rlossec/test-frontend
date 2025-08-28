import { PersonIcon } from "../../../icons/user-interface/PersonIcon";

import { KpiCard } from "./KpiCard";

export const CostUserCard = ({
  costPerUser,
  costPerUserChange,
}: {
  costPerUser: number;
  costPerUserChange: string;
}) => {
  return (
    <KpiCard
      title="Cost / user"
      content={<p>{costPerUser}</p>}
      className="bg-gradient-to-r from-purple-400 to-pink-500"
      trend={costPerUserChange}
      icon={
        <PersonIcon className="bg-gradient-to-r from-purple-400 to-pink-500" />
      }
    />
  );
};
