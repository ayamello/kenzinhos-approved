import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";

const ListActivitiesGoalsContext = createContext();

export const ActivitiesGoalsProvider = ({ children }) => {
  const [goals, setGoals] = useState("");
  const [activities, setNewActivities] = useState();
  const [activitiesGroup, setActivitiesGroup] = useState("");
  const [group, setGroup] = useState("");

  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenzinho:token")) || ""
  );

  useEffect(() => {
    api
      .get(`/groups/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setGroup(response.data))
      .catch((e) => console.log(e));
  }, [activities]);

  const handleGoalDelete = (id) => {
    const newGoals = goals.filter((meta) => meta.id !== id);
    api.delete
      .delete(`/goals/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setGoals());
  };

  const handleActivieDelete = (id) => {
    const newActivities = activities.filter((atividade) => atividade.id !== id);

    api
      .delete(`activities/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setNewActivities(newActivities));
  };

  const handleGoalCreation = (data) => {
    const {
      title,
      category,
      difficulty,
      frequency,
      achieved,
      how_much_achieved,
      user,
    } = data;

    api
      .post(
        "/goals/",
        {
          title: title,
          category: category,
          difficulty: difficulty,
          frequency: frequency,
          achieved: achieved,
          how_much_achieved: how_much_achieved,
          user: user,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((e) => console.log(e))
      .catch((e) => console.log(e));
  };
  const handleActivitieCreation = (data) => {
    const {
      title,
      category,
      difficulty,
      frequency,
      achieved,
      how_much_achieved,
      user,
    } = data;

    api
      .post(
        "/activities/",
        {
          title: title,
          category: category,
          difficulty: difficulty,
          frequency: frequency,
          achieved: achieved,
          how_much_achieved: how_much_achieved,
          user: user,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((e) => console.log(e))
      .catch((e) => console.log(e));
  };

  const updateGoal = (data) => {
    const { how_much_achieved, achieved, id } = data;

    const newGoal = goals.filter((meta) => goals.id !== id);

    api
      .patch(
        `/goals/${goals.id}/`,
        {
          how_much_achieved: how_much_achieved,
          achieved: achieved,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((e) => console.log(e));
  };

  const updateActivitie = (data) => {
    const { how_much_achieved, achieved, id } = data;

    const newActivities = activities.filter((atividade) => atividade.id !== id);

    api
      .patch(
        `activities/${activities.id}/`,
        {
          how_much_achieved: how_much_achieved,
          achieved: achieved,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((e) => console.log(e));
  };

  return (
    <ListActivitiesGoalsContext.Provider
      value={{
        goals,
        activitiesGroup,
        handleActivieDelete,
        handleGoalDelete,
      }}
    >
      {children}
    </ListActivitiesGoalsContext.Provider>
  );
};

export const useListActivitiesGoals = () =>
  useContext(ListActivitiesGoalsContext);
