import React, { useEffect } from 'react';
import GlobalStyle from './Theme/global';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';

import ThemeContextWrapper from './Theme/themeContextWrapper';
import Menu from './Components/Menu';
import RoutesNav from './Routes';

function App() {
  return (
    <Router>
        <ThemeContextWrapper>
          <GlobalStyle />
          <Container fluid style={{paddingRight: "-15px;", paddingLeft: "-15px;"}}>
            <Row style={{paddingRight: "-15px;", paddingLeft: "-15px;"}}>
              <Col style={{paddingRight: "-15px;", paddingLeft: "-15px;"}}> <Menu /> </Col>
              <Col style={{paddingRight: "-15px;", paddingLeft: "-15px;"}}> <RoutesNav /> </Col >
            </Row>
          </Container>
        </ThemeContextWrapper>
    </Router>
  );
}

export default App;