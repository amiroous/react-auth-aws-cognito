import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import HighAuth from "components/HighAuth";

const NavBar = () => {
    return (
        <Navbar bg="gradient-info" variant="dark" expand="md">
            <Link className="navbar-brand" to="/">React Authentication</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <HighAuth>
                        <Link className="nav-link" to="/secret">Secret</Link>
                    </HighAuth>
                    <Link className="nav-link" to="/account">My Account</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;