import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const StyledDiv = styled.div `
    display: flex;
    flex-direction: column;
    margin: 15% 0 0 4%;
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
`;