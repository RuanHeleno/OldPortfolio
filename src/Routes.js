import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Knowledges from './Pages/Knowledges';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

export default function RoutesNav() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Knowledges" element={<Knowledges />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
        </Routes>
    )
}