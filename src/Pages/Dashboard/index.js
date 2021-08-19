import Habits from "../../Components/Habits";
import { Content, useStyles } from "./styles";
import { Container } from "../../Pages/Groups/styles";
import { Edit } from "@material-ui/icons";
import Popover from "@material-ui/core/Popover";
import { useHabits } from "../../Providers/Habits";
import { useState, useEffect } from "react";
import api from "../../Services/api";
import jwtDecode from "jwt-decode";
import ViewNavbar from "../../Components/ViewNavbar";
import Tags from "../../Components/Tags";
import { useUser } from "../../Providers/User";
import { toast } from "react-toastify";
import { useGroupsUser } from "../../Providers/GroupsUser";
import SearchBar from "../../Components/SearchBar";

const Dashboard = () => {
  const { getGroups, groups } = useGroupsUser();
  const classes = useStyles();

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
      .catch((err) => 
        toast.error('Usuário não pode ser carregados'));

  }, [user]);

  const { updateUser } = useUser();
  const [anchorEl, setAnchorEl] = useState(null);
  const [inputUsername, setInputUsername] = useState("");

  const openPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Container>
      <ViewNavbar />

      <Content>
        <div className="Header">
          <div className="UserInfos">
            <span>
              <strong>{user}</strong>
            </span>

            <span className="Email">{email}</span>
          </div>
          <div className="BtnEdit">
            <button onClick={openPopover}>
              <Edit />
            </button>

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={closePopover}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <div className={classes.root}>
                <input
                  type="text"
                  placeholder="Digite seu novo username"
                  className={classes.input}
                  onChange={(e) => setInputUsername(e.target.value)}
                  value={inputUsername}
                />
                <button
                  className={classes.button}
                  onClick={() => {updateUser(inputUsername); closePopover()}}
                >
                  Atualizar
                </button>
              </div>
            </Popover>
          </div>
        </div>

        <div className="Groups">
          <div className="GroupsList">
            <SearchBar groups={groups} getGroups={getGroups} />
            
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
