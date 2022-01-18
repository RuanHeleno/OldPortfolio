import React, { useState } from 'react';

import { StyledMenu  } from './style';
import { ThemeContext, themes } from '../../Theme/themeContext';
import Photo from '../Photo';
import Buttons from '../Buttons';
import ToggleDark from '../ToggleDark';
import SocialLinks from '../Social';

export default function Menu() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <StyledMenu className="Menu">
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