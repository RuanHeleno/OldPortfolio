import styled from 'styled-components';

import fotoPerfil from '../../Assets/Images/EuSerio.jpg'

export const StyledImage = styled.img`
    width: 25%;
    border-radius: 50%;
    border: 5px solid #021733;

    @media screen and (max-width: 599px) {
        width: 60%;
    }

    @media screen and (min-width: 600px) { 
        
    }

    @media screen and (min-width: 900px) { 
        
    }

    @media screen and (min-width: 1200px) { 
        
    }
`;

StyledImage.defaultProps = {
    src: fotoPerfil,
    alt: "Ruan Heleno - Dev",
    title: "Ruan Heleno - Dev"
};