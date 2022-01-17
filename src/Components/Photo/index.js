import React from 'react';
import { StyledImage, StyledBlockQuote } from './style';

export default function Photo() {
    return (
        <>
            <StyledImage className="animate__animated animate__fadeIn"/>
            <StyledBlockQuote className="animate__animated animate__fadeIn Quote">Ruan Heleno, <br />   Desenvolvedor Front-End.</StyledBlockQuote>
        </>
    );
}