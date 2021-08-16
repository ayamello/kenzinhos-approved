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
import groups from '../../Assets/Img/groups.png';
import profile from '../../Assets/Img/profile.png';
import activities from '../../Assets/Img/bike.png';
import goals from '../../Assets/Img/metas.png';

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
          <ButtonPurple onClick={() => sendTo("/signup")}>
            Cadastre-se
          </ButtonPurple>
          <ButtonWhite onClick={() => sendTo("/login")}>Login</ButtonWhite>
        </div>
      </BodyContainer>
      <HomeCardsContainer>
        <HomeCards>
          <img src={goals} alt="Imagem de usuário"/>
          <h4>Metas</h4>
          <p>Defina e acompanhe</p>
        </HomeCards>
        <HomeCards>
          <img src={activities} alt="Imagem de usuário"/>
          <h4>Atividades</h4>
          <p>Mantenha-se em dia</p>
        </HomeCards>
        <HomeCards>
          <img src={profile} alt="Imagem de usuário"/>
          <h4>Hábitos</h4>
          <p>Desenvolva bons</p>
        </HomeCards>
        <HomeCards>
          <img src={groups} alt="Imagem de usuário"/>
          <h4>Grupos</h4>
          <p>Participe e interaja</p>
        </HomeCards>
      </HomeCardsContainer>
    </HomeContainer>
  );
};

export default Home;
