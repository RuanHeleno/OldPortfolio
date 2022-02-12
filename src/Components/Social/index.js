import React from 'react';
import { TiSocialLinkedin, TiSocialInstagram, TiSocialGithub } from 'react-icons/ti';
import { MdEmail } from 'react-icons/md';

import { StyledDiv, StyledSocialLinks } from './style';

export default function SocialLinks() {
    return(
        <StyledDiv className="animate__animated animate__fadeIn">
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
        </StyledDiv>
    )
}