import { HabitsProvider } from './Habits';
import { ActivitiesGoalsProvider } from './ActivitiesGoals';
import { GroupsUserProvider } from './GroupsUserProvider';

const Providers = ({children}) => {
    return(
        <HabitsProvider>
            <ActivitiesGoalsProvider>
                <GroupsUserProvider>
                    {children}
                </GroupsUserProvider>
            </ActivitiesGoalsProvider>
        </HabitsProvider>
    );
}

export default Providers;