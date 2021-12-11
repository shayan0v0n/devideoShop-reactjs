import React from 'react'
import './Navigation.scss'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'

const Navigation = () => {
    return (
        <header>
            <Navbar variant="dark" className="bg-navbar" expand="sm">
                <Container>
                    <Navbar.Brand style={{cursor: 'default'}}>DeVideo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic" />
                    <Navbar.Collapse id="basic" className="justify-content-end">
                        <Nav dir="rtl">
                            <Nav.Link>صفحه اصلی</Nav.Link>
                            <NavDropdown title="دوره آموزشی" dir="rtl" className="navbar-dropdown bg-navbar-dropdown">
                                <NavDropdown.Item className="">آموزش Javascript</NavDropdown.Item>
                                <NavDropdown.Item className="">آموزش Reactjs</NavDropdown.Item>
                                <NavDropdown.Item className="">آموزش PHP</NavDropdown.Item>
                                <NavDropdown.Item className="">آموزش Laravel</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link>مقالات</Nav.Link>
                            <Nav.Link>مدرسین</Nav.Link>
                            <Nav.Link>درباره ما</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Navigation
