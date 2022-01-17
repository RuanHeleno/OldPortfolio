import styled from 'styled-components';
import fotoPerfil from '../../Artwork/Images/EuSerio.jpg'

export const StyledImage = styled.img`
    width: 70%;
    margin: 20% 0 0 0;
    border-radius: 100%;
`;

StyledImage.defaultProps = {
    src: fotoPerfil,
    alt: "Ruan Heleno - Dev",
    title: "Ruan Heleno - Dev"
};

export const StyledBlockQuote = styled.blockquote`
    text-align: center;
    font: 1.3rem Georgia, serif;
    color: #696969;
    background: #FFF5EE;
    border: 1px solid ##F5F5F5;
    box-shadow: inset 0 0 5px #000000;
    width: 80%;
    height: auto;
    padding: 5% 0 5% 0;
    margin: 10% 0 0 0;
`