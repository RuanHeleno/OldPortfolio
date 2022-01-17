import React from 'react';

import { StyledLink} from './style';

export default function Buttons() {
    return (
        <>
            <StyledLink className="animate__animated animate__fadeIn Links" to="/inicio">Inicio</StyledLink>
            <StyledLink className="animate__animated animate__fadeIn Links" to="/AboutMe">Sobre mim</StyledLink>
            <StyledLink className="animate__animated animate__fadeIn Links" to="/Projects">Projetos</StyledLink>
            <StyledLink className="animate__animated animate__fadeIn Links" to="/Contact">Contato</StyledLink>
        </>
    );
}