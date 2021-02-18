import React, {useState} from "react";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Button } from 'antd';
import {Link} from 'react-router-dom';
import ChecoutPage from './CheckoutPage';
import {useStateValue} from './StateProvider'
import "./NavbarMy.css"
function NavbarMy(){
    const [isClick, updateClick] = useState(false);
    const [{basket,user}] =useStateValue();  //[state,dispatch]{destructure of state}

    return (
        <div className='trans'>
        <div className='container'>
            <Navbar className="navbar" collapseOnSelect expand="lg">
                <Navbar.Brand className='brand-my'><Link to="/">Talisha</Link></Navbar.Brand>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor:'white'}}/>
                <Navbar.Collapse  id="responsive-navbar-nav" style={{color:'white'}} >
                    <Nav className="mr-auto">
                        <Nav.Link href="#features"><i class="fas fa fa-home icon"></i>Home</Nav.Link>
                        <NavDropdown title="Categories" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Satyanarayan Kit</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Ganpati Kit</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Navratri Kit</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Rudra Abhishek Kit</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#pricing">About Us</Nav.Link>
                    </Nav>
                    <Nav>
                        {isClick? 
                        <NavDropdown title="My Account" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Dashboard</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Your Cart</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
                        </NavDropdown>:
                        <Nav.Link href="Login" className="login-btn"onClick={(event)=>{updateClick(!isClick); event.preventDefault();}}>
                            <Button ghost className='login-btn-nav'>
                                <Link to='/signup'>Login</Link>
                            </Button>
                        </Nav.Link>
                        }   
                      
                    </Nav>
                </Navbar.Collapse>
                <Link to="/checkout" className="header__link">
                    <div className="basket">
                        {/* basket icon */}
                        <ShoppingBasketIcon
                        className="shopicon"
                        />
                        {/* no of items */}
                        <span className="element2 basketcount">{basket?.length}</span>
                    </div>
                </Link>
            </Navbar>
        </div>
        </div>
    );
}

export default NavbarMy;
