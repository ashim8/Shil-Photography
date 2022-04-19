import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'

const HeaderSection = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" >
                        <div>
                        <img height={30} src={logo} alt="" />
                     
                        </div>
                        
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <p className='mt-3 text-white'>SHIL PHOTOGRAPHY</p>
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                        <Nav.Link as={Link} to="home">Home</Nav.Link>
                        <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="about">About</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                :
                                <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default HeaderSection;