import { useState, useCallback, useEffect } from "react";

import { api } from "../utils/api";
import type { Analytics } from "../types/analytics/analytics";

export const useAnalytics = () => {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const listAnalytics = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get("/analytics");
      setAnalytics(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    listAnalytics();
  }, [listAnalytics]);

  return { analytics, loading, error, listAnalytics };
};
