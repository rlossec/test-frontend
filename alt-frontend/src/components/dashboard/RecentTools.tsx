import type { Tool } from "../../types/tool";

export const RecentTools = ({
  tools,
  loading,
  error,
}: {
  tools: Tool[];
  loading: boolean;
  error: string | null;
}) => {
  return (
    <div>
      <h2 className="text-lg font-bold">Recent Tools</h2>
    </div>
  );
};
