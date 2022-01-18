import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import WebFont from 'webfontloader';

import GlobalStyle from './Theme/global';
import ThemeContextWrapper from './Theme/themeContextWrapper';
import Menu from './Components/Menu';
import RoutesNav from './Routes';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Dancing Script', 'EB Garamond']
      }
    });
   }, []);

  return (
    <Router>
        <ThemeContextWrapper>
          <GlobalStyle />
          <Container fluid style={{paddingRight: "-15px", paddingLeft: "-15px"}}>
            <Row style={{paddingRight: "-15px", paddingLeft: "-15px"}}>
              <Col style={{paddingRight: "-15px", paddingLeft: "-15px"}}> <Menu /> </Col>
              <Col style={{paddingRight: "-15px", paddingLeft: "-15px"}}> <RoutesNav /> </Col >
            </Row>
          </Container>
        </ThemeContextWrapper>
    </Router>
  );
}

export default App;