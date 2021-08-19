import { useEffect } from "react";
import { Accordion, Typography, AccordionDetails } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";
import {
  DescripritionContainer,
  SubTitleContainer,
  TitleContainer,
  useStyles,
  AccordionSummary,
  MainContainer,
  SubTitles,
} from './styles';
import CreateActivitiesModal from '../ActivitiesModal';
import CreateGoalsModal from '../GoalsModal';
import { useListActivitiesGoals } from '../../Providers/ActivitiesGoals';
import { useGroupsUser } from '../../Providers/GroupsUser';
import { useAuth } from '../../Providers/Auth';
import UpdateActivities from '../UpdateActivitiesModal';
import UpdateGoal from '../UpdateGoalModal';
import api from "../../Services/api";
import { toast } from "react-toastify";

const Tags = () => {
  const classes = useStyles();
  const { token } = useAuth();
  const { groups, setGroups } = useGroupsUser();

  useEffect(() => {
    api
      .get("groups/subscriptions/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setGroups([...response.data]);
      })
      .catch((err) => toast.error("Grupos não podem ser carregados"));
  }, [setGroups, token]);

  const { handleActivieDelete, handleGoalDelete } = useListActivitiesGoals();

  return (
    <MainContainer>
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
                  <span>{group.category}</span>
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
                <DescripritionContainer key={activity.id}>
                  <p>{activity.title}</p>
                  <p>
                    Finalizar em:
                    {new Date(activity.realization_time).toLocaleDateString(
                      "pt-BR"
                    )}
                  </p>
                  <UpdateActivities activityId={activity.id} />
                  <button onClick={() => handleActivieDelete(activity.id)}>
                    <DeleteForeverSharpIcon
                      color="secondary"
                      className="deleteIcon"
                    />
                  </button>
                </DescripritionContainer>
              ))}
              <SubTitles>
                <h4>Metas:</h4>
                <CreateGoalsModal groupId={group.id} />
              </SubTitles>
              {group.goals.map((goal) => (
                <DescripritionContainer key={goal.id}>
                  <p>{goal.title}</p>
                  <p>Nível: {goal.difficulty}</p>
                  {goal.achieved ? (
                    <p>Meta completada</p>
                  ) : (
                    <p>Meta incompleta</p>
                  )}
                  <UpdateGoal goalId={goal.id} />
                  <button onClick={() => handleGoalDelete(goal.id)}>
                    <DeleteForeverSharpIcon
                      color="secondary"
                      className="deleteIcon"
                    />
                  </button>
                </DescripritionContainer>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </MainContainer>
  );
};

export default Tags;
