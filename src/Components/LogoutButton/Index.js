import { useHistory } from "react-router-dom";
import { useAuth } from "../../Providers/Auth";
import { ButtonLogout } from "./styles";

const LogoutButton = () => {
  const history = useHistory();
  const { setAuth } = useAuth()

  const handleLogout = () => {
    localStorage.clear();
    setAuth('')
    history.push("/login");
  };

  return <ButtonLogout onClick={handleLogout}>Logout</ButtonLogout>;
};

export default LogoutButton;
