import React from 'react';
import { StyledTitle, StyledContent } from './style';

import Cards from '../../Components/CardsProjects';

export default function Projects() {
  return (
      <div className="animate__animated animate__fadeIn container-fluid" id="projects">
          <div className="row">
            <div className="col mt-2">
              <StyledTitle>Meus projetos</StyledTitle>
            </div>
          </div>
          <StyledContent className="row">
            <div className="col-sm col-md col-sl col-xl mb-5">
              <Cards />
            </div>
          </StyledContent>
      </div>
  );
}