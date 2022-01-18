import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

export default function RoutesNav() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
    )
}