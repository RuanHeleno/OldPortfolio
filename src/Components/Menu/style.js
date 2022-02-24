import styled from 'styled-components';

import logo from '../../Assets/Images/logo.png';

export const StyledMenu = styled.nav`
    position: fixed;
    z-index: 9;
    width: 100vw;
    background: #2C394BBF;
   
    @media screen and (max-width: 599px) {
        flex-direction: column;
    }
`;

export const StyledLogo = styled.img`
    margin-top: 0%;

    @media screen and (max-width: 599px) {
       width: 60%;              
    }

    @media screen and (min-width: 600px) { 
        width: 58%;
    }

    @media screen and (min-width: 900px) { 
        width: 45%;
    }

    @media screen and (min-width: 1200px) {
        width: 25%;
    }
`;

StyledLogo.defaultProps = {
    src: logo,
    alt: "Logo Nome Ruan",
    title: "Ruan"
}