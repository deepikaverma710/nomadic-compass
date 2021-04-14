import React, {useContext} from 'react';
import {firebaseAuth} from '../../context/ContextIndex'
import "../navigation/Navigation.css";
import { BsPencilSquare, BsFillLockFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import {Navbar, Nav} from "react-bootstrap";

const Navigation = (props) => {
    
  const {onLogOutClicked} = useContext(firebaseAuth)

  return (
    <div>   
        <div className="header-bar">
            <div className="header-container">
              <div className="header-text row">
                    <FaShoppingCart/>
                    <p>2 /</p>
                    <BsFillLockFill/>
                    <p onClick={onLogOutClicked}>Sign out /</p>              
                    <BsPencilSquare/>
                    <p>Register</p>                
                </div>
            </div>
        </div>
          <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">Nomadic Compass</Navbar.Brand>
                <Nav className="menu">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about-us">About Us</Nav.Link>
                  <Nav.Link href="#responsible-tourism">Responsible Tourism</Nav.Link>
                </Nav>
          </Navbar>
    </div>
    );
  };

export default Navigation;