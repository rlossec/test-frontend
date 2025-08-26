export const DepartmentsCard = ({
  departmentsCount,
  departmentsCountChange,
}: {
  departmentsCount: number;
  departmentsCountChange: string;
}) => {
  return (
    <div>
      <h3>Departments</h3>
      <p>{departmentsCount}</p>
      <p>{departmentsCountChange}</p>
    </div>
  );
};
