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
        
          <Navbar className="main-navi">
              <Navbar.Brand href="#home"><img className="main-logo" src="https://i.pinimg.com/originals/93/56/65/9356653e2cac50d345ab937b08d5450f.png"/></Navbar.Brand>
                <Nav className="menu">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about-us">About Us</Nav.Link>
                  <Nav.Link href="#responsible-tourism">Responsible Tourism</Nav.Link>
                </Nav>
                <div className="header-text row">

                    <FaShoppingCart/>
                    <p>2 /</p>
                    <BsFillLockFill/>
                    <p onClick={onLogOutClicked}>Sign out /</p>              
                    <BsPencilSquare/>
                    <p>Register</p>                
                </div>
          </Navbar>
          
    </div>
    );
  };

export default Navigation;