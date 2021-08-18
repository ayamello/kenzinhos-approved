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
  width: 60px;
  margin-top: 15px;
  position: absolute;
  top: 0px;
  right: 10px;
  margin: 10px;
  @media screen and (min-width: 769px) {
      font-size: 13px;
      font-weight: 600;
      font-family: "Source Code Pro";
      padding: 0 0.7em;
      height: 30px;
      width: 80px;
      border: none;
      border-radius: 15px;
      color: #fff;
      background-color: var(--blue-color);
      position: absolute;
      top: 10px;
      right: 40px;
      margin: 0;
    }
`;
