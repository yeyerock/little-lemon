import  Star  from '../assets/star.png';
import  Avatar1  from '../assets/avatar_1.png';
import  Avatar2  from '../assets/avatar_2.png';
import  Avatar3  from '../assets/avatar_3.png';

export const Testimonials = () => {
    return(
    <>
        <section id="testimonials">
            <div className="container">
                <h1 className="title">Testimonials</h1>
                <div className="cards_container">
                    <div className='card'>
                        <div className="card_rating">
                            <img src={Star} />
                            <img src={Star} />
                            <img src={Star} />
                            <img src={Star} />
                            <img src={Star} />
                        </div>
                    <div className="card_user">
                        <img src={Avatar1} alt="Miranda Keyes" />
                            <span className="description">
                                Miranda Keyes
                            </span>
                        </div>                       
                        <div className="card_description">
                            <p className="text">Excellent service I love it!</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card_rating">
                            <img src={Star} />
                            <img src={Star} />
                            <img src={Star} />
                            <img src={Star} />
                        </div>
                    <div className="card_user">
                        <img src={Avatar2} alt="Jhon Doe" />
                            <span className="description">
                                Jhon Doe
                            </span>
                        </div>                       
                        <div className="card_description">
                            <p className="text">The Bruchetta was delicious!</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card_rating">
                            <img src={Star} />
                            <img src={Star} />
                        </div>
                    <div className="card_user">
                        <img src={Avatar3} alt="Jhonson" />
                            <span className="description">
                                Jhonson
                            </span>
                        </div>                       
                        <div className="card_description">
                            <p className="text">I had a delay in my order!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}