import styled from 'styled-components';

export const Container = styled.div`
    padding: 0.5vh 2vw;

    button {
        width: 30px;
        height: 27px;
        border: none;
        color: var(--blue-color);
        border-radius: 3px;
        background-color: transparent;

        svg {
            font-size: 30px;
            transform: translateY(1px) translateX(0.5px);
        }
    }
`;