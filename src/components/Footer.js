import { Container, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
    const navigate = useNavigate();
    return (
        <section className="footer pt-5" style={{ background: "#242424", color: "#ffffff" }}>
            <Container className="row d-flex gap-4 justify-content-between pt-3 pb-3" style={{ margin: "0 auto" }}>
                <div className="col-md-2 col-12">
                    <a href="/" >
                        <img src="https://quantum4u.in/img/logo.png" width="130px" height="50px" alt="companyLogo" />
                    </a>
                    <h6 className="mt-3" style={{ fontWeight: "100" }}>Need an App or a Website?</h6>
                    <Button className='mt-3 website-button2 w-100' onClick={() => navigate('/contact-us')}>Contact us</Button>
                </div>
                <div className="col-md-2 col-12 d-flex flex-column gap-2">
                    <h4>About Us</h4>
                    <Link className="custom-link2" to="">Company</Link>
                    <Link className="custom-link2" to="">Careers</Link>
                    <Link className="custom-link2" to="">Android App Development</Link>
                    <Link className="custom-link2" to="">iPhone App Development</Link>
                    <Link className="custom-link2" to="">Portfolio</Link>
                </div>
                <div className="col-md-2 col-12 d-flex flex-column gap-2">
                    <h4>Help ?</h4>
                    <Link className="custom-link2" to="">Guides</Link>
                    <Link className="custom-link2" to="">Privacy Policy</Link>
                    <Link className="custom-link2" to="">Terms & Conditions</Link>
                    <Link className="custom-link2" to="">Eula</Link>
                </div>
                <div className="col-md-2 col-12 d-flex gap-2">
                    <h4>Follow Us </h4>
                    {/* <div className="d-flex gap-2 align-items-center">
                        <Link to="">Guides</Link>
                        <Link to="">Privacy Policy</Link>
                        <Link to="">Terms & Conditions</Link>
                        <Link to="">Eula</Link>
                    </div> */}
                </div>

            </Container>
            <div className='p-2' style={{ background: "#000000", color: "#ffffff", textAlign: "center" }}>
                Copyright © 2023 Quantum4U Labs Pvt. Ltd.
            </div>
        </section >)
}

export default Footer;