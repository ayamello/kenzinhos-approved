import styled from "styled-components";
import background from "../../Assets/Img/login.png";

export const MainContainer = styled.div`
  background: url(${background}) round;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-direction: column;
  width: 30%;
  margin-top: 100px;
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
`;