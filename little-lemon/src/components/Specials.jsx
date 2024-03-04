import  GreekSalad  from '../assets/greek_salad.jpg';
import  Bruchetta  from '../assets/bruchetta.svg';
import  LemonDessert  from '../assets/lemon_dessert.jpg';

export const Specials = () => {
    return(
    <>
        <section id="specials">
            <div className="container">
                <h1 className="title">This week specials!</h1>
                <div className="cta_container">
                    <button className="cta description">Online Menu</button>
                </div>
                <div className="cards_container">
                    <div className='card'>
                        <div className="card_img">
                            <img src={GreekSalad} alt="Greek Salad" />
                        </div>
                        <div className="card_title">
                            <span className="description">
                                Greek salad
                            </span>
                            <span className="description">
                                $12.99
                            </span>
                        </div>
                        <div className="card_description">
                            <p className="text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        </div>
                        <div className="card_cta">
                            <button className="description">Order a delivery</button>                            
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card_img">
                            <img src={Bruchetta} alt="" />
                        </div>
                        <div className="card_title">
                            <h4 className="description">
                                Bruchetta
                            </h4>
                            <span className="description">
                                $5.99
                            </span>
                        </div>
                        <div className="card_description">
                            <p className="text">
                            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. 
                            </p>
                        </div>
                        <div className="card_cta">
                        <button className="description">Order a delivery</button>         
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card_img">
                            <img src={LemonDessert} alt="" />
                        </div>
                        <div className="card_title">
                            <h4 className="description">
                                Lemon Dessert
                            </h4>
                            <span className="description">
                                $5.00
                            </span>
                        </div>
                        <div className="card_description">
                            <p className="text">
                            This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                            </p>
                        </div>
                        <div className="card_cta">
                        <button className="description">Order a delivery</button>         
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}