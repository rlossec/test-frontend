import { WrenchIcon } from "../../../icons/others/WrenchIcon";

import { KpiCard } from "./KpiCard";

export const ActiveToolsCard = ({
  activeToolsCount,
  activeToolsCountChange,
}: {
  activeToolsCount: number;
  activeToolsCountChange: string;
}) => {
  return (
    <KpiCard
      title="Active Tools"
      content={<p>{activeToolsCount}</p>}
      className="bg-gradient-to-r from-violet-400 to-purple-500"
      trend={activeToolsCountChange}
      icon={
        <WrenchIcon className="bg-gradient-to-r from-violet-400 to-purple-500" />
      }
    />
  );
};
