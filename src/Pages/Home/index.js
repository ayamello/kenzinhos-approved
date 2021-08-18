import { useHistory } from 'react-router';
import SimpleMenu from '../../Components/SimpleMenu';
import groups from '../../Assets/Img/groups.png';
import profile from '../../Assets/Img/profile.png';
import activities from '../../Assets/Img/bike.png';
import goals from '../../Assets/Img/metas.png';
import logo from '../../Assets/Img/logo.png';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
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
  
} from './styles';

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
          <img id='logoHeader' src={logo} alt='Logo'/>
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
            <ButtonPurple onClick={() => sendTo('/signup')}>
              Cadastre-se
            </ButtonPurple>
            <ButtonWhite onClick={() => sendTo('/login')}>Login</ButtonWhite>
          </div>
        </BodyContainer>
        <HomeCardsContainer id='middle'>
          <HomeCards>
            <img src={goals} alt='Imagem de usuário'/>
            <h4>Metas</h4>
            <p>Defina e acompanhe</p>
          </HomeCards>
          <HomeCards>
            <img src={activities} alt='Imagem de usuário'/>
            <h4>Atividades</h4>
            <p>Mantenha-se em dia</p>
          </HomeCards>
          <HomeCards>
            <img src={profile} alt='Imagem de usuário'/>
            <h4>Hábitos</h4>
            <p>Desenvolva bons</p>
          </HomeCards>
          <HomeCards>
            <img src={groups} alt='Imagem de usuário'/>
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
        Somos alunos do curso de Desenvolvimento Full Stack da Kenzie Academy 
        Brasil e, ao sermos desafiados a desenvolver um projeto em equipe 
        utilizando uma API de hábitos, pensamos nos novatos que chegam à Kenzie. 
        Como ingressamos recentemente na programação, conhecemos as dificuldades 
        que um Kenzinho enfrenta. Tendo isso em mente, desenvolvemos esta aplicação 
        com o intuito de ajudar os novos alunos a entrarem no ritmo do curso e 
        conseguirem manter seus estudos em dia. Além disso, ainda podem trabalhar 
        algumas soft skills como gestão de tempo, produtividade e formação de novos 
        hábitos, os quais são essenciais ao Programador, principalmente na era do 
        trabalho remoto.
        </p>
      </History>
      <AboutCardsContainer id='bottom'>
          <AboutCards>
            <img src={Alex} alt='Alex'/>
            <CardsInfo>
              <h4>Alex - Product Owner</h4>
              <p>Email: alesilvasp@gmail.com</p>
              <IconsNav>
                <a href='https://www.linkedin.com/in/alex-silva-2b1aaa202/'>
                  <LinkedInIcon/>
                </a>
                <a href='https://github.com/alesilvasp'>
                  <GitHubIcon/>
                </a>
              </IconsNav>
            </CardsInfo>
          </AboutCards>
          <AboutCards>
            <CardsInfo>
              <h4>Ayana - Tech Leader</h4>
              <p>Email: dev.ayanamello@gmail.com</p>
              <IconsNav>
                <a href='https://www.linkedin.com/in/ayana-mello/'>
                  <LinkedInIcon/>
                </a>
                <a href='https://github.com/ayanamello'>
                  <GitHubIcon/>
                </a>
              </IconsNav>
            </CardsInfo>
            <img src={Ayana} alt='Ayana'/>
          </AboutCards>
          <AboutCards>
            <img src={Carlos} alt='Carlos'/>
            <CardsInfo>
              <h4>Carlos - Quality Assurance</h4>
              <p>Email: hiro1kz77@gmail.com</p>
              <IconsNav>
                <a href='https://www.linkedin.com/in/carlos-lima-773337215/'>
                  <LinkedInIcon/>
                </a>
                <a href='https://www.linkedin.com/in/carlos-lima-773337215/'>
                  <GitHubIcon/>
                </a>
              </IconsNav>
            </CardsInfo>
          </AboutCards>
          <AboutCards>
            <CardsInfo>
              <h4>Gabriel - Quality Assurance</h4>
              <p>Email: gabrielcb84@hotmail.com</p>
              <IconsNav>
                <a href='https://www.linkedin.com/in/gabriel-bueno-11227a209/'>
                  <LinkedInIcon/>
                </a>
                <a href='https://github.com/GabrielBuenodev'>
                  <GitHubIcon/>
                </a>
              </IconsNav>
            </CardsInfo>
            <img src={Gabriel} alt='Gabriel'/>
          </AboutCards>
          <AboutCards>
            <img src={Gabriela} alt='Gabriela'/>
            <CardsInfo>
              <h4>Gabriela - Scrum Master</h4>
              <p>Email: gabrielarodrigues432@gmail.com</p>
              <IconsNav>
              <a href='https://www.linkedin.com/in/gabriela-rodrigues-3aa382208/'>
                <LinkedInIcon />
              </a>
              <a href='https://github.com/gaavro'>
                <GitHubIcon />
              </a>
              </IconsNav>
            </CardsInfo>
          </AboutCards>
      </AboutCardsContainer>   
    </MainContainer>
  );
};

export default Home;
