import React, { useReducer } from "react";
import { Booking } from './components/Booking';
import {Header} from './components/Header'
import './App.css'

export const App = () => {
    return (
        <div>
            <Header />
            <Booking />
        </div>
    );
};

