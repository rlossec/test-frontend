import { useState, useEffect, useCallback } from "react";

import { api } from "../utils/api";
import type { Tool } from "../types/tool";

export const useTools = () => {
  const [tools, setTools] = useState<Tool[]>([]);
  const [recentTools, setRecentTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // GET /tools?_sort=monthly_cost&_order=desc
  const listTools = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get("/tools?_sort=monthly_cost&_order=desc");
      setTools(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  // GET /tools?_sort=updated_at&_order=desc&_limit=8
  const listRecentTools = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(
        "/tools?_sort=updated_at&_order=desc&_limit=8"
      );
      setRecentTools(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  const leastUsedTools = tools.sort(
    (a, b) => a.active_users_count - b.active_users_count
  );

  const mostUsedTools = [...leastUsedTools].reverse();

  useEffect(() => {
    listTools();
    listRecentTools();
  }, [listTools, listRecentTools]);

  return {
    tools,
    recentTools,
    leastUsedTools,
    mostUsedTools,
    loading,
    error,
    listTools,
    listRecentTools,
  };
};
