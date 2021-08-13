import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left:68%;
  top:20%;
`

export const MainContainer = styled.div`
  max-width: 370px;
  min-width: 370px;
  height: 450px;
  background: #F9F9F9;
  border: 2px solid rgba(29, 100, 203, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(116, 29, 203, 0.57);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  
  div{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
`;

export const TitleContainer = styled.div`
  max-width: 370px;
  height: 45px;
  background: #F9F9F9;
  border: 2px solid rgba(29, 100, 203, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(116, 29, 203, 0.57);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`

