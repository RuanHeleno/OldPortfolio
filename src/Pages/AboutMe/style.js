import styled from 'styled-components';
import Me from '../../Assets/Images/EuSerio.jpg'

export const StyledAboutMe = styled.div`
  
`

export const StyledTitle = styled.h1`
    text-align: center;
    font-size: 4rem;

    @media screen and (max-width: 599px) {
        font-size: 2.5rem;
        margin-top: 18%;
        margin-right: 2%;
        margin-left: 2%;
    }

    @media screen and (min-width: 600px) {
        margin-top: 10%;
        font-size: 3.1rem;
    }

    @media screen and (min-width: 900px) {
        margin-top: 5%;
        font-size: 3.5rem;
        margin-right: 2%;
    }

    @media screen and (min-width: 1200px) {
        margin-top: 3%;
        font-size: 4rem;
    }

`

export const StyledContent = styled.div`
    margin-top: 5%;

    @media screen and (max-width: 599px) {
        display: flex;
        justify-content: center;
        margin-left: 2%;
    }

    @media screen and (min-width: 600px) {
        display: flex;
        justify-content: center;
    }
`

export const StyledImg = styled.img`
    width: 90%;
    height: auto;
    margin: 5% 0 0 10%;

    @media screen and (max-width: 599px) {
        display: none;
    }

    @media screen and (min-width: 600px) {
        display: none;
    }

    @media screen and (min-width: 768px) {
        display: block;
    }

    @media screen and (min-width: 1800px) { 
        width: 70%;
    }
`

StyledImg.defaultProps = {
    src: Me,
    alt: "Ruan Heleno - Dev",
    title: "Ruan Heleno - Dev"
};

export const StyledText = styled.h3`
    text-align: center;
    font-size: 2.5rem;
    padding-bottom: 5%;

    @media screen and (min-width: 1200px) {
        margin-top: 5%;
    }

    @media screen and (min-width: 1800px) { 
        font-size: 3rem;
    }
`

export const StyledDiv = styled.div`
    margin: 0 3% 0 3%;
    font-size: 1.5rem;
    animation-duration: 1.5s;

    @media screen and (max-width: 599px) {
        font-size: 1.6rem;
    }

    @media screen and (min-width: 600px) {
        font-size: 2rem;
    }

    @media screen and (min-width: 900px) {
        margin-right: 4%;
    }

    @media screen and (min-width: 1200px) {
        margin-right: 0;
    }

    @media screen and (min-width: 1800px) {
        margin-right: 5%;
        font-size: 2.5rem;
    }
`

export const StyledSpan = styled.span`
    color: red;
`

export const StyledFoot = styled.div`
    font-size: 1.3rem;
    margin-top: 5%;

    @media screen and (min-width: 600px) {
        font-size: 1.7rem;
    }

    @media screen and (min-width: 1200px) {
        font-size: 1.8rem;
    }

    @media screen and (min-width: 1800px) {
        font-size: 2rem;
    }
`

export const StyledText2 = styled.div` 
    font-size: 1.6rem;
    margin: 5% 3% 0 3%;
    animation-duration: 1.5s;

    @media screen and (min-width: 600px) {
        font-size: 1.8rem;
    }

    @media screen and (min-width: 1200px) {
        font-size: 2rem;
    }

    @media screen and (min-width: 1800px) {
        font-size: 2.5rem;
    }
`