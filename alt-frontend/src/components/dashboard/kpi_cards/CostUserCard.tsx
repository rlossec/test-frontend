export const CostUserCard = ({
  costPerUser,
  costPerUserChange,
}: {
  costPerUser: number;
  costPerUserChange: string;
}) => {
  return (
    <div>
      <h3>Cost / user</h3>
      <p>{costPerUser}</p>
      <p>{costPerUserChange}</p>
    </div>
  );
};
