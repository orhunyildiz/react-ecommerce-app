import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartSummary from './CartSummary';
import { Link } from 'react-router-dom';

function Navi({ cart, removeFromCart, ...args }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md" {...args}>
                <NavbarBrand href="/">Northwind App</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/form1/">
                                Form Demo 1
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/form2/">
                                Form Demo 2
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                GitHub
                            </NavLink>
                        </NavItem>
                        <CartSummary removeFromCart={removeFromCart} cart={cart} />
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navi;