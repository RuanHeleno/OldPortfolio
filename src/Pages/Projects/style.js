import styled from 'styled-components';

export const StyledProjects = styled.div`
    @media screen and (max-width: 599px) {
        margin-top: 18%;
    }

    @media screen and (min-width: 600px) {
        margin-top: 8%;
    }

    @media screen and (min-width: 1200px) {
        margin-top: 3%;
    }
`

export const StyledTitle = styled.h1`
    text-align: center;
    font-size: 3rem;
    margin-top: 2%;

    @media screen and (min-width: 600px) {
        font-size: 4rem;
    }
`

export const StyledContent = styled.div`
    margin-top: 3%;

    @media screen and (min-width: 1200px) {
        margin-top: 1%;
    }
`