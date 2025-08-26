import { useState, useEffect, useCallback } from "react";

import { api } from "../utils/api";
import type { Department } from "../types/department";

export const useDepartments = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const listDepartments = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get("/departments");
      setDepartments(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    listDepartments();
  }, [listDepartments]);

  return { departments, loading, error, listDepartments };
};
