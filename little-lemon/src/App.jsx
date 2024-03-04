import React, { useReducer } from "react";
import { Booking } from './components/Booking';
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import './App.css'
import { Footer } from "./components/Footer";

export const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Booking />
            <Footer />
        </div>
    );
};

