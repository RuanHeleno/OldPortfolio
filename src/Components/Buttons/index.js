import React from 'react';

import { 
    StyledDiv, 
    StyledLink,
    StyledHomeI,
    StyledAboutMeI,
    StyledSkillsI,
    StyledProjectsI,
    StyledContactI
} from './style';

export default function Buttons() {
    return (
        <StyledDiv>
            <StyledLink smooth to="#home" className="Links">
                <StyledHomeI className="me-3" /><span className="me-4">Inicio</span> 
            </StyledLink> 
            <StyledLink smooth to="#aboutMe" className="Links">
                <StyledAboutMeI className="me-3" /><span className="me-4 text-nowrap">Sobre mim</span> 
            </StyledLink>
            <StyledLink smooth to="#skills" className="Links">
                <StyledSkillsI className="me-3" /><span className="me-4">Habilidades</span> 
            </StyledLink>
            <StyledLink smooth to="#projects" className="Links">
                <StyledProjectsI className="me-3" /><span className="me-4">Projetos</span> 
            </StyledLink>
            <StyledLink smooth to="#contact" className="Links">
                <StyledContactI /><span className="me-md-4">Contato</span> 
            </StyledLink>
        </StyledDiv>
    );
}