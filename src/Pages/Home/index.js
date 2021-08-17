import { useHistory } from "react-router";
import SimpleMenu from "../../Components/SimpleMenu";
import groups from '../../Assets/Img/groups.png';
import profile from '../../Assets/Img/profile.png';
import activities from '../../Assets/Img/bike.png';
import goals from '../../Assets/Img/metas.png';
import logo from '../../Assets/Img/logo.png';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import Alex from '../../Assets/Img/Alex.jpeg';
import Gabriel from '../../Assets/Img/Gabriel.jpeg';
import Ayana from '../../Assets/Img/Ayana.jpg';
import Gabriela from '../../Assets/Img/Gabriela.jpeg';
import Carlos from '../../Assets/Img/Carlos.jpeg';
import {
  MainContainer,
  HomeContainer,
  HomeHeader,
  BodyContainer,
  ButtonPurple,
  ButtonWhite,
  HomeCards,
  HomeCardsContainer,
  History,
  AboutCardsContainer,
  AboutCards,
  CardsInfo,
  IconsNav,
  
} from "./styles";

const Home = () => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <MainContainer>  
      <HomeContainer>
        <HomeHeader>
          <div>
          <img id='logoHeader' src={logo} alt="Logo"/>
          </div>
          <div>
          <nav>
            <a href='#top'>Home</a>
            <a href='#middle'>Sobre nós</a>
            <a href='#bottom'>Contato</a>
          </nav>
          <SimpleMenu />
          </div>
        </HomeHeader>
        <BodyContainer id='top'>
          <h1>
            Organize seus estudos de forma inteligente. Potencialize seu
            aprendizado
          </h1>
          <div id='middleMobile'>
            <ButtonPurple onClick={() => sendTo("/signup")}>
              Cadastre-se
            </ButtonPurple>
            <ButtonWhite onClick={() => sendTo("/login")}>Login</ButtonWhite>
          </div>
        </BodyContainer>
        <HomeCardsContainer id='middle'>
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
      <History>
        <h4>
          Sobre nós
        </h4>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </History>
      <AboutCardsContainer id='bottom'>
          <AboutCards>
            <img src={Alex} alt="Alex"/>
            <CardsInfo>
              <h4>Alex - Product Owner</h4>
              <p>Lorem Ipsum.
              </p>
              <IconsNav>
                <LinkedInIcon/>
                <GitHubIcon/>
                <EmailIcon/>
              </IconsNav>
            </CardsInfo>
          </AboutCards>
          <AboutCards>
            <CardsInfo>
              <h4>Ayana - Tech Leader</h4>
              <p>Lorem Ipsum.
              </p>
              <IconsNav>
                <LinkedInIcon/>
                <GitHubIcon/>
                <EmailIcon/>
              </IconsNav>
            </CardsInfo>
            <img src={Ayana} alt="Ayana"/>
          </AboutCards>
          <AboutCards>
            <img src={Carlos} alt="Imagem de usuário"/>
            <CardsInfo>
              <h4>Carlos - Quality Assurance</h4>
              <p>Lorem Ipsum.
              </p>
              <IconsNav>
                <LinkedInIcon/>
                <GitHubIcon/>
                <EmailIcon/>
              </IconsNav>
            </CardsInfo>
          </AboutCards>
          <AboutCards>
            <CardsInfo>
              <h4>Gabriel - Quality Assurance</h4>
              <p>Lorem Ipsum.
              </p>
              <IconsNav>
                <a href='https://www.linkedin.com/in/gabriel-bueno-11227a209/'><LinkedInIcon/></a>
                <a href='https://github.com/GabrielBuenodev'><GitHubIcon/></a>
                <EmailIcon/>
              </IconsNav>
            </CardsInfo>
            <img src={Gabriel} alt="Gabriel"/>
          </AboutCards>
          <AboutCards>
            <img src={Gabriela} alt="Gabriela"/>
            <CardsInfo>
              <h4>Gabriela - Scrum Master</h4>
              <p>Lorem Ipsum.
              </p>
              <IconsNav>
                <LinkedInIcon/>
                <GitHubIcon/>
                <EmailIcon/>
              </IconsNav>
            </CardsInfo>
          </AboutCards>
      </AboutCardsContainer>   
    </MainContainer>
  );
};

export default Home;
