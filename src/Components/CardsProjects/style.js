import styled from 'styled-components';
import { MDBCard, MDBCardText, MDBCardTitle} from 'mdb-react-ui-kit';

export const StyledContent = styled.div`
    animation-duration: 4s;
`

export const StyledMDBCard = styled(MDBCard)`
    background: #334756;
    margin-bottom: 5%;
    margin-right: 3%;
`

export const StyledMDBTitle = styled(MDBCardTitle)`
    text-align: center;
    text-transform: uppercase;
    font-size: 1.7rem;

    @media screen and (max-width: 599px) {
        font-size: 1.4rem;
    }

    @media screen and (min-width: 900px) {
        
    }
`

export const StyledMDBText = styled(MDBCardText)`
    font-size: 1.4rem;

    @media screen and (max-width: 599px) {
        font-size: 1.2rem;
    }

    @media screen and (min-width: 900px) {
        
    }
`

export const StyledDiv = styled.div`
    display: flex;
    justify-content: space-around;
`

export const StyledButton = styled.button`
    background: green;
    border: 0;
    font-size: 1.5em;
    color: white;
    width: 35%;
    transition: .3s all ease-in-out;

    &:hover {
        background: darkgreen;
        transition: .3s all ease-in-out;
    }

    @media screen and (min-width: 600px) {
        
    }

    @media screen and (min-width: 900px) {
        
    }
`

export const StyledLink = styled.a`
    color: inherit;
    text-decoration: none;

    &: hover {
        color: inherit;
    }
`