import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import styled from "styled-components";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginBottom: "10px",
    boxShadow: "0px 4px 4px rgba(116, 29, 203, .57)",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    width: "100%",
  },
  lowerMenu: {
    width: "100%",
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "16px",
  },
  content: {
    margin: 0,
  },
}));

export const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .0)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 75,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    margin: 0,
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

export const SubTitles = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 380px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;

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

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  h4 {
    text-align: left;
    font-size: 14px;
    font-family: "Source Sans Pro";
    text-transform: uppercase;
  }

  span {
    margin-left: 12px;
    font-size: 12px;
    color: #a0a0a0;
    font-weight: 500;
    transform: translateY(1px);
  }

  button{
    border:none
  }

  .updateIcon {
    color: var(--blue-color);
    margin-left:5px;
    :hover {
      color: green;
    }
    :active {
      color: darkgreen;
    }
  }
`;

export const SubTitleContainer = styled.div`
  text-align: left;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 25px;
  color: #959595;

  span + span {
    margin-left: 15px;
  }
`;
export const DescripritionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  p {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 28px;
    color: black;
  }

  button {
    margin-bottom: 10px;
    border: none;
  }

  .updateIcon {
    color: var(--blue-color);
    :hover {
      color: green;
    }
    :active {
      color: darkgreen;
    }
  }

  .deleteIcon {
    color: red;
    :hover {
      color: tomato;
    }
    :active {
      color: darkred;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;

    button {
      margin-bottom: 0px;
    }
  }
`;