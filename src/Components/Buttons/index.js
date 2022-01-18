import React from 'react';
import { IoHome } from "react-icons/io5";
import { SiAboutdotme } from "react-icons/si";
import { MdOutlineComputer } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

import { StyledDiv, StyledLink } from './style';

export default function Buttons() {
    return (
        <StyledDiv>
            <StyledLink className="Links" to="/">
                <IoHome size={30} /> <span style={{marginLeft: "5%"}}>Inicio</span> 
            </StyledLink> 
            <StyledLink className="Links" to="/AboutMe">
                <SiAboutdotme size={30} /> <span style={{marginLeft: "5%"}}>Sobre Mim</span> 
            </StyledLink>
            <StyledLink className="Links" to="/Skills">
                <MdOutlineComputer size={30} /> <span style={{marginLeft: "5%"}}>Habilidades</span> 
            </StyledLink>
            <StyledLink className="Links" to="/Projects">
                <FaNewspaper size={30} />  <span style={{marginLeft: "5%"}}>Projetos</span> 
            </StyledLink>
            <StyledLink className="Links" to="/Contact">
                <IoMdContact size={30} />  <span style={{marginLeft: "5%"}}>Contato</span> 
            </StyledLink>
        </StyledDiv>
    );
}