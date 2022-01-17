import styled from 'styled-components';
import background from "../../Artwork/Images/BackgroundHome.jpg";

import html5I from '../../Artwork/Images/Icons/html5.png'

export const StyledHome = styled.div`
    background: url(${background}) no-repeat center center fixed;
    background-size: cover;
    font-family: Georgia, serif;
    height: 100vh;
    width: 80vw;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const StyledHead = styled.h1`
    background: rgba(255,245,238, .5);
    font-size: 4rem;
    margin: 0;
`

export const StyledDiv = styled.div`
    background: rgba(255,245,238, .5);
    font-size: 2rem;
    margin: 0;
    padding: 0 1.1%;
    width: 100%;
    height: 50%;
    display: flex;
    text-align: center;
    align-items: center;
`

export const StyledSpan = styled.span`
    text-align: left;
    max-width: 50%;
    word-wrap:break-word;
`

export const StyledIcons = styled.img`
    width: 5%;
    height: auto;
    margin-left: auto;
    transition: transform .2s;

    &:hover {
        transform: scale(1.5);
    }
`

StyledIcons.defaultProps = {
    src: html5I,
    alt: "HTML5",
    title: "HTML5"
};

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