import styled, {keyframes} from 'styled-components';
import backgroundDesktop from '../../Assets/Img/home.png';
import backgroundDesktop2 from '../../Assets/Img/home2.png';
import backgroundMobile from '../../Assets/Img/homeMobile.png';

const fadeIn = keyframes`
  from{
    opacity:0;
  }

  to{
    opacity:100;
  }
`

export const MainContainer = styled.div`

    background-color: #E5E5E5;
    animation:${fadeIn} 1s;

`;

export const HomeContainer = styled.div`

    width: 100%;
    height: 100vh;
    background: url(${backgroundMobile});
    background-size: cover;
    
    @media (min-width: 768px){

        background: url(${backgroundDesktop});
        background-size: cover;       
    }
`;

export const HomeHeader = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    background-color: rgba(80, 60, 200, 1);
    width: 100%;
    padding: 0 1%;
    
    #logoHeader{
        width: 150px;
    }

    nav{
        display: none;
    }
    
    @media (min-width: 768px){

        padding: 0 5%;

        #logoHeader{
        width: 200px;
        }

        nav{
            display: flex;
            align-items: center;
            column-gap: 50px;
        }

        a{
            color: white;   
        }

        button{
            display: none;
        }
    }
`;

export const BodyContainer = styled.div`

    width: 75%;
    padding-top: 30%;
    padding-left: 5%;

    h1{
        color: white;
        font-size: 1.6rem;
        font-weight: 500;
        font-family: var(--title-font);
    }
    
    div{
        margin-top: 10%;
        display: flex;
        column-gap: 20px;
    }

    @media (min-width: 768px) {

        padding-top: 16%;
        margin-left: 12%;
        width: 40%;
    }

    @media (min-width: 1024px){

        padding-top: 12%;

        h1{
            font-size: 2rem;
        }
    }
`;

export const HomeCardsContainer = styled.div`

    display: none;
    
    @media (min-width: 768px){
        
        display: flex;
        flex-direction: row;
        justify-content: center;
        column-gap: 8%;
        padding-bottom: 20px;
        padding-top: 4%;
        
    }

    @media (min-width: 1024px){

        column-gap: 10%;
    }
`;

export const HomeCards = styled.div`
    
    width: 120px;
    height: 160px;
    background-color: white;
    text-align: center;
    border-radius: 5px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
    img{
        width: 60px;
    }

    h4{
        font-size: 1rem;
    }

    p{
        font-size: 0.8rem;
        color: grey;
    }

    @media (min-width: 1024px){

        width: 140px;
        height: 170px;

        h4{
        font-size: 1.2rem;
        }
    }
`;

export const ButtonWhite = styled.button`
    
        height: 40px;
        width: 100px;
        background-color: white;
        border-radius: 10px;
        border: none;
        color: var(--blue-color);
        font-size: 1rem;    
`;

export const ButtonPurple = styled.button`
    
        height: 40px;
        width: 100px;
        background: none;
        border-radius: 10px;
        color: white;
        border: 1px solid white;
        font-size: 1rem;   
`;

export const History = styled.div`

    font-size: 1.3rem;
    padding: 10%;
    text-align: center;

    h4{
        margin-bottom: 20px;
    }

    @media (min-width: 768px){

        font-size: 1.5rem;
    }
`;

export const AboutCardsContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: none;
    margin-top: 50px;
    justify-content: center;
    padding-bottom: 20px;

    @media (min-width: 768px){
        
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 10px;
        background: url(${backgroundDesktop2});
        background-size: cover;
    }
`;

export const AboutCards = styled.div`

    width: 310px;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 20px; 
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-around;

    img{
        width: 75px;
        border-radius: 10px;   
    }

    @media (min-width: 768px){

        width: 45%;
        height: 150px;

        img{
        width: 100px;
        }
    }
`;

export const CardsInfo = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const IconsNav = styled.nav`

    display: flex;
    justify-content: space-around;
`;