import React from 'react';
import { StyledProjects, StyledTitle, StyledContent } from './style';

import Cards from '../../Components/CardsProjects';

export default function Projects() {
  return (
      <StyledProjects className="animate__animated animate__fadeIn container-fluid">
          <div className="row">
            <div className="col">
              <StyledTitle>Sobre meus projetos</StyledTitle>
            </div>
          </div>
          <StyledContent className="row">
            <div className="col">
              <Cards />
            </div>
          </StyledContent>
      </StyledProjects>
  );
}