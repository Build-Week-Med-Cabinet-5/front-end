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
                    <NavItem>
                        <Link to="/strains" className="nav-link">
                            Strains
                        </Link>
                    </NavItem>
<<<<<<< HEAD
                    <NavItem>
                        <Link to='/savedstrains' className="nav-link">
                            Saved
                        </Link>
                    </NavItem>
=======
>>>>>>> 2510ff15d58ec914859f478d8f3d8002726eff0c
                </Nav>
            </Navbar>
        </Col>
    )
}

export default NavBarComponent;
