import  Logo  from '../assets/Logo.svg';

export const Footer = () => {
    return(
    <>
        <footer id="footer">
            <div className="container_logo">
                <img className='img_footer' src={Logo} alt="Little lemon logo" />
            </div>
            <p className="text">Little Lemon 2023 | Made by Jose Feregrino</p>
        </footer>
    </>
    )
}