import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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
          <div className="container" style={{ margin: "0px", padding: "0px" }}>
            <div className="row" style={{ margin: "0px", padding: "0px" }}>
              <div className="col" style={{ margin: "0px", padding: "0px" }}> <Menu /> </div>
              <div className="col-9" style={{ margin: "0px", padding: "0px" }}> <RoutesNav /> </div>
            </div>
          </div>
        </ThemeContextWrapper>
    </Router>
  );
}

export default App;