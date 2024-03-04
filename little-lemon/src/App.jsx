import React, { useReducer } from "react";
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Specials } from "./components/Specials";
import { Footer } from "./components/Footer";
import './App.css'


export const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Specials />
            <Footer />
        </div>
    );
};

