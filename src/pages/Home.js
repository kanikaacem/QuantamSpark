import { Container, Carousel, Button } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactusSection from '../components/ContactusSection';
import { Link } from 'react-router-dom';

const Home = () => {
    const OurProcessItem = () => {
        return (
            <div className='our-process-item shadow-box'>
                <div
                    style={{ width: "80px", height: "80px" }}>
                    <img src="https://quantum4u.in/img/acr.png" alt="Logo" width="100%" height="100%" />
                </div>
                <h5 className='mt-2'>Planning & Estimation</h5>
                <p>Our team of experts will talk to you
                    about your needs & expectations, after
                    which they will create a detailed framework
                    for your project.
                </p>
            </div>
        )
    }
    const OurGuideItem = () => {
        return (
            <div className='our-guide-item shadow-box'>
                <img src="https://quantum4u.in/img/pos/pos_blog_1.png" alt="Logo" width="100%" height="100%" />
                <div className='p-3'>
                    <h5 className='mt-2'>How to Promote Apps</h5>
                    <Link to="">READ GUIDE</Link>
                </div>
            </div>
        )
    }

    return (
        <section className='homepage-section'>
            <Header />
            {/* First Section */}
            <Container fluid className='p-0' style={{ position: 'relative' }}>
                <Carousel controls={false} indicators={false}>
                    <Carousel.Item>
                        <div style={{
                            backgroundImage: `url('https://quantum4u.in/img/home5/banner_one.jpg')`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            width: "100%",
                            height: "600px"
                        }}
                        ></div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div style={{
                            backgroundImage: `url('https://quantum4u.in/img/home5/banner_four.jpg')`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            width: "100%",
                            height: "600px"

                        }}
                        ></div>
                    </Carousel.Item>
                    <Carousel.Item><div style={{
                        backgroundImage: `url('https://quantum4u.in/img/home5/banner_two.jpg')`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        width: "100%",
                        height: "600px"

                    }}
                    ></div>

                    </Carousel.Item>
                </Carousel>
                <div style={{ width: "100%", position: 'absolute', top: '0' }}>
                    <Container style={{
                        margin: '130px auto', color: "#ffffff"
                        , maxWidth: "700px", textAlign: 'center'
                    }}>
                        <h1>The Ultimate Mobile App Developers</h1>
                        <p className='mt-5 fw-semibold'>
                            We are a leading Delhi based mobile app development company that is dedicated
                            to making the world smarter one app at a time.
                        </p>
                        <Button className="getintouch-button">Get In Touch</Button>
                        <p className='mt-3 fw-semibold'>We're hiring -
                            <Link to="" style={{ color: "#ff7900" }}> Apply Now</Link></p>
                    </Container>
                </div>
            </Container>
            {/* Second Section */}
            <Container className='p-0 mt-3 mb-3 d-flex flex-column align-items-center justify-content-center gap-3'
                style={{
                    backgroundImage: `url('https://quantum4u.in/img/hosting/map.png')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    height: "50vh",
                }}>
                <div className="d-flex flex-column align-items-center justify-content-center gap-3">
                    <h2 className='fw-bold'>60 Million+</h2>
                    <h1>Users WorldWide</h1>
                    <img src="https://quantum4u.in/img/rating_star.png" height="20px" width="100px" alt="Star Image" />
                    <p className='fw-bold'>(1 Million Ratings)</p>
                </div>
                <div className="d-flex gap-4 flex-wrap">
                    <Link to=""><img src="https://quantum4u.in/img/acr.png" width="50px" height="50px" alt="LinkName"></img></Link>
                    <Link to=""><img src="https://quantum4u.in/img/acr.png" width="50px" height="50px" alt="LinkName"></img></Link>
                    <Link to=""><img src="https://quantum4u.in/img/acr.png" width="50px" height="50px" alt="LinkName"></img></Link>
                    <Link to=""><img src="https://quantum4u.in/img/acr.png" width="50px" height="50px" alt="LinkName"></img></Link>
                    <Link to=""><img src="https://quantum4u.in/img/acr.png" width="50px" height="50px" alt="LinkName"></img></Link>
                </div>
            </Container>
            {/* Third Section */}
            <Container className='mt-3 mb-3 d-flex flex-column align-items-center justify-content-center gap-3'>
                <h1 className='our-services dashed-title'>Our Services</h1>
                <div className="home-shadow-div"
                    style={{
                        backgroundImage: 'url("https://quantum4u.in/img/bg_services.png")',
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}>
                    <p className="fw-bold" style={{ lineHeight: "2", fontSize: "20px" }}>We offer end-to-end
                        <span style={{ color: "#ff7900", fontWeight: "600" }}> web &amp; app development </span>
                        services tailor-made for all kinds of businesses &amp;
                        individuals. We understand your needs &amp; challenges
                        that's why we can help you <span style={{ color: "#ff7900", fontWeight: "600" }}>
                            build digital products</span> that cater to the expectations of your users.
                        We have a profound understanding of how mobile users interact with their devices,
                        which allows us to develop applications that <span style={{ color: "#ff7900", fontWeight: "600" }}>
                            engage visitors </span> at every stage of the funnel. But the real magic happens
                        when your users keep coming back for more. So get in touch with us if you need to take your
                        <span style={{ color: "#ff7900", fontWeight: "600" }}>digital presence </span> to the next level.</p>
                </div>
            </Container>
            {/* Fourth Section */}
            <Container style={{ padding: "150px 20px" }}>
                <div className='row d-flex justify-content-between align-items-center'>
                    <div className='col-md-6 col-12 d-flex flex-column gap-3 ' style={{ paddingRight: "300px" }}>
                        <h1 className='fw-bold' >Mobile App/Web development</h1>
                        <p>We build innovative native apps for Android & iOS that will
                            give your business the reach & recognition it deserves.</p>
                        <h5 className='fw-bold'>Android App Development</h5>
                        <h5 className='fw-bold'>iPhone App Development</h5>
                        <h5 className='fw-bold'>Web Development</h5>
                        <Link to="" className='learn_more-btn button-type3'> Learn More </Link>
                    </div>
                    <div className='col-md-6 col-12 p-0'>
                        <img width="100%" src="https://quantum4u.in/img/ser_one.png" alt="ser_one" />
                    </div>
                </div>
                <div className='row d-flex justify-content-between align-items-center' style={{ marginTop: "100px" }}>
                    <div className='col-md-6 col-12 p-0'>
                        <img width="100%" src="https://quantum4u.in/img/ser_one.png" alt="ser_one" />
                    </div>
                    <div className='col-md-6 col-12 d-flex flex-column gap-3' style={{ paddingLeft: "300px" }}>
                        <h1 className='fw-bold' >UI Design & Website Development</h1>
                        <p>We offer industry-leading website & UI development solutions so
                            that you can have a strong presence online.</p>
                        <Link to="" className="custom-link"><h5 className='fw-bold'>Website & App UI Design </h5></Link>
                        <Link to="" className='custom-link'><h5 className='fw-bold'>Web Development</h5></Link>

                    </div>

                </div>
            </Container>

            <ContactusSection />

            {/* Our Process */}
            <div className="background-div">
                <Container className='mt-3 mb-3 d-flex flex-column align-items-center justify-content-center gap-3'>
                    <h1 className='our-process dashed-title'>Our Process</h1>
                    <p>Build your powerful app or website
                        in 4 Easy Steps</p>
                    <div className='d-flex align-items-center justify-content-center flex-wrap w-100 gap-2'>
                        <OurProcessItem />
                        <OurProcessItem />
                        <OurProcessItem />
                        <OurProcessItem />


                    </div>
                </Container>
            </div>

            {/* Our Guides */}
            <Container className='mt-5 mb-5 d-flex flex-column align-items-center justify-content-center gap-3'>
                <h1 className='our-guides dashed-title'>Guides</h1>
                <div className='d-flex align-items-center justify-content-center flex-wrap w-100 gap-2'>
                    <OurGuideItem />
                    <OurGuideItem />
                    <OurGuideItem />

                </div>
                <Button className='mt-5 read-more-btn button-type3'>Read More</Button>
            </Container>

            {/* Our Testiomonial */}
            <div className="background-div">
                <Container className='mt-3 mb-3 d-flex flex-column align-items-center justify-content-center gap-3'>
                    <h1 className='our-testimonials dashed-title'>Testimonials</h1>
                    <p>We feel immense pride in calling ourselves industry experts
                        with our apps having been downloaded 60+ million times globally.
                        Here are some reviews left by our happy users.</p>
                    <div className='testimonial-item'>
                        <Carousel controls={false} indicators={false} >
                            <Carousel.Item>
                                <div className='d-flex flex-column gap-3 align-items-center justify-content-center' >
                                    <div style={{ width: "100px", height: "100px" }}
                                    ><img src="https://quantum4u.in/img/home4/author_img3.png" width="100%" height="100%" alt="author_image" />
                                    </div>
                                    <p> Author Name</p>
                                    <p>This is a good app. Android phone That is for sureit keeps
                                        everything and one page where you don't have to look all over the phone
                                        for the information you need of toad updates keep your phone in pretty good shape</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='d-flex flex-column gap-3 align-items-center justify-content-center' >
                                    <div style={{ width: "100px", height: "100px" }}
                                    ><img src="https://quantum4u.in/img/home4/author_img3.png" width="100%" height="100%" alt="author_image" />
                                    </div>
                                    <p> Author Name</p>
                                    <p>This is a good app. Android phone That is for sureit keeps
                                        everything and one page where you don't have to look all over the phone
                                        for the information you need of toad updates keep your phone in pretty good shape</p>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='d-flex flex-column gap-3 align-items-center justify-content-center' >
                                    <div style={{ width: "100px", height: "100px" }}
                                    ><img src="https://quantum4u.in/img/home4/author_img3.png" width="100%" height="100%" alt="author_image" />
                                    </div>
                                    <p> Author Name</p>
                                    <p>This is a good app. Android phone That is for sureit keeps
                                        everything and one page where you don't have to look all over the phone
                                        for the information you need of toad updates keep your phone in pretty good shape</p>
                                </div>
                            </Carousel.Item>

                        </Carousel>
                    </div>

                </Container>
            </div>

            <Footer />
        </section >
    )
}

export default Home;