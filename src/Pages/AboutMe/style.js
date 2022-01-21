import styled from 'styled-components';
import Me from '../../Assets/Images/EuSerio.jpg'

export const StyledAboutMe = styled.div`
    width: 82vw;
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
    width: 90%;
    height: auto;
    margin: 5% 0 0 10%;
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

export const StyledFoot = styled.div`
    font-size: 1.3rem;
    margin-top: 5%;
`

export const StyledText2 = styled.div` 
    font-size: 1.6rem;
    margin: 5% 3% 0 3%;
    animation-duration: 1.5s;
`