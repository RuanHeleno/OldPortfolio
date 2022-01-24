import styled from 'styled-components';
import { MDBCard, MDBCardText, MDBCardTitle} from 'mdb-react-ui-kit';

export const StyledContent = styled.div`
    @media screen and (max-width: 599px) {
        width: 360%;
    }

    @media screen and (min-width: 600px) {
        width: 360%;
    }

    @media screen and (min-width: 900px) {
        margin-left: 3%;
    }
`

export const StyledMDBCard = styled(MDBCard)`
    max-width: 25%;
    background: #FFE4C4;
    margin: 2% 5% 0 0;

    @media screen and (max-width: 599px) {
        margin-bottom: 5%;
    }

    @media screen and (min-width: 600px) {
        margin-bottom: 1%;
    }

    @media screen and (min-width: 1800px) {
        margin-bottom: 0;
    }
`

export const StyledMDBTitle = styled(MDBCardTitle)`
    text-align: center;
    text-transform: uppercase;

    @media screen and (min-width: 600px) {
        font-size: 2rem;
    }

    @media screen and (min-width: 900px) {
        font-size: 3rem;
    }
`

export const StyledMDBText = styled(MDBCardText)`
    @media screen and (min-width: 600px) {
        font-size: 2rem;
    }

    @media screen and (min-width: 900px) {
        font-size: 2.5rem;
    }
`

export const StyledDiv = styled.div`
    display: flex;
    justify-content: space-around;
`

export const StyledButton = styled.button`
    background: green;
    border: 0;
    font-size: 1.2rem;
    color: white;
    width: 35%;

    &:hover {
        background: darkgreen; 
    }

    @media screen and (min-width: 600px) {
        font-size: 1.6rem;
    }

    @media screen and (min-width: 900px) {
        font-size: 2rem;
    }
`

export const StyledLink = styled.a`
    color: inherit;
    text-decoration: none;

    &: hover {
        color: inherit;
    }
`