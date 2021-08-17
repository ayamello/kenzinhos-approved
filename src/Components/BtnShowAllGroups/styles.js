import styled from "styled-components";

export const ShowAllGroups = styled.div`
  position: absolute;
  top: 55vh;
  left: 0;
  right: 0;
  text-align: center;

  button {
    border: none;
    background-color: transparent;
    font-weight: bold;
    font-size: 16px;

    svg {
      font-size: 14px;
      transform: translateY(2px);
    }

    &:hover {
      color: var(--blue-color);
    }
  }

  @media (min-width: 1024px) {
    left: 130px;
  }
`;