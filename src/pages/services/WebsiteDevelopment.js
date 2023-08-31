import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactusSection from "../../components/ContactusSection";
import WebsiteBannerSection from "../../components/WebsiteBannerSection";
import ServiceIntro from "../../components/ServiceIntro";
import WebsiteItemI from "../../components/websiteItemI";
import FAQ from "../../components/FAQ";
import { Container } from "react-bootstrap";

const WebsiteDevelopment = () => {
    return (
        <section className="website-development-section">
            <Header />
            <WebsiteBannerSection backgroundImage='https://quantum4u.in/img/Img-02.jpg'
                heading='Website Development'
                description='We design & develop rich & intuitive web experiences
                that help you take your potential online.'
            />
            <ServiceIntro />

            <Container className="website-sections d-flex flex-column align-items-center justify-content-center gap-3">
                <h1 className='dashed-title'>Services</h1>
                <div className='d-flex align-items-center justify-content-center flex-wrap w-100 gap-4'>
                    {([1, 2, 3, 4, 5, 6, 7, 8]).map((item) => {
                        return (<WebsiteItemI key={item} />)
                    })}
                </div>
            </Container>

            <Container className="website-sections d-flex flex-column align-items-center justify-content-center gap-3">
                <h1 className='dashed-title'>Industry-Specific</h1>
                <p style={{ textAlign: 'center' }}>With over 10+ years of experience in App Development, our team can take <br />
                    any challenges thrown at them. Apart from this, our team can build<br />
                    custom solutions as per your business requirements.</p>
                <div className="d-flex  gap-3  align-items-center justify-content-center flex-wrap">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                        return (<div key={item} className="shadow-box industry-specific-item p-3 d-flex flex-column align-items-center">
                            <div
                                className="d-flex align-items-center justify-content-center" style={{ width: "80px", height: "80px", background: "pink", borderRadius: "50%" }}>
                                <img src="https://quantum4u.in/img/heart.png" width="50px" height="50px" />
                            </div>
                            <h6 className="mt-3"> New Blogging</h6>
                        </div>)
                    })}
                </div>

            </Container>

            <Container fluid className="background-div website-sections d-flex flex-column align-items-center justify-content-center">
                <h1 className='dashed-title'>Technologies We Use</h1>
                <p style={{ textAlign: "center" }}>In the pursuit of innovation, our experts are always on the lookout for the latest technologies<br />
                    in the industry. We will use the latest tools & technologies on your website that<br />
                    help create a lasting impression in the mind of your audience.</p>

                <div className="d-flex justify-content-between mt-5">
                    {[1, 2, 3, 4, 5].map((item) => {
                        return (<div key={item}><img src="https://quantum4u.in/img/home3/logo_13.png" width="100%" height="100%"
                            alt="software we use" /></div>)
                    })}
                </div>
            </Container>

            <ContactusSection />
            <FAQ />
            <Footer />
        </section >
    )
}

export default WebsiteDevelopment;