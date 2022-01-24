import React from 'react';
import { TiSocialLinkedin, TiSocialInstagram, TiSocialGithub } from 'react-icons/ti';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io5';

import { 
    StyledDiv,
    StyledSocialLinks,
    StyledGitHub }
from './style';

export default function SocialLinks() {
    return(
        <StyledDiv>
            <StyledSocialLinks href="https://linkedin.com/in/ruan-heleno-da-rocha-vieira-753155105" target="_blank"> 
                <TiSocialLinkedin size={30} className="social"/> 
            </StyledSocialLinks>
            <StyledSocialLinks href="https://www.instagram.com/ruanhelenoof" target="_blank"> 
                <TiSocialInstagram size={30} className="social" /> 
            </StyledSocialLinks>
            <StyledSocialLinks href="https://github.com/RuanHeleno" target="_blank"> 
                <TiSocialGithub size={30} className="social" /> 
            </StyledSocialLinks>
            <StyledSocialLinks href="mailto:ruanheleno.dev@gmail.com" target="_blank">   
                <MdEmail size={30} className="social" />
            </StyledSocialLinks>
            <StyledSocialLinks href="https://wa.me/+5521964252735" target="_blank"> 
                <IoLogoWhatsapp size={30} className="social" /> 
            </StyledSocialLinks>
            <br />
            <span>
                Desenvolvido por <StyledGitHub href="https://github.com/RuanHeleno">Ruan Heleno</StyledGitHub>
            </span>
        </StyledDiv>
    )
}