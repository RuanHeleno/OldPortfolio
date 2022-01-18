import React from 'react';

import { StyledMenu } from './style'
import { ThemeContext, themes } from '../../Theme/themeContext';
import ToggleDark from '../../Components/ToggleDark';
import Buttons from '../Buttons';
import Photo from '../Photo';

export default function Menu() {
    const [darkMode, setDarkMode] = React.useState(true);

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
        </StyledMenu>
    );
}