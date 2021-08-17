import NavbarDash from "../../Components/NavbarDash";
import CreateGroupsModal from "../../Components/CreateGroupsModal";
import MenuBurger from "../../Components/MenuBurger";
import CardGroup from "../../Components/CardGroup";
import { Search, ArrowForwardIos } from "@material-ui/icons";
import api from "../../Services/api";
import { useEffect, useState } from "react";

import {
  Container,
  Content,
  HeaderGroup,
  ListGroups,
  InfosGroup,
  DetailsGroup,
  ActivitiesGroup,
  GoalsGroup,
  BtnSubscribe,
} from "./styles";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { toast } from "react-toastify";

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [groupForCard, setGroupForCard] = useState();
  const [viewCardGroup, setViewCardGroup] = useState(false);
  const [viewNavbar, setViewNavbar] = useState(false);
  const [textInput, setTextInput] = useState("");
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
  useEffect(() => {
    api
      .get("groups/")
      .then((res) => {
        const apiGroups = res.data.results.map((group) => ({
          ...group,
          realization_time: new Date(group.realization_time).toLocaleDateString(
            "pt-BR",
            {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            }
          ),
        }));
        setGroups(apiGroups);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleViewDetailsGroup = (group) => {
    setGroupForCard(group);
    setViewCardGroup(true);
  };

  const handleSearchGroup = (groupName) => {
    const group = groups.filter((group) => group.name === groupName);
    const id = group[0].id;

    if (group) {
      api
        .get(`groups/${id}/`)
        .then((res) => setGroups([res.data]))
        .catch((err) => toast.error("GRUPO NAO EXISTE"));
    }
  };

  return (
    <Container>
      {window.innerWidth >= 1024 || viewNavbar === true ? (
        <NavbarDash setViewNavbar={setViewNavbar} />
      ) : (
        <MenuBurger viewNavbar={viewNavbar} setViewNavbar={setViewNavbar} />
      )}

      <Content>
        <div className="Header">
          <h2>Grupos</h2>
          <CreateGroupsModal />
        </div>
        <div className="Groups">
          <div className="GroupsList">
            <div className="SearchField">
              <input
                type="text"
                placeholder="Pesquisar grupo"
                onChange={(e) => setTextInput(e.target.value)}
              />
              <div>
                <button onClick={() => handleSearchGroup(textInput)}>
                  <Search />
                </button>
              </div>
            </div>
            <div>
              <button
                className="AllGroupsButton"
                onClick={() => getGroups(token)}
              >
                Mostrar todos os grupos
              </button>
            </div>
            {window.innerWidth >= 1024 && (
              <div className="List">
                {groups.map((group) => (
                  <div className="Group" key={group.id}>
                    <div className="Resume">
                      <div className="HeaderGroup">
                        <h4>{group.name}</h4>
                        <span>{group.category}</span>
                      </div>

                      <div className="InfosGroup">
                        <span>Atividades: {group.activities.length}</span>
                        <span>Metas: {group.goals.length}</span>
                      </div>
                    </div>

                    <div className="BtnToDetails">
                      <button onClick={() => handleViewDetailsGroup(group)}>
                        <ArrowForwardIos />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {window.innerWidth <= 768 && (
              <ListGroups>
                {groups.map((group) => (
                  <Accordion key={group.id} style={{ marginTop: "5px" }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <HeaderGroup>
                        <h4>{group.name}</h4>
                        <span>{group.category}</span>
                      </HeaderGroup>

                      <InfosGroup>
                        <span>Atividades: {group.activities.length}</span>
                        <span>Metas: {group.goals.length}</span>
                      </InfosGroup>
                    </AccordionSummary>

                    <AccordionDetails>
                      <DetailsGroup>
                        <h5>Atividades</h5>
                        {group.activities.map((activity) => (
                          <ActivitiesGroup key={activity.id}>
                            <p>{activity.title}</p>
                            <span>
                              <strong>Finalizar em:</strong>
                              {activity.realization_time}
                            </span>
                          </ActivitiesGroup>
                        ))}

                        <h5>Metas</h5>
                        {group.goals.map((goal, index) => (
                          <GoalsGroup key={goal.id}>
                            <input
                              type="checkbox"
                              id={"goal" + index}
                              name={"goal" + index}
                            />
                            <label htmlFor={"goal" + index}>
                              {" "}
                              {goal.title}
                            </label>
                            <span>
                              <strong>Nível:</strong>
                              {goal.difficulty}
                            </span>
                          </GoalsGroup>
                        ))}

                        <BtnSubscribe>
                          <button>Inscrever-se</button>
                        </BtnSubscribe>
                      </DetailsGroup>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </ListGroups>
            )}
          </div>

          <div className="GroupDetails">
            {viewCardGroup && <CardGroup group={groupForCard} />}
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Groups;
