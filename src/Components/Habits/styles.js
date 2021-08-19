import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  from{
    opacity:0;
  }

  to{
    opacity:100;
  }
`

export const Container = styled.div`
  animation:${fadeIn}1x;
`


export const MainContainer = styled.div`
  max-width: 270px;
  min-width: 270px;
  height: 270px;
  background: #E5E5E5;
  border: 2px solid rgba(29, 100, 203, 0.1);
  box-sizing: border-box;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.57);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  overflow:auto;
  

  div{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;  
  }
  @media screen and (min-width: 769px) {
    max-width: 600px;
    min-width: 600px;
    height: 450px;
    background: #F9F9F9;
    box-shadow: 0px 4px 4px rgba(116, 29, 203, 0.57);
  }
`;

export const TitleContainer = styled.div`
  color: white;
  max-width: 270px;
  min-width: 270px;
  background:#1D64CB;
  height: 60px;
  border: 2px solid rgba(29, 100, 203, 0.1);
  box-sizing: border-box;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.57);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  
  @media screen and (min-width: 769px) {
    color: black;
    max-width: 600px;
    min-width: 600px;
    background: #F9F9F9;
    box-shadow: 0px 4px 4px rgba(116, 29, 203, 0.57);
  }
`

