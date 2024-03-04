import { useState } from 'react';
import { Link } from 'react-router-dom';
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
                    <li className="description"><Link to="/">Home</Link></li>
                    <li className="description"><Link to="/">About</Link></li>
                    <li className="description"><Link to="/menu">Menu</Link></li>
                    <li className="description"><Link to="/booking">Reservations</Link></li>
                    <li className="description"><Link to="/">Order Online</Link></li>
                    <li className="description"><Link to="/">Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}