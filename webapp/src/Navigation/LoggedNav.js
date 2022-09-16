import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './Nav.css'
import Logo from '../Pictures/Logo.png'

function Navigation() {
    return (
        <Navbar className='navbar' sticky='top' bg="light" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={Logo}
                        width="45"
                        height="45"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link><Link className='navlinks' to="/home">Home</Link></Nav.Link>
                    <Nav.Link><Link className='navlinks' to="/menu">Menu</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;