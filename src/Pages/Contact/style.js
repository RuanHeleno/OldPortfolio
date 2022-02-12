import styled from 'styled-components';

export const StyledContact = styled.div`
    background: #334756;

    .button {
        display: inline-block;
        line-height: 200%;
        padding-right: 2%;
        padding-left: 5%;
        margin-right: 1%;
        position: relative;
        background-color:rgb(0,0,0);
        color: inherit;
        text-decoration: none;
        text-transform: none;
        letter-spacing: 1px;
        text-shadow:1px 1px 0px rgba(0,0,0,0.5);
        height: 100%;
        width: 16%;
        padding-top: 1%;
        transition: .3s all ease-in-out;

        @media screen and (max-width: 599px) {
            width: 80%;
            height: 20%;
            margin-bottom: 5%;
        }

        @media screen and (min-width: 600px) {
            width: 50%;
            height: 20%;
            margin-bottom: 2%;
        }

        @media screen and (min-width: 1200px) {
            width: 20%;
            height: 70%;
            margin-bottom: 2%;
        }
    }
      
    .button:hover {
        color: darkgray;
        transition: .3s all ease-in-out;
    }

    .button span {
        position: absolute;
        text-align: center;
        left: 0;
        font-size: 2.5rem;
        width: 30%;
        border-right: 1px solid white;
        text-decoration: none;

        @media screen and (max-width: 599px) {
            position: relative;
            width: 100%;
            border: none;
        }
    }

    .button p {
        font-size: 1.5rem;
        text-align: center;

        @media screen and (max-width: 599px) {
            display: none;
        }
    }

    .button.linkedin {
        background: #0e76a8;
    }

    .button.instagram{
        background: #ea4c89;
    }

    .button.github{
        background: #171515;
    }

    .button.email{
        background: red;
    }
`

export const StyledTitle = styled.h1`
    text-align: center;
    font-size: 2.5rem;
    margin-top: 2%;

    @media screen and (max-width: 599px) {
        font-size: 2rem;
    }

    @media screen and (min-width: 900px) {
        font-size: 2rem;
    }
`

export const StyledContent = styled.div`
    text-align: center;

    @media screen and(max-width: 599px) {
        
    }

    @media screen and (min-width: 1200px) {
        
    }
`

export const StyledContent2 = styled.div`
    text-align: center;
    font-size: 2rem;

    @media screen and(max-width: 599px) {
        
    }

    @media screen and (min-width: 600px) {
       
    }

    @media screen and (min-width: 1200px) {
        
    }
`

export const StyledP = styled.p`
    text-align: center;
    font-size: 2rem;
    border-top: 1px solid black;

    @media screen and (min-width: 600px) {
        
    }
`

export const StyledForm = styled.form`
    font-size: 1.3rem;

    @media screen and (max-width: 599px) {
        
    }

    @media screen and (min-width: 600px) {
        
    }

    @media screen and (min-width: 900px) {
        
    }
`

export const StyledButton = styled.button`
    font-size: 1.5rem;

    @media screen and (max-width: 599px) {
        
    }

    @media screen and (min-width: 600px) {
        
    }

    @media screen and (min-width: 1200px) {
        
    }
` 