export const ActiveToolsCard = ({
  activeToolsCount,
  activeToolsCountChange,
}: {
  activeToolsCount: number;
  activeToolsCountChange: string;
}) => {
  return (
    <div>
      <h3>Active Tools</h3>
      <p>{activeToolsCount}</p>
      <p>{activeToolsCountChange}</p>
    </div>
  );
};
