import styled from 'styled-components';

export const StyledMenu = styled.nav`
    position: fixed;
    left: 0;
    z-index: 9;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    height: 100vh;

    @media screen and (max-width: 599px) {
        width: 50%;
    }

    @media screen and (min-width: 600px) { 
        width: 40%;
    }

    @media screen and (min-width: 900px) { 
        width: 30%;
    }

    @media screen and (min-width: 1200px) { 
        width: 30%;
    }
`;