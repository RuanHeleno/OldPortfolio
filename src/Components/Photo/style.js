import styled from 'styled-components';
import fotoPerfil from '../../Assets/Images/EuSerio.jpg'

export const StyledImage = styled.img`
    width: 40%;
    margin: 10% 0 0 0;
    border-radius: 50%;
    border: 10px solid grey;
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
    margin: 5% 0 15% 0;
    padding: 5% 0 5% 0;
`