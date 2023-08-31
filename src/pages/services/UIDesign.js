import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactusSection from "../../components/ContactusSection";
import WebsiteBannerSection from "../../components/WebsiteBannerSection";
import ServiceIntro from "../../components/ServiceIntro";
import WebsiteItemI from "../../components/websiteItemI";
import { Container } from "react-bootstrap";

const UIDesign = () => {
    return (<section className="uidesign-section">
        <Header />
        <WebsiteBannerSection backgroundImage='https://quantum4u.in/img/Img-02.jpg'
            heading='UI Design for Mobile Apps'
            description='Our UI designs create a lasting first impression in the minds
                of the users, and that itself is what any app should do.'
        />
            <ServiceIntro />
            <Container className="mt-3 mb-3 d-flex flex-column align-items-center justify-content-center gap-3">
                <h1 className='dashed-title'>Services</h1>
                <div className='d-flex align-items-center justify-content-center flex-wrap w-100 gap-4'>
                    {([1, 2, 3, 4]).map((item) => {
                        return (<WebsiteItemI key={item} />)
                    })}
                </div>
            </Container>

            <Container fluid className="background-div d-flex flex-column align-items-center justify-content-center">
                <h1 className='dashed-title'>Software we use</h1>
                <p>In the pursuit of amazing designs, we use some of the best software from Adobe.</p>

                <div className="d-flex justify-content-between mt-5">
                    {[1, 2, 3, 4, 5].map((item) => {
                        return (<div key={item}><img src="https://quantum4u.in/img/home3/logo_13.png" width="100%" height="100%"
                            alt="software we use" /></div>)
                    })}
                </div>
            </Container>

            <div className="mb-5">
                <ContactusSection />
            </div>
        <Footer />
    </section>
    )
}
export default UIDesign;