import React from 'react';

import { 
    StyledDiv, 
    StyledSocialLinks, 
    StyledTiSocialLinkedin,
    StyledTiSocialInstagram,
    StyledTiSocialGithub,
    StyledMdEmail
} from './style';

export default function SocialLinks() {
    return(
        <StyledDiv className="animate__animated animate__fadeIn">
            <StyledSocialLinks href="https://linkedin.com/in/ruan-heleno-da-rocha-vieira-753155105" target="_blank"> 
                <StyledTiSocialLinkedin className="social"/> 
            </StyledSocialLinks> 
            <StyledSocialLinks href="https://www.instagram.com/ruanhelenoof" target="_blank"> 
                <StyledTiSocialInstagram className="social" /> 
            </StyledSocialLinks> 
            <StyledSocialLinks href="https://github.com/RuanHeleno" target="_blank"> 
                <StyledTiSocialGithub className="social" /> 
            </StyledSocialLinks> 
            <StyledSocialLinks href="mailto:ruanheleno.dev@gmail.com" target="_blank">   
                <StyledMdEmail className="social" />
            </StyledSocialLinks> 
        </StyledDiv>
    )
}