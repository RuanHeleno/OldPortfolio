import React, { useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import WebFont from 'webfontloader';

import GlobalStyle from './Theme/global';
import Menu from './Components/Menu';
import Page from './Pages';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Dancing Script', 'EB Garamond', 'Roboto Condensed']
      }
    });
   }, []);

  return (
    <Router>
        <GlobalStyle />
        <div className="container-fluid" style={{ margin: "0px", padding: "0px" }}>
          <div className="row" style={{ margin: "0px", padding: "0px" }}>
            <div className="col" style={{ margin: "0px", padding: "0px" }}> <Menu /> </div>
          </div>
          <div className="row" style={{ margin: "0px", padding: "0px" }}>
            <div className="col" style={{ margin: "0px", padding: "0px" }}> <Page /> </div>
          </div>
        </div>
    </Router>
  );
}

export default App;