import React from 'react';
import { SkillBars } from 'react-skills';

/* import javaScriptI from '../../Assets/Images/Icons/javaScript.png';
import reactI from '../../Assets/Images/Icons/react.png';
import dmI from '../../Assets/Images/Icons/dm.png';
import html5I from '../../Assets/Images/Icons/html5.png';
import css3I from '../../Assets/Images/Icons/css3.png';
import bootstrapI from '../../Assets/Images/Icons/bootstrap.png';
import nodejsI from '../../Assets/Images/Icons/nodejs.png';
import mysqlI from '../../Assets/Images/Icons/mySql.png'; */
import { 
  StyledSkills,
  StyledText,
  StyledSkillsBar
} from './style';

export default function Skills() {
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
    <StyledSkills className="container-fluid" id="skills">
      <div className="row">
        <div className="col">
          <StyledText className="mt-2"> Minhas habilidades </StyledText>
        </div>
      </div>
      <StyledSkillsBar className="animate__animated animate__fadeIn row mt-5"> 
        <div className="col-sm-12 col-md-12 col-sl col-xl">
          <SkillBars skills={skillsData} flat duration={1} levelProgress />
        </div>
        <div className="col-sm-12 col-md-12 col-sl col-xl mb-5">
          <SkillBars skills={skillsData2} flat duration={1} levelProgress />
        </div>
      </StyledSkillsBar>
    </StyledSkills>
  );
}