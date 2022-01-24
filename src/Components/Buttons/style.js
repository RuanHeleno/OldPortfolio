import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const StyledDiv = styled.div `
    display: flex;
    flex-direction: column;
    margin: 15% 0 0 2%;

    @media screen and (min-width: 600px) { 
        margin-top: 10%;
    }

    @media screen and (min-width: 900px) { 
        margin-top: 5%;
    }
`

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;
    font-size: 2rem;
    font-family: EB Garamond;
    transition: .2s all ease-in-out;
    user-select: none;
    padding-bottom: 3%;

    &:hover {
        transition: .2s all ease-in-out;
        color: darkgray;
    }

    @media screen and (max-width: 599px) {
        font-size: 1.5rem;
    }

    @media screen and (min-width: 600px) { 
        font-size: 1.5rem;
    }

    @media screen and (min-width: 900px) {
        font-size: 3rem;
    }

    @media screen and (min-width: 1200px) {
        font-size: 2rem;
    }

    @media screen and (min-width: 1800px) { 
        font-size: 3rem;
    }
`;