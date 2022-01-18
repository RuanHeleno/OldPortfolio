import styled from 'styled-components';
import fotoPerfil from '../../Assets/Images/EuSerio.jpg'

export const StyledImage = styled.img`
    width: 40%;
    margin-top: 10%;
    border-radius: 50%;
    border: 10px solid grey;
`;

StyledImage.defaultProps = {
    src: fotoPerfil,
    alt: "Ruan Heleno - Dev",
    title: "Ruan Heleno - Dev"
};