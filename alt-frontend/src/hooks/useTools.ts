import { useState, useEffect, useCallback } from "react";

import { api } from "../utils/api";
import type { Tool } from "../types/tool";

export const useTools = () => {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const listTools = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get("/tools");
      setTools(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    listTools();
  }, [listTools]);

  return { tools, loading, error, listTools };
};
