import Habits from "../../Components/Habits";
import { Content } from "./styles";
import { Container } from "../../Pages/Groups/styles";
import { Edit } from "@material-ui/icons";
import { useHabits } from "../../Providers/Habits";
import { useState, useEffect } from "react";
import api from "../../Services/api";
import jwtDecode from "jwt-decode";
import ViewNavbar from "../../Components/ViewNavbar";
import Tags from "../../Components/Tags";

const Dashboard = () => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenzinho:token")) || ""
  );
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  const decoded = jwtDecode(token);

  const { loadHabits } = useHabits();

  useEffect(() => {
    loadHabits();
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
      <ViewNavbar />

      <Content>
        <div className="Header">
          <div>
            <span>
              <strong>{user}</strong>
            </span>

            <span className="Email">{email}</span>
          </div>

          <div className="BtnEdit">
            <button>
              <Edit />
            </button>
          </div>
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
