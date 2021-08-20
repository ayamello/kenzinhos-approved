import Habits from "../../Components/Habits";
import { Container, Content, useStyles } from "./styles";
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

  const [newGroups, setNewGroups] = useState([])
  const [isNewGroups, setIsNewGroups] = useState(false)

  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenzinho:token")) || ""
  );

  const decoded = jwtDecode(token);

  const { loadHabits } = useHabits();

  const { updateUser } = useUser();

  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  
  const [anchorEl, setAnchorEl] = useState(null);
  const [inputUsername, setInputUsername] = useState("");

  useEffect(() => {
    loadHabits();

    api
      .get(`users/${decoded.user_id}/`)
      .then((response) => {
        setUserName(response.data.username);
        setUserEmail(response.data.email);
      })
      .catch((err) => 
        toast.error('Usuário não pode ser carregados'));

  }, [setUserName, decoded.user_id, loadHabits]);
  
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
              <strong>{userName}</strong>
            </span>

            <span className="Email">{userEmail}</span>
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
                  onChange={(e) => {setInputUsername(e.target.value); e.preventDefault()}}
                  value={inputUsername}
                />
                <button
                  className={classes.button}
                  onClick={() => {updateUser(inputUsername); closePopover();}}
                >
                  Atualizar
                </button>
              </div>
            </Popover>
          </div>
        </div>

        <div className="Groups">
          <div className="GroupsList">
            <SearchBar groups={groups} getGroups={getGroups} setNewGroups={setNewGroups} setIsNewGroups={setIsNewGroups}/>
            
            <div className="List">
              <Tags setIsNewGroups={setIsNewGroups} newGroups={newGroups} isNewGroups={isNewGroups}/>
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
