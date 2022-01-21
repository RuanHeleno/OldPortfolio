import styled from 'styled-components';

export const StyledSkills = styled.div`
   width: 80vw;
`

export const StyledText = styled.h1`
    text-align: center;
    font-size: 4rem;
    margin-top: 2%;
`

export const StyledContent = styled.div`
    margin: 8% 0 0 1%;
    font-size: 2rem;
`

export const StyledSpan = styled.span`
    text-align: left;
    max-width: 50%;
    word-wrap: break-word;
`

export const StyledDivIcons = styled.div`
    text-align: right;
    
`

export const StyledIcons = styled.img`
    width: 15%;
    height: auto;
    background-color: rgba(255, 250, 250, .8);
    border-radius: 10%;
    transition: transform .2s;
    margin: 2%;

    &:hover {
        transform: scale(1.1);
        border-bottom: 5px solid rgba(0, 0, 0, .6);
    }
`

export const StyledSkillsBar = styled.div`
    margin-top: 8%;
    text-align: center;
`