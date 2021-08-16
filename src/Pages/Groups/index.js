import { Container, Content } from "./style";
import NavbarDash from "../../Components/NavbarDash";
import CreateGroupsModal from "../../Components/CreateGroupsModal";
import MenuBurger from "../../Components/MenuBurger";
import CardGroup from "../../Components/CardGroup";
import { Search, ArrowForwardIos } from "@material-ui/icons";
import api from "../../Services/api";
import { useEffect, useState } from "react";

const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [groupForCard, setGroupForCard] = useState();
  const [viewCardGroup, setViewCardGroup] = useState(false);
  const [viewNavbar, setViewNavbar] = useState(false);

  useEffect(() => {
    api
      .get("groups/")
      .then((res) => setGroups(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  const handleViewDetailsGroup = (group) => {
    setGroupForCard(group);
    setViewCardGroup(true);
  };

  return (
    <Container>          
      {window.innerWidth >= 1024 || viewNavbar === true ? (
        <NavbarDash setViewNavbar={setViewNavbar}/>
      ) : (
        <MenuBurger viewNavbar={viewNavbar} setViewNavbar={setViewNavbar} />
      )}

      <Content>
        <div className="Header">
          <h2>Grupos</h2>
          <CreateGroupsModal />
        </div>
        <div className="Groups">
          <div className="GroupsList">
            <div className="SearchField">
              <input type="text" placeholder="Pesquisar grupo" />
              <button>
                <Search />
              </button>
            </div>

            <div className="List">
              {groups.map((group) => (
                <div className="Group" key={group.id}>
                  <div className="Resume">
                    <div className="HeaderGroup">
                      <h4>{group.name}</h4>
                      <span>{group.category}</span>
                    </div>

                    <div className="InfosGroup">
                      <span>Atividades: {group.activities.length}</span>
                      <span>Metas: {group.goals.length}</span>
                    </div>
                  </div>

                  <div className="BtnToDetails">
                    <button onClick={() => handleViewDetailsGroup(group)}>
                      <ArrowForwardIos />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="GroupDetails">
            {viewCardGroup && <CardGroup group={groupForCard} />}
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Groups;