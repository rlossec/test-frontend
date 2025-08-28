import { Badge } from "../../common/base/Badge";
import { Paper } from "../../common/base/Paper";

export const KpiCard = ({
  title,
  content,
  className,
  trend,
  icon,
}: {
  title: string;
  content: React.ReactNode;
  className: string;
  trend: string;
  icon: React.ReactNode;
}) => {
  return (
    <Paper className="p-6">
      <div className="flex items-center justify-between p-4 mb-4">
        <h3 className="text-md font-semibold">{title}</h3>
        {icon}
      </div>
      <div className="flex items-center justify-start mb-4 text-2xl font-bold">
        {content}
      </div>
      <Badge className={className}>{trend}</Badge>
    </Paper>
  );
};
