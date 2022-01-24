import React from 'react';
import { bool, func } from 'prop-types';

import { StyledToggle } from './style';

export default function ToggleMenu({ open, setOpen }) {
  return (
    <StyledToggle open={open} onClick={() => setOpen(!open)}>
      <div className="ToggleMenu" />
      <div className="ToggleMenu" />
      <div className="ToggleMenu" />
    </StyledToggle>
  )
}

ToggleMenu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};