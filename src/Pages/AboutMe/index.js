import React from 'react';
import {
  StyledContent,
  StyledTitle,
  StyledFoot
} from './style';

import Photo from '../../Components/Photo';

export default function AboutMe() {
  return (
    <div className=" container-fluid" id="aboutMe" style={{padding: "0", margin: "0"}}>
      <StyledTitle className="row">
        <div className="col mt-3 mb-3" style={{padding: "0", margin: "0"}}> Desenvolvedor Júnior </div>
      </StyledTitle>
      <div className="row mb-5"> 
        <div className="col text-center"> <Photo /> </div>
      </div>
      <StyledContent className="row mt-5 ms-5">
        <div className="col" style={{padding: "0", margin: "0"}}> 
          <ul>
            <li>Idade: 25 anos</li>
            <li>Técnico em Informática</li>
            <li>Bootcamps em Front-end e FullStack</li>
          </ul>
        </div>
        <div className="col" style={{padding: "0", margin: "0"}}>
          <ul>
            <li>Freelancer</li>
            <li>Bacharel em Sistemas de Informação</li>
            <li>Experiência Freelancer de 6 meses</li>
          </ul>
        </div>
      </StyledContent>
      <StyledFoot className="row mt-4 mb-5 text-center">
        <div className="col">
          Como um apaixonado pela programação, eu quero participar de grandes projetos ao longo da minha carreira.
        </div>
      </StyledFoot>
    </div>
  );
}