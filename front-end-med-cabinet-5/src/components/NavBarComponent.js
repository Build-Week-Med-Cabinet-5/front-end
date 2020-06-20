import React from "react";
import { Link } from 'react-router-dom'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import Col from "reactstrap/es/Col";

const NavBarComponent = () => {
    return(
        <Col>
            <Navbar color="light" light expand="md">
                <NavbarBrand to="/login">
                    Med Cabinet
                </NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link to="/login" className="nav-link">
                            Login
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/signup' className='nav-link'>
                            Sign Up
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/profile" className="nav-link">
                            Profile
                        </Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </Col>
    )
}

export default NavBarComponent;
