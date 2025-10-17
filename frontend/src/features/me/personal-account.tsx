import { useEffect, useState } from "react";

import { getCurrentUser } from "../../services/userService";

import type { IUser } from "../../../../shared/user.interface";

export default function MePage() {
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!user) return <div>No user data found.</div>;

  return (
    <div>
      <h1>Welcome, {user.firstName || user.username}!</h1>
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio}</p>
      <p>Native Language: {user.profileOptions?.nativeLanguage}</p>
      <p>
        Practicing: {user.profileOptions?.practicingLanguage?.language} (
        {user.profileOptions?.practicingLanguage?.proficiency})
      </p>
    </div>
  );
}
