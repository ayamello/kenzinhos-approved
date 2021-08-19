import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: 270px;
  max-height: 380px;
  background: #e5e5e5;
  border: 2px solid rgba(29, 100, 203, 0.1);
  box-sizing: border-box;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.57);
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  overflow-y: auto;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  @media screen and (min-width: 1024px) {
    width: 600px;
    background: #f9f9f9;
    box-shadow: 0px 4px 4px rgba(116, 29, 203, 0.57);
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  color: white;
  background: #1d64cb;
  height: 60px;
  border: 2px solid rgba(29, 100, 203, 0.1);
  box-sizing: border-box;
  box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.57);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  @media screen and (min-width: 1024px) {
    width: 600px;
    color: black;
    background: #f9f9f9;
    box-shadow: 0px 4px 4px rgba(116, 29, 203, 0.57);
  }
`;
