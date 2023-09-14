import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const ContactusSection = () => {
    const navigate = useNavigate();
    return (
        <Container style={{
            padding: "100px 0px",
            backgroundImage: `url('https://quantum4u.in/img/call_us_bg.png')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            width: "100%",
            textAlign: "center",
        }}>
            <h1 style={{ color: "#ffffff" }}>Need an App or Website?</h1>
            <h5 className='mt-3' style={{ color: "#ffffff" }}>Let's talk about it over a cup of coffee.</h5>
            <Button className='mt-3 website-button2' onClick={() => navigate('/contact-us')}>Contact us</Button>
        </Container>
    )
}
export default ContactusSection;