import React, { useState }  from 'react';
import { SkillBars } from 'react-skills';

import javaScriptI from '../../Assets/Images/Icons/javaScript.png';
import reactI from '../../Assets/Images/Icons/react.png';
import dmI from '../../Assets/Images/Icons/dm.png';
import html5I from '../../Assets/Images/Icons/html5.png';
import css3I from '../../Assets/Images/Icons/css3.png';
import bootstrapI from '../../Assets/Images/Icons/bootstrap.png';
import nodejsI from '../../Assets/Images/Icons/nodejs.png';
import mysqlI from '../../Assets/Images/Icons/mySql.png';
import { 
  StyledSkills,
  StyledText,
  StyledContent,
  StyledSpan,
  StyledDivIcons,
  StyledIcons,
  StyledSkillsBar
} from './style';

export default function Skills() {
  let initialText = "Aqui tem um pouco sobre cada tecnologia que já programei."
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
      color: "Goldenrod"
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
    }
  ]

  const skillsData2 = [
    {
      name: "CSS3",
      level: 60,
      color: "MediumSeaGreen"
    },
    {
      name: "Bootstrap",
      level: 23,
      color: "Sienna"
    },
    {
      name: "Node.js",
      level: 21,
      color: "Chocolate"
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
        <div className="animate__animated animate__fadeInDown col">
          <StyledText> Sobre minhas habilidades </StyledText>
        </div>
      </div>
      <StyledContent className="animate__animated animate__fadeIn row">
        <div className="col">
          <StyledSpan>
            {text}
            <br /><br />
            {text2}
          </StyledSpan>
        </div>
        <StyledDivIcons className="col">
          <StyledIcons src={javaScriptI} alt="Ícone da Linguagem JavaScript" title="JavaScript"
            onMouseOver={() => onChange('JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.', '')}
            onMouseLeave={() => onChange(initialText, initialText2)}
          />
          <StyledIcons src={reactI} alt="Ícone da biblioteca React js" title="React js"
            onMouseOver={() => onChange('React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam.', '')}
            onMouseLeave={() => onChange(initialText, initialText2)}
          />
          <StyledIcons src={dmI} alt="Ícone da Linguagem Dream Maker" title="Dream Maker"
            onMouseOver={() => onChange('Linguagem estruturada voltada para a criação de jogos simples, como o 2D e através de pixel art.', '')}
            onMouseLeave={() => onChange(initialText, initialText2)}
          />
          <StyledIcons src={html5I} alt="Ícone da Linguagem HTML5" title="HTML5"
            onMouseOver={() => onChange('HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet. É a quinta versão da linguagem HTML', '')}
            onMouseLeave={() => onChange(initialText, initialText2)}
          /> <br />
          <StyledIcons src={css3I} alt="Ícone da Linguagem CSS3" title="CSS3"
            onMouseOver={() => onChange('CSS3 é a terceira mais nova versão das famosas Cascading Style Sheets, pela qual se define estilos para um projeto web. Com efeitos de transição, imagem, imagem de fundo/background e outros, pode-se criar estilos únicos para seus projetos web.', '')}
            onMouseLeave={() => onChange(initialText, initialText2)}
          />
          <StyledIcons src={bootstrapI} alt="Ícone da Linguagem Bootstrap" title="Bootstrap"
            onMouseOver={() => onChange('Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript.', '')}
            onMouseLeave={() => onChange(initialText, initialText2)}
          />
          <StyledIcons src={nodejsI} alt="Ícone da Linguagem Node Js" title="Node Js"
            onMouseOver={() => onChange('O Node. js se caracteriza como um ambiente de execução JavaScript. Com ele, o usuário pode criar aplicações sem depender do browser para isso. Com alta capacidade de escalabilidade, boa flexibilidade, arquitetura e baixo custo, torna-se uma ótima opção para programação.', '')}
            onMouseLeave={() => onChange(initialText, initialText2)}
          />
          <StyledIcons src={mysqlI} alt="Ícone da Linguagem MySQL" title="MySQL"
            onMouseOver={() => onChange('O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.', '')}
            onMouseLeave={() => onChange(initialText, initialText2)}
          />
        </StyledDivIcons>
      </StyledContent>
      <StyledSkillsBar className="row"> 
        <div className="col">
          <SkillBars skills={skillsData} flat duration={1} levelProgress />
        </div>
        <div className="col">
          <SkillBars skills={skillsData2} flat duration={1} levelProgress />
        </div>
      </StyledSkillsBar>
    </StyledSkills>
  );
}