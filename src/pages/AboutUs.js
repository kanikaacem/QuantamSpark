import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactusSection from "../components/ContactusSection";
import WebsiteBannerSection from "../components/WebsiteBannerSection";
import { Container, Button } from "react-bootstrap";
const AboutUs = () => {
    const OurvaluesItem = () => {
        return (
            <div className='shadow-box p-4' style={{ width: "350px", minHeight: "400px" }}>
                <h5 className='mt-5 mb-5'>Creativity</h5>
                <p>We build creative & innovative apps that inspire. The apps
                    & websites we make equally value form & function.</p>
            </div>
        )
    }

    const TeamMemberItem = () => {
        return (
            <div style={{ width: "250px", textAlign: "center" }}>
                <img src="https://quantum4u.in/img/rajeev_kumar.png"
                    width="100px" height="100px" alt="team-member" />
                <h5><strong>Rajeev Kumar</strong></h5>
                <p> CEO</p>
            </div>
        )
    }
    return (<section className="about-us-section">
        <Header />
        <WebsiteBannerSection backgroundImage='https://quantum4u.in/img/Img-02.jpg'
            heading='About Us'
            description='We are powered by a truly global team of developers, designers, testers &
            marketers led by industry experts with over 10+ years of experience.'
        />

        {/* Who we are section */}
        <Container className='about-second-section d-flex flex-wrap mt-5 mb-5 w-100'>
            <div className='col-md-6 col-12'>
                <div>
                    <h1 className='dashed-title'>Who We Are</h1>
                    <p style={{
                        border: '1px solid #00000026',
                        padding: '20px',
                        maxWidth: '400px'
                    }}>
                        Quantum4U is a leading mobile app & web development company that is
                        dedicated to making the world smarter with smart apps. Quantum4U was
                        established in 2016 with the vision to provide better connectivity to
                        the world with intelligent mobile apps & websites. We are committed to
                        delivering the highest quality standards and user experiences with our
                        apps. Quantum4U products, including its popular utility apps such as
                        <a href=""> Auto Call Recorder</a>, <a href=""> Update Software Latest</a>,
                        <a href=""> Super Cleaner</a>, etc.
                    </p>
                </div>
            </div>
            <div className='col-md-6 col-12'>
                dfdsf
            </div>

        </Container>

        {/* Our values */}
        <Container fluid className='background-div
         d-flex flex-column align-items-center justify-content-center'>
            <h1 className='dashed-title'>Our Values</h1>
            <Container className='d-flex gap-3 align-items-center justify-content-between flex-wrap'>
                {[1, 2, 3].map((item) => {
                    return (<OurvaluesItem key={item} />)
                })}
            </Container>
        </Container>

        {/* Work Culture */}
        <Container className=' pt-2 pb-2 d-flex flex-column align-items-center justify-content-center'>
            <h1 className='dashed-title'>Work Culture</h1>
            <div className='row d-flex  align-items-center  justify-content-center flex-wrap w-100'>
                <div className="col-md-6 col-12"
                    style={{ background: "#000000", padding: "70px", maxWidth: "500px", color: "#ffffff" }}>
                    <h3> Work Culture</h3>
                    <p>At Quantum4U, we work hard & party harder. Our work culture is flexible
                        and our employees are encouraged to plan their day & work how they like.
                        Collaboration & building a sense of teamwork is a crucial principle at
                        Quantum4U. Besides, Quantum4U is a fun place to work where work doesn't
                        feel like work.</p>
                    <Button className='mt-5 current-openings-button button-type4'>Current Openings</Button>
                </div>

                <div className="col-md-6 col-12 p-0">
                    <div className='d-flex flex-wrap justify-content-center'>
                        <div className="about-item">
                            <img className='work-culture-img' src="https://quantum4u.in/img/home4/team1.jpg" width="300px" height="400px"></img>
                        </div>
                        <div>
                            <div className="about-item">
                                <img className='work-culture-img' src="https://quantum4u.in/img/home4/team1.jpg" width="300px" height="250px"></img>
                            </div>
                            <div className="about-item">
                                <img className='work-culture-img' src="https://quantum4u.in/img/home4/team3.jpg" width="300px" height="250px"></img>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Container>

        {/* The Team */}
        <Container className='d-flex flex-column align-items-center justify-content-center' style={{ padding: "100px 0px" }}>
            <h1 className='dashed-title'>The Team</h1>
            <div className="owner-section" style={{ textAlign: "center" }} >
                <img src="https://quantum4u.in/img/rajeev_kumar.png"
                    width="200px" height="200px" alt="owner-section" />
                <h4><strong>Rajeev Kumar</strong></h4>
                <p> CEO</p>
            </div>
            <div className='d-flex align-items-center justify-content-center flex-wrap gap-5'>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                    return (<TeamMemberItem key={item} />
                    )
                })}
            </div>

        </Container>

        <div className="pb-5">
            <ContactusSection />
        </div>
        <Footer />
    </section >)
}

export default AboutUs;