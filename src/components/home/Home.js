import React, {useContext} from 'react';
import {firebaseAuth} from '../../context/ContextIndex'
import "../home/Home.css"
import { BsPencilSquare, BsFillLockFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

const Home = (props) => {
    const {onLogOutClicked} = useContext(firebaseAuth)
  
  return (
    <div>   
            <div className="Home-header-bar">
                <div className="Home-header-container">
                  <div className="Home-header-text row">
                        <FaShoppingCart/>
                        <p>2 /</p>
                        <BsFillLockFill/>
                        <p onClick={onLogOutClicked}>Sign out /</p>              
                        <BsPencilSquare/>
                        <p>Register</p>                
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Home;