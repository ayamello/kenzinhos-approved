import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 120%;
  justify-content: space-between;
  align-items: center;
`;

export const SubTitleContainer = styled.div`
margin-top: 20px;
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
`
