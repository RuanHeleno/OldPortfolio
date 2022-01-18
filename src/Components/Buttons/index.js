import React from 'react';
import { IoHome } from "react-icons/io5";
import { MdOutlineComputer } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

import { StyledDiv, StyledLink } from './style';

export default function Buttons() {
    return (
        <StyledDiv>
            <StyledLink className="animate__animated animate__fadeIn Links" to="/">
                <IoHome size={30} /> <span style={{marginLeft: "5%"}}>Inicio</span> 
            </StyledLink> 
            <StyledLink className="animate__animated animate__fadeIn Links" to="/Knowledges">
                <MdOutlineComputer size={30} /> <span style={{marginLeft: "5%"}}>Conhecimentos</span> 
            </StyledLink>
            <StyledLink className="animate__animated animate__fadeIn Links" to="/Projects">
                <FaNewspaper size={30} />  <span style={{marginLeft: "5%"}}>Projetos</span> 
            </StyledLink>
            <StyledLink className="animate__animated animate__fadeIn Links" to="/Contact">
                <IoMdContact size={30} />  <span style={{marginLeft: "5%"}}>Contato</span> 
            </StyledLink>
        </StyledDiv>
    );
}