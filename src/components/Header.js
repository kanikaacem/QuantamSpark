import {Container,Nav,Navbar,NavDropdown,Button} from 'react-bootstrap';
const Header = () =>{
    return(    <Navbar expand="lg" bg="dark"  data-bs-theme="dark" className="bg-body-tertiary p-2">
    <Container className='d-flex justify-content-between'>
      <Navbar.Brand href="#home"><img src="https://quantum4u.in/img/logo.png" width="130px" height="50px" alt="ImgLogo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar id="basic-navbar-nav">
        <Nav className="me-auto" style={{gap:"30px"}}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Contact Us</Nav.Link>
          {/* <Button variant="success" style={{background:"#05bc58",color:"#ffffff"}}>Get In Touch</Button> */}
        </Nav>
      </Navbar>
    </Container>
  </Navbar>)
}

export default Header;
