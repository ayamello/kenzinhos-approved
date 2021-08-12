import { HomeContainer,
        HomeHeader, 
        BodyContainer, 
        ButtonPurple, 
        ButtonWhite, 
        ImgContainer,
        HomeCards, 
        HomeCardsContainer 
    } from "./styles";

const Home = () => {
    return(
        <HomeContainer>
            <HomeHeader>                
                <h1>Kenzinhos</h1>       
                <nav>
                    <a href='/'>Home</a>
                    <a href='/quemsomos'>Quem somos</a>
                    <a href='/contato'>Contato</a>
                </nav>
                <button>=</button>
            </HomeHeader>
            <BodyContainer>
                <h1>
                    Organize seus estudos de forma inteligente.
                    Potencialize seu aprendizado
                </h1>
                <div>
                    <ButtonPurple>Cadastre-se</ButtonPurple>
                    <ButtonWhite>Login</ButtonWhite>
                </div>
            </BodyContainer>
            <ImgContainer>
                Imagem
            </ImgContainer>
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
}

export default Home;

