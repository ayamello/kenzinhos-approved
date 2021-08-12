import { Accordion, AccordionSummary, Typography } from "@material-ui/core";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../Services/api";
import { SubTitleContainer, TitleContainer, useStyles } from "./styles";

const Tags = () => {
  const classes = useStyles();

  const [token, setToken] = useState("");
  const [userId, setUserId] = useState();
  const [groups, setGroups] = useState([]);

  const history = useHistory();

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
    setUserId(history.location.state.data);
    getGroups(token);
  }, [token]);

  return (
    <>
      <div>
        <Accordion className={classes.root}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              {groups.map((group) => (
                <div key={group.id}>
                  <TitleContainer>
                    <h3>{group.name}</h3>
                    <h5>{group.category}</h5>
                  </TitleContainer>
                  <SubTitleContainer>
                    <span>Atividades: {group.activities.length}</span>
                    <span>Metas: {group.goals.length}</span>
                  </SubTitleContainer>
                </div>
              ))}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default Tags;
// const getGroups = (token) => {
//     api
//       .get("groups/subscriptions/", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((response) => {
//         setGroups([...response.data]);
//       })
//       .catch((err) => console.log(err));
//   };
//   const deleteGroup = (id) => {
//     api
//       .delete(`groups/${id}/unsubscribe/`, {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then(() => {
//         getGroups(token);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   useEffect(() => {
//     getGroups(token);
//   }, [token]);
//   return (
//     <GroupsUserContext.Provider value={{ groups, setGroups, getGroups }}>
//       {children}
//     </GroupsUserContext.Provider>
//   );
// };
// export const useGroupsUser = () => useContext(GroupsUserContext);
