import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  ContainerGoals,
  ContainerActivities,
  useStyles,
  TopContainer,
} from "./styles";
import { useGroupsUser } from "../../Providers/GroupsUserProvider";

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
            <CardActions className={classes.botao}>
              <Button
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
        </ContainerActivities>
      </CardContent>
      <CardActions className={classes.button}>
        <Button
          variant="contained"
          color="primary"
          size="medium"
          onClick={() => subscribeToAGroup(group.id)}
        >
          Inscrever-se
        </Button>
      </CardActions>
    </Card>
  );
};

export default Group;
