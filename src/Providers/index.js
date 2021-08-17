import { HabitsProvider } from "./Habits";
import { ActivitiesGoalsProvider } from "./ActivitiesGoals";
import { GroupsUserProvider } from "./GroupsUserProvider";
import { AuthProvider } from "./Auth";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <HabitsProvider>
        <ActivitiesGoalsProvider>
          <GroupsUserProvider>{children}</GroupsUserProvider>
        </ActivitiesGoalsProvider>
      </HabitsProvider>
    </AuthProvider>
  );
};

export default Providers;
