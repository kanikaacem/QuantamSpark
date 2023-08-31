import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactusSection from "../../components/ContactusSection";
import WebsiteBannerSection from "../../components/WebsiteBannerSection";
import ServiceIntro from "../../components/ServiceIntro";
import WebsiteItemI from "../../components/websiteItemI";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const AppDevelopment = () => {
    return (<section className="app-development-section">
        <Header />
        <WebsiteBannerSection backgroundImage='https://quantum4u.in/img/Img-02.jpg'
            heading='UI Design for Mobile Apps'
            description='Our UI designs create a lasting first impression in the minds
                of the users, and that itself is what any app should do.'
        />
        <ServiceIntro />

        <Container className="website-sections d-flex flex-column align-items-center justify-content-center gap-3">
            <h1 className='dashed-title'>Platforms</h1>
            <div className='row d-flex align-items-center justify-content-center flex-wrap w-100 gap-4'>
                {([1, 2]).map((item) => {
                    return (<div className="shadow-box p-5 col-md-5 col-12" key={item} >
                        <img src="" />
                        <h4 className="fw-bold">Android App Developement</h4>
                        <p className="my-5">We have developed many smart utility
                            apps for Android that have touched the
                            lives of our users positively over the years.</p>
                        <Link to="" className='learn_more-btn button-type3 '> Learn More </Link>

                    </div>)
                })}
            </div>
        </Container>

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

        <ContactusSection />

        <Footer />
    </section >
    )
}
export default AppDevelopment;