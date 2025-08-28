import { useState, useCallback } from "react";

import { api } from "../utils/api";
import type { User } from "../types/user";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState<number>(0);

  const listUsers = useCallback(
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

        const url = `/users?${params.toString()}`;
        const response = await api.get(url);

        setUsers(response.data);
        setTotal(
          Number(response.headers["x-total-count"]) || response.data.length
        );
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const listUsersByDepartment = useCallback(async (departmentId: number) => {
    const response = await api.get(`/users?department_id=${departmentId}`);
    return response.data;
  }, []);

  return {
    users,
    total,
    loading,
    error,
    listUsers,
    listUsersByDepartment,
  };
};
