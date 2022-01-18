import React from 'react';
import { StyledAboutMe, StyledImg, StyledP, StyledH,  } from './style';

export default function AboutMe() {
  return (
      <StyledAboutMe>
        <StyledImg className="animate__animated animate__fadeIn"/>
        <StyledP className="animate__animated animate__fadeInRightBig">
          <StyledH>Programador apaixonado</StyledH> <br />
        

          Ser desenvolvedor é uma viagem onde a próxima parada é a solução de um problema.
        </StyledP>
      </StyledAboutMe>
  );
}