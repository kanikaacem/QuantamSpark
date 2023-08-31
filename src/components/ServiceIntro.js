import { Container } from "react-bootstrap";
const ServiceIntro = () => {
    return (
        <Container className='row d-flex
        justify-content-center pt-5 pb-5' style={{ minHeight: '500px', margin: '0 auto' }}>
            <div className="col-md-5 col-12 p-0">
                <img src="https://quantum4u.in/img/home3/ui-design.jpg" width="100%" alt="QuantamImage" />
            </div>
            <div className="home-shadow-div col-md-7 col-12 px-5" style={{ fontSize: "20px" }}>
                <p>App owners often struggle with finding reliable, creative partners that
                    can help them build app identity, keep your users engaged & take their
                    app install campaigns to the next level. That's where we come in;
                    our experienced design team can take care of all your creative needs under one roof.</p>
                <p style={{ marginTop: "100px" }}>
                    It doesn't matter how good your website or app is if it does not look aesthetically
                    pleasing to the eye. We aim to build app UIs and creative assets that speak to
                    users. We put equal emphasis on ease of use as we do on the design because every
                    app should be easy to operate.
                </p>
            </div>

        </Container>
    )
}

export default ServiceIntro;