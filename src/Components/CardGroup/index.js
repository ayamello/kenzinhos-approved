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
    maxWidth: 450,
    height: 600,
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  bullet: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  botao: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default function Group() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Nome do grupo:
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Categoria:
        </Typography>

        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Descrição:
        </Typography>
        <ContainerActivities>
          <Typography variant="h5" component="h2">
            Lista de Atividades:
          </Typography>
          <Typography variant="body2" component="p">
            <br />
          </Typography>
        </ContainerActivities>
        <ContainerGoals>
          <Typography variant="h5" component="h2">
            Lista de Metas:
          </Typography>
        </ContainerGoals>
      </CardContent>
      <CardActions className={classes.botao}>
        <Button variant="contained" color="primary" size="medium">
          Inscrever-se
        </Button>
      </CardActions>
    </Card>
  );
}
