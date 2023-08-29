import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactusSection from "../components/ContactusSection";
import WebsiteBannerSection from "../components/WebsiteBannerSection";
import { Container, Button } from "react-bootstrap";

const UIDesign = () => {
    return (<section className="uidesign-section">
        <Header />
        <Container fluid className="p-0">
            <WebsiteBannerSection backgroundImage='https://quantum4u.in/img/Img-02.jpg'
                heading='UI Design for Mobile Apps'
                description='Our UI designs create a lasting first impression in the minds
                of the users, and that itself is what any app should do.'
            />
        </Container>
        <Footer />
    </section>
    )
}
export default UIDesign;