import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/api";

const GroupsUserContext = createContext();

export const GroupsUserProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenzinho:token")) || ""
  );

  const getGroups = (token) => {
    api
      .get("groups/subscriptions/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setGroups([...response.data]);
      })
      .catch((err) => console.log(err));
  };

  const deleteGroup = (id) => {
    api
      .delete(`groups/${id}/unsubscribe/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        getGroups(token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const unsubscribeGroup = (id) => {
    api
      .delete(`groups/${id}/unsubscribe/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        getGroups(token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const subscribeToAGroup = (id) => {
    api
      .post(`groups/${id}/subscribe/`, null, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        getGroups(token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateGroup = (data) => {
    const { name, category } = data;

    api
      .patch(
        `groups/${groups.id}/`,
        {
          name: name,
          category: category,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getGroups(token);
  }, [token]);

  return (
    <GroupsUserContext.Provider value={{ groups, setGroups, getGroups }}>
      {children}
    </GroupsUserContext.Provider>
  );
};

export const useGroupsUser = () => useContext(GroupsUserContext);
