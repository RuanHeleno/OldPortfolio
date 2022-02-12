import styled from 'styled-components';

import logo from '../../Assets/Images/logo.png';

export const StyledMenu = styled.nav`
    position: fixed;
    z-index: 9;
    width: 100vw;
    background: #2C394BBF;

    @media screen and (max-width: 599px) {
        height: 6vh;
        flex-direction: column;
    }

    @media screen and (min-width: 600px) { 
        height: 10vh;
    }

    @media screen and (min-width: 1200px) { 
        height: 8vh;
    }
`;

export const StyledLogo = styled.img`
    @media screen and (max-width: 599px) {
       width: 60%;              
       margin-top: -9%;
    }

    @media screen and (min-width: 600px) { 
        width: 58%;
        margin-top: -8.5%;
    }

    @media screen and (min-width: 900px) { 
        width: 45%;
        margin-top: -8%;
    }

    @media screen and (min-width: 1200px) { 
        width: 30%;
        margin-top: -6%;
    }
`;

StyledLogo.defaultProps = {
    src: logo,
    alt: "Logo Nome Ruan",
    title: "Ruan"
}