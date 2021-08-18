import { HabitsProvider } from "./Habits";
import { ActivitiesGoalsProvider } from "./ActivitiesGoals";
import { GroupsUserProvider } from "./GroupsUserProvider";
import { AuthProvider } from "./Auth";
import { UserProvider } from "./User";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <HabitsProvider>
        <ActivitiesGoalsProvider>
          <GroupsUserProvider>
            <UserProvider>
              {children}
            </UserProvider>
            </GroupsUserProvider>
        </ActivitiesGoalsProvider>
      </HabitsProvider>
    </AuthProvider>
  );
};

export default Providers;
