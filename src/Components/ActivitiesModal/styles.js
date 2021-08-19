import styled from "styled-components";

export const InputId = styled.input`
  display: none;
`;

export const InputDate = styled.input`
  outline: none;
  border: 1px solid #c4c4c4;
  height: 40px;
  padding-left: 15px;
  font-size: 1rem;
  :hover {
    border-color: black;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-family: var(--body-font);
  input {
    background-color: white;
    border-radius: 5px;
    color: #808080;
    text-transform: uppercase;
  }
  button {
    width: 200px;
    margin: 0 auto;
    margin-top: 20px;
  }
`
export const ButtonAdd = styled.button`
  width: 65px;
  height: 25px;
  font-size: 8px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Source Code Pro";
  padding: 0 0.5em;
  border: none;
  border-radius: 15px;
  color: var(--white-color);
  background-color: var(--blue-color);

  :hover {
    background-color: tomato;
  }

  :active{
    background-color: rgba(255,99,71,0.8);
  }
  
  @media screen and (min-width: 800px) {
    width: 100px;
    font-size: 13px;
  }
`;
