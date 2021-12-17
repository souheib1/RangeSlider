import React from 'react';
import {BrowserRouter } from "react-router-dom"
//import SlideValue from './Components/SlideValue';
import Sliderr from './Components/Sliderr';

const app = () => {
    return (
        <BrowserRouter>
            <Sliderr />
        </BrowserRouter>

    );
};

export default app;