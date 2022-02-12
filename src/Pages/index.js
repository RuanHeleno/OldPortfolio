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
        <StyledFooter className="mt-2 text-center">
          <p>
            &copy; Todos os direitos reservados. <br />
            Desenvolvido por <a href="https://github.com/RuanHeleno">Ruan Heleno</a>
          </p>
          <StyledLogo />
        </StyledFooter>
    </div>
  );
}