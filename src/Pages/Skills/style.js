import styled from 'styled-components';
import html5I from '../../Assets/Images/Icons/html5.png';


export const StyledSkills = styled.div`
   margin-top: 3%;
`

export const StyledText = styled.h1`
    text-align: center;
    font-size: 4rem;
    margin-top: 2%;
`

export const StyledDiv = styled.div`
    font-size: 2rem;
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
    margin-right: 2%;

    &:hover {
        transform: scale(1.5);
    }
`

StyledIcons.defaultProps = {
    src: html5I,
    alt: "HTML5",
    title: "HTML5"
};

export const StyledSkillsBar = styled.div`
    margin: 10% auto;
    text-align: center;
`