import NavbarDash from "../../Components/NavbarDash";
import Habits from "../../Components/Habits";
import { Content } from "./styles";
import api from "../../Services/api";
import { useEffect } from "react";
import { useState } from "react";
import jwtDecode from "jwt-decode";
import Tags from "../../Components/Tags";
import { Container } from "../../Pages/Groups/styles";
import { useHabits } from "../../Providers/Habits";

const Dashboard = () => {

  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenzinho:token")) || ""
  );
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  const decoded = jwtDecode(token);
  const { loadHabits } = useHabits();

  useEffect(() => {
    loadHabits()
    api
      .get(`users/${decoded.user_id}/`)
      .then((response) => {
        setUser(response.data.username);
        setEmail(response.data.email);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <NavbarDash />

      <Content>
        <div className="Header">
          <span>
            Bem vindo,
            <strong>
              {"  "}
              {user}
            </strong>
          </span>
          <span className='Email'>{email}</span>
        </div>

        <div className="Groups">
          <div className="GroupsList">
            <div className="List">
              <Tags />
            </div>
          </div>

          <div className="GroupDetails">
            <Habits />
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Dashboard;