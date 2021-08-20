import styled, {keyframes} from 'styled-components';
import Background from '../../Assets/Img/navbar-dash.png';
import BackgroundMob from '../../Assets/Img/navbar-dash-mobile.png';

const appearFromLeft = keyframes`
  from{
    opacity:0;
    transform: translateX(-100px);
  }

  to{
    opacity:1;
    transform:translateX(0px);
  }
`

const disappearFromRight = keyframes`
  from{
    opacity:0;
    transform: translateX(100px);
  }

  to{
    opacity:1;
    transform:translateX(0px);
  }
`

export const Container = styled.div`
  position: absolute;
  z-index: 2;
  width: 130px;
  height: 100vh;
  padding: 2vh 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${BackgroundMob});
  background-size: contain;
  background-attachment: fixed;
  animation:${appearFromLeft} 1s;
  
  img {
    width: 60px;
  }

  .closeNav {
    position: absolute;
    left: 100px;
    top: 5px;

    button {
      width: 20px;
      height: 20px;
      border: none;
      background-color: transparent;

      svg {
        font-size: 20px;
        color: var(--white-color);
        transform: translateY(1px);
      }
    }
  }

  @media (min-width: 1024px) {
    position: static;
    width: 120px;
    background-image: url(${Background});

    img {
      width: 60px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 4vh;

  a {
    display: block;
    margin: 2vh 0;
    padding: 10px 12px;
    text-align: center;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    img {
      width: 25px;
    }

    h4 {
      color: #000;
      font-family: var(--body-font);
      font-size: 16px;
    }

    span {
      color: var(--gray-details);
      font-size: 12px;
    }
  }

  @media (min-width: 1024px) {
    a {
      display: block;
      margin: 2vh 0;
      padding: 1.7vh 0.8vw;
      text-align: center;
      border-radius: 10px;
      background-color: #fff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      img {
        width: 30px;
      }

      h4 {
        color: #000;
        font-family: var(--body-font);
      }

      span {
        color: var(--gray-details);
        font-size: 12px;
      }
    }
  }
`;
