import styled from "styled-components";

export const MainContainer = styled.div`
  height: 1;
  width: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  div{
    display: flex;
    justify-content: space-around;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
`;

