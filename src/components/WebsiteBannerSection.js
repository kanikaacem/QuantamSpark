import { Container } from "react-bootstrap";
const WebsiteBannerSection = ({ backgroundImage, heading, description }) => {
    return (
        <Container fluid style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            width: "100%",
            padding: "80px",
            color: "#ffffff",
        }}>
            <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: 'center' }}>
                <h1 className="fw-bold">{heading}</h1>
                <p className="mt-4">{description}</p>
            </div>
        </Container>
    )
}

export default WebsiteBannerSection;