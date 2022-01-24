import styled from 'styled-components';

import background from "../../Assets/Images/BackgroundHome.jpg";

export const StyledHome = styled.div`
    background: url(${background}) no-repeat center center fixed;
    background-size: cover;
    display: flex;
    align-items: center;
    height: 100vh;
`

export const StyledHead = styled.h1`
    color: white;
    font-size: 3rem;
    margin-left: 15%;

    span {
        font-family: Dancing Script;
        font-size: 2.5rem;
    }

    @media screen and (max-width: 599px) {
        font-size: 2rem;
        margin-left: 5%;

        span {
            font-size: 2rem;
        }
    }

    @media screen and (min-width: 1800px) { 
        font-size: 5rem;
        margin: 0 auto;

        span {
            font-size: 5rem;
        }
    }
`