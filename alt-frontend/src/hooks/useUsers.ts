import { useState, useEffect, useCallback } from "react";

import { api } from "../utils/api";
import type { User } from "../types/user";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const listUsers = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get("/users");
      setUsers(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    listUsers();
  }, [listUsers]);

  return { users, loading, error, listUsers };
};
