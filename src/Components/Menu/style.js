import styled from 'styled-components';

import logo from '../../Assets/Images/logo.png';

export const StyledMenu = styled.nav`
    position: fixed;
    z-index: 9;
    width: 100vw;
    background: #2C394BBF;
    height: 8vh;

    @media screen and (max-width: 599px) {
        flex-direction: column;
    }

    @media screen and (min-width: 600px) { 
        
    }

    @media screen and (min-width: 900px) { 
       
    }

    @media screen and (min-width: 1200px) { 
        
    }
`;

export const StyledLogo = styled.img`
    width: 25%;
    margin-top: -4%;

    @media screen and (max-width: 599px) {
       width: 60%;
       margin-top: -9%;
    }
`;

StyledLogo.defaultProps = {
    src: logo,
    alt: "Logo Nome Ruan",
    title: "Ruan"
}