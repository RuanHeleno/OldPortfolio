import styled from 'styled-components';
import Me from '../../Assets/Images/EuSerio.jpg'

export const StyledAboutMe = styled.div`
    width: 80vw;
    margin-top: 3%;
    padding: 0;
`

export const StyledTitle = styled.h1`
    text-align: center;
    font-size: 3rem;
`

export const StyledContent = styled.div`
    margin-top: 5%;
`

export const StyledImg = styled.img`
    width: 80%;
    height: auto;
    margin-left: 15%;
`

StyledImg.defaultProps = {
    src: Me,
    alt: "Ruan Heleno - Dev",
    title: "Ruan Heleno - Dev"
};

export const StyledDiv = styled.div`
    margin: 0 3% 0 3%;
    font-size: 2rem;
    animation-duration: 1.5s;
`

export const StyledText = styled.h3`
    text-align: center;
    font-size: 3rem;
    padding-bottom: 5%;
`

export const StyledSpan = styled.span`
    color: red;
`

export const StyledFoot = styled.span`
    font-size: 1.3rem;
`

export const StyledText2 = styled.div` 
    font-size: 1.6rem;
    margin: 0 3% 0 3%;
    animation-duration: 1.5s;
`