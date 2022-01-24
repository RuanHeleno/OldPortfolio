import React, { useState } from 'react';
import { bool, func } from 'prop-types';

import { StyledMenu  } from './style';
import { ThemeContext, themes } from '../../Theme/themeContext';
import Photo from '../Photo';
import Buttons from '../Buttons';
import ToggleDark from '../ToggleDark';
import SocialLinks from '../Social';

export default function Menu({ open}) {
    const [darkMode, setDarkMode] = useState(false);
    
    return (
        <StyledMenu className="Menu" open={open}>
            <center>
                <Photo />
                <Buttons/>
                <ThemeContext.Consumer>
                    {({ changeTheme }) => (
                        <ToggleDark
                            toggleDark={() => {
                                setDarkMode(!darkMode);
                                changeTheme(darkMode ? themes.dark : themes.light);
                            }}
                        />
                    )}
                </ThemeContext.Consumer>
            </center>
            <SocialLinks />
        </StyledMenu>
    );
}

Menu.propTypes = {
    open: bool.isRequired,
    darkMode: bool.isRequired,
    setDarkMode: func.isRequired
  };