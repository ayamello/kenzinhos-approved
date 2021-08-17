import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 36px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 30px;

  input {
    width: 92%;
    padding: 0 10px;
  }

  input,
  button {
    height: 34px;
    border: none;
    background-color: #fff;
  }
  .AllGroupsButton {
    margin-top: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: var(--blue-color);
    color: var(--white-color);
    border-radius: 15px;
    text-transform: uppercase;
    font-family: var(--body-font);
    font-weight: 700;
    
  }
  button {
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0 5px;

    svg {
      transform: translateY(2px);
    }
  }
`;
