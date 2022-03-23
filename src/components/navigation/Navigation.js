import React, {useState, useEffect} from 'react'
import './Navigation.scss'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import LoggedIn from '../auth/loggedIn/LoggedIn'
import NotLogin from '../auth/notLogin/NotLogin'
import { authAction } from '../../actions/auth-action'
import { useDispatch, useSelector } from 'react-redux'


const Navigation = () => {
    const dispatch = useDispatch()
    const [loggedInStatus, setLoggedInStatus] = useState(false);
    const loginExist = localStorage.getItem("userInfo");
    const isAuthValidate = useSelector(state => state.isAuth);

    const userLoggedInHandler = () => setLoggedInStatus(true);
    const userlogOutHandler = () => setLoggedInStatus(false);

    let loginDOM = null;
    if (loggedInStatus) {
        loginDOM = (<LoggedIn />)
    }else {
        if (!loginExist) {
            loginDOM = (<NotLogin userLoggedIn={userLoggedInHandler} />)
        }else {
            loginDOM = (<LoggedIn />)
        }
    }
    
    useEffect(() => {
        const userInfoExist = localStorage.getItem("userInfo");
        if (!userInfoExist) userlogOutHandler()
        else userLoggedInHandler()
        dispatch(authAction(loggedInStatus, userlogOutHandler))
    }, [dispatch, loggedInStatus])

    return (
        <header>
            <Navbar variant="dark" className="bg-navbar sticky-top" expand="sm">
            <Container>
                    <Navbar.Brand style={{cursor: 'pointer'}}>
                        {loginDOM}
                    </Navbar.Brand>
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