import styled from 'styled-components';
import { MDBCard, MDBCardTitle} from 'mdb-react-ui-kit';

export const StyledContent = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const StyledMDBCard = styled(MDBCard)`
    max-width: 25%;
    background: #FFE4C4;
    margin: 2% 5% 0 0;
`

export const StyledMDBTitle = styled(MDBCardTitle)`
    text-align: center;
    text-transform: uppercase;
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
`

export const StyledLink = styled.a`
    color: inherit;
    text-decoration: none;

    &: hover {
        color: inherit;
    }
`