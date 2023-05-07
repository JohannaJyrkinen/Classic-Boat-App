import React from "react"
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap"
import "./NavigationBar.css"
import logo from "../images/1297487.svg"

const Navigationbar = () => {

return (

    <Navbar style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999 }} bg="light" expand="lg">
      
        <NavbarBrand style={{ fontSize: "1.20rem" }}>
            <img src={logo} width="20" className="d-inline-block align-center mx-4" alt="Boat icon"/>
            Veneklassikot
            </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse>
        <Container>
        <Nav className="mx-auto justify-content-center" style={{ fontSize: "0.8rem" }}>
            <Nav.Link href="/" >
                Kaikki luokat
            </Nav.Link>
            <Nav.Link href="/yksityyppiluokat">
                Yksityyppiluokat
            </Nav.Link>
            <Nav.Link href="/konstruktioluokat">
                Konstruktioluokat
            </Nav.Link>
            <Nav.Link href="/sk">
                Saaristoristeilijät
            </Nav.Link>
            <Nav.Link href="/kevathuolto">
                Keväthuolto
            </Nav.Link>
        </Nav>
        </Container>
        </Navbar.Collapse>
        
    </Navbar>

)
}
export default Navigationbar
