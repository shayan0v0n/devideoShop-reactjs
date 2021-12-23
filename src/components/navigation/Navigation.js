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
                                <LinkContainer to="/skills/php">
                                    <NavDropdown.Item>آموزش PHP</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/skills/laravel">
                                    <NavDropdown.Item>آموزش Laravel</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/skills/javascript">
                                    <NavDropdown.Item>آموزش Javascript</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/skills/reactjs">
                                    <NavDropdown.Item>آموزش Reactjs</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>
                            <LinkContainer to="/blog">
                                <Nav.Link>مقالات</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/teachers">
                                <Nav.Link>مدرسین</Nav.Link>
                            </LinkContainer>
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