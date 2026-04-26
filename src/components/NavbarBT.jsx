import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget"
import "../css/navbar.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NavbarBT() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img className="logo" src="../logo-tech.png" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#ofertas">Ofertas</Nav.Link>
                        <Nav.Link href="#nuevos">Nuevos</Nav.Link>
                        <Nav.Link href="#destacados">Destacados del mes</Nav.Link>
                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <CartWidget></CartWidget>
                    </Nav>

                    <Form className="d-flex"> 
                        <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" /> 
                        <Button variant="outline-success">Search</Button> 
                        </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarBT;