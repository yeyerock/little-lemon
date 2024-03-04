import React, { useReducer } from "react";
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Specials } from "./components/Specials";
import { Testimonials } from "./components/Testimonials";
import { Chicago } from "./components/Chicago";
import { Footer } from "./components/Footer";
import './App.css'



export const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Specials />
            <Testimonials />
            <Chicago/>
            <Footer />
        </div>
    );
};

