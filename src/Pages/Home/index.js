import React from 'react';
import Typewriter from 'typewriter-effect';

import { 
  StyledHome, 
  StyledHead
} from './style';

export default function Home() {
  return (
    <StyledHome className="animate__animated animate__fadeIn">
      <StyledHead>
        Bem-vindos, eu sou Ruan Heleno!  <br />
        <Typewriter
          options={{
            loop: true
          }}
          onInit={(typewriter)=> {
            typewriter
            .pauseFor(500)
            .typeString('Desenvolvedor Front-End')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Aprendizado focado em Javascript e React JS')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Apaixonado por programação')
            .pauseFor(1000)
            .start();
          }}
        />
      </StyledHead>
    </StyledHome>
  );
}