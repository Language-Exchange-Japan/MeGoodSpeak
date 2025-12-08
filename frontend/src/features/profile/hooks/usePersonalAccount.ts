import { useState, useEffect } from "react";

import { getCurrentUser } from "../../../services/userService";

import type { IUser } from "../../../../../shared/user.interface";

export function usePersonalAccount() {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getCurrentUser()
      .then((userData) => {
        setUser(userData);
        setLoading(false);
      })
      .catch((_err) => {
        setError("Failed to load user info");
        setLoading(false);
      });
  }, []);

  return { user, loading, error };
}
