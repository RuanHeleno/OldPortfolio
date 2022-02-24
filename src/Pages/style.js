import styled from 'styled-components';

import logo2 from '../Assets/Images/logo2.png';

export const StyledFooter = styled.footer`
    height: 100%;
    
    a {
        color: lightblue;
        transition: .3s all ease-in-out;
        text-decoration: none;

        &:hover {
            transition: .3s all ease-in-out;
            color: darkblue;
        }
    }
`;

export const StyledLogo = styled.img`
    right: 0;

    @media screen and (max-width: 499px) {
        width: 500%;
    }

    @media screen and (min-width: 500px) and (max-width: 599px) {
        width: 200%;
    }

    @media screen and (min-width: 600px) and (max-width: 899px) {
        width: 110%;
    }

    @media screen and (min-width: 900px) and (max-width: 1199px) {
        width: 100%;
    }

    @media screen and (min-width: 1200px) {
        width: 60%;
    }
`;

StyledLogo.defaultProps = {
    src: logo2,
    alt: "Fechamento de tag HTML"
}