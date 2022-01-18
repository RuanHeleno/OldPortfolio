import React from 'react';
import { TiSocialLinkedin, TiSocialInstagram, TiSocialGithub } from 'react-icons/ti';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io5';

import { 
    StyledSpan,
    StyledSocialLinks,
    StyledGitHub }
from './style';

export default function SocialLinks() {
    return(
        <StyledSpan>
            <StyledSocialLinks href="https://linkedin.com/in/ruan-heleno-da-rocha-vieira-753155105"> 
                <TiSocialLinkedin size={30} /> 
            </StyledSocialLinks>
            <StyledSocialLinks href=""> 
                <TiSocialInstagram size={30} /> 
            </StyledSocialLinks>
            <StyledSocialLinks href="https://github.com/RuanHeleno"> 
                <TiSocialGithub size={30} /> 
            </StyledSocialLinks>
            <StyledSocialLinks 
            // eslint-disable-next-line no-script-url
            onClick="javascript:window.open('mailto:ruan.empreenderop@gmail.com', 'mail'); event.preventDefault()" 
            href="mailto:ruan.empreenderop@gmail.com">   
                <MdEmail size={30} />
            </StyledSocialLinks>
            <StyledSocialLinks href="https://wa.me/+5521976321006" target="_blank"> 
                <IoLogoWhatsapp size={30} /> 
            </StyledSocialLinks>
            <br />
            Desenvolvido por <StyledGitHub href="https://github.com/RuanHeleno">Ruan Heleno</StyledGitHub>
        </StyledSpan>
    )
}