import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Projects from './Pages/Projects';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';

export default function RoutesNav() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
    )
}