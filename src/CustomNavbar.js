import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from './logo.svg';

class CustomNavbar extends Component {
    render() {
        return(
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <div className="logo-container">
                            <img src={logo} className="App-logo" alt="logo" />
                        </div>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        Home
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        About
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default CustomNavbar;