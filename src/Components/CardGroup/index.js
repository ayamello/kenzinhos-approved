import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import {
  ContainerGoals,
  ContainerActivities,
  useStyles,
  TopContainer,
<<<<<<< HEAD
=======
  ListsDiv,
>>>>>>> c7e75fbd0ea0f59d039552078cf9d85c57b56af7
} from "./styles";
import { useGroupsUser } from "../../Providers/GroupsUser";

const Group = ({ group }) => {
  const classes = useStyles();

  const { subscribeToAGroup } = useGroupsUser();

  return (
    <Card className={classes.root}>
      <CardContent>
        <TopContainer>
          <div>
            <Typography variant="h5" component="h2">
              {group?.name}
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Categoria: {group?.category}
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Descrição: {group?.description}
            </Typography>
          </div>
          <div>
            <CardActions>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                size="medium"
                onClick={() => subscribeToAGroup(group.id)}
              >
                Inscrever-se
              </Button>
            </CardActions>
          </div>
        </TopContainer>
        <ContainerGoals>
          <Typography variant="h5" component="h4">
<<<<<<< HEAD
            Metas:
          </Typography>
          {group?.goals.map((goal) => (
            <Typography variant="body2" component="p">
              {goal.title}
            </Typography>
          ))}
        </ContainerGoals>
        <ContainerActivities>
          <Typography variant="h5" component="h4">
            Atividades:
          </Typography>
          {group?.activities.map((activity) => (
            <Typography variant="body2" component="li">
              {activity.title}
            </Typography>
          ))}
=======
            Metas
          </Typography>
          <ListsDiv>
            {group?.goals.map((goal) => (
              <div className="Goal">
                <span><strong>{goal.title}</strong></span>
                <span>
                  <strong>Nível: </strong>
                  {goal.difficulty}
                </span>
              </div>
            ))}
          </ListsDiv>
        </ContainerGoals>
        <ContainerActivities>
          <Typography variant="h5" component="h4">
            Atividades
          </Typography>
          <ListsDiv>
            {group?.activities.map((activity) => (
              <div className="Activity">
                <span><strong>{activity.title}</strong></span>
                <span>
                  <strong>Finalizar em: </strong>
                  {new Date(activity.realization_time).toLocaleDateString(
                    "pt-BR"
                  )}
                </span>
              </div>
            ))}
          </ListsDiv>
>>>>>>> c7e75fbd0ea0f59d039552078cf9d85c57b56af7
        </ContainerActivities>
      </CardContent>
    </Card>
  );
};

export default Group;
