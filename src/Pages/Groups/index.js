import { Container, Content } from "./style";
import NavbarDash from "../../Components/NavbarDash";
import CardGroup from "../../Components/CardGroup";
import { Search, ArrowForwardIos } from "@material-ui/icons";
import CreateGroupsModal from "../../Components/CreateGroupsModal";

const Groups = () => {
  return (
    <Container>
      <NavbarDash />

      <Content>
        <div className="Header">
          <CreateGroupsModal />
        </div>

        <div className="Groups">
          <div className="GroupsList">
            <div className="SearchField">
              <input type="text" placeholder="Pesquisar grupo" />
              <button>
                {" "}
                <Search />{" "}
              </button>
            </div>

            <div className="List">
              <div classsName="Resume">
                <div className="HeaderGroup">
                  <h4>Nome do grupo</h4>
                  <span>Categoria</span>
                </div>

                <div className="InfosGroup">
                  <span>Atividades: 2</span>
                  <span>Metas: 2</span>
                </div>
              </div>

              <div className="BtnToDetails">
                <button>
                  {" "}
                  <ArrowForwardIos />{" "}
                </button>
              </div>
            </div>
          </div>

          <div classNmae="GroupDetails">
            <CardGroup />
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Groups;
