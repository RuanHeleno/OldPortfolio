import styled from 'styled-components';
import fotoPerfil from '../../Assets/Images/EuSerio.jpg'

export const StyledImage = styled.img`
    width: 40%;
    margin-top: 10%;
    border-radius: 50%;
    border: 10px solid grey;

    @media screen and (max-width: 599px) {
        width: 60%;
        border: 5px solid grey;
    }

    @media screen and (min-width: 600px) { 
        margin-top: 8%;
        width: 40%;
        border: 6px solid grey;
    }

    @media screen and (min-width: 900px) { 
        margin-top: 15%;
        width: 60%;
        border: 10px solid grey;
    }

    @media screen and (min-width: 1200px) { 
        margin-top: 10%;
        width: 50%;
        border: 10px solid grey;
    }
`;

StyledImage.defaultProps = {
    src: fotoPerfil,
    alt: "Ruan Heleno - Dev",
    title: "Ruan Heleno - Dev"
};