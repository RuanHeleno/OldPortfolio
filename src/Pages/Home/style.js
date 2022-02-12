import styled from 'styled-components';

import background from "../../Assets/Images/BackgroundHome.jpeg";

export const StyledHome = styled.div`
    background: url(${background}) no-repeat center center fixed;
    background-size: cover;
    display: flex;
    align-items: center;
    height: 100vh;
`

export const StyledHead = styled.h1`
    margin: 0 auto;

    span {
        font-family: Dancing Script;
        font-size: 2rem;
    }

    @media screen and (max-width: 599px) {
        text-align: center;
        font-size: 2.3rem;
    }

    @media screen and (min-width: 600px) {
        font-size: 2.3rem;
    }

    @media screen and (min-width: 1200px) {
        font-size: 2.5rem;
    }
`