import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import WebFont from 'webfontloader';

import ToggleMenu from './Components/ToggleMenu';
import GlobalStyle from './Theme/global';
import ThemeContextWrapper from './Theme/themeContextWrapper';
import Menu from './Components/Menu';
import RoutesNav from './Routes';

function App() {
  const [open, setOpen] = useState(false);

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
          <div className="container-fluid" style={{ margin: "0px", padding: "0px" }}>
            <div className="row" style={{ margin: "0px", padding: "0px" }}>
              <div className="col-sm-1 col-md-1 col-sl-1 col-xl-1" style={{ margin: "0px", padding: "0px", width: "0%" }}>
                <ToggleMenu open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} /> 
              </div>
              <div className="col-sm col-md col-sl col-xl" style={{ margin: "0px", padding: "0px" }}> 
                <RoutesNav /> 
              </div>
            </div>
          </div>
        </ThemeContextWrapper>
    </Router>
  );
}

export default App;