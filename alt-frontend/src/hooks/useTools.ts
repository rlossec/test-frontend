import { useState, useEffect, useCallback } from "react";

import { api } from "../utils/api";
import type { Tool } from "../types/tool";

export const useTools = () => {
  const [tools, setTools] = useState<Tool[]>([]);
  const [lastMonthTools, setLastMonthTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // GET /tools
  const listTools = useCallback(
    async (options?: {
      page?: number;
      limit?: number;
      sortBy?: string;
      order?: "asc" | "desc";
      filters?: Record<string, string | number | boolean>;
    }) => {
      setLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams();

        if (options?.page) params.append("_page", String(options.page));
        if (options?.limit) params.append("_limit", String(options.limit));
        if (options?.sortBy) params.append("_sort", options.sortBy);
        if (options?.order) params.append("_order", options.order);

        if (options?.filters) {
          Object.entries(options.filters).forEach(([key, value]) => {
            params.append(key, String(value));
          });
        }

        const url = `/tools?${params.toString()}`;
        const response = await api.get(url);
        setTools(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const leastUsedTools = tools.sort(
    (a, b) => a.active_users_count - b.active_users_count
  );

  const mostUsedTools = [...leastUsedTools].reverse();

  useEffect(() => {
    listTools();
    setLastMonthTools(
      tools.filter((tool) => {
        // TODO :
        // const lastMonth = new Date();
        const lastMonth = new Date("2025-02-01");
        lastMonth.setMonth(lastMonth.getMonth() - 1);
        return new Date(tool.created_at) > lastMonth;
      })
    );
  }, [listTools]);

  return {
    tools,
    lastMonthTools,
    leastUsedTools,
    mostUsedTools,
    loading,
    error,
    listTools,
  };
};
