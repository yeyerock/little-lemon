import { useState } from 'react';
import  Logo  from '../assets/Logo.svg';

export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return(
        <nav id="navbar">
            <div className="logo_container">
                <img src={Logo} alt="" />
            </div>
            <div className="menu_container" onClick={toggleMenu}>
                <div className={`hamburger ${isOpen ? 'open' : ''}`}></div>
                <ul className={`menu_items ${isOpen ? 'open' : ''}`}>
                    <li className="description">Home</li>
                    <li className="description">About</li>
                    <li className="description">Menu</li>
                    <li className="description">Reservations</li>
                    <li className="description">Order Online</li>
                    <li className="description">Login</li>
                </ul>
            </div>
        </nav>
    )
}