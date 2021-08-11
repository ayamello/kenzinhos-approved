import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";

const ListActivitiesGoalsContext = createContext();

export const ActivitiesGoalsProvider = ({ children }) => {
  const [goals, setGoals] = useState("");
  const [value, setValue] = useState("");
  const [change, setChange] = useState(true);
  const [title, setTitle] = useState();
  const [activitiesGroup, setActivitiesGroup] = useState("");
  const group = JSON.parse(localStorage.getItem("@Kenzinho:token"));

  useEffect(() => {
    api
      .get(`/groups/${group}/`)
      .then((response) => {
        setTitle(response.data.name);
        setGoals(response.data.goals);
        setActivitiesGroup(response.data.activities);
      })
      .catch((err) => console.log(err));
  }, [group, value, change]);

  const handleGoalDelete = (id) => {
    api.delete(`/goals/${id}/`).then(() => setChange(!change));
  };

  const handleActivieDelete = (id) => {
    api.delete(`/activities/${id}/`).then(() => setChange(!change));
  };

  return (
    <ListActivitiesGoalsContext.Provider
      value={{
        change,
        setChange,
        goals,
        title,
        activitiesGroup,
        setValue,
        value,
        handleActivieDelete,
        handleGoalDelete,
        group,
      }}
    >
      {children}
    </ListActivitiesGoalsContext.Provider>
  );
};

export const useListActivitiesGoals = () =>
  useContext(ListActivitiesGoalsContext);
