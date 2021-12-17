import React from 'react'
import './Navigation.scss'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'

const Navigation = () => {
    return (
        <header>
            <Navbar variant="dark" className="bg-navbar sticky-top" expand="sm">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand style={{cursor: 'pointer'}}>DeVideo</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic" />
                    <Navbar.Collapse id="basic" className="justify-content-end">
                        <Nav dir="rtl">
                            <LinkContainer to="/">
                                <Nav.Link>صفحه اصلی</Nav.Link>
                            </LinkContainer>
                            <NavDropdown title="دوره آموزشی" dir="rtl" className="navbar-dropdown bg-navbar-dropdown">
                                <NavDropdown.Item className="">آموزش Javascript</NavDropdown.Item>
                                <NavDropdown.Item className="">آموزش Reactjs</NavDropdown.Item>
                                <NavDropdown.Item className="">آموزش PHP</NavDropdown.Item>
                                <NavDropdown.Item className="">آموزش Laravel</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link>مقالات</Nav.Link>
                            <Nav.Link>مدرسین</Nav.Link>
                            <LinkContainer to="/about">
                                <Nav.Link>درباره ما</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Navigation