import styled from 'styled-components';
import Background from '../../Assets/Img/navbar.png';

export const Container = styled.div`
    width: 120px;
    height: 100vh;
    padding: 2vh 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: url(${Background});
    background-size: contain;
    background-attachment: fixed;

    img {
        width: 60px;
    }
`;

export const Content = styled.div`
    margin-top: 4vh;
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
`;