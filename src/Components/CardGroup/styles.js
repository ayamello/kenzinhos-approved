import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    width: 600,
    height: 480,
    display: "flex",
    flexDirection: "column",
    marginLeft: 50,
    boxShadow: "0px 4px 4px rgba(29, 100, 203, 0.4)",
  },

  "@global": {
    width: 600,
    height: 500,
    display: "flex",
    flexDirection: "column",
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
  button: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    fontFamily: "Source Code Pro",
    borderRadius: "15px",
    fontWeight: "bold",
    backgroundColor: "var(--blue-color)",
  },
});

export const ContainerGoals = styled.div`
  height: 180px;

  h4 {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    padding-bottom: 0.1em;
    margin-top: 10px;
    margin-bottom: 5px;
    padding-left: 5px;
    color: white;
    background: linear-gradient(
      180deg,
      rgba(29, 100, 203, 0.78) 0%,
      rgba(116, 29, 203, 0.57) 100%
    );
  }
`;

export const ListsDiv = styled.div`
  height: 140px;
  overflow-y: auto;

  span {
    text-transform: capitalize;
  }

  span + span {
    font-size: 14px;
  }

  .Goal,
  .Activity {
    border-bottom: 1px solid rgba(149, 149, 149, 0.2);
    margin: 5px 0;
    padding: 0.2em 5px;
    display: flex;
    justify-content: space-between;

    &:hover {
      box-shadow: 1px 2px 2px rgba(29, 100, 203, 0.4);
    }
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 10px;
    margin-top: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--blue-color);
    border-radius: 10px;
  }
`;
export const ContainerActivities = styled.div`
  height: 180px;
  margin-bottom: 5px;
  margin-top: 10px;

  h4 {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
    padding-bottom: 0.1em;
    margin-bottom: 5px;
    padding-left: 5px;
    color: white;
    background: linear-gradient(
      180deg,
      rgba(29, 100, 203, 0.78) 0%,
      rgba(116, 29, 203, 0.57) 100%
    );
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h2 {
    text-transform: uppercase;
    font-weight: bold;
  }
`;
