import styled from 'styled-components';

import background from "../../Assets/Images/BackgroundHome.jpg";

export const StyledHome = styled.div`
    background: url(${background}) no-repeat center center fixed;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
`

export const StyledHead = styled.h1`
    color: white;
    font-size: 3rem;
    margin-left: 15%;
    span {
        font-family: Dancing Script;
        font-size: 2.5rem;
    }
`