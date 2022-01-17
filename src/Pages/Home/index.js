import React, { useState } from 'react';
import { 
  StyledHome, 
  StyledHead, 
  StyledDiv,
  StyledSpan,
  StyledIcons,
  StyledQuote, 
  StyledFigCaption 
} from './style';

export default function Home() {
  let initialText = "Aqui tem um pouco sobre cada tecnologia que já programei e a sua respectiva experiência profissional";
  let initialText2 = "- Passe o mouse por cima dos cards para ler sobre";
  const [text, setText] = useState(initialText);
  const [text2, setText2] = useState(initialText2);
  const onChange = (text, text2) => {
    setText(text);
    setText2(text2);
  }

  return (
    <StyledHome className="BackgroundHome">
      <StyledHead>Sejam Bem-Vindos!</StyledHead>
      <StyledDiv>
        <StyledSpan className="Knowledge">
          {text}
          <br /><br />
          {text2}
        </StyledSpan>
        <StyledIcons 
          onMouseOver={() => onChange('Larry', '1 ano')}
          onMouseLeave={() => onChange(initialText, initialText2)}
        />
      </StyledDiv>
      <StyledQuote>
        <q> Tudo o que a mente humana pode conceber, ela pode conquistar. </q>
        <StyledFigCaption> &mdash; Napoleon Hill </StyledFigCaption>
      </StyledQuote>
    </StyledHome>
  );
}