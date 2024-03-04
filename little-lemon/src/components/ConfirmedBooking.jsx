export const ConfirmedBooking = ({ isOpen, onClose }) => {
    return (
        <>
            {isOpen && ( 
                <section id="confirmation">
                    <h1 className="title">Thanks for your reservation!</h1>
                    <p className="text">Your reservation has been successfully submitted.</p>
                    <button className="cta description" onClick={onClose}>Close dialog</button> 
                </section>
            )}
        </>
    )
}