import styled from 'styled-components';

import background from "../../Assets/Images/BackgroundHome.jpg";

export const StyledHome = styled.div`
    background: url(${background}) no-repeat center center fixed;
    background-size: cover;
    height: 100vh;
    width: 80vw;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const StyledHead = styled.h1`
    color: white;
    font-size: 3rem;
    margin: 22% auto 0 auto;
    span {
        font-family: Dancing Script;
        font-size: 2.5rem;
    }
`

export const StyledQuote = styled.figure`
    background: rgba(255,245,238, .5);
    font-size: 2.5rem;
    padding: 1%;
    border-radius: 1em;
`

export const StyledFigCaption= styled.figcaption`
    text-align: right;
    margin-top: 2%;
`