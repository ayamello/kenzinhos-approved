import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";
import { toast } from "react-toastify";

const ListActivitiesGoalsContext = createContext();

export const ActivitiesGoalsProvider = ({ children }) => {
  const [goals, setGoals] = useState("");
  const [activities, setNewActivities] = useState();
  const [activitiesGroup, setActivitiesGroup] = useState("");
  const [group, setGroup] = useState("");

  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenzinho:token")) || ""
  );

  const handleGoalDelete = (id) => {
    const token = JSON.parse(localStorage.getItem("@Kenzinho:token"));
    api
      .delete(`goals/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setGoals(response.data));
    toast.info("Meta excluida");
  };

  const handleActivieDelete = (id) => {
    const token = JSON.parse(localStorage.getItem("@Kenzinho:token"));
    api
      .delete(`activities/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setNewActivities(response.data));
    toast.info("Atividade excluída");
  };

  const handleGoalCreation = (data) => {
    const { title, difficulty, how_much_achieved, group } = data;
    api
      .post(
        "goals/",
        {
          title: title,
          difficulty: difficulty,
          how_much_achieved: how_much_achieved,
          group: group,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((e) => toast.info("Grupo criado com sucesso"))
      .catch((e) => console.log(e));
  };

  const handleActivitieCreation = (data) => {
    const { title, realization_time, group } = data;

    api
      .post(
        "activities/",
        {
          title: title,
          realization_time: realization_time,
          group: group,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((e) => toast.info("Grupo criado com sucesso"))
      .catch((e) => console.log(e));
  };

  const updateGoal = (data) => {
    const { achieved } = data;
    console.log(data);
    api
      .patch(
        `goals/${goals.id}/`,
        {
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
    const { title } = data;

    api
      .patch(
        `activities/${activities.id}/`,
        {
          title: title,
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
        updateActivitie,
        updateGoal,
        handleActivitieCreation,
        handleGoalCreation,
      }}
    >
      {children}
    </ListActivitiesGoalsContext.Provider>
  );
};

export const useListActivitiesGoals = () =>
  useContext(ListActivitiesGoalsContext);
