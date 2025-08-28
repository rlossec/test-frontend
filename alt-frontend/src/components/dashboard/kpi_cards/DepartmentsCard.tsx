import { BuildingIcon } from "../../../icons/others/BuildingIcon";
import { KpiCard } from "./KpiCard";

export const DepartmentsCard = ({
  departmentsCount,
  departmentsCountChange,
}: {
  departmentsCount: number;
  departmentsCountChange: string;
}) => {
  return (
    <KpiCard
      title="Departments"
      content={<p>{departmentsCount}</p>}
      className="bg-gradient-to-r from-orange-400 to-red-500"
      trend={departmentsCountChange}
      icon={
        <BuildingIcon className="bg-gradient-to-r from-orange-400 to-red-500" />
      }
    />
  );
};
