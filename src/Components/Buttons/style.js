import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
    color: #FFF;
    text-decoration: none;
    font-size: 3rem;
    font-family: Impact, Haettenschweiller, 'Arial Narrow Bold', sans-serif;
    transition: .2s all ease-in-out;
    user-select: none;
    margin: 1% 0;
    text-align: center;

    &:hover {
        background-color: #FAF0E6;
        width: 100%;
        transition: .2s all ease-in-out;
        color: darkgray;
    }
`;