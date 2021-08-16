import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ContainerGoals, ContainerActivities } from "./styles";

const useStyles = makeStyles({
  root: {
    width: 550,
    height: 500,
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    marginLeft: 100,
  },
  bullet: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 1px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 12,
  },
  botao: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    fontFamily: "Source Code Pro",
  },
});

const Group = ({ group }) => {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardContent>
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
        <ContainerGoals>
          <Typography variant="h5" component="h4">
            Metas:
          </Typography>
          {group?.goals.map(goal => 
              <Typography variant="body2" component="p">
                {goal.title}
              </Typography>
            )}    
        </ContainerGoals>
        <ContainerActivities>
          <Typography variant="h5" component="h4">
            Atividades:
          </Typography>
            {group?.activities.map(activity => 
              <Typography variant="body2" component="li">
                {activity.title}
              </Typography>
            )}          
        </ContainerActivities>
      </CardContent>
      <CardActions className={classes.botao}>
        <Button variant="contained" color="primary" size="medium">
          Inscrever-se
        </Button>
      </CardActions>
    </Card>
  );
};

export default Group;
