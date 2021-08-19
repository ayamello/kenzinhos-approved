import styled from 'styled-components';

export const InputId = styled.input`
  display: none;
`;

export const ButtonAdd = styled.button`
  width: 65px;
  height: 25px;
  font-size: 8px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'Source Code Pro';
  padding: 0 0.5em;
  border: none;
  border-radius: 15px;
  color: var(--white-color);
  background-color: var(--blue-color);

  :hover{
    background-color: tomato;
  }

  @media screen and (min-width: 800px) {
    width: 100px;
    font-size: 13px;
    
  }
`;