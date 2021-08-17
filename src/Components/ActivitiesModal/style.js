import styled from "styled-components";

export const InputId = styled.input`
  display: none;
`;

export const ButtonAdd = styled.button`
  height: 25px;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Source Code Pro";
  padding: 0 0.5em;
  border: none;
  border-radius: 15px;
  color: var(--blue-color);
  background-color: var(--white-color);
  @media screen and (min-width: 800px) {
    background-color: var(--blue-color);
    color: var(--white-color)
  }
`;
