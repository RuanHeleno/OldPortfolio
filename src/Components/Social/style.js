import styled from 'styled-components';

import { TiSocialLinkedin, TiSocialInstagram, TiSocialGithub } from 'react-icons/ti';
import { MdEmail } from 'react-icons/md';

export const StyledDiv = styled.div`
    position: fixed;
    left: 1px;
    margin-top: 8%;
    z-index: 9;
    display: flex;
    flex-direction: column;
    background: #2C394BBF;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    @media screen and (max-width: 599px) {
       margin-top: 20%;
    }
`;

export const StyledSocialLinks = styled.a`
    cursor: pointer;
    color: inherit;
    background: #2C394BBF;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: .3s all ease-in-out;
    padding-bottom: 10%;

    &:hover {
        color: gray;
        transition: .3s all ease-in-out;
    }
`;

export const StyledTiSocialLinkedin = styled(TiSocialLinkedin)`
    font-size: 2.2em;
`;

export const StyledTiSocialInstagram = styled(TiSocialInstagram)`
    font-size: 2.2em;
`;

export const StyledTiSocialGithub = styled(TiSocialGithub)`
    font-size: 2.2em;
`;

export const StyledMdEmail = styled(MdEmail)`
    font-size: 2.2em;
`;