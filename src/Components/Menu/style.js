import styled from 'styled-components';

export const StyledMenu = styled.div`
    position: fixed;
    left: 0;
    z-index: 99;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 21vw;
    @media screen and (min-width: 790px) {
        width: 21vw;
    }
`;