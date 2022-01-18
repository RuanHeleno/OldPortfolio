import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const StyledDiv = styled.div `
    display: flex;
    flex-direction: column;
    margin-left: 2%;
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
    margin: 1% 0;
    padding: 3% 0;

    &:hover {
        transition: .2s all ease-in-out;
        color: darkgray;
    }
`;