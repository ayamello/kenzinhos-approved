import styled, { keyframes } from 'styled-components';
import background from '../../Assets/Img/signup.png';
import backgroundMobile from '../../Assets/Img/loginSignupMobile.png';

const appearFromRight = keyframes`
  from{
    opacity:0;
    transform: translateX(50px);
  }

  to{
    opacity:1;
    transform:translateX(0px);
  }
`
const fadeIn = keyframes`
  from{
    opacity:0;
  }

  to{
    opacity:100;
  }
`

export const MainContainer = styled.div`
  background: url(${backgroundMobile}) round;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: ${fadeIn} 1s;
  @media screen and (min-width: 600px) {
    background: url(${background}) round;
    justify-content: space-around;
    flex-direction: row;
    animation: ${appearFromRight} 1s;
  }
`;

export const LogoContainerSignup = styled.div`
  position: absolute;
  top: 0;
  right: 2%;
  width: 75px;
  height: 75px;
  img {
    width: 100%;
    margin: 5px;
  }
  @media screen and (min-width: 600px) {
    width: 100px;
    height: 100px;
    right: 1%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
  flex-direction: column;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 320px;
  }
  h1 {
    font-family: var(--title-font);
    font-weight: 500;
    font-size: 1.5rem;
    color: white;
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 600px) {
    width: 30%;
    form {
      width: 100%;
    }
    h1 {
      font-size: 3rem;
      width: 70%;
      color: black;
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 80%;
  justify-content: space-evenly;
  color: white;
  h1 {
    font-family: var(--title-font);
    font-size: 1.1rem;
    font-weight: 400;
  }
  a {
    margin-top: 0px;
    text-transform: capitalize;
    border: none;
    border-radius: 8px;
    color: white;
    background-color: inherit;
    font-family: var(--title-font);
    font-size: 1.1rem;
    width: auto;
  }

  a:hover {
    background-color: rgba(0, 0, 0, 0.5);
    color:white;
  }

  a:active{
            background: rgba(0, 0, 0, 0.8)
  }

  @media screen and (min-width: 600px) {
    flex-direction: column;
    width: 30%;
    justify-content: center;
    h1 {
      font-size: 3rem;
    }
    a {
      margin-top: 20;
      text-transform: uppercase;
      border: 1px white solid;
      padding: 15px;
      width: 150px;
      color: var(--blue-color);
      background-color: white;
      text-align: center;
      font-size: 1.1rem;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
  width: 100%;
  input {
    border-radius: 15px;
    background-color: white;
  }
`;


