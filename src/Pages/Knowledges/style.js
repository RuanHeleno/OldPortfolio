import styled from 'styled-components';
import html5I from '../../Assets/Images/Icons/html5.png';

export const StyledKnowledges = styled.div`
    font-family: Georgia, serif;
    height: 100vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    word-wrap: break-word;
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