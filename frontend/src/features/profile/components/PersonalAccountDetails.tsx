import type { IUser } from "../../../../../shared/user.interface";

interface PersonalAccountDetailsProps {
  user: IUser;
}

export function PersonalAccountDetails({ user }: PersonalAccountDetailsProps) {
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
