import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

import '../Header/Header.css'


const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>
                    <h1 className="m-3">
                        <span className={'Solar'}>SOLAR</span>
                        <span className={'Gen'}>GEN</span>
                    </h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className={'justify-content-end'}>
                    <Nav className="me-4">
                        <Nav.Link as={Link} to={'/'}>
                            Strefa wiedzy
                        </Nav.Link>
                        <Nav.Link as={Link} to={'/'}>
                            Kontakt
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export {NavBar};