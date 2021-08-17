import { Accordion, Typography } from "@material-ui/core";
import { AccordionSummary, MainContainer, SubTitles } from "./styles";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useEffect, useState } from "react";
import api from "../../Services/api";
import {
  DescriprionContainer,
  SubTitleContainer,
  TitleContainer,
  useStyles,
} from "./styles";
import SearchBar from "../SearchBar";
import CreateActivitiesModal from "../CreateActivitiesModal";

const Tags = () => {
  const classes = useStyles();

  const [token, setToken] = useState("");
  const [groups, setGroups] = useState([]);

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
    let userToken = JSON.parse(localStorage.getItem("@Kenzinho:token"));
    setToken(userToken);
    getGroups(token);
  }, [token, groups]);

  return (
    <MainContainer>
      <SearchBar groups={groups} setGroups={setGroups} getGroups={getGroups} />
      {groups.map((group) => (
        <Accordion key={group.id} className={classes.root}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              <div key={group.id}>
                <TitleContainer>
                  <h4>{group.name}</h4>
                  <p>{group.category}</p>
                </TitleContainer>
                <SubTitleContainer>
                  <span>Atividades: {group.activities.length}</span>
                  <span>Metas: {group.goals.length}</span>
                </SubTitleContainer>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={classes.lowerMenu}>
              <SubTitles>
                <h4>Atividades:</h4>
                <CreateActivitiesModal groupId={group.id} />
              </SubTitles>
              {group.activities.map((activity) => (
                <DescriprionContainer key={activity.id}>
                  <p>{activity.title}</p>
                  <p>Finalizar em: {activity.realization_time}</p>
                </DescriprionContainer>
              ))}
              <h4>Metas:</h4>
              {group.goals.map((goal) => (
                <DescriprionContainer key={goal.id}>
                  <p>{goal.title}</p>
                  <p>Nível: {goal.difficulty}</p>
                  {/* <span>{goal.achieved ? 'Sim' : 'Não'}</span>
                    <span>{goal.how_much_achieved}</span> */}
                </DescriprionContainer>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </MainContainer>
  );
};

export default Tags;
