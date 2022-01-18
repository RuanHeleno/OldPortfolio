import React, { useState }  from 'react';
import { 
  StyledSkills, 
  StyledDiv,
  StyledSpan,
  StyledIcons, 
} from './style';

export default function Skills() {
  let initialText = "Aqui tem um pouco sobre cada tecnologia que já programei e a sua respectiva experiência profissional";
  let initialText2 = "- Passe o mouse por cima dos cards para ler sobre";
  const [text, setText] = useState(initialText);
  const [text2, setText2] = useState(initialText2);
  const onChange = (text, text2) => {
    setText(text);
    setText2(text2);
  }

  return (
      <StyledSkills>
          <StyledDiv>
            <StyledSpan className="Knowledge">
              {text}
              <br /><br />
              {text2}
            </StyledSpan>
            <StyledIcons 
              onMouseOver={() => onChange('Linguagem de marcação utilizada pra criação de páginas Web', '1 ano')}
              onMouseLeave={() => onChange(initialText, initialText2)}
            />
          </StyledDiv>
      </StyledSkills>
  );
}