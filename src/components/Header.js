import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary p-2" style={{ position: "sticky", top: 0, zIndex: 100 }}>
      <Container className='d-flex justify-content-between'>
        <Navbar.Brand as={Link} to="/">
          <img src="https://quantum4u.in/img/logo.png" width="130px" height="50px" alt="ImgLogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ gap: "30px" }}>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us">About</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/app-development">App Development</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ui-design">UI Designing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/website-development">Website Development</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
            {/* <Button variant="success" style={{background:"#05bc58",color:"#ffffff"}}>Get In Touch</Button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>)
}

export default Header;
