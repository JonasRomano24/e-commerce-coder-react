import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { useCart } from "../context/CartContext";
import "../css/navbar.css";

function NavbarBT({ setBusqueda }) {
    const { totalItems } = useCart();
    return (
        <Navbar
            expand="lg"
            className="bg-dark navbar-dark shadow-sm"
        >

            <Container>

                <Navbar.Brand
                    as={Link}
                    to="/"
                >
                    <img
                        className="logo"
                        src="../logo-tech.png"
                        alt="logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="me-auto">

                        <Nav.Link
                            as={Link}
                            to="/"
                        >
                            Inicio
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/categoria/ofertas"
                        >
                            Ofertas
                        </Nav.Link>

                        <Nav.Link
                            as={Link}
                            to="/categoria/destacados"
                        >
                            Destacados del mes
                        </Nav.Link>

                        <NavDropdown
                            title="Categorías"
                            id="basic-nav-dropdown"
                        >

                            <NavDropdown.Item
                                as={Link}
                                to="/"
                            >
                                Todos
                            </NavDropdown.Item>

                            <NavDropdown.Item
                                as={Link}
                                to="/categoria/celulares"
                            >
                                Celulares
                            </NavDropdown.Item>

                            <NavDropdown.Item
                                as={Link}
                                to="/categoria/computadoras"
                            >
                                Computadoras
                            </NavDropdown.Item>

                            <NavDropdown.Item
                                as={Link}
                                to="/categoria/accesorios"
                            >
                                Accesorios
                            </NavDropdown.Item>

                        </NavDropdown>
                        <Nav.Link
                            as={Link}
                            to="/cart"
                        >
                            🛒 {totalItems}
                        </Nav.Link>

                    </Nav>

                    <Form className="d-flex">

                        <Form.Control
                            type="search"
                            placeholder="Buscar productos..."
                            className="me-2"
                            onChange={(e) =>
                                setBusqueda(
                                    e.target.value
                                )
                            }
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