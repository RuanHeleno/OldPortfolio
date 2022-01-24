import styled from 'styled-components';

export const StyledContact = styled.div`
    margin-top: 10%;

    @media screen and (max-width: 599px) {
        margin-top: 18%;
    }

    @media screen and (min-width: 600px) {
        margin-top: 8%;
    }

    @media screen and (min-width: 900px) {
        margin-top: 5%;
    }

    @media screen and (min-width: 1200px) {
        margin-top: 3%;
    }

    .button {
        margin-top: 5%;
        display: inline-block;
        height: 35%;
        line-height: 40px;
        padding-right: 2%;
        padding-left: 5%;
        position: relative;
        background-color:rgb(0,0,0);
        color:rgb(255,255,255);
        text-decoration: none;
        text-transform: none
        letter-spacing: 1px;
        text-shadow:1px 1px 0px rgba(0,0,0,0.5);

        @media screen and (max-width: 599px) {
            width: 80%;
            height: 15%;
            margin-right: 5%;
        }

        @media screen and (min-width: 600px) {
            width: 80%;
            height: 12%;
            margin-top: 5%;
        }

        @media screen and (min-width: 900px) {
            width: 30%;
            height: 30%;
            padding-top: 1%;
            margin-top: 5%;
            margin-right: 3%;
        }

        @media screen and (min-width: 900px) {
            width: 30%;
            height: 30%;
            padding-top: 1%;
            margin-top: 5%;
            margin-right: 3%;
        }

        @media screen and (min-width: 1200px) {
            width: 18%;
            height: 50%;
            margin-top: 5%;
            margin-right: 1%;
        }
    }
      
    .button:hover{
        text-decoration: none;
        color: #fff;
        text-shadow: none;
    }

    .button span {
        position: absolute;
        text-align: center;
        left: 0;
        width: 30%;
        font-size: 2rem;
        -webkit-border-top-left-radius: 5px;
        -webkit-border-bottom-left-radius: 5px;
        -moz-border-radius-topleft: 5px;
        -moz-border-radius-bottomleft: 5px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border-right: 1px solid  rgba(0,0,0,0.15);
        text-decoration: none;

        @media screen and (max-width: 599px) {
            position: relative;
            width: 100%;
        }

        @media screen and (min-width: 600px) {
            width: 30%;
            font-size: 3rem;
        }
    }

    .button p {
        @media screen and (max-width: 599px) {
            display: none;
        }

        @media screen and (min-width: 600px) {
            font-size: 2rem;
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

    .button.whatsapp{
        background: green;
    }
`

export const StyledTitle = styled.h3`
    text-align: center;
    font-size: 2.5rem;
    margin-top: 2%;

    @media screen and (min-width: 600px) {
        font-size: 3rem;
        margin-right: 3%;
    }

    @media screen and (min-width: 900px) {
        font-size: 4rem;
    }
`

export const StyledContent = styled.div`
    text-align: center;

    @media screen and(max-width: 599px) {
        margin-top: 5%;
    }

    @media screen and (min-width: 1200px) {
        margin-top: 1%;
    }
`

export const StyledContent2 = styled.div`
    text-align: center;
    font-size: 2rem;
    margin-top: 10%;

    @media screen and(max-width: 599px) {
        margin-top: 15%;
    }

    @media screen and (min-width: 600px) {
       font-size: 2.5rem;
    }

    @media screen and (min-width: 1200px) {
        margin-top: 4%;
    }
`

export const StyledP = styled.p`
    text-align: center;
    font-size: 2rem;
    border-top: 1px solid black;
    padding-top: 1%;

    @media screen and (min-width: 600px) {
        font-size: 2.5rem;
     }
`

export const StyledForm = styled.form`
    margin-top: 3%;

    @media screen and (max-width: 599px) {
        margin-right: 5%;
    }

    @media screen and (min-width: 600px) {
        margin-right: 3%;
        font-size: 2rem;
    }

    @media screen and (min-width: 900px) {
        font-size: 2rem;
    }
`

export const StyledButton = styled.button`
    margin-top: 1%;
    right: 0;

    @media screen and (max-width: 599px) {
        margin-bottom: 10%;
        margin-top: 5%;
    }

    @media screen and (min-width: 600px) {
        margin-bottom: 10%;
        margin-top: 3%;
        font-size: 2rem;
    }

    @media screen and (min-width: 1200px) {
        margin-bottom: 5%;
    }
` 