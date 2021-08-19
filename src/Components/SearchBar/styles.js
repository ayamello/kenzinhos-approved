import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;

  @media (min-width: 500px) {
    width: 95%;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 36px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;

  input {
    width: 85%;
    padding: 0 10px;
    text-transform: capitalize;
  }

  input,
  button {
    height: 32px;
    border: none;
    background-color: #fff;
  }

  button {
    width: 15%;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0 5px;

    svg {
      transform: translateY(2px);
    }
  }
`;

export const Button = styled.div`
  width: 100%;
  max-width: 834px;
  text-align: left;

  button {
    margin-top: 10px;
    padding: 0 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: var(--white-color);
    color: var(--blue-color);
    border-radius: 15px;
    text-transform: uppercase;
    font-family: var(--body-font);
    font-weight: 700;
    font-size: 12px;
    height: 35px;
  }

  button:hover{
    color:white;
    background-color: tomato;
  }

  button:active{
    background-color: rgba(255,99,71,0.8);
  }

  @media (min-width: 1024px) {
    button {
      background-color: var(--blue-color);
      color: var(--white-color);
    }
  }
`;
