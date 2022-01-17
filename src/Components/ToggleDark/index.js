import React, { useState, useEffect } from 'react';

import { StyledDarkModeToggle } from './style'

export default function ToggleDark(props) {
  const [isDarkMode, setIsDarkMode] = useState(() => true);

  useEffect(() => {
    switch(isDarkMode) {
      case(true): case(false):
        return props.toggleDark()
      default:
        break;
    }
  }, [isDarkMode]);

  return (
    <StyledDarkModeToggle
      checked={isDarkMode}
      onChange={setIsDarkMode}
      size={80}
    />
  );
}