import React, { useContext } from 'react';
import { firebaseAuth } from '../../context/ContextIndex'
import "../navigation/Navigation.css";
import { GrLogin } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const { onLogOutClicked, cartCount, token } = useContext(firebaseAuth)
  let navbutton = 0

  navbutton = (token ? <> <Link className="cart-icon"
    to={{ pathname: `/cart` }}>
    <FaShoppingCart />
  </Link>

    <span>{cartCount}</span>
    {/* <BsFillLockFill /> */}
    <button className="sign-out-btn" onClick={onLogOutClicked}>Sign out</button>
  </> : <><Link className="register-btn"
    to={{ pathname: `/register` }}>
     Login
      </Link>  </>)

  return (
    <div>
      <Navbar className="main-navi">
        <Navbar.Brand href="/"><img className="main-logo" src="https://i.pinimg.com/originals/93/56/65/9356653e2cac50d345ab937b08d5450f.png" /></Navbar.Brand>
        <Nav className="menu">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#about-us">About Us</Nav.Link>
          <Nav.Link href="#responsible-tourism">Responsible Tourism</Nav.Link>
        </Nav>
        <div className="header-text row">
          {navbutton}
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;