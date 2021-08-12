import styled from "styled-components";
// import background from


export const HomeContainer = styled.div`

    background-color: purple;
    width: 100%;
    height: 100vh;
    
`;


export const HomeHeader = styled.header`

    display: flex;
    justify-content:space-between;
    padding: 5%;
    align-items: center;

    h1{
        color: white;
    }

    button{
        color: white;
        background:none;
    }

    nav{
        display: none;    
    }

    @media (min-width: 768px){

        padding: 2%;

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

        h1{
            margin-left: 5%;
        }

        nav{
            margin-right: 5%;
        }
    }

`;

export const BodyContainer = styled.div`

    margin: 10%;
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

        margin: 5%;
        margin-left: 15%;
        width: 30%;

    }

    @media (min-width: 1024px){

        width: 50%;

        h1{
            font-size: 2.5rem;
        }
    }

`;

export const ImgContainer = styled.div`

    margin: auto;
    width: 150px;
    height: 150px;
    background-color: gray;

    @media (min-width: 768px){

        display: none;
    }

`;

export const HomeCardsContainer = styled.div`

    /* background-image: src($); */
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
    
    width: 140px;
    height: 170px;
    background-color: white;
    text-align: center;
    border-radius: 5px;
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

        width: 170px;
        height: 200px;
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