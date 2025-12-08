import { PersonalAccountDetails } from "./components/PersonalAccountDetails";
import { usePersonalAccount } from "./hooks/usePersonalAccount";

export default function MePage() {
  const { user, loading, error } = usePersonalAccount();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!user) return <div>No user data found.</div>;

  return <PersonalAccountDetails user={user} />;
}
