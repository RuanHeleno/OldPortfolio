import styled from 'styled-components';

export const StyledDiv = styled.div`
    position: relative;
    text-align: center;

    @media screen and (max-width: 599px) {
        bottom: 10%;
    }

    @media screen and (min-width: 600px) { 
        bottom: -5%;
        margin: 0 auto;

        span {
            font-size: 1.2rem;
        }

        .social {
            width: auto;
            height: 2rem;
        }
    }

    @media screen and (min-width: 900px) {
        bottom: -5%;
        margin: 0 2%;

        span {
            font-size: 2rem;
        }

        .social {
            width: auto;
            height: 3rem;
        }
    }

    @media screen and (min-width: 1200px) {
        bottom: -7%;
        margin: 0 2%;

        span {
            font-size: 1.5rem;
        }

        .social {
            width: auto;
            height: 2rem;
        }
    }

    @media screen and (min-width: 1800px) { 
        bottom: -7%;
        margin: 0 2%;

        span {
            font-size: 2rem;
        }

        .social {
            width: auto;
            height: 3rem;
        }
    }
`

export const StyledSocialLinks = styled.a`
    margin-right: 3%;
    cursor: pointer;
    color: inherit;

    &:hover {
        color: inherit;
    }
`

export const StyledGitHub = styled.a`
    cursor: pointer;
    color: blue;
    text-decoration: none;

    &:hover {
        color: darkblue;
    }
`