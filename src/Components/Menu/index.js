import React from 'react';

import { StyledMenu, StyledLogo } from './style';
import Buttons from '../Buttons';
import SocialLinks from '../Social';

export default function Menu() {
    return (
        <>
            <StyledMenu className="container-fluid animate__animated animate__fadeIn" 
            style={{ padding: '0px' }}>
                <div className="row">
                    <div className="col ms-2"> <StyledLogo /> </div>
                    <div className="col me-sl-5 me-xl-5 mt-2"> <Buttons /> </div>
                </div>
            </StyledMenu>
            <SocialLinks />
        </>
    );
}