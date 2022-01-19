import React, { useState }  from 'react';
import { SkillBars } from 'react-skills';

import { 
  StyledSkills,
  StyledText,
  StyledDiv,
  StyledSpan,
  StyledIcons,
  StyledSkillsBar
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

  const skillsData = [
    {
      name: "Javascript",
      level: 87,
      color: "#F0E68C"
    },
    {
      name: "React",
      level: 78,
      color: "LightSkyBlue"
    },
    {
      name: "DM",
      level: 73,
      color: "Purple"
    },
    {
      name: "HTML5",
      level: 61,
      color: "DarkRed"
    },
    {
      name: "CSS3",
      level: 60
    },
    
  ]

  const skillsData2 = [
    {
      name: "Bootstrap",
      level: 23,
      color: "#F0E68C"
    },
    {
      name: "MySQL",
      level: 18,
      color: "blue"
    },
  ]

  return (
    <StyledSkills className="container-fluid">
      <div className="row">
          <div className="col">
          <StyledText className="animate__animated animate__fadeInDownBig">
            Sobre minhas habilidades
          </StyledText>
        </div>
      </div>
      <StyledDiv className="row">
        <div className="col">
          <StyledSpan>
            {text}
            <br /><br />
            {text2}
          </StyledSpan>
        </div>
        <div className="col">
          <StyledIcons 
            onMouseOver={() => onChange('Linguagem de marcação utilizada pra criação de páginas Web', '1 ano')}
            onMouseLeave={() => onChange(initialText, initialText2)}
          />
        </div>
      </StyledDiv>
      <StyledSkillsBar>
        <div className="row">
          <div className="col">
            <SkillBars skills={skillsData} flat duration={1} levelProgress />
          </div>
          <div className="col">
            <SkillBars skills={skillsData2} flat duration={1} levelProgress />
          </div>
        </div>
      </StyledSkillsBar>
    </StyledSkills>
  );
}