import styled from "styled-components";
import backgroundDesktop from "../../Assets/Img/home.png";
import backgroundMobile from "../../Assets/Img/homeMobile.png";

export const HomeContainer = styled.div`

    background: url(${backgroundMobile});
    background-size: cover;
    width: 100%;
    height: 100vh;
    
    @media (min-width: 768px){

        background: url(${backgroundDesktop});
        background-size: cover;
        
        
    }
`;


export const HomeHeader = styled.header`

    text-align: right;
    padding-top: 9%;
    padding-right: 5%;
    

    button{
        color: white;
        background:none;
    }

    nav{
        display: none;    
    }

    @media (min-width: 768px){

        padding-top: 5.5%;
        display: flex;
        justify-content: flex-end;

        button{
            display: none;
        }

        nav{
            display: flex;
            align-items: center;
            column-gap: 100px;
        }

        a{
            color: white;
        }
    }

    @media (min-width: 1024px){

        padding-top: 5%;
        
    }

`;


export const BodyContainer = styled.div`

    margin: 15%;
    width: 65%;
    

    h1{
        color: white;
        font-size: 1.6rem;
        font-weight: 200;
    }
    
    div{
        margin-top: 30px;
        display: flex;
        column-gap: 20px;
    }

    @media (min-width: 768px) {

        margin: 7%;
        margin-left: 15%;
        width: 30%;

    }

    @media (min-width: 1024px){

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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    

    h1{
        font-size: 3rem;
    }

    h4{
        font-size: 1.5rem;
    }

    p{
        font-size: 1.2rem;
    }

    @media (min-width: 1024px){

        width: 140px;
        height: 170px;
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

