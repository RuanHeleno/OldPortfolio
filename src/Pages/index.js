import React from 'react';

import Home from './Home';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { StyledFooter, StyledLogo } from './style';

export default function Page() {
  return (
    <div>
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <StyledFooter className="container-fluid text-center">
          <div className="row">
            <div className="col-11 mt-2">
              &copy; Todos os direitos reservados. <br />
              Desenvolvido por <a href="https://github.com/RuanHeleno">Ruan Heleno</a>
            </div>
            <div className="col mt-2 pb-2"> <StyledLogo /> </div>
          </div>
        </StyledFooter>
    </div>
  );
}