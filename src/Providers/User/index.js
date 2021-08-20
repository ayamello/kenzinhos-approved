import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";
import jwtDecode from "jwt-decode";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenzinho:token")) || ""
  );

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
 
  const getUser = () => {
    const decoderUser = jwtDecode(token);
    api
      .get(`users/${decoderUser.user_id}/`)
      .then((response) => {
        setUserName(response.data.username);
        setUserEmail(response.data.email);
      })
      .catch((err) => toast.error("Usuário não pode ser carregados"));
  };

  const updateUser = (newUsername) => {
    const decoderId = jwtDecode(token);

    api
      .patch(
        `users/${decoderId.user_id}/`,
        {
          username: newUsername,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => toast.success("Username atualizado com sucesso"))
      .catch((err) => {
        toast.error("Não foi possível atualizar o username");
      });
  };

  return (
    <UserContext.Provider value={{ updateUser, getUser, userName, setUserName, userEmail, setUserEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
