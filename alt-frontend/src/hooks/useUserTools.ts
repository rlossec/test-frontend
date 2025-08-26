import { useState, useEffect, useCallback } from "react";

import { api } from "../utils/api";
import type { UserTool } from "../types/usertool";

export const useUserTools = () => {
  const [userTools, setUserTools] = useState<UserTool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const listUserTools = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get("/user_tools");
      setUserTools(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    listUserTools();
  }, [listUserTools]);

  return { userTools, loading, error, listUserTools };
};
