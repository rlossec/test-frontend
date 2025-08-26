type Column = {
  id: string;
  Header: string;
  accessor: string;
};

type Data = {
  id: number;
  [key: string]: string | number | boolean;
};

export const SortableTable = ({
  columns,
  data,
  loading,
  error,
}: {
  columns: Column[];
  data: Data[];
  loading: boolean;
  error: string | null;
}) => {
  return (
    <div>
      {/* Loading */}
      {loading ? <p>Loading...</p> : null}

      {/* Error */}
      {error ? <p>Error: {error}</p> : null}

      {/* Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.id} className="border border-gray-300 p-2">
                {column.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column.id} className="border border-gray-300 p-2">
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
