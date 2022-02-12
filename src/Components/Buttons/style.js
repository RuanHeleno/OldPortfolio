import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';

import { IoHome } from "react-icons/io5";
import { SiAboutdotme } from "react-icons/si";
import { MdOutlineComputer } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

export const StyledDiv = styled.div `
    
    font-family: EB Garamond;
    
    @media screen and (min-width: 600px) { 
        
    }

    @media screen and (min-width: 900px) { 
       
    }
`

export const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    transition: .3s all ease-in-out;

    &:hover {
        transition: .3s all ease-in-out;
        color: darkgray;
    }

    @media screen and (max-width: 599px) {
        
        span {
            display: none;
        }
    }

    @media screen and (min-width: 600px) { 
        
    }

    @media screen and (min-width: 900px) {
        
    }

    @media screen and (min-width: 1200px) {
        
    }

    @media screen and (min-width: 1800px) { 
        
    }
`;

export const StyledHomeI = styled(IoHome)`
    font-size: 1.5rem; 

    @media screen and (min-width: 600px) {
        display: none; 
    }
`;

export const StyledAboutMeI = styled(SiAboutdotme)`
    font-size: 1.5rem;

    @media screen and (min-width: 600px) { 
        display: none; 
    }
`;

export const StyledSkillsI = styled(MdOutlineComputer)`
    font-size: 1.5rem;

    @media screen and (min-width: 600px) { 
        display: none; 
    }
`;

export const StyledProjectsI= styled(FaNewspaper)`
    font-size: 1.5rem;

    @media screen and (min-width: 600px) { 
        display: none; 
    }
`;

export const StyledContactI = styled(IoMdContact)`
    font-size: 1.5rem;
    
    @media screen and (min-width: 600px) { 
        display: none; 
    }
`;