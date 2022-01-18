import React from 'react';
import Typewriter from 'typewriter-effect';

import { 
  StyledHome, 
  StyledHead,
  StyledQuote, 
  StyledFigCaption 
} from './style';

export default function Home() {
  return (
    <StyledHome>
      <StyledHead>
        Sejam Bem-Vindos, eu sou Ruan Heleno!  <br />
        <span>
          <Typewriter
            options={{
              loop: true
            }}
            onInit={(typewriter)=> {
              typewriter
              .typeString("Desenvolvedor Front-End")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Aprendizado focado em Javascript e React JS")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Apaixonado por programação")
              .start();
            }}
          />
        </span>
      </StyledHead>
      <StyledQuote>
        <q> Tudo o que a mente humana pode conceber, ela pode conquistar. </q>
        <StyledFigCaption> &mdash; Napoleon Hill </StyledFigCaption>
      </StyledQuote>
    </StyledHome>
  );
}