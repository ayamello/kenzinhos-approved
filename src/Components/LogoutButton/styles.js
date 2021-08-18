import styled from "styled-components";

export const ButtonLogout = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: var(--white-color);
  color: var(--blue-color);
  border-radius: 15px;
  text-transform: uppercase;
  font-family: var(--body-font);
  font-weight: 700;
  font-size: 12px;
  height: 30px;
  width: 75%;

  @media screen and (min-width: 769px) {
      font-size: 13px;
      font-weight: 600;
      font-family: "Source Code Pro";
      padding: 0 0.7em;
      height: 30px;
      border: none;
      border-radius: 15px;
    }
`;
