import { ActivitiesGoalsProvider } from "./ActivitiesGoals";

const Providers = ({ children }) => {
  return (
    <div>
      <ActivitiesGoalsProvider> {children} </ActivitiesGoalsProvider>
    </div>
  );
};

export default Providers;
