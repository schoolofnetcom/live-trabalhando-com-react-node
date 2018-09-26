import React, { Component } from 'react';
import { 
    Navbar, 
    NavbarToggler, 
    NavbarBrand, 
    Nav, 
    NavItem, 
    NavLink, 
    Collapse 
} from 'reactstrap';

export default class Header extends Component {
    state = {
        isOpen: false
    };

    toggleNavbar = () => this.setState({ isOpen: !this.state.isOpen });

    render() {
        const { isOpen } = this.state
        return (
            <header>
                <Navbar color="faded" toggleable inverse className="bg-primary navbar-expand-sm navbar-dark">
                    <NavbarToggler right onClick={this.toggleNavbar} />
                    <NavbarBrand href="/">Live Class</NavbarBrand>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink to="/bills">Bill</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
        )        
    }
}