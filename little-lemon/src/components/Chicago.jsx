import  ChicagoImg  from '../assets/chicago.jpg';

export const Chicago = () => {
    return(
        <>
            <section id="chicago">
            <div className="container_left">
                <h1 className="title">Little Lemon</h1>
                <h2 className="subtitle">Chicago</h2>
                <p className="text">Little Lemon is a cozy and vibrant restaurant located in the heart of Chicago. With modern and elegant decor, this restaurant is known for its relaxed atmosphere and delicious cuisine inspired by the fusion of international flavors with fresh local ingredients.</p>
            </div>
            <div className="container_right">
                <img className='img_hero' src={ChicagoImg} alt="" />
            </div>
        </section>
        </>

    )
}