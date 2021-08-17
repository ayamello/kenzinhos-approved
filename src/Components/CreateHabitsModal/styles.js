import styled from "styled-components";

export const Container = styled.div`
  button {
    height: 25px;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    font-family: "Source Code Pro";
    padding: 0 0.5em;
    border: none;
    border-radius: 5px;
    color: var(--blue-color);
    background-color: var(--white-color);
  }

  @media (min-width: 1024px) {
    button {
      padding: 0 1em;
      border-radius: 10px;
      color: #fff;
      background-color: var(--blue-color);
    }
  }
`;

export const FormContainer = styled.div`
  height: 1;
  width: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;
  h1 {
    color: white;
    font-family: var(--title-font);
    font-size: 1.4rem;
    font-weight: 500;
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
  margin-bottom: 10px;
  input {
    background-color: white;
    width: 200px;
    border-radius: 5px;
  }
  button {
    width: 200px;
    margin: 0 auto;
    margin-top: 20px;
  }
`;
