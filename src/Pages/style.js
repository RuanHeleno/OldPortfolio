import styled from 'styled-components';

import logo2 from '../Assets/Images/logo2.png';

export const StyledFooter = styled.footer`
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
    position: relative;
    float: right;
    margin-top: -7%;
    width: 13%;

    @media screen and (max-width: 599px) {
        margin-top: -20%;
        width: 30%;
    }

    @media screen and (min-width: 600px) {
        margin-top: -12%;
        width: 20%;
    }

    @media screen and (min-width: 900px) {
        margin-top: -8%;
        width: 15%;
    }

    @media screen and (min-width: 1200px) {
        margin-top: -7%;
        width: 13%;
    }
`;

StyledLogo.defaultProps = {
    src: logo2,
    alt: "Fechamento de tag HTML"
}