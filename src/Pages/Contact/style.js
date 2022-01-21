import styled from 'styled-components';

export const StyledContact = styled.div`
    width: 80vw;
    margin: 1% 3% 0 3%;

    .button {
        margin: 5% 2% 0 1%;
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
`

export const StyledContent = styled.div`
    text-align: center;
`

export const StyledContent2 = styled.div`
    text-align: center;
    font-size: 2rem;
    margin-top: 10%;
`

export const StyledP = styled.p`
    text-align: center;
    font-size: 2rem;
    border-top: 1px solid black;
    padding-top: 1%;
`

export const StyledForm = styled.form`
    margin-top: 3%;
`

export const StyledButton = styled.button`
    margin-top: 1%;
    right: 0;
` 