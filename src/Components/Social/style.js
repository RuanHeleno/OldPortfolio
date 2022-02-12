import styled from 'styled-components';

export const StyledDiv = styled.div`
    position: fixed;
    left: 1px;
    margin-top: 10%;
    z-index: 9;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 599px) {
       margin-top: 20%;
    }
`;

export const StyledSocialLinks = styled.a`
    cursor: pointer;
    color: inherit;
    background: #2C394BBF;
    transition: .3s all ease-in-out;

    &:hover {
        color: gray;
        transition: .3s all ease-in-out;
    }
`;