import styled from 'styled-components';
import Me from '../../Assets/Images/EuSerio.jpg'

export const StyledAboutMe = styled.div`
    height: 100vh;
    width: 80vw;
    display: flex;
    align-items: center;
`

export const StyledImg = styled.img`
    width: 30%;
    height: auto;
    margin: 0 0 0 5%;
`

StyledImg.defaultProps = {
    src: Me,
    alt: "Ruan Heleno - Dev",
    title: "Ruan Heleno - Dev"
};

export const StyledP = styled.p`
    margin: 0 0 0 10%;
`

export const StyledH = styled.h2`
    text-align: center;
    margin-top: -25%;
`