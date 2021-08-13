import styled from "styled-components";
import background from "../../Assets/Img/signup.png";
import backgroundMobile from "../../Assets/Img/loginSignupMobile.png";

export const MainContainer = styled.div`
  background: url(${background}) round;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 600px) {
    background: url(${backgroundMobile}) round;
    flex-direction: column;
    justify-content: center;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-direction: column;
  width: 30%;
  form {
    display: flex;
    flex-direction: column;
    width: 70%;
    height: 320px;
  }
  h1 {
    font-family: var(--title-font);
    font-weight: 500;
    font-size: 3rem;
    color: black;
    text-align: center;
    width: 70%;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
    form {
      width: 100%;
    }
    h1 {
      font-size: 1.5rem;
      width: 100%;
      color: white;
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 30%;
  justify-content: center;
  color: white;
  h1 {
    font-family: var(--title-font);
    font-size: 3rem;
    font-weight: 400;
  }
  a {
    margin-top: 20px;
    text-transform: uppercase;
    border: 1px white solid;
    padding: 15px;
    width: 150px;
    border-radius: 8px;
    color: var(--blue-color);
    background-color: white;
    font-family: var(--title-font);
    text-align: center;
  }
  @media screen and (max-width: 600px) {
    flex-direction: row;
    width: 80%;
    justify-content: space-evenly;
    h1 {
      font-size: 1.1rem;
    }
    a {
      margin-top: 0;
      text-transform: capitalize;
      border: none;
      padding: 0px;
      width: 0px;
      border-radius: 8px;
      color: white;
      background-color: inherit;
      font-family: var(--title-font);
      text-align: center;
      color: white;
      font-size: 1.1rem;
      width: auto;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
  width: 100%;
  input {
    background-color: white;
  }
`;
