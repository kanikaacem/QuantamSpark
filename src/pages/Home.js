import {Container,Carousel,Button} from 'react-bootstrap';
import Header from '../components/Header';
const Home = () => {
   
    return(
     <section className='homepage-section'>
        <Header/>
        {/* First Section */}
        <Container fluid className='p-0' style={{position:'relative'}}>
            <Carousel controls={false} indicators={false}>
                <Carousel.Item>
                    <div style={{backgroundImage: `url('https://quantum4u.in/img/home5/banner_one.jpg')`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            width: "100%",
                            height:"90vh"
                            }} 
                    alt="Item1"></div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{backgroundImage: `url('https://quantum4u.in/img/home5/banner_four.jpg')`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                width: "100%",
                                height:"90vh"
                                }} 
                        alt="Item1"></div>
                </Carousel.Item>
                        <Carousel.Item><div style={{backgroundImage: `url('https://quantum4u.in/img/home5/banner_two.jpg')`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                width: "100%",
                                height:"90vh"
                                }} 
                        alt="Item1"></div>

                </Carousel.Item>
            </Carousel>
            <div style={{width:"100%",position:'absolute',top:'0'}}>
            <Container style={{margin:'130px auto',color:"#ffffff",maxWidth:"700px",textAlign:'center'}}> 
                    <h1>The Ultimate Mobile App Developers</h1>
                    <p className='mt-5 fw-semibold'>
                    We are a leading Delhi based mobile app development company that is dedicated
                        to making the world smarter one app at a time.
                    </p>
                    <Button className="getintouch-button">Get In Touch</Button>
                    <p className='mt-3 fw-semibold'>We're hiring -<a href="" style={{color:"#ff7900"}}> Apply Now</a></p>
            </Container>
            </div>
        </Container>
        {/* Second Section */}
        <Container className='p-0 mt-3 mb-3 d-flex flex-column align-items-center justify-content-center gap-3' 
        style={{backgroundImage: `url('https://quantum4u.in/img/hosting/map.png')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height:"70vh",
            maxWidth:"700px",
            }}>
             <div className="d-flex flex-column align-items-center justify-content-center gap-3">
              <h2 className='fw-bold'>60 Million+</h2>
              <h1>Users WorldWide</h1>
              <img src="https://quantum4u.in/img/rating_star.png" height="20px" width="100px" alt="Star Image"/>
              <p className='fw-bold'>(1 Million Ratings)</p>
             </div>
             <div className="d-flex gap-4 flex-wrap">
                <a href=""><img src="https://quantum4u.in/img/acr.png" width="50px" height="50px" alt="LinkName"></img></a>
                <a href=""><img src="https://quantum4u.in/img/acr.png" width="50px" height="50px" alt="LinkName"></img></a>
                <a href=""><img src="https://quantum4u.in/img/acr.png" width="50px" height="50px" alt="LinkName"></img></a>
                <a href=""><img src="https://quantum4u.in/img/acr.png" width="50px" height="50px" alt="LinkName"></img></a>
                <a href=""><img src="https://quantum4u.in/img/acr.png" width="50px" height="50px" alt="LinkName"></img></a>

             </div>
        </Container>
        {/* Third Section */}
        <Container className='p-0 mt-3 mb-3 d-flex flex-column align-items-center justify-content-center gap-3'>
             <h1 className='our-services'>Our Services</h1>
             <div className="home-shadow-div"
             style={{
                backgroundImage:'url("https://quantum4u.in/img/bg_services.png")',
                backgroundPosition:"center center",
                backgroundSize:"cover",
                backgroundRepeat:"no-repeat"
             }}>
             <p className="fw-bold" style={{lineHeight:"2",fontSize:"20px"}}>We offer end-to-end 
             <span style={{color: "#ff7900",fontWeight: "600"}}> web &amp; app development </span>
             services tailor-made for all kinds of businesses &amp; 
             individuals. We understand your needs &amp; challenges 
             that's why we can help you <span style={{color: "#ff7900",fontWeight: "600"}}>
             build digital products</span> that cater to the expectations of your users.
             We have a profound understanding of how mobile users interact with their devices, 
             which allows us to develop applications that <span style={{color: "#ff7900",fontWeight: "600"}}>
             engage visitors </span> at every stage of the funnel. But the real magic happens
             when your users keep coming back for more. So get in touch with us if you need to take your 
             <span style={{color: "#ff7900",fontWeight: "600"}}>digital presence </span> to the next level.</p>
             </div>
        </Container>
        {/* Fourth Section */}
        <Container></Container>
     </section>
    )
}

export default Home;