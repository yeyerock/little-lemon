import { Link } from 'react-router-dom';
import  HeroImg  from '../assets/hero_img.jpg';

export const Hero = () => {
    return(
    <>
        <section id="hero">
            <div className="container_left">
                <h1 className="title">Little Lemon</h1>
                <h2 className="subtitle">Chicago</h2>
                <p className="text">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className="cta"><Link className="description" to="/booking">Reserve a Table</Link></button>
            </div>
            <div className="container_right">
                <img className='img_hero' src={HeroImg} alt="" />
            </div>
        </section>
    </>
    )
}