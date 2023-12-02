import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary ">
    <Container>
        <Navbar.Brand href="#home">E-cards</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Item>
            <Nav.Link eventKey="1" href="#home">Home</Nav.Link>
        </Nav.Item>
            <Nav.Link eventKey="1" href="#info">Info</Nav.Link>
            <NavDropdown title="Card trading" id="basic-nav-dropdown">
            <NavDropdown.Item href="#trading/3.1">Pokemon</NavDropdown.Item>
            <NavDropdown.Item href="#trading/3.2">
                Digimon
            </NavDropdown.Item>
            <NavDropdown.Item href="#trading/3.3">Yugi-oh</NavDropdown.Item>
        </NavDropdown>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
);
}


export default NavBar;