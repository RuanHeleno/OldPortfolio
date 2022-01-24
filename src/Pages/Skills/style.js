import styled from 'styled-components';

export const StyledSkills = styled.div`
    @media screen and (max-width: 599px) {
        margin-top: 18%;
    }

    @media screen and (min-width: 600px) {
        margin-top: 8%;
    }

    @media screen and (min-width: 900px) {
        margin-top: 3%;
    }
`

export const StyledText = styled.h1`
    text-align: center;
    font-size: 4rem;
    margin-top: 2%;
`

export const StyledContent = styled.div`
    margin: 8% 0 0 1%;
    font-size: 2rem;

    @media screen and (max-width: 599px) {
        display: none;
    }

    @media screen and (min-width: 600px) {
        display: none;
    }

    @media screen and (min-width: 900px) {
        display: block;
        font-size: 3rem;
    }
`

export const StyledSpan = styled.span`
    text-align: left;
`

export const StyledDivIcons = styled.div`
    text-align: center;
    
    @media screen and (min-width: 900px) {
        margin-top: 5%;
    }
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

    @media screen and (min-width: 1200px) {
       width: 10%;
    }
`

export const StyledSkillsBar = styled.div`
    margin-top: 8%;
    text-align: center;

    @media screen and (max-width: 599px) {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20%;
    }

    @media screen and (min-width: 600px) {
        margin-top: 20%;
        width: 100vw;
    }

    @media screen and (min-width: 900px) {
        margin-top: 10%;
        width: 100vw;
    }

    @media screen and (min-width: 1200px) {
        margin-top: 5%;
        width: 100vw;
    }
`