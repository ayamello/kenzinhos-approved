import {
  HomeContainer,
  HomeHeader,
  BodyContainer,
  ButtonPurple,
  ButtonWhite,
  HomeCards,
  HomeCardsContainer,
} from "./styles";

import { useHistory } from "react-router";
import SimpleMenu from "../../Components/SimpleMenu";

const Home = () => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <HomeContainer>
      <HomeHeader>
        <nav>
          <a href="/">Home</a>
          <a href="/quemsomos">Quem somos</a>
          <a href="/contato">Contato</a>
        </nav>
        <SimpleMenu />
      </HomeHeader>
      <BodyContainer>
        <h1>
          Organize seus estudos de forma inteligente. Potencialize seu
          aprendizado
        </h1>
        <div>
          <ButtonPurple onClick={() => sendTo("/cadastro")}>
            Cadastre-se
          </ButtonPurple>
          <ButtonWhite onClick={() => sendTo("/login")}>Login</ButtonWhite>
        </div>
      </BodyContainer>
      <HomeCardsContainer>
        <HomeCards>
          <h1>M</h1>
          <h4>Metas</h4>
          <p>Defina e acompanhe</p>
        </HomeCards>
        <HomeCards>
          <h1>A</h1>
          <h4>Atividades</h4>
          <p>Mantenha-se em dia</p>
        </HomeCards>
        <HomeCards>
          <h1>H</h1>
          <h4>Hábitos</h4>
          <p>Desenvolva bons</p>
        </HomeCards>
        <HomeCards>
          <h1>G</h1>
          <h4>Grupos</h4>
          <p>Participe e interaja</p>
        </HomeCards>
      </HomeCardsContainer>
    </HomeContainer>
  );
};

export default Home;
