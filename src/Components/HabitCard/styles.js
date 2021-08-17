import styled from "styled-components";

export const MainContainer = styled.div`
  color:white;
  height: 200px;
  width: 145px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: blue ;
  border: 2px solid rgba(29, 100, 203, 0.1);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(116, 29, 203, 0.57);
  border-radius:20px;
  background-image: linear-gradient(#1D64CB, #741DCB);
  margin-bottom: 10px;
  margin-top: 10px;

  @media screen and (min-width: 798px) {
    
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h4{
    font-size: 14px;
  }

  p{
    font-size: 13px;
  }
  input{
    width: 50px;
  }

  @media screen and (max-width: 600px) {
    
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  button{
    font-size: 11px;
    width: 55px;
    height: 25px;
    margin: 0px 5px 0px 5px;
    border-radius: 6px;
  }

  .update:hover{
    color:white;
    background-color: green;
  }

  .update:active{
    color:black;
  }

  .delete:hover{
    color:white;
    background-color: red;
  }

  .delete:active{
    color:black;
  }


`


