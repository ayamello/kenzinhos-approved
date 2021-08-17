import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    width: 550,
    height: 500,
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    overflowX: "hidden",
    marginLeft: 100,
  },

  "@global": {
    width: 550,
    height: 500,
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    overflowX: "hidden",
    marginLeft: 100,
    "*::-webkit-scrollbar": {
      width: "5px",
    },
    "*::-webkit-scrollbar-track": {
      backgroundColor: "white",
      borderRadius: "10px",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(29,100,203,1)",
      borderRadius: "10px",
    },
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

export const ContainerGoals = styled.div`
  min-height: 200px;
  h4 {
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
  }
`;
export const ContainerActivities = styled.div`
  min-height: 200px;

  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`;