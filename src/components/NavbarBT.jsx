import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "./CartWidget";
import "../css/navbar.css";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NavbarBT({ setCategoria }) {
    return (
        <Navbar expand="lg" className="bg-dark navbar-dark shadow-sm">
            <Container>
                <Navbar.Brand 
                    onClick={() => setCategoria("todos")}
                    style={{ cursor: "pointer" }}
                >
                    <img className="logo" src="../logo-tech.png" alt="logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        {/* Links principales */}
                        <Nav.Link onClick={() => setCategoria("todos")}>
                            Inicio
                        </Nav.Link>

                        <Nav.Link onClick={() => setCategoria("celulares")}>
                            Celulares
                        </Nav.Link>

                        <Nav.Link onClick={() => setCategoria("computadoras")}>
                            Computadoras
                        </Nav.Link>

                        <Nav.Link onClick={() => setCategoria("accesorios")}>
                            Accesorios
                        </Nav.Link>

                        {/* Dropdown dinámico */}
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => setCategoria("todos")}>
                                Todos
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setCategoria("celulares")}>
                                Celulares
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setCategoria("computadoras")}>
                                Computadoras
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => setCategoria("accesorios")}>
                                Accesorios
                            </NavDropdown.Item>
                        </NavDropdown>

                        <CartWidget />
                    </Nav>

                    {/* Buscador (UI por ahora) */}
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Buscar productos..."
                            className="me-2"
                        />
                        <Button variant="outline-light">
                            Buscar
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarBT;