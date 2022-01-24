import styled from 'styled-components';
import DarkModeToggle from "react-dark-mode-toggle";

export const StyledDarkModeToggle = styled(DarkModeToggle)`
    margin-top: 20%;

    @media screen and (min-width: 600px) {
        margin-top: 5%;
    }
`